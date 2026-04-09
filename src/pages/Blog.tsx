import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Rocket,
  ArrowRight,
  ChevronRight,
  Calendar,
  Loader2,
  Linkedin,
  Twitter,
  Copy,
  Check,
  Share2,
} from "lucide-react";
import { blogPosts as staticPosts, BlogPost } from "../data/blogData";
import { supabase } from "../lib/supabase";
import { useLanguage } from "../context/LanguageContext";

export default function Blog() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLanguage();
  const b = t.blog;

  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [dbPosts, setDbPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const allPosts = [...staticPosts, ...dbPosts];

  useEffect(() => {
    fetchDbPosts();
  }, []);

  async function fetchDbPosts() {
    try {
      // Fetch without sorting on 'created_at' to avoid 400 error if column is missing
      const { data, error } = await supabase.from("posts").select("*");
      if (error) throw error;
      if (data) setDbPosts(data);
    } catch (e) {
      console.error("Error fetching posts from Supabase:", e);
    } finally {
      setLoading(false);
    }
  }

  // Helper for safe localized access
  const getLoc = (field: any, fallback: string = "") => {
    if (!field) return fallback;
    if (typeof field === 'string') return field;
    return field[lang] || field['es'] || fallback;
  };

  const handleShare = async () => {
    const shareData = {
      title: getLoc(post?.title, "INSOMNIA AI"),
      text: getLoc(post?.excerpt, b.subtitle),
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        setShowShareMenu(true);
      }
    } else {
      setShowShareMenu(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ─── Archive View ───
  if (!id) {
    return (
      <div className="min-h-screen bg-black pt-32 pb-20">
        <Helmet>
          <title>Blog | INSOMNIA AI Insights</title>
          <meta name="description" content={b.subtitle} />
        </Helmet>
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 space-y-4">
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em]">
              {b.label}
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-black uppercase italic tracking-tighter">
              {b.title} <span className="text-primary">{b.highlight}</span>
            </h1>
            <p className="text-zinc-500 font-label text-xl max-w-2xl leading-tight italic">
              {b.subtitle}
            </p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-40 gap-4">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
              <span className="text-primary font-mono text-[10px] uppercase tracking-widest">
                {b.loading}
              </span>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12">
              {allPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group relative block aspect-[16/10] overflow-hidden border border-white/5 bg-zinc-900"
                >
                  <img
                    src={post.image}
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[3s] opacity-60 group-hover:opacity-100"
                    alt={getLoc(post.title)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-primary transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute bottom-0 p-10 space-y-4 w-full z-10">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-primary text-black font-mono text-[9px] font-black uppercase tracking-widest">
                        {getLoc(post.category)}
                      </span>
                      <span className="text-white/50 font-mono text-[9px] uppercase tracking-[0.2em]">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-headline font-black uppercase italic group-hover:text-primary transition-colors leading-[0.9] tracking-tighter line-clamp-2">
                      {getLoc(post.title)}
                    </h3>
                    <div className="w-0 group-hover:w-20 h-px bg-primary transition-all duration-700" />
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/0 group-hover:border-primary/50 transition-all duration-500 m-4" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ─── Single Post View ───
  const post = allPosts.find((p) => p.id === id);
  if (!post && loading)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  if (!post)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        404 - POST NOT FOUND
      </div>
    );

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>{`${getLoc(post.title)} | INSOMNIA AI`}</title>
        <meta name="description" content={getLoc(post.excerpt)} />
        <meta property="og:title" content={getLoc(post.title)} />
        <meta property="og:description" content={getLoc(post.excerpt)} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getLoc(post.title)} />
        <meta name="twitter:description" content={getLoc(post.excerpt)} />
        <meta name="twitter:image" content={post.image} />
      </Helmet>

      {/* Hero Header */}
      <header className="relative h-[70vh] w-full overflow-hidden border-b border-white/10">
        <img
          src={post.image}
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110"
          alt={getLoc(post.title)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto px-8 pb-20 w-full">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors mb-8 font-mono text-[10px] uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> {b.backToArchive}
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary text-black font-mono text-[10px] font-black uppercase tracking-widest">
                {getLoc(post.category)}
              </span>
              <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                <Calendar className="w-3 h-3" /> {post.date}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-black uppercase italic tracking-tighter leading-[0.9] text-white">
              {getLoc(post.title)}
            </h1>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="max-w-4xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-[1fr_250px] gap-20">
          <article className="space-y-12">
            {((Array.isArray(post.content) ? post.content : (post.content as any)[lang]) || []).map((block: any, i: number) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2
                      key={i}
                      className="text-3xl font-headline font-black uppercase italic text-white pt-8 border-t border-white/10"
                    >
                      {block.value}
                    </h2>
                  );
                case "text":
                  return (
                    <p key={i} className="text-zinc-400 font-label text-lg leading-relaxed">
                      {block.value}
                    </p>
                  );
                case "highlight":
                  return (
                    <div
                      key={i}
                      className="p-8 bg-zinc-900 border-l-4 border-primary relative overflow-hidden group"
                    >
                      <div className="relative z-10 font-label text-xl text-white italic leading-tight">
                        {block.value}
                      </div>
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Rocket className="w-20 h-20" />
                      </div>
                    </div>
                  );
                case "callout":
                  return (
                    <div
                      key={i}
                      className="flex gap-6 items-start p-6 border border-white/5 bg-zinc-950/50"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      </div>
                      <p className="text-sm font-mono uppercase tracking-widest text-zinc-500 leading-relaxed">
                        {block.value}
                      </p>
                    </div>
                  );
                case "funnel":
                  return (
                    <div
                      key={i}
                      className="py-12 px-10 bg-primary text-black my-16 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[url('https://grain-y.com/wp-content/uploads/2021/04/grid-thin-black.png')] opacity-10 pointer-events-none" />
                      <div className="relative z-10 space-y-6">
                        <h3 className="text-4xl font-headline font-black uppercase italic tracking-tighter leading-none">
                          {block.value}
                        </h3>
                        <Link
                          to="/auditoria"
                          className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 font-headline font-black uppercase text-xs tracking-widest hover:scale-105 transition-all"
                        >
                          {b.inArticleBtn} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </article>

          {/* Sidebar */}
          <aside className="hidden md:block space-y-12 shrink-0">
            <div className="p-8 border border-white/10 bg-zinc-950 space-y-6 sticky top-32">
              <div className="font-headline font-black uppercase italic text-xs tracking-widest text-primary border-b border-primary/20 pb-4">
                {b.author}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-primary/30 relative group">
                  <img
                    src="/assets/insider-portrait.png"
                    alt="The InSider"
                    className="w-full h-full object-cover filter brightness-[0.4] contrast-125 grayscale-[0.5] group-hover:brightness-75 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                <div>
                  <div className="font-headline font-black uppercase text-[11px] text-white tracking-widest leading-none mb-1">
                    {post.author}
                  </div>
                  <div className="font-mono text-[9px] text-primary uppercase tracking-tighter">
                    Core Protocol Unit
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">
                  {b.share}
                </div>
                <div className="flex gap-2">
                  <button
                    title="Share on LinkedIn"
                    onClick={() =>
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          window.location.href
                        )}`,
                        "_blank"
                      )
                    }
                    className="flex-1 p-3 bg-zinc-900 hover:bg-primary hover:text-black transition-all flex items-center justify-center border border-white/5"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button
                    title="Share on Twitter"
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          getLoc(post.title)
                        )}&url=${encodeURIComponent(window.location.href)}`,
                        "_blank"
                      )
                    }
                    className="flex-1 p-3 bg-zinc-900 hover:bg-primary hover:text-black transition-all flex items-center justify-center border border-white/5"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button
                    title="Copy link"
                    onClick={copyToClipboard}
                    className="flex-1 p-3 bg-zinc-900 hover:bg-primary hover:text-black transition-all flex items-center justify-center border border-white/5 relative"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <button
                  onClick={handleShare}
                  className="w-full py-4 bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-black transition-all font-headline font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 mt-4"
                >
                  <Share2 className="w-3.5 h-3.5" /> {b.shareBtn}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Final CTA Footer */}
      <section className="bg-surface-container-lowest border-y border-white/5 py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grain-y.com/wp-content/uploads/2021/04/grid-thin-white.png')] scale-110" />
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10 space-y-12">
          <div className="space-y-4">
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em]">
              {b.cta.badge}
            </span>
            <h2 className="text-5xl md:text-8xl font-headline font-black uppercase italic tracking-tighter leading-[0.85]">
              {b.cta.title} <br /> {b.cta.highlight && <span className="text-primary">{b.cta.highlight}</span>}
            </h2>
          </div>
          <p className="text-zinc-500 font-label text-xl max-w-xl mx-auto italic">
            {b.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link
              to="/auditoria"
              className="px-12 py-7 bg-primary text-black font-headline font-black uppercase text-sm tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_50px_rgba(252,242,0,0.15)] group relative overflow-hidden"
            >
              <span className="relative z-10">{b.cta.btnPrimary}</span>
              <div className="absolute inset-0 border border-black/10 scale-[1.03]" />
            </Link>
            <Link
              to="/contacto"
              className="px-12 py-7 border border-white/10 hover:border-primary/50 text-white font-headline font-black uppercase text-sm tracking-[0.3em] transition-all flex items-center justify-center gap-3"
            >
              {b.cta.btnSecondary} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
