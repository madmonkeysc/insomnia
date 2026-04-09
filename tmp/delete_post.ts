import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cyykqzerknaglxpqljud.supabase.co'
const supabaseAnonKey = 'sb_publishable_zDw_37kZg7hcVxX6q0a81A_zHuKm0wI'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function deleteTestPost() {
  console.log('🚀 Iniciando eliminación del post "test-post-supabase"...');
  
  const { data, error } = await supabase
    .from('posts')
    .delete()
    .eq('id', 'test-post-supabase');

  if (error) {
    console.error('❌ Error eliminando el post:', error.message);
  } else {
    console.log('✅ Post eliminado con éxito del sistema.');
  }
}

deleteTestPost();
