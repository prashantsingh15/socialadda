export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, platform, channel_url, subscribers, engagement_rate, niche } = req.body || {};

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
    const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'business@socialadda.org';

    const htmlContent = `
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #8A2BE2;">New Creator Onboarding - Social Adda</h2>
            <div style="background: #f4f4f4; padding: 20px; border-radius: 5px;">
                <p><strong>Creator Name:</strong> ${name || 'N/A'}</p>
                <p><strong>Email:</strong> ${email || 'N/A'}</p>
                <p><strong>Platform:</strong> ${platform || 'N/A'}</p>
                <p><strong>Channel URL:</strong> <a href="${channel_url || '#'}">${channel_url || 'N/A'}</a></p>
                <p><strong>Subscribers:</strong> ${subscribers || 'N/A'}</p>
                <p><strong>Engagement Rate:</strong> ${engagement_rate || 'Not provided'}</p>
                <p><strong>Niche:</strong> ${niche || 'N/A'}</p>
                <p style="margin-top: 20px; font-size: 12px; color: #777;">
                    Submitted on: ${new Date().toUTCString()}
                </p>
            </div>
        </body>
    </html>
    `;

    if (RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: SENDER_EMAIL,
          to: [BUSINESS_EMAIL],
          subject: `New Creator Application: ${name || 'Creator'}`,
          html: htmlContent,
        }),
      });
    }

    return res.status(200).json({ status: 'success', message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Creator error:', error);
    return res.status(500).json({ error: error.message });
  }
}
