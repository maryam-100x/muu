import React, { useState, useMemo, useEffect } from 'react';
import { FaTiktok, FaInstagram, FaYoutube, FaPaw } from 'react-icons/fa';
import { GiCat } from 'react-icons/gi';
import { RiFileCopyFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { CONTRACT_ADDRESS } from './contract';

const App = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const socials = useMemo(() => [
    { icon: <FaTiktok />, label: 'TikTok', url: 'https://www.tiktok.com/@muu_daybyday' },
    { icon: <FaInstagram />, label: 'Instagram', url: 'https://www.instagram.com/muu_daybyday/' },
    { icon: <FaYoutube />, label: 'YouTube', url: 'https://www.youtube.com/channel/UCM5mUX1sMfplDFnuLg1soFg' },
  ], []);

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const copyCA = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      
      {/* Floating cat elements */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className={`floating-cat floating-cat-${i}`}>
          <GiCat aria-hidden="true" />
        </div>
      ))}

      <main className="main">
        {/* Left Instagram embed */}
        <div className="instagram-embed instagram-left">
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink="https://www.instagram.com/p/C9mMn9gpYts/?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14"
          >
            <div style={{padding:'16px'}}>
              <a href="https://www.instagram.com/p/C9mMn9gpYts/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank">
                Loading Instagram post...
              </a>
              <p style={{color:'#c9c8cd', fontFamily:'Arial,sans-serif', fontSize:'14px', lineHeight:'17px', marginBottom:'0', marginTop:'8px', overflow:'hidden', padding:'8px 0 7px', textAlign:'center', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                <a href="https://www.instagram.com/p/C9mMn9gpYts/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank">A post shared by Muu (むーくん) (@muu_daybyday)</a>
              </p>
            </div>
          </blockquote>
        </div>

        <div className="hero">
          {/* Animated cat ears */}
          <div className="cat-ears" aria-hidden="true">
            <div className="ear left-ear"></div>
            <div className="ear right-ear"></div>
          </div>
          
          <div className="hero-content">
            <h1>
              <span className="name">Muu</span>
              <span className="kanji">(むーくん)</span>
            </h1>

            <div className="hero-actions">
              <p className="tagline">
                The <span className="highlight">cutest</span> cat on Bonk
                <span className="paw-icon"><FaPaw aria-hidden="true" /></span>
              </p>

              <Link to="/muutok" className="open-muutok-btn">
                <FaTiktok className="icon" />
                Open MuuTok
              </Link>

              <button 
                className={`ca-button ${isCopied ? 'copied' : ''}`}
                onClick={copyCA}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                aria-label={isCopied ? 'Contract address copied' : 'Copy contract address'}
              >
                <span className="icon"><RiFileCopyFill /></span>
                {isCopied ? 'Copied! 🎉' : (isHovering ? CONTRACT_ADDRESS : 'Copy CA')}
              </button>
            </div>

            <div className="socials">
              {socials.map((s, i) => (
                <a 
                  key={i} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon" 
                  aria-label={s.label}
                  data-tooltip={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Instagram embed */}
        <div className="instagram-embed instagram-right">
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink="https://www.instagram.com/p/DLSByvWpCSx/?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14"
          >
            <div style={{padding:'16px'}}>
              <a href="https://www.instagram.com/p/DLSByvWpCSx/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank">
                Loading Instagram post...
              </a>
              <p style={{color:'#c9c8cd', fontFamily:'Arial,sans-serif', fontSize:'14px', lineHeight:'17px', marginBottom:'0', marginTop:'8px', overflow:'hidden', padding:'8px 0 7px', textAlign:'center', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                <a href="https://www.instagram.com/p/DLSByvWpCSx/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank">A post shared by Muu (むーくん) (@muu_daybyday)</a>
              </p>
            </div>
          </blockquote>
        </div>

        {/* Animated cat tail */}
        <div className="cat-tail" aria-hidden="true"></div>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Muu (むーくん). 
          <span className="paws"> All purrs reserved.</span>
        </p>
      </footer>
    </>
  );
};

export default React.memo(App);