// Apex Floorings — Final Homepage
// Full-width sliding hero with text overlaid at the bottom

const SLIDES = [
  { img: 'uploads/089A2349.jpg', eyebrow: 'INTERLOCKING TILES', headline: ['PREMIUM', 'FLOORING', 'SOLUTIONS'], sub: 'Interlocking tiles, sports surfaces and industrial flooring — engineered for performance, designed for beauty.' },
  { img: 'uploads/089A2289.jpg', eyebrow: 'SPORTS FLOORING', headline: ['COURTS BUILT', 'FOR', 'CHAMPIONS'], sub: 'Professional sports surfaces — basketball courts, multi-purpose halls and training facilities.' },
  { img: 'uploads/089A2244.jpg', eyebrow: 'INSTALLATION SERVICES', headline: ['EXPERT', 'INSTALLATION', 'NATIONWIDE'], sub: 'From Lagos to Abuja, our team delivers precision installation on every project — on time, every time.' },
  { img: 'uploads/089A2335.jpg', eyebrow: 'COLOUR RANGE', headline: ['TWENTY+', 'BOLD', 'COLOURS'], sub: 'Twenty plus tile colours to match your space, your brand and your style.' },
];

const TILES = [
  { color: '#E8453C', label: 'RED TERRA' },
  { color: '#3B7FE8', label: 'OCEAN BLUE' },
  { color: '#E83AAE', label: 'FUCHSIA' },
  { color: '#9B9B9B', label: 'URBAN GREY' },
  { color: '#CFDB30', label: 'APEX YELLOW' },
  { color: '#1C1C1C', label: 'ONYX BLACK' },
];

const YELLOW = '#CFDB30';

function Nav() {
  return (
    <nav style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 56px', height: 76,
      background: 'linear-gradient(to bottom, rgba(14,14,14,0.85), rgba(14,14,14,0))'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 4, height: 36, background: YELLOW }} />
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: '#fff', letterSpacing: 3, lineHeight: 1 }}>APEX</div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, color: YELLOW, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 500 }}>FLOORINGS</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 36 }}>
        {['PRODUCTS', 'SERVICES', 'PROJECTS', 'ABOUT', 'CONTACT'].map(item => (
          <a key={item} href="#" style={{
            textDecoration: 'none', fontSize: 11, fontWeight: 500,
            color: 'rgba(255,255,255,0.65)', letterSpacing: 2,
            fontFamily: "'Jost', sans-serif", cursor: 'pointer'
          }} onMouseEnter={e => e.currentTarget.style.color = YELLOW}
             onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}>{item}</a>
        ))}
      </div>
      <button style={{
        background: YELLOW, color: '#111', border: 'none',
        padding: '11px 24px', fontSize: 11, fontWeight: 700,
        cursor: 'pointer', letterSpacing: 2, textTransform: 'uppercase',
        fontFamily: "'Jost', sans-serif"
      }}>GET A QUOTE</button>
    </nav>
  );
}

function HeroSlider() {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [hoveredTile, setHoveredTile] = React.useState(null);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#0E0E0E' }}>

      {/* FULL-WIDTH PHOTO STACK */}
      {SLIDES.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          opacity: i === idx ? 1 : 0,
          transition: 'opacity 1.2s ease-in-out', zIndex: 1
        }}>
          <img src={s.img} alt="" style={{
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: 'center 30%',
            transform: i === idx ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 7s ease-out',
            display: 'block'
          }} />
        </div>
      ))}

      {/* BOTTOM GRADIENT for text legibility */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(14,14,14,0.92) 0%, rgba(14,14,14,0.5) 28%, rgba(14,14,14,0.0) 55%)'
      }} />

      {/* RIGHT — BIG TILE COLOR SWATCHES */}
      <div style={{
        position: 'absolute', top: 76, right: 0, bottom: 0, width: 72, zIndex: 5,
        display: 'flex', flexDirection: 'column'
      }}>
        {TILES.map((t, i) => (
          <div key={i}
            onMouseEnter={() => setHoveredTile(i)}
            onMouseLeave={() => setHoveredTile(null)}
            style={{
              flex: hoveredTile === i ? 2 : 1,
              background: t.color, cursor: 'pointer',
              transition: 'flex 0.35s ease',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', position: 'relative'
            }}>
            {hoveredTile === i && (
              <span style={{
                fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 700,
                color: t.color === YELLOW || t.color === '#9B9B9B' ? '#111' : '#fff',
                letterSpacing: 2, textTransform: 'uppercase',
                writingMode: 'vertical-rl', whiteSpace: 'nowrap'
              }}>{t.label}</span>
            )}
          </div>
        ))}
      </div>

      {/* TEXT OVERLAID AT BOTTOM */}
      <div style={{
        position: 'absolute', left: 56, right: 96, bottom: 60, zIndex: 10,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40
      }}>
        {/* LEFT — animated content */}
        <div style={{ position: 'relative', flex: 1, maxWidth: 820 }}>
          {SLIDES.map((s, i) => (
            <div key={i} style={{
              position: i === idx ? 'relative' : 'absolute',
              top: 0, left: 0, right: 0,
              opacity: i === idx ? 1 : 0,
              transform: i === idx ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              transitionDelay: i === idx ? '0.25s' : '0s',
              pointerEvents: i === idx ? 'auto' : 'none'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 20, height: 1, background: 'rgba(255,255,255,0.5)' }} />
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.6)', letterSpacing: 3, fontWeight: 400 }}>
                  {s.eyebrow}
                </span>
              </div>
              <h1 style={{
                fontFamily: "'Jost', sans-serif", fontSize: 32,
                lineHeight: 1.15, color: '#fff', letterSpacing: 0.2,
                marginBottom: 10, fontWeight: 400
              }}>
                {s.headline[0]} {s.headline[1]} {s.headline[2]}
              </h1>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: 12,
                color: 'rgba(255,255,255,0.55)', lineHeight: 1.65,
                maxWidth: 480, fontWeight: 300, letterSpacing: 0.2
              }}>{s.sub}</p>
            </div>
          ))}

          {/* CTAs (static) */}
          <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
            <button style={{
              background: YELLOW, color: '#111', border: 'none',
              padding: '12px 26px', fontSize: 10, fontWeight: 600,
              cursor: 'pointer', letterSpacing: 2, textTransform: 'uppercase',
              fontFamily: "'Jost', sans-serif"
            }}>VIEW PRODUCTS</button>
            <button style={{
              background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.25)',
              padding: '12px 24px', fontSize: 10, fontWeight: 400,
              cursor: 'pointer', letterSpacing: 2, textTransform: 'uppercase',
              fontFamily: "'Jost', sans-serif"
            }}>OUR WORK →</button>
          </div>
        </div>

        {/* RIGHT — slide counter + dots + arrows */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14, flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setIdx((idx - 1 + SLIDES.length) % SLIDES.length)} style={{
              background: 'transparent', border: '1px solid rgba(255,255,255,0.3)',
              width: 38, height: 38, cursor: 'pointer',
              color: '#fff', fontSize: 14, fontFamily: "'Jost', sans-serif"
            }}>←</button>
            <button onClick={() => setIdx((idx + 1) % SLIDES.length)} style={{
              background: YELLOW, border: 'none',
              width: 38, height: 38, cursor: 'pointer',
              color: '#111', fontSize: 14, fontWeight: 700, fontFamily: "'Jost', sans-serif"
            }}>→</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: 1 }}>
              {String(idx + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
            </span>
            <div style={{ display: 'flex', gap: 5 }}>
              {SLIDES.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} style={{
                  width: i === idx ? 22 : 10, height: 2,
                  background: i === idx ? YELLOW : 'rgba(255,255,255,0.3)',
                  border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomStrip() {
  return (
    <div style={{
      background: YELLOW, padding: '11px 56px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexShrink: 0
    }}>
      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500, color: '#1a1a1a', letterSpacing: 1.5, textTransform: 'uppercase' }}>
        500+ Completed Projects Across Nigeria
      </span>
      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 400, color: 'rgba(0,0,0,0.55)', letterSpacing: 1 }}>
        Residential · Commercial · Sports · Industrial
      </span>
      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500, color: '#1a1a1a', letterSpacing: 1.5, textTransform: 'uppercase' }}>
        Lagos · Abuja · Port Harcourt →
      </span>
    </div>
  );
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', background: '#0E0E0E' }}>
      <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>
        <Nav />
        <HeroSlider />
      </div>
      <BottomStrip />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
