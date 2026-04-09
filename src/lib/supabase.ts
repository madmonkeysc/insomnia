import { createClient } from '@supabase/supabase-js'

// ⚠️ IMPORTANTE PARA EL USUARIO:
// Para que esto funcione en Hostinger, debes crear una cuenta gratuita en Supabase.com
// 1. Crea un nuevo proyecto.
// 2. Ve a Settings > API y copia la URL y la Anon Key (clave pública).
// 3. Reemplaza los valores de abajo.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://cyykqzerknaglxpqljud.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_zDw_37kZg7hcVxX6q0a81A_zHuKm0wI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * ESTRUCTURA DE LA TABLA EN SUPABASE:
 * Crea una tabla llamada 'posts' con:
 * - id: text (primary key)
 * - title: text
 * - category: text
 * - date: text
 * - author: text
 * - image: text
 * - excerpt: text
 * - content: jsonb (donde guardaremos el array de bloques)
 */
