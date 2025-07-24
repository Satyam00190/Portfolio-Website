import { FaEnvelopeOpenText, FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contacts() {
  return (
    <div className="animated" style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(rgba(40,60,120,0.7), rgba(40,60,120,0.7)), url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80) center/cover no-repeat',
      position: 'relative',
      overflow: 'hidden',
      padding: 0,
      margin: 0
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.92)',
        borderRadius: 24,
        padding: '2.5rem 2rem',
        boxShadow: '0 8px 32px rgba(100,108,255,0.10)',
        maxWidth: 500,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div className="portfolio-header" style={{alignItems: 'center', gap: 12, justifyContent: 'center'}}>
          <FaEnvelopeOpenText size={32} color="#a5b4fc" />
          <h2 style={{margin: 0}}>Contact Me</h2>
        </div>
        <p style={{margin: '1em 0 2em 0', color: '#222', fontWeight: 500}}>
          This website is my personal achievement showcase. Feel free to reach out!
        </p>
        <form action="https://formsubmit.co/satyanandyadav.1610@gmail.com" method="POST" style={{display: 'flex', flexDirection: 'column', gap: 18, margin: '1.5em 0', width: '100%'}}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://your-portfolio-success-page.com/" />
          <input name="name" type="text" placeholder="Your Name" required style={{padding: 14, borderRadius: 8, border: '1px solid #e0e7ff', fontSize: '1rem', outline: 'none'}} />
          <input name="email" type="email" placeholder="Your Email" required style={{padding: 14, borderRadius: 8, border: '1px solid #e0e7ff', fontSize: '1rem', outline: 'none'}} />
          <textarea name="message" placeholder="Your Message" rows={4} required style={{padding: 14, borderRadius: 8, border: '1px solid #e0e7ff', fontSize: '1rem', outline: 'none'}} />
          <button type="submit" style={{padding: '1em 2.5em', background: 'linear-gradient(90deg, #646cff 0%, #a5b4fc 100%)', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 2px 12px rgba(100,108,255,0.15)', transition: 'background 0.2s'}}>Send Message</button>
        </form>
        <div style={{display: 'flex', justifyContent: 'center', gap: 32, marginTop: 16}}>
          <a href="https://github.com/Satyam00190" target="_blank" rel="noopener noreferrer" style={{color:'#222', fontSize: 32, background:'#e0e7ff', borderRadius: '50%', padding: 10, transition: 'background 0.2s'}}><FaGithub /></a>
          <a href="https://www.linkedin.com/in/satyanand-yadav-004b21325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{color:'#0a66c2', background:'#fff', borderRadius: '50%', fontSize: 32, padding: 10, transition: 'background 0.2s'}}><FaLinkedin /></a>
        </div>
        <div style={{marginTop: 28, textAlign: 'left', width: '100%'}}>
          <p style={{margin: '1em 0', display: 'flex', alignItems: 'center', gap: 10, color: '#646cff', fontWeight: 600}}><FaEnvelope /> Email: <a href="mailto:satyanandyadav.1610@gmail.com" style={{color:'#646cff', textDecoration:'underline'}}>satyanandyadav.1610@gmail.com</a></p>
          <p style={{margin: '1em 0', display: 'flex', alignItems: 'center', gap: 10, color: '#646cff', fontWeight: 600}}><FaPhoneAlt /> Contact No: <a href="tel:6388895130" style={{color:'#646cff', textDecoration:'underline'}}>6388895130</a></p>
        </div>
        <footer style={{
          width: '100%',
          textAlign: 'center',
          padding: '0.7rem 0 0.7rem 0',
          color: '#334155',
          fontWeight: 600,
          fontSize: '1.02rem',
          background: 'linear-gradient(90deg, #e0e7ff 0%, #a5b4fc 100%)',
          borderRadius: '14px',
          boxShadow: '0 2px 12px rgba(100,108,255,0.10)',
          letterSpacing: '0.5px',
          margin: '2.5rem auto 0 auto',
          maxWidth: 340,
          fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
          position: 'relative',
        }}>
          <span style={{color: '#6366f1', fontWeight: 700, fontSize: '1.08rem'}}>© 2024</span> All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Contacts; 