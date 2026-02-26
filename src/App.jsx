import { useEffect, useState, useRef } from 'react'
import perfil from './assets/perfil.jpg'
import pdfCiber from './assets/Introduction_to_Cybersecurity.pdf'
import pdfRedes from './assets/Exploring_Networking_with_Cisco_Packet_Tracer.pdf'
import pdfPacket from './assets/Getting_Started_with_Cisco_Packet_Tracer.pdf'
import pdfDigital from './assets/Digital_Awareness_certificate_yoselin-.pdf'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, isVisible]
}

function AnimatedSection({ children, delay = 0, direction = 'up', className = '', ...props }) {
  const [ref, isVisible] = useInView(0.1)
  const transforms = {
    up: 'translateY(40px)', down: 'translateY(-40px)',
    left: 'translateX(-40px)', right: 'translateX(40px)'
  }
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : (transforms[direction] || transforms.up),
        transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

const colors = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  accent: '#ec4899',
  success: '#10b981',
  warning: '#f59e0b',
  gradient1: '#6366f1',
  gradient2: '#a855f7',
  gradient3: '#ec4899',
  dark: {
    bg: '#0a0a0f', bg2: '#111118', card: '#1a1a24',
    text: '#ffffff', textMuted: '#9ca3af', border: '#2a2a35'
  },
  light: {
    bg: '#f8fafc', bg2: '#f1f5f9', card: '#ffffff',
    text: '#0f172a', textMuted: '#475569', border: '#e2e8f0'
  }
}

const GroupIcons = {
  code: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  layers: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  wrench: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  database: (color) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
}

const SKILL_GROUPS = [
  {
    label: 'Lenguajes de Programación', iconKey: 'code', color: colors.primary,
    items: [
      { name: 'Python', icon: 'python/python-original.svg', level: 85 },
      { name: 'Java', icon: 'java/java-original.svg', level: 80 },
      { name: 'C++', icon: 'cplusplus/cplusplus-original.svg', level: 75 },
      { name: 'HTML5', icon: 'html5/html5-original.svg', level: 95 },
      { name: 'CSS3', icon: 'css3/css3-original.svg', level: 90 },
      { name: 'JavaScript', icon: 'javascript/javascript-original.svg', level: 85 },
    ]
  },
  {
    label: 'Frameworks & Librerías', iconKey: 'layers', color: colors.secondary,
    items: [
      { name: 'React', icon: 'react/react-original.svg', level: 80 },
      { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original.svg', level: 85 },
      { name: 'JavaFX', icon: 'java/java-original.svg', level: 75 },
      { name: 'OpenCV', icon: 'opencv/opencv-original.svg', level: 70 },
    ]
  },
  {
    label: 'Herramientas & IDEs', iconKey: 'wrench', color: colors.accent,
    items: [
      { name: 'VS Code', icon: 'vscode/vscode-original.svg', level: 90 },
      { name: 'Git', icon: 'git/git-original.svg', level: 85 },
      { name: 'GitHub', icon: 'github/github-original.svg', level: 85 },
      { name: 'Figma', icon: 'figma/figma-original.svg', level: 80 },
      { name: 'IntelliJ', icon: 'intellij/intellij-original.svg', level: 75 },
      { name: 'Kali Linux', icon: 'linux/linux-original.svg', level: 70 },
    ]
  },
  {
    label: 'Bases de Datos', iconKey: 'database', color: colors.success,
    items: [
      { name: 'MySQL', icon: 'mysql/mysql-original.svg', level: 80 },
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg', level: 75 },
    ]
  }
]

const PROJECTS = [
  {
    id: 1, title: 'VisionEdu System', color: colors.primary, featured: true,
    description: 'Sistema de asistencia escolar con reconocimiento facial en tiempo real. IA y machine learning para detección precisa.',
    tags: ['Java', 'OpenCV', 'JavaFX', 'IA'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/yoselin55/VisionEdu_System',
  },
  {
    id: 2, title: 'PetShop Manager', color: colors.success, featured: true,
    description: 'Sistema integral de gestión para tiendas de mascotas. Control de inventario, ventas y reportes automatizados.',
    tags: ['Java', 'Swing', 'MySQL', 'PDF'],
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/yoselin55/sistemaPetShop',
  },
  {
    id: 3, title: 'Kaffeine', color: colors.warning, featured: false,
    description: 'Web moderna para cafetería con diseño responsivo, modo oscuro/claro y animaciones fluidas.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/yoselin55/Kaffeine',
  },
  {
    id: 4, title: 'Portfolio 3D', color: colors.secondary, inProgress: true,
    description: 'Portfolio interactivo con efectos 3D y animaciones inmersivas usando Three.js.',
    tags: ['React', 'Three.js', 'WebGL', 'Framer'],
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/yoselin55',
  }
]

const CertIcons = {
  lock: (color) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      <circle cx="12" cy="16" r="1" fill={color}/>
    </svg>
  ),
  network: (color) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  server: (color) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),
  shield: (color) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
}

const CERTIFICATIONS = [
  { title: 'Introducción a la Ciberseguridad', date: 'Nov 2025', issuer: 'Cisco', iconKey: 'lock', pdf: pdfCiber, color: colors.primary },
  { title: 'Exploración de Redes Cisco', date: 'Sep 2025', issuer: 'Cisco', iconKey: 'network', pdf: pdfRedes, color: colors.secondary },
  { title: 'Packet Tracer - Nivel Avanzado', date: 'Sep 2025', issuer: 'Cisco', iconKey: 'server', pdf: pdfPacket, color: colors.accent },
  { title: 'Conciencia Digital', date: 'Oct 2025', issuer: 'Cisco', iconKey: 'shield', pdf: pdfDigital, color: colors.success },
]

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageHover, setImageHover] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['home', 'sobre-mi', 'habilidades', 'proyectos', 'certs', 'contacto']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) { setActiveSection(section); break }
        }
      }
    }
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY })
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const theme = darkMode ? colors.dark : colors.light

  const navLinks = [
    ['Inicio', '#home'], ['Sobre mí', '#sobre-mi'], ['Skills', '#habilidades'],
    ['Proyectos', '#proyectos'], ['Certificados', '#certs'], ['Contacto', '#contacto']
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; overflow-x: hidden; }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${theme.bg2}; }
        ::-webkit-scrollbar-thumb { background: ${colors.primary}; border-radius: 20px; }
        ::selection { background: ${colors.primary}40; color: ${theme.text}; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-15deg); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .gradient-text {
          background: linear-gradient(135deg, ${colors.gradient1}, ${colors.gradient2}, ${colors.gradient3});
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 8s ease infinite;
        }

        @media (pointer: fine) { * { cursor: none; } }

        .glass {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: ${darkMode ? 'rgba(10,10,15,0.8)' : 'rgba(255,255,255,0.8)'};
        }

        
        .navbar {
          position: fixed;
          top: 16px; left: 50%; transform: translateX(-50%);
          width: 92%; max-width: 1100px;
          padding: 12px 28px;
          border-radius: 50px;
          z-index: 200;
          transition: all 0.3s ease;
          border: 1px solid ${theme.border};
          box-shadow: ${scrolled ? `0 10px 40px ${colors.primary}20` : 'none'};
        }
        .navbar-inner {
          display: flex; justify-content: space-between; align-items: center; gap: 16px;
        }
        .nav-logo {
          font-size: 1.8rem; font-weight: 700; text-decoration: none;
          background: linear-gradient(135deg, ${colors.gradient1}, ${colors.gradient3});
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          font-family: 'Space Grotesk', sans-serif; flex-shrink: 0;
        }
        .nav-desktop-links {
          display: flex; align-items: center; gap: 26px; flex-wrap: nowrap;
        }
        .nav-desktop-links a {
          color: ${theme.textMuted}; text-decoration: none;
          font-size: 0.92rem; font-weight: 400;
          transition: color 0.2s; position: relative; white-space: nowrap;
        }
        .nav-desktop-links a.active { color: ${colors.primary}; font-weight: 600; }
        .nav-desktop-links a.active::after {
          content: ''; position: absolute;
          bottom: -4px; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, ${colors.primary}, ${colors.accent});
          border-radius: 2px;
        }
        .nav-desktop-links a:hover { color: ${colors.primary}; }
        .theme-btn {
          background: none; border: 2px solid ${colors.primary};
          border-radius: 30px; padding: 7px 20px; font-size: 0.88rem;
          color: ${colors.primary}; transition: all 0.3s ease;
          font-weight: 600; font-family: 'Inter', sans-serif;
          white-space: nowrap; flex-shrink: 0;
        }
        .theme-btn:hover { background: ${colors.primary}; color: white; }

        
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; padding: 4px; flex-shrink: 0;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: ${theme.text}; border-radius: 2px; transition: all 0.3s;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        
        .mobile-menu {
          display: none; position: fixed;
          top: 78px; left: 0; right: 0;
          background: ${darkMode ? 'rgba(10,10,15,0.97)' : 'rgba(255,255,255,0.97)'};
          backdrop-filter: blur(20px);
          border-bottom: 1px solid ${theme.border};
          padding: 18px 24px 24px;
          z-index: 199; flex-direction: column; gap: 2px;
          animation: slideDown 0.2s ease;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          color: ${theme.text}; text-decoration: none;
          font-size: 1.05rem; font-weight: 500;
          padding: 12px 0; border-bottom: 1px solid ${theme.border};
          transition: color 0.2s, padding-left 0.2s;
        }
        .mobile-menu a:last-of-type { border-bottom: none; }
        .mobile-menu a:hover, .mobile-menu a.active { color: ${colors.primary}; padding-left: 8px; }
        .mobile-theme-btn {
          margin-top: 14px; padding: 12px 24px;
          border: 2px solid ${colors.primary}; border-radius: 30px;
          background: none; color: ${colors.primary};
          font-weight: 600; font-size: 0.95rem;
          font-family: 'Inter', sans-serif; transition: all 0.3s; text-align: center;
        }
        .mobile-theme-btn:hover { background: ${colors.primary}; color: white; }

        
        .image-wrapper { position: relative; width: 100%; max-width: 500px; margin: 0 auto; }
        .image-container {
          position: relative; width: 100%; height: 600px;
          border-radius: 30px; overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.3);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .image-container:hover { transform: translateY(-10px); box-shadow: 0 40px 80px ${colors.primary}40; }
        .profile-image {
          width: 100%; height: 100%; object-fit: cover; object-position: center 20%;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .image-container:hover .profile-image { transform: scale(1.08); }
        .image-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 0%, transparent 50%, ${darkMode ? 'rgba(10,10,15,0.8)' : 'rgba(255,255,255,0.3)'} 100%);
          opacity: 0; transition: opacity 0.5s ease; pointer-events: none;
        }
        .image-container:hover .image-overlay { opacity: 1; }

        .badge {
          position: absolute; background: ${theme.card};
          padding: 14px 22px; border-radius: 15px;
          backdrop-filter: blur(10px); box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: all 0.3s ease; z-index: 10;
        }
        .badge:hover { transform: scale(1.05); }
        .badge-1 { top: 30px; left: -20px; border-left: 4px solid ${colors.primary}; animation: float 6s ease-in-out infinite; }
        .badge-2 { bottom: 30px; right: -20px; border-right: 4px solid ${colors.success}; animation: float 7s ease-in-out infinite reverse; }


        @media (max-width: 900px) {
          .nav-desktop-links { gap: 16px; }
          .nav-desktop-links a { font-size: 0.85rem; }
          .theme-btn { padding: 7px 14px; font-size: 0.82rem; }
        }

        
        @media (max-width: 768px) {
          .nav-desktop-links { display: none; }
          .theme-btn { display: none; }
          .hamburger { display: flex; }

          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-image-col { order: -1; }
          .image-wrapper { max-width: 340px; }
          .image-container { height: 400px; }
          .badge-1 { left: 8px; top: 18px; }
          .badge-2 { right: 8px; bottom: 18px; }
          .hero-cta { justify-content: center !important; }
          .hero-stats { justify-content: center !important; }

          .about-grid { grid-template-columns: 1fr !important; }
          .stats-2col { grid-template-columns: 1fr 1fr !important; }

          .projects-grid { grid-template-columns: 1fr !important; }
        }

        
        @media (max-width: 480px) {
          .navbar { top: 10px; padding: 10px 18px; width: 96%; }
          .mobile-menu { top: 70px; }
          .hero-section { padding: 90px 16px 50px !important; }
          .section-pad { padding: 70px 16px !important; }
          .image-container { height: 320px; }
          .badge { padding: 8px 14px; }
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .certs-grid { grid-template-columns: 1fr !important; }
        }

        
        @media (max-width: 360px) {
          .image-container { height: 270px; }
        }
      `}</style>

      
      <div style={{
        position: 'fixed', left: mousePosition.x, top: mousePosition.y,
        width: cursorVariant === 'hover' ? 60 : 20,
        height: cursorVariant === 'hover' ? 60 : 20,
        borderRadius: '50%',
        background: cursorVariant === 'hover' ? 'transparent' : colors.primary,
        border: cursorVariant === 'hover' ? `2px solid ${colors.primary}` : 'none',
        transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 9999,
        transition: 'all 0.2s ease',
        mixBlendMode: darkMode ? 'screen' : 'multiply',
        boxShadow: cursorVariant === 'hover' ? `0 0 30px ${colors.primary}` : 'none'
      }}>
        {cursorVariant === 'hover' && (
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: 4, height: 4, borderRadius: '50%',
            background: colors.primary, boxShadow: `0 0 20px ${colors.primary}`
          }} />
        )}
      </div>

      
      <nav className="navbar glass"
        onMouseEnter={() => setCursorVariant('hover')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <div className="navbar-inner">
          <a className="nav-logo" href="#home">YF</a>

          <div className="nav-desktop-links">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href}
                className={activeSection === href.slice(1) ? 'active' : ''}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}
              onMouseEnter={(e) => { e.target.style.background = colors.primary; e.target.style.color = 'white'; setCursorVariant('hover') }}
              onMouseLeave={(e) => { e.target.style.background = 'none'; e.target.style.color = colors.primary; setCursorVariant('default') }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                {darkMode ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
                {darkMode ? 'Claro' : 'Oscuro'}
              </span>
            </button>
            <button className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(([label, href]) => (
          <a key={label} href={href}
            className={activeSection === href.slice(1) ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <button className="mobile-theme-btn" onClick={() => { setDarkMode(!darkMode); setMenuOpen(false) }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {darkMode ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </span>
        </button>
      </div>

      
      <section id="home" className="hero-section"
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: theme.bg, color: theme.text, padding: '100px 20px 60px' }}
      >
        <div style={{ position: 'absolute', top: '5%', right: '5%', width: 500, height: 500, borderRadius: '50%', background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15, ${colors.accent}15)`, filter: 'blur(80px)', animation: 'float 25s ease-in-out infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: `linear-gradient(135deg, ${colors.accent}15, ${colors.primary}15)`, filter: 'blur(60px)', animation: 'float 20s ease-in-out infinite reverse', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

            
            <div>
              <AnimatedSection delay={0.2}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 25px', background: `linear-gradient(135deg, ${colors.primary}20, ${colors.accent}20)`, borderRadius: 30, color: colors.primary, fontSize: '0.9rem', fontWeight: 500, marginBottom: 20, border: `1px solid ${colors.primary}40` }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                  </svg>
                  Disponible para oportunidades
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: 20, fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span style={{ color: theme.textMuted }}>Hola, soy</span><br />
                  <span className="gradient-text">Yoselin Flores</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <p style={{ fontSize: '1.2rem', color: theme.textMuted, lineHeight: 1.8, marginBottom: 30, maxWidth: 500 }}>
                  Desarrolladora de software de 18 años, estudiante en{' '}
                  <a href="https://www.tecsup.edu.pe/" target="_blank" rel="noopener noreferrer"
                    style={{ color: colors.primary, textDecoration: 'none', borderBottom: `2px solid ${colors.primary}40`, fontWeight: 600 }}>
                    TECSUP
                  </a>
                  . Apasionada por crear experiencias digitales únicas y explorar el mundo de la ciberseguridad.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.8}>
                <div className="hero-cta" style={{ display: 'flex', gap: 15, flexWrap: 'wrap' }}>
                  <a href="#contacto"
                    style={{ padding: '15px 40px', background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, color: 'white', textDecoration: 'none', borderRadius: 40, fontWeight: 600, fontSize: '1rem', boxShadow: `0 10px 30px ${colors.primary}40`, transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 15px 40px ${colors.primary}60`; setCursorVariant('hover') }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 10px 30px ${colors.primary}40`; setCursorVariant('default') }}
                  >Contactar</a>
                  <a href="#proyectos"
                    style={{ padding: '15px 40px', background: 'transparent', color: theme.text, textDecoration: 'none', borderRadius: 40, fontWeight: 600, fontSize: '1rem', border: `2px solid ${theme.border}`, transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = theme.border; e.currentTarget.style.borderColor = colors.primary; setCursorVariant('hover') }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = theme.border; setCursorVariant('default') }}
                  >Ver proyectos</a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={1} direction="up">
                <div className="hero-stats" style={{ display: 'flex', gap: 50, marginTop: 50, flexWrap: 'wrap' }}>
                  {[
                    { number: '4+', label: 'Proyectos', color: colors.primary },
                    { number: '5+', label: 'Certificados', color: colors.secondary },
                    { number: '8+', label: 'Tecnologías', color: colors.accent }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div style={{ fontSize: '2.5rem', fontWeight: 700, color: stat.color }}>{stat.number}</div>
                      <div style={{ fontSize: '0.9rem', color: theme.textMuted }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            
            <AnimatedSection delay={0.6} direction="right" className="hero-image-col">
              <div className="image-wrapper">
                <div className="image-container"
                  onMouseEnter={() => { setCursorVariant('hover'); setImageHover(true) }}
                  onMouseLeave={() => { setCursorVariant('default'); setImageHover(false) }}
                >
                  <img
                    src={perfil}
                    alt="Yoselin Flores"
                    className="profile-image"
                    onLoad={() => setImageLoaded(true)}
                    style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.5s ease, transform 1.2s ease' }}
                  />
                  <div className="image-overlay" />
                </div>
                <div className="badge badge-1" style={{ transform: imageHover ? 'scale(1.1) translateX(5px)' : 'scale(1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: `${colors.primary}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: theme.textMuted }}>Estudiando</div>
                      <div style={{ fontWeight: 700, color: colors.primary, fontSize: '1rem' }}>Software Dev</div>
                    </div>
                  </div>
                </div>
                <div className="badge badge-2" style={{ transform: imageHover ? 'scale(1.1) translateX(-5px)' : 'scale(1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: `${colors.success}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={colors.success} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: theme.textMuted }}>Meta futura</div>
                      <div style={{ fontWeight: 700, color: colors.success, fontSize: '1rem' }}>Ciberseguridad</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        
        <div style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', animation: 'pulse 2s ease-in-out infinite' }}>
          <div style={{ width: 30, height: 50, border: `2px solid ${theme.textMuted}`, borderRadius: 25 }}>
            <div style={{ width: 4, height: 10, background: colors.primary, borderRadius: 2, margin: '8px auto', animation: 'float 1.5s ease-in-out infinite' }} />
          </div>
        </div>
      </section>

      
      <section id="sobre-mi" className="section-pad" style={{ padding: '100px 20px', background: theme.bg2, color: theme.text }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <span style={{ fontSize: '1rem', color: colors.primary, fontWeight: 500, letterSpacing: 2 }}>SOBRE MÍ</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: 10, fontFamily: "'Space Grotesk', sans-serif" }}>
                Conoce más sobre <span className="gradient-text">mi trayectoria</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
            <AnimatedSection delay={0.2} direction="right">
              <div style={{ background: theme.card, padding: 40, borderRadius: 30, border: `1px solid ${theme.border}` }}>
                <blockquote style={{ fontSize: '1.2rem', lineHeight: 1.8, color: theme.textMuted, fontStyle: 'italic', marginBottom: 20 }}>
                  "Hola, soy <strong style={{ color: colors.primary }}>Yoselin Fabiola Flores Quispe</strong>, tengo 18 años y estudio en{' '}
                  <a href="https://www.tecsup.edu.pe/" target="_blank" rel="noopener noreferrer" style={{ color: colors.primary, textDecoration: 'none' }}>TECSUP, Lima, Perú</a>."
                </blockquote>
                <p style={{ fontSize: '1rem', lineHeight: 1.8, color: theme.textMuted, marginBottom: 20 }}>
                  He trabajado en proyectos prácticos que me han permitido aprender y crecer, desde sistemas de detección facial con IA hasta aplicaciones de gestión.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.8, color: theme.textMuted }}>
                  Me especializo en <strong>desarrollo frontend</strong> y diseño UI/UX con Figma. Actualmente estoy enfocada en expandir mis conocimientos en <strong style={{ color: colors.success }}>ciberseguridad</strong> y mejorar mi inglés para colaborar en proyectos internacionales.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} direction="left">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, height: '100%' }}>
                <div className="stats-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  {[
                    { number: '4+', label: 'Proyectos\ncompletados', color: colors.primary },
                    { number: '5+', label: 'Certificados\nobtenidos', color: colors.secondary },
                    { number: '8+', label: 'Tecnologías\ndominadas', color: colors.accent },
                    { number: '2+', label: 'Años de\nexperiencia', color: colors.success }
                  ].map((stat, i) => (
                    <div key={i}
                      style={{ background: theme.card, padding: 30, borderRadius: 20, border: `1px solid ${theme.border}`, textAlign: 'center', transition: 'all 0.3s ease' }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color}20` }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                    >
                      <div style={{ fontSize: '2.5rem', fontWeight: 700, color: stat.color }}>{stat.number}</div>
                      <div style={{ fontSize: '0.9rem', color: theme.textMuted, whiteSpace: 'pre-line' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: theme.card, padding: 30, borderRadius: 30, border: `1px solid ${theme.border}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: `${colors.primary}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontWeight: 600 }}>Español</div>
                        <div style={{ fontSize: '0.85rem', color: theme.textMuted }}>Nativo</div>
                      </div>
                    </div>
                    <div style={{ width: 1, height: 40, background: theme.border }} />
                    <div style={{ flex: 1, minWidth: 120 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                        <span style={{ fontWeight: 600 }}>Inglés</span>
                        <span style={{ color: colors.primary }}>Nivel B1 · 35%</span>
                      </div>
                      <div style={{ width: '100%', height: 8, background: theme.border, borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{ width: '35%', height: '100%', background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`, borderRadius: 4 }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      
      <section id="habilidades" className="section-pad" style={{ padding: '100px 20px', background: theme.bg, color: theme.text }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <span style={{ fontSize: '1rem', color: colors.primary, fontWeight: 500, letterSpacing: 2 }}>HABILIDADES</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: 10, fontFamily: "'Space Grotesk', sans-serif" }}>
                Mi stack <span className="gradient-text">tecnológico</span>
              </h2>
            </div>
          </AnimatedSection>

          {SKILL_GROUPS.map((group, groupIndex) => (
            <AnimatedSection key={group.label} delay={groupIndex * 0.2} direction="up">
              <div style={{ marginBottom: 50 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 25 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: `${group.color}15`, border: `1.5px solid ${group.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {GroupIcons[group.iconKey](group.color)}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: group.color }}>{group.label}</h3>
                  <div style={{ flex: 1, height: 2, background: `linear-gradient(90deg, ${group.color}40, transparent)` }} />
                </div>
                <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 15 }}>
                  {group.items.map((skill) => (
                    <div key={skill.name}
                      style={{ background: theme.card, border: `1px solid ${theme.border}`, borderRadius: 15, padding: 20, transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = group.color; e.currentTarget.style.boxShadow = `0 10px 30px ${group.color}20`; setCursorVariant('hover') }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.boxShadow = 'none'; setCursorVariant('default') }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 15 }}>
                        <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`} alt={skill.name} style={{ width: 30, height: 30 }} onError={(e) => { e.target.style.display = 'none' }} />
                        <span style={{ fontWeight: 500 }}>{skill.name}</span>
                      </div>
                      <div style={{ width: '100%', height: 4, background: theme.border, borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ width: `${skill.level}%`, height: '100%', background: `linear-gradient(90deg, ${group.color}, ${group.color}80)`, borderRadius: 2, transition: 'width 1s ease' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.8} direction="up">
            <div style={{ background: theme.card, borderRadius: 30, padding: 30, border: `1px solid ${theme.border}`, marginTop: 30 }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                Aprendiendo actualmente
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['TypeScript', 'Next.js', 'Ciberseguridad', 'Redes Cisco', 'Figma Avanzado', 'Inglés', 'Kali Linux'].map(item => (
                  <span key={item} style={{ padding: '8px 20px', background: `${colors.primary}10`, border: `1px solid ${colors.primary}30`, borderRadius: 30, fontSize: '0.9rem', color: colors.primary }}>{item}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      
      <section id="proyectos" className="section-pad" style={{ padding: '100px 20px', background: theme.bg2, color: theme.text }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <span style={{ fontSize: '1rem', color: colors.primary, fontWeight: 500, letterSpacing: 2 }}>PROYECTOS</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: 10, fontFamily: "'Space Grotesk', sans-serif" }}>
                Mis trabajos <span className="gradient-text">destacados</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 30 }}>
            {PROJECTS.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.2} direction="up">
                <div
                  style={{ background: theme.card, borderRadius: 30, overflow: 'hidden', border: `1px solid ${theme.border}`, transition: 'all 0.3s ease', position: 'relative' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = `0 20px 40px ${project.color}20`; setCursorVariant('hover') }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; setCursorVariant('default') }}
                >
                  {project.featured && (
                    <div style={{ position: 'absolute', top: 20, right: 20, background: colors.primary, color: 'white', padding: '5px 12px', borderRadius: 20, fontSize: '0.8rem', fontWeight: 600, zIndex: 1, display: 'flex', alignItems: 'center', gap: 5 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      Destacado
                    </div>
                  )}
                  {project.inProgress && (
                    <div style={{ position: 'absolute', top: 20, right: 20, background: colors.warning, color: 'white', padding: '5px 12px', borderRadius: 20, fontSize: '0.8rem', fontWeight: 600, zIndex: 1, display: 'flex', alignItems: 'center', gap: 5 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      En progreso
                    </div>
                  )}
                  <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)' }}
                      onMouseLeave={(e) => { e.target.style.transform = 'scale(1)' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${theme.card}, transparent)` }} />
                  </div>
                  <div style={{ padding: 25 }}>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: 10, color: project.color }}>{project.title}</h3>
                    <p style={{ color: theme.textMuted, lineHeight: 1.6, marginBottom: 20 }}>{project.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                      {project.tags.map(tag => (
                        <span key={tag} style={{ padding: '5px 12px', background: `${project.color}10`, borderRadius: 20, fontSize: '0.8rem', color: project.color }}>{tag}</span>
                      ))}
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: project.color, textDecoration: 'none', fontWeight: 600, transition: 'gap 0.3s ease' }}
                      onMouseEnter={(e) => { e.currentTarget.style.gap = '12px' }}
                      onMouseLeave={(e) => { e.currentTarget.style.gap = '8px' }}
                    >Ver en GitHub →</a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      
      <section id="certs" className="section-pad" style={{ padding: '100px 20px', background: theme.bg, color: theme.text }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <span style={{ fontSize: '1rem', color: colors.primary, fontWeight: 500, letterSpacing: 2 }}>CERTIFICACIONES</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: 10, fontFamily: "'Space Grotesk', sans-serif" }}>
                Formación <span className="gradient-text">académica</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="certs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            {CERTIFICATIONS.map((cert, index) => (
              <AnimatedSection key={cert.title} delay={index * 0.15} direction="up">
                <div
                  style={{ background: theme.card, borderRadius: 20, padding: 30, border: `1px solid ${theme.border}`, transition: 'all 0.3s ease', textAlign: 'center' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = cert.color; e.currentTarget.style.boxShadow = `0 10px 30px ${cert.color}20`; setCursorVariant('hover') }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.boxShadow = 'none'; setCursorVariant('default') }}
                >
                  <div style={{ width: 64, height: 64, borderRadius: 18, background: `${cert.color}15`, border: `1.5px solid ${cert.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    {CertIcons[cert.iconKey](cert.color)}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: 10 }}>{cert.title}</h3>
                  <p style={{ color: cert.color, fontSize: '0.9rem', marginBottom: 5 }}>{cert.issuer}</p>
                  <p style={{ color: theme.textMuted, fontSize: '0.8rem', marginBottom: 20 }}>{cert.date}</p>
                  <a href={cert.pdf} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-block', padding: '10px 25px', background: `${cert.color}10`, border: `1px solid ${cert.color}30`, borderRadius: 30, color: cert.color, textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.target.style.background = cert.color; e.target.style.color = 'white' }}
                    onMouseLeave={(e) => { e.target.style.background = `${cert.color}10`; e.target.style.color = cert.color }}
                  >Ver certificado</a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      
      <section className="section-pad" style={{ padding: '100px 20px', background: theme.bg2, color: theme.text }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <span style={{ fontSize: '1rem', color: colors.primary, fontWeight: 500, letterSpacing: 2 }}>EDUCACIÓN</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginTop: 10, fontFamily: "'Space Grotesk', sans-serif" }}>
                Mi formación <span className="gradient-text">académica</span>
              </h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { title: 'Diseño y Desarrollo de Software', institution: 'TECSUP · Lima, Perú', period: '2025 — 2027', link: 'https://www.tecsup.edu.pe/', color: colors.primary, tags: ['Java', 'Python', 'C++', 'Bases de Datos', 'Redes', 'Desarrollo Web'] },
              { title: 'Ciberseguridad y Redes', institution: 'Cisco Networking Academy', period: 'Sep – Nov 2025', link: 'https://netacad.com', color: colors.secondary, tags: ['Ciberseguridad', 'Packet Tracer', 'Redes', 'Conciencia Digital'] }
            ].map((edu, index) => (
              <AnimatedSection key={edu.title} delay={index * 0.2} direction="up">
                <div
                  style={{ background: theme.card, borderRadius: 20, padding: 30, border: `1px solid ${theme.border}`, borderLeft: `4px solid ${edu.color}`, transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(10px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 15, marginBottom: 15 }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: 5 }}>{edu.title}</h3>
                      <a href={edu.link} target="_blank" rel="noopener noreferrer" style={{ color: edu.color, textDecoration: 'none', fontSize: '0.95rem' }}>{edu.institution} ↗</a>
                    </div>
                    <span style={{ padding: '5px 15px', background: `${edu.color}10`, border: `1px solid ${edu.color}30`, borderRadius: 20, color: edu.color, fontSize: '0.9rem' }}>{edu.period}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {edu.tags.map(tag => (
                      <span key={tag} style={{ padding: '5px 12px', background: theme.border, borderRadius: 20, fontSize: '0.85rem', color: theme.textMuted }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      
      <section id="contacto" className="section-pad" style={{ padding: '100px 20px', background: theme.bg, color: theme.text, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '80%', height: '80%', background: `radial-gradient(circle, ${colors.primary}10, transparent 70%)`, filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '1rem', color: colors.primary, fontWeight: 500, letterSpacing: 2 }}>CONTACTO</span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, marginTop: 20, marginBottom: 20, fontFamily: "'Space Grotesk', sans-serif" }}>
                ¿Trabajamos <span className="gradient-text">juntos?</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: theme.textMuted, lineHeight: 1.8, marginBottom: 40, maxWidth: 600, margin: '0 auto 40px' }}>
                Estoy lista para nuevos retos y oportunidades. Si buscas a alguien comprometida, creativa y con muchas ganas de crecer, ¡hablemos!
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 15, flexWrap: 'wrap', marginBottom: 40 }}>
                <a href="https://github.com/yoselin55" target="_blank" rel="noopener noreferrer"
                  style={{ padding: '15px 35px', background: colors.primary, color: 'white', textDecoration: 'none', borderRadius: 40, fontWeight: 600, fontSize: '1rem', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: 10 }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 10px 30px ${colors.primary}40`; setCursorVariant('hover') }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; setCursorVariant('default') }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  GitHub
                </a>

                <a href="https://www.linkedin.com/in/yoselin-fq-1545033a7/" target="_blank" rel="noopener noreferrer"
                  style={{ padding: '15px 35px', background: colors.secondary, color: 'white', textDecoration: 'none', borderRadius: 40, fontWeight: 600, fontSize: '1rem', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: 10 }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 10px 30px ${colors.secondary}40`; setCursorVariant('hover') }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; setCursorVariant('default') }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>

                <a href="https://www.instagram.com/yoss_ffq/" target="_blank" rel="noopener noreferrer"
                  style={{ padding: '15px 35px', background: colors.accent, color: 'white', textDecoration: 'none', borderRadius: 40, fontWeight: 600, fontSize: '1rem', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: 10 }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 10px 30px ${colors.accent}40`; setCursorVariant('hover') }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; setCursorVariant('default') }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  Instagram
                </a>
              </div>

              <div style={{ borderTop: `1px solid ${theme.border}`, paddingTop: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 15 }}>
                <span style={{ fontSize: '0.9rem', color: theme.textMuted }}>© 2025 Yoselin Flores. Todos los derechos reservados.</span>
                <span style={{ fontSize: '0.9rem', color: theme.textMuted, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Hecho con
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={colors.secondary} stroke="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  en Lima, Perú
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}