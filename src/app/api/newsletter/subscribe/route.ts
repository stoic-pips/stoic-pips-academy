import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    console.log('📧 New newsletter subscription:', email);

    // Simple HTML email template
    const welcomeEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 600px; 
            margin: 0 auto; 
            padding: 20px; 
          }
          .header { 
            background: linear-gradient(135deg, #10b981 0%, #064e3b 100%); 
            color: white; 
            padding: 30px; 
            text-align: center; 
            border-radius: 10px 10px 0 0; 
          }
          .content { 
            background: #f8f9fa; 
            padding: 30px; 
            border-radius: 0 0 10px 10px; 
          }
          .benefit { 
            background: white; 
            padding: 15px; 
            margin: 10px 0; 
            border-radius: 8px; 
            border-left: 4px solid #00e5ff; 
          }
          .footer { 
            text-align: center; 
            margin-top: 20px; 
            padding-top: 20px; 
            border-top: 1px solid #ddd; 
            color: #666; 
            font-size: 12px; 
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Welcome to Dunam Ai! 🚀</h1>
          <p>Your journey to AI-driven trading mastery begins now</p>
        </div>
        
        <div class="content">
          <p>Hello Future Pro Trader,</p>
          
          <p>Thank you for joining the Dunam Ai newsletter! You've just taken an important step toward transforming your trading journey with AI-driven insights.</p>
          
          <h3>What You'll Receive:</h3>
          
          <div class="benefit">
            <strong>📈 Weekly Market Analysis</strong><br>
            Professional insights on current market conditions and opportunities
          </div>
          
          <div class="benefit">
            <strong>🎯 Trading Strategies</strong><br>
            Actionable setups, risk management techniques, and entry/exit strategies
          </div>
          
          <div class="benefit">
            <strong>💡 Psychology & Mindset</strong><br>
            Techniques to maintain discipline and emotional control
          </div>
          
          <div class="benefit">
            <strong>🚀 Exclusive Content</strong><br>
            Special insights and strategies not shared publicly
          </div>
          
          <p><strong>Your first trading insights will arrive in your inbox soon!</strong></p>
          
          <p>In the meantime, feel free to explore our <a href="https://app.stoicpips.com" style="color: #00e5ff;">trading platform</a> or check out our <a href="https://docs.stoicpips.com" style="color: #00e5ff;">documentation</a>.</p>
          
          <p>To your trading success,<br>
          <strong>The Dunam Ai Team</strong></p>
        </div>
        
        <div class="footer">
          <p>You're receiving this email because you subscribed to the Dunam Ai newsletter.<br>
          <a href="#" style="color: #00e5ff;">Unsubscribe</a> at any time.</p>
          <p>Dunam Ai | Next-Gen AI Trading Ecosystem</p>
        </div>
      </body>
      </html>
    `;

    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
          New Newsletter Subscriber! 📈
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subscription Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Source:</strong> Website Newsletter Signup</p>
        </div>
        
        <p style="color: #666; font-size: 14px;">
          This subscriber has been automatically added to your newsletter list.
        </p>
      </div>
    `;

    // Send welcome email to subscriber
    const welcomeEmail = await resend.emails.send({
      from: 'Dunam Ai <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to the Dunam Ai Ecosystem! 🚀',
      html: welcomeEmailHtml,
    });

    // Send notification to admin
    const adminEmail = await resend.emails.send({
      from: 'Dunam Ai <onboarding@resend.dev>',
      to: ['stoicpips.com'],
      subject: `🎯 New Dunam Ai Subscriber: ${email}`,
      html: adminEmailHtml,
    });

    console.log('✅ Welcome email sent successfully');
    console.log('✅ Admin notification sent successfully');

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter. Welcome email sent!'
    });

  } catch (error: any) {
    console.error('❌ Newsletter subscription error:', error);

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}