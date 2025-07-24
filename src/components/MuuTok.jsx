import React, { useEffect, useRef, useState } from 'react';
import './MuuTok.css';
import Navbar from './Navbar';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const muuVideoIds = [
  '7421848295078808839',
  '7524645651708218642',
  '7523163262951623943',
  '7514244020692897042',
  '7511636552410516754',
  '7487524633848122679',
  '7481575937390300424',
  '7474535329014304008',
  '7470823596726799624',
  '7468970917020912914',
  '7456354541877873938',
  '7453022802321493255',
  '7451895391223598354',
  '7455249136372223240',
  '7416658811081018642',
  '7528727609954422024',
  '7412199357941927176',
  '7407370949047160082',
  '7405515788641176840',
  '7395145935233273106',
  '7385479290273451272',
];

export default function MuuTok() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const feedRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const scrollToIndex = (direction) => {
    const newIndex = direction === 'up' 
      ? Math.max(currentIndex - 1, 0)
      : Math.min(currentIndex + 1, muuVideoIds.length - 1);
    
    setCurrentIndex(newIndex);
    const target = feedRef.current.children[newIndex];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <Navbar />
      <div className="muutok-feed" ref={feedRef}>
        {muuVideoIds.map((id, index) => (
          <div key={id} className="muutok-video-container">
            <div className="muutok-video">
              <blockquote
                className="tiktok-embed"
                cite={`https://www.tiktok.com/@muu_daybyday/video/${id}`}
                data-video-id={id}
              >
                <section>Loading Muu...</section>
              </blockquote>
            </div>
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        <button
          className={`nav-button ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={() => scrollToIndex('up')}
          disabled={currentIndex === 0}
          aria-label="Previous video"
        >
          <IoIosArrowUp />
        </button>
        <button
          className={`nav-button ${currentIndex === muuVideoIds.length - 1 ? 'disabled' : ''}`}
          onClick={() => scrollToIndex('down')}
          disabled={currentIndex === muuVideoIds.length - 1}
          aria-label="Next video"
        >
          <IoIosArrowDown />
        </button>
      </div>
    </>
  );
}