import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Save, Trash2, Layout, Type, AlertCircle, CheckCircle, 
  Lock, Rocket, Image as ImageIcon, Upload, X, ChevronUp, 
  ChevronDown, Edit3, Plus, ExternalLink, Search, Globe, Eye
} from "lucide-react";
import { supabase } from "../lib/supabase";
import { BlogPost } from "../data/blogData";

export default function Admin() {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'content' | 'seo'>('content');

  const [editorLang, setEditorLang] = useState<'es' | 'en'>('es');

  // Form State
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({
    title: { es: "", en: "" },
    category: { es: "Automatización", en: "Automation" },
    excerpt: { es: "", en: "" },
    image: "/assets/blog-1.png",
    content: { es: [], en: [] },
  });

  useEffect(() => {
    if (isAuth) fetchPosts();
  }, [isAuth]);

  async function fetchPosts() {
    const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
    if (data) setPosts(data);
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "insomnia2026") setIsAuth(true);
    else alert("Acceso Denegado: Protocolo Incorrecto");
  };

  const addBlock = (type: any) => {
    const newContent = { ...currentPost.content } as BlogPost['content'];
    newContent.es = [...(newContent.es || []), { type, value: "" }];
    newContent.en = [...(newContent.en || []), { type, value: "" }];
    setCurrentPost({ ...currentPost, content: newContent });
  };

  const updateBlock = (index: number, value: string) => {
    const newContent = { ...currentPost.content } as BlogPost['content'];
    newContent[editorLang][index].value = value;
    setCurrentPost({ ...currentPost, content: newContent });
  };

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    const newContent = { ...currentPost.content } as BlogPost['content'];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex < 0 || targetIndex >= newContent.es.length) return;
    
    // Move in both languages to keep indices synced
    [newContent.es[index], newContent.es[targetIndex]] = [newContent.es[targetIndex], newContent.es[index]];
    [newContent.en[index], newContent.en[targetIndex]] = [newContent.en[targetIndex], newContent.en[index]];
    
    setCurrentPost({ ...currentPost, content: newContent });
  };

  const removeBlock = (index: number) => {
    const newContent = { ...currentPost.content } as BlogPost['content'];
    newContent.es = newContent.es.filter((_, idx) => idx !== index);
    newContent.en = newContent.en.filter((_, idx) => idx !== index);
    setCurrentPost({ ...currentPost, content: newContent });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `post-images/${fileName}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setCurrentPost({ ...currentPost, image: publicUrl });
      setMessage({ type: 'success', text: "Imagen cargada en el núcleo del sistema." });
    } catch (error: any) {
      setMessage({ type: 'error', text: `Error de subida: ${error.message}. Asegúrate de que el bucket 'blog-images' sea público.` });
    } finally {
      setUploading(false);
    }
  };

  const savePost = async () => {
    if (!currentPost.title?.es) {
       setMessage({ type: 'error', text: "El protocolo requiere un título identificador en español." });
       return;
    }
    
    setLoading(true);
    const id = editingId || currentPost.title?.es.toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const postToSave = {
      ...currentPost,
      id,
      date: currentPost.date || new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase(),
      author: "Insomnia AI Ops",
    };

    const { error } = await supabase.from('posts').upsert(postToSave);
    
    if (error) setMessage({ type: 'error', text: error.message });
    else {
      setMessage({ type: 'success', text: `Protocolo ${editingId ? 'actualizado' : 'desplegado'} con éxito.` });
      setEditingId(null);
      resetForm();
      fetchPosts();
    }
    setLoading(false);
  };

  const resetForm = () => {
    setCurrentPost({
      title: { es: "", en: "" },
      category: { es: "Automatización", en: "Automation" },
      excerpt: { es: "", en: "" },
      image: "/assets/blog-1.png",
      content: { es: [], en: [] },
    });
    setEditingId(null);
    setActiveTab('content');
    setEditorLang('es');
  };

  const loadPostForEdit = (post: BlogPost) => {
    setCurrentPost(post);
    setEditingId(post.id);
    setEditorLang('es'); // Default to Spanish when loading
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-zinc-900 border border-white/5 p-10 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-pulse" />
          <div className="text-center space-y-2">
            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-headline font-black uppercase italic text-white tracking-widest">KRAKEN <span className="text-primary">CORE</span></h1>
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-tighter">Protocolo de Acceso Admin v2.0</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              placeholder="TERMINAL_KEY"
              title="Clave de acceso a la terminal"
              className="w-full bg-black border border-white/10 p-5 font-mono text-sm text-primary focus:border-primary outline-none transition-all placeholder:text-white/5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button title="Iniciar sesión" className="w-full py-5 bg-primary text-black font-headline font-black uppercase text-xs tracking-widest hover:bg-white transition-all transform active:scale-95">
              Initialize Access
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-40 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_400px] gap-16">
        
        {/* Editor Area */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-10 gap-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-headline font-black uppercase italic text-white flex items-center gap-4">
                {editingId ? <><Edit3 className="text-primary" /> Editar</> : "Nuevo"} 
                <span className="text-primary tracking-tighter">Protocolo</span>
              </h1>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Central de Inteligencia y Despliegue de Contenido</p>
            </div>
            <div className="flex gap-4">
              <button 
                title="Cancelar cambios"
                onClick={resetForm}
                className="px-6 py-4 border border-white/10 text-white font-headline font-black uppercase text-[10px] tracking-widest hover:bg-white/5 transition-all"
              >
                Cancelar
              </button>
              <button 
                title="Guardar protocolo"
                onClick={savePost}
                disabled={loading}
                className="flex items-center gap-3 bg-primary text-black px-10 py-4 font-headline font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all disabled:opacity-50 shadow-[0_0_30px_rgba(252,242,0,0.2)]"
              >
                <Save className="w-4 h-4" /> {loading ? "Procesando..." : (editingId ? "Actualizar" : "Publicar")}
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-8 border-b border-white/5">
            <button 
              onClick={() => setActiveTab('content')}
              className={`pb-4 text-[10px] font-mono uppercase tracking-[0.3em] transition-all relative ${activeTab === 'content' ? 'text-primary' : 'text-zinc-500 hover:text-white'}`}
            >
              01/ Contenido Creativo
              {activeTab === 'content' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 w-full h-px bg-primary" />}
            </button>
            <button 
              onClick={() => setActiveTab('seo')}
              className={`pb-4 text-[10px] font-mono uppercase tracking-[0.3em] transition-all relative ${activeTab === 'seo' ? 'text-primary' : 'text-zinc-500 hover:text-white'}`}
            >
              02/ Optimización SEO
              {activeTab === 'seo' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 w-full h-px bg-primary" />}
            </button>
          </div>

          {message && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-5 flex items-center gap-4 font-mono text-[11px] uppercase border ${message.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-red-500/10 border-red-500/20 text-red-500'}`}
            >
              {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              {message.text}
              <button title="Cerrar mensaje" onClick={() => setMessage(null)} className="ml-auto"><X className="w-4 h-4" /></button>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {activeTab === 'content' ? (
              <motion.div 
                key="content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-10 bg-zinc-900/30 p-10 border border-white/5 relative"
              >
                {/* Language Toggle */}
                <div className="flex gap-4 mb-2">
                  {(['es', 'en'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setEditorLang(lang)}
                      className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest border transition-all ${
                        editorLang === lang 
                          ? 'bg-primary text-black border-primary' 
                          : 'border-white/10 text-zinc-500 hover:text-white'
                      }`}
                    >
                      {lang === 'es' ? 'Spanish (Base)' : 'English (Translation)'}
                    </button>
                  ))}
                </div>

                {/* Header Section */}
                <div className="grid gap-10">
                  <div className="grid md:grid-cols-[1fr_200px] gap-8">
                     <div className="space-y-6">
                        <div className="grid gap-2">
                          <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Identificador Principal ({editorLang.toUpperCase()})</label>
                          <input 
                            type="text" 
                            placeholder="Título del Artículo"
                            title="Título del artículo"
                            className="bg-black border border-white/10 p-5 text-2xl font-headline font-black uppercase italic text-white outline-none focus:border-primary transition-all"
                            value={currentPost.title?.[editorLang] || ""}
                            onChange={(e) => setCurrentPost({
                              ...currentPost, 
                              title: { ...currentPost.title, [editorLang]: e.target.value } as any
                            })}
                          />
                        </div>
                        <div className="grid gap-2">
                           <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Resumen Ejecutivo ({editorLang.toUpperCase()})</label>
                            <textarea 
                              placeholder="Extracto que aparecerá en el feed principal..."
                              title="Resumen del artículo"
                              className="bg-black border border-white/10 p-5 h-32 font-label text-zinc-300 outline-none focus:border-primary transition-all resize-none leading-relaxed"
                              value={currentPost.excerpt?.[editorLang] || ""}
                              onChange={(e) => setCurrentPost({
                                ...currentPost, 
                                excerpt: { ...currentPost.excerpt, [editorLang]: e.target.value } as any
                              })}
                            />
                        </div>
                     </div>

                     {/* Image Preview / Upload */}
                     <div className="space-y-4">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Branding Visual</label>
                        <div className="aspect-square bg-black border border-white/10 relative group overflow-hidden">
                           {uploading && (
                             <div className="absolute inset-0 z-20 bg-black/80 flex items-center justify-center">
                                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                             </div>
                           )}
                           <img src={currentPost.image} alt="Vista previa del artículo" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                           <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                              <button 
                                title="Subir imagen"
                                onClick={() => fileInputRef.current?.click()}
                                className="bg-primary text-black p-4 rounded-full shadow-xl"
                              >
                                <Upload className="w-6 h-6" />
                              </button>
                              <span className="text-[9px] font-mono uppercase text-white mt-3 tracking-widest">Update Image</span>
                           </div>
                        </div>
                        <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                     </div>
                  </div>
                </div>

                {/* Dynamic Content Blocks */}
                <div className="space-y-6 pt-10 border-t border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">Cuerpo del Protocolo ({editorLang.toUpperCase()})</span>
                    <span className="text-[9px] font-mono text-primary px-3 py-1 bg-primary/10 border border-primary/20">
                      {currentPost.content?.[editorLang]?.length || 0} BLOQUES
                    </span>
                  </div>
                  
                  <div className="space-y-6">
                    {currentPost.content?.[editorLang]?.map((block: any, i: number) => (
                      <motion.div 
                        layout
                        key={i} 
                        className="group relative bg-black border border-white/5 p-8 space-y-4 hover:border-white/20 transition-all border-l-2 border-l-transparent hover:border-l-primary"
                      >
                        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-2">
                          <div className="flex items-center gap-4">
                             <span className="text-[9px] font-mono uppercase bg-primary text-black px-3 py-1 font-black">BLOCK {i + 1}</span>
                             <span className="text-[9px] font-mono uppercase text-zinc-500 tracking-widest">{block.type}</span>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button title="Subir bloque" onClick={() => moveBlock(i, 'up')} className="p-2 text-zinc-500 hover:text-primary transition-colors"><ChevronUp className="w-4 h-4" /></button>
                            <button title="Bajar bloque" onClick={() => moveBlock(i, 'down')} className="p-2 text-zinc-500 hover:text-primary transition-colors"><ChevronDown className="w-4 h-4" /></button>
                            <button 
                              title="Eliminar bloque"
                              onClick={() => removeBlock(i)}
                              className="p-2 text-zinc-500 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        {block.type === 'text' ? (
                          <textarea 
                            title={`Contenido del bloque de texto ${i + 1}`}
                            className="w-full bg-transparent text-zinc-400 font-label outline-none h-40 resize-none leading-relaxed text-lg"
                            placeholder="Escribe el contenido del párrafo..."
                            value={block.value}
                            onChange={(e) => updateBlock(i, e.target.value)}
                          />
                        ) : (
                          <input 
                            type="text"
                            title={`Contenido del bloque ${block.type} ${i + 1}`}
                            className="w-full bg-transparent text-white font-headline uppercase italic text-2xl outline-none"
                            placeholder={`Introduce el ${block.type}...`}
                            value={block.value}
                            onChange={(e) => updateBlock(i, e.target.value)}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Block Selectors */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-10">
                    <button title="Añadir subtítulo" onClick={() => addBlock('heading')} className="flex flex-col items-center gap-3 p-6 border border-white/5 bg-zinc-900/50 hover:border-primary hover:bg-zinc-800 transition-all group">
                      <Layout className="w-6 h-6 text-zinc-600 group-hover:text-primary" />
                      <span className="text-[9px] font-mono uppercase text-zinc-500 tracking-widest">Subtítulo</span>
                    </button>
                    <button title="Añadir párrafo" onClick={() => addBlock('text')} className="flex flex-col items-center gap-3 p-6 border border-white/5 bg-zinc-900/50 hover:border-primary hover:bg-zinc-800 transition-all group">
                      <Type className="w-6 h-6 text-zinc-600 group-hover:text-primary" />
                      <span className="text-[9px] font-mono uppercase text-zinc-500 tracking-widest">Párrafo</span>
                    </button>
                    <button title="Añadir resaltado" onClick={() => addBlock('highlight')} className="flex flex-col items-center gap-3 p-6 border border-white/5 bg-zinc-900/50 hover:border-primary hover:bg-zinc-800 transition-all group">
                      <AlertCircle className="w-6 h-6 text-zinc-600 group-hover:text-primary" />
                      <span className="text-[9px] font-mono uppercase text-zinc-500 tracking-widest">Resaltado</span>
                    </button>
                    <button title="Añadir protocolo" onClick={() => addBlock('callout')} className="flex flex-col items-center gap-3 p-6 border border-white/5 bg-zinc-900/50 hover:border-primary hover:bg-zinc-800 transition-all group">
                      <ImageIcon className="w-6 h-6 text-zinc-600 group-hover:text-primary" />
                      <span className="text-[9px] font-mono uppercase text-zinc-500 tracking-widest">Protocolo</span>
                    </button>
                    <button title="Añadir auditoría" onClick={() => addBlock('funnel')} className="flex flex-col items-center gap-3 p-6 border border-primary/30 bg-primary/5 hover:border-primary hover:bg-primary/10 transition-all group">
                      <Rocket className="w-6 h-6 text-primary animate-pulse" />
                      <span className="text-[9px] font-mono uppercase text-primary tracking-widest">Auditoría</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="seo"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                {/* SEO Snippet Preview */}
                <div className="bg-zinc-900/30 border border-white/5 p-10 space-y-8">
                  <div className="flex items-center gap-3 border-b border-white/5 pb-6">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white">Google Snippet Preview</span>
                  </div>
                  
                  <div className="max-w-2xl bg-white p-8 space-y-2">
                    <div className="text-[14px] text-zinc-500 font-sans flex items-center gap-1">
                      https://insomnia-ai.com <span className="text-[#4d5156]">› blog › {editingId || "post-url"}</span>
                    </div>
                    <h3 className="text-[20px] text-[#1a0dab] font-sans hover:underline cursor-pointer">
                      {currentPost.title?.[editorLang] || "Título del Artículo | INSOMNIA AI"}
                    </h3>
                    <p className="text-[14px] text-[#4d5156] font-sans leading-relaxed">
                      <span className="text-[#70757a]">{new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })} — </span>
                      {currentPost.excerpt?.[editorLang] || "Aquí aparecerá un resumen optimizado de tu contenido para atraer clics desde los buscadores..."}
                    </p>
                  </div>

                  <div className="grid gap-8 pt-6">
                    <div className="grid gap-3">
                       <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                         <Search className="w-3 h-3" /> Palabras Clave (Meta Keywords)
                       </label>
                       <input 
                         type="text" 
                         placeholder="ia, automatización, agentes autónomos, despliegue..."
                         title="Palabras clave para SEO"
                         className="bg-black border border-white/10 p-5 font-mono text-sm text-primary outline-none focus:border-primary transition-all"
                         value={currentPost.seo_keywords}
                         onChange={(e) => setCurrentPost({...currentPost, seo_keywords: e.target.value})}
                       />
                       <p className="text-[9px] font-mono text-zinc-600 uppercase">Separa cada tecnología o concepto con comas.</p>
                    </div>

                    <div className="p-6 bg-primary/5 border border-primary/10 space-y-4">
                       <div className="flex items-center gap-2 text-primary">
                          <Eye className="w-4 h-4" />
                          <span className="text-[10px] font-mono uppercase tracking-widest font-black">Análisis de Visibilidad</span>
                       </div>
                       <div className="space-y-3">
                          <div className="flex justify-between items-center text-[10px] font-mono uppercase">
                             <span className="text-zinc-500">Longitud del Título</span>
                             <span className={currentPost.title?.[editorLang] && currentPost.title[editorLang].length > 50 && currentPost.title[editorLang].length < 60 ? "text-green-500" : "text-yellow-500"}>
                               {currentPost.title?.[editorLang]?.length || 0} / 60
                             </span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] font-mono uppercase">
                             <span className="text-zinc-500">Longitud de Meta Description</span>
                             <span className={currentPost.excerpt?.[editorLang] && currentPost.excerpt[editorLang].length > 120 && currentPost.excerpt[editorLang].length < 160 ? "text-green-500" : "text-yellow-500"}>
                               {currentPost.excerpt?.[editorLang]?.length || 0} / 160
                             </span>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar: Digital Archive */}
        <div className="space-y-8">
           <div className="p-8 bg-zinc-950 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                <Rocket className="w-24 h-24" />
              </div>
              <div className="font-headline font-black uppercase italic text-lg tracking-tight text-primary mb-2">Digital Archive</div>
              <p className="text-zinc-500 font-mono text-[10px] uppercase leading-tight tracking-widest">Sistema de gestión y actualización de protocolos en tiempo real.</p>
           </div>

           <div className="space-y-4">
              <div className="flex items-center justify-between px-2 mb-4">
                 <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Live Database</span>
                 <button title="Actualizar lista de posts" onClick={fetchPosts} className="text-[10px] font-mono text-primary uppercase underline tracking-widest">Refresh</button>
              </div>
              
              <div className="space-y-3">
                <AnimatePresence>
                  {posts.map(post => (
                    <motion.div 
                      key={post.id} 
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className={`group p-6 border transition-all flex items-center justify-between ${editingId === post.id ? 'bg-primary/20 border-primary shadow-[0_0_20px_rgba(252,242,0,0.1)]' : 'bg-zinc-900/50 border-white/5 hover:border-white/20'}`}
                    >
                      <div className="space-y-1 overflow-hidden pr-4 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                             <span className="text-[8px] font-mono px-2 py-0.5 bg-white/10 text-zinc-400 uppercase tracking-tighter">
                               {typeof post.category === 'string' ? post.category : post.category.es}
                             </span>
                             <span className="text-[8px] font-mono text-zinc-600 uppercase italic">{post.date}</span>
                          </div>
                          <div className="text-[11px] font-headline font-black uppercase text-white truncate group-hover:text-primary transition-colors cursor-pointer" onClick={() => loadPostForEdit(post)}>
                            {typeof post.title === 'string' ? post.title : post.title.es}
                          </div>
                      </div>
                      
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                         <button 
                            title="Editar post"
                            onClick={() => loadPostForEdit(post)}
                            className="p-3 bg-zinc-950 text-white hover:text-primary transition-colors"
                         >
                           <Edit3 className="w-3.5 h-3.5" />
                         </button>
                         <button 
                          title="Eliminar post"
                          onClick={async () => {
                            const postTitle = typeof post.title === 'string' ? post.title : post.title.es;
                            if(confirm(`¿ELIMINAR PROTOCOLO: ${postTitle.toUpperCase()}? Esta acción es irreversible.`)) {
                              await supabase.from('posts').delete().eq('id', post.id);
                              if(editingId === post.id) resetForm();
                              fetchPosts();
                            }
                          }}
                          className="p-3 bg-zinc-950 text-zinc-500 hover:text-red-500 transition-colors"
                         >
                           <Trash2 className="w-3.5 h-3.5" />
                         </button>
                         <Link title="Ver en vivo" target="_blank" to={`/blog/${post.id}`} className="p-3 bg-zinc-950 text-zinc-500 hover:text-primary transition-colors">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {posts.length === 0 && (
                  <div className="p-12 text-center border border-dashed border-white/10 bg-zinc-950">
                    <span className="text-[10px] font-mono text-zinc-600 uppercase">Sin protocolos activos en el núcleo</span>
                  </div>
                )}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}

// Utility Loader
function Loader2({ className }: { className?: string }) {
  return (
    <motion.div 
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <ImageIcon />
    </motion.div>
  );
}

