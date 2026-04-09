// ⚠️ IMPORTANTE: Esta API Key debe ser manejada en el archivo .env como VITE_RESEND_API_KEY
const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY || 're_ZEz6n2QT_3VhjSU4hkAQUG2QM9BiJzstN';

export const sendWelcomeEmail = async (email: string) => {
  console.log('--- PROTOCOLO DE ENVÍO INICIADO ---');
  console.log('Destinatario:', email);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Insomnia AI <onboarding@resend.dev>', // Usar dominio verificado en producción
        to: [email],
        subject: '[BRIEFING] Cifrado: Acceso al Protocolo Insomnia V4',
        html: `
          <div style="background-color: #000; color: #fff; font-family: sans-serif; padding: 40px; border: 1px solid #fcf200;">
            <h1 style="color: #fcf200; text-transform: uppercase; font-style: italic; letter-spacing: 2px;">Conexión Establecida</h1>
            <p style="color: #888; font-family: monospace;">DESTINATARIO: ${email}</p>
            <hr style="border-color: #333;" />
            <p style="font-size: 16px; line-height: 1.6;">
              Has sido integrado con éxito en el <strong>Protocolo Insomnia V4</strong>. 
              A partir de este momento, recibes inteligencia pura sobre el despliegue de infraestructuras autónomas.
            </p>
            <div style="background: #111; padding: 20px; border-left: 4px solid #fcf200; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold;">LO QUE OBTIENES:</p>
              <ul style="color: #aaa;">
                <li>Acceso prioritario a los informes de "The InSider".</li>
                <li>Roadmaps de automatización disruptiva.</li>
                <li>Briefings tácticos semanales.</li>
              </ul>
            </div>
            <p style="color: #555; font-size: 10px; text-transform: uppercase;">* TRANSMISIÓN CIFRADA PUNTO A PUNTO - END OF MESSAGE *</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Error de Resend API:', data);
      return { success: false, error: data };
    }

    console.log('✅ Email enviado con éxito:', data);
    return { success: true, data };
  } catch (err) {
    console.error('❌ Fallo crítico en la transmisión:', err);
    return { success: false, error: err };
  }
};
