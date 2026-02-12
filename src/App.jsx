import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Instagram, 
  Menu, 
  X, 
  MessageCircle,
  Star,
  MapPin,
  Trees,
  Hammer,
  Clock
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const phoneNumber = "5491141671906"; 
  const waLink = `https://wa.me/${phoneNumber}?text=Hola%20Don%20Madero,%20vengo%20desde%20la%20web%20y%20quisiera%20consultar%20por%20un%20mueble.`;

  // Efecto para el scroll y el título de la página (SEO básico)
  useEffect(() => {
    document.title = "Don Madero | Showroom de Muebles de Autor";
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['Todos', 'Living', 'Comedor', 'Dormitorio'];

  const products = [
    {
      id: 1,
      name: "Rack 'General Paz'",
      category: "Living",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=800",
      description: "Madera maciza de 2 pulgadas, herrajes forjados."
    },
    {
      id: 2,
      name: "Mesa 'Estancia'",
      category: "Comedor",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1577146333359-b9f308007270?auto=format&fit=crop&q=80&w=800",
      description: "Tablones enteros de Lapacho con base en cruz."
    },
    {
      id: 3,
      name: "Mesita 'Boutique'",
      category: "Dormitorio",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=80&w=800",
      description: "Minimalismo rústico con cajón de ensamble artesanal."
    },
    {
      id: 4,
      name: "Vajillero 'Catedral'",
      category: "Comedor",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1505421852033-909240375971?auto=format&fit=crop&q=80&w=800",
      description: "Puertas con panel de madera recuperada."
    }
  ];

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] font-sans selection:bg-[#3a5a6a] selection:text-white">
      
      {/* Menú Móvil */}
      <div className={`fixed inset-0 z-[60] bg-[#050505] transition-transform duration-500 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-20">
            <span className="font-serif font-black text-2xl text-[#3a5a6a]">DM</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-[#3a5a6a]"><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-left text-4xl font-serif font-bold italic hover:text-[#3a5a6a] transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('colecciones')} className="text-left text-4xl font-serif font-bold italic hover:text-[#3a5a6a] transition-colors">Colecciones</button>
            <button onClick={() => scrollToSection('casas-de-legado')} className="text-left text-4xl font-serif font-bold italic hover:text-[#3a5a6a] transition-colors">Proyectos</button>
            <button onClick={() => scrollToSection('contacto')} className="text-left text-4xl font-serif font-bold italic hover:text-[#3a5a6a] transition-colors">Contacto</button>
          </div>
          <div className="mt-auto border-t border-white/10 pt-8">
            <p className="text-[#3a5a6a] text-xs font-black uppercase tracking-widest mb-4">Escribinos</p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-xl">+54 9 11 4167-1906</a>
          </div>
        </div>
      </div>

      {/* Navegación Principal */}
      <nav id="inicio" className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#050505]/95 backdrop-blur-md py-4 border-b border-[#3a5a6a]/20' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative w-12 h-12 flex items-center justify-center border-2 border-[#3a5a6a] bg-[#3a5a6a]/5">
              <span className="font-serif font-black text-xl text-[#3a5a6a]">DM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-bold tracking-tighter uppercase leading-none">DON MADERO</h1>
              <p className="text-[8px] tracking-[0.3em] uppercase text-[#3a5a6a] font-black mt-1">Legado en Madera</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <button onClick={() => scrollToSection('inicio')} className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-[#3a5a6a] transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('colecciones')} className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-[#3a5a6a] transition-colors">Colecciones</button>
            <button onClick={() => scrollToSection('casas-de-legado')} className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-[#3a5a6a] transition-colors">Proyectos</button>
            <button onClick={() => scrollToSection('contacto')} className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-[#3a5a6a] transition-colors">Contacto</button>
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-[#3a5a6a] px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all">Presupuestar</a>
          </div>
          
          <button className="lg:hidden text-[#3a5a6a]" onClick={() => setIsMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-50 scale-105 animate-pulse-slow" 
            alt="Fondo Madera Taller"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#3a5a6a]"></div>
              <h2 className="text-[#3a5a6a] text-xs uppercase tracking-[0.5em] font-black">Argentina • Desde el Corazón del Taller</h2>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-8 tracking-tighter italic">
              Donde el tiempo <br/> se hace <span className="text-[#3a5a6a] not-italic">Madera</span>.
            </h1>
            <p className="text-lg md:text-xl opacity-60 max-w-xl mb-10 leading-relaxed font-serif italic">
              No fabricamos muebles en serie. Forjamos piezas únicas con maderas recuperadas que cuentan una historia en cada veta.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('colecciones')} className="bg-[#3a5a6a] text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:gap-5 transition-all">
                Ver Catálogo <ArrowRight size={14} />
              </button>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="px-10 py-5 border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
                Hablar con el Taller
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-24 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-16">
          <div className="group text-center">
            <div className="w-16 h-16 border border-[#3a5a6a] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3a5a6a] transition-all duration-500">
              <Trees className="text-[#3a5a6a] group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xl font-serif font-bold mb-4 italic">Nobleza</h4>
            <p className="text-xs opacity-50 leading-relaxed uppercase tracking-tighter">Seleccionamos cada tablón de Lapacho y Quebracho por su historia y resistencia.</p>
          </div>
          <div className="group text-center">
            <div className="w-16 h-16 border border-[#3a5a6a] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3a5a6a] transition-all duration-500">
              <Hammer className="text-[#3a5a6a] group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xl font-serif font-bold mb-4 italic">Oficio</h4>
            <p className="text-xs opacity-50 leading-relaxed uppercase tracking-tighter">Ensambles tradicionales hechos para durar generaciones. Sin atajos mecánicos.</p>
          </div>
          <div className="group text-center">
            <div className="w-16 h-16 border border-[#3a5a6a] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3a5a6a] transition-all duration-500">
              <Clock className="text-[#3a5a6a] group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xl font-serif font-bold mb-4 italic">Tiempo</h4>
            <p className="text-xs opacity-50 leading-relaxed uppercase tracking-tighter">Respetamos el secado natural. La paciencia es nuestro principal insumo.</p>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="colecciones" className="py-32 px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-[#3a5a6a] text-[10px] font-black uppercase tracking-[0.5em] mb-4">Piezas Disponibles</h3>
            <h4 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter italic mb-12">Showroom Don Madero</h4>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] pb-2 border-b-2 transition-all ${activeCategory === cat ? 'border-[#3a5a6a] text-white' : 'border-transparent text-white/30 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="group flex flex-col">
                <div className="relative overflow-hidden aspect-[4/5] bg-[#111] mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <p className="text-white text-xs mb-4 italic font-serif">{product.description}</p>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-white text-black py-4 text-[10px] font-black uppercase text-center tracking-widest hover:bg-[#3a5a6a] hover:text-white transition-colors">
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] text-[#3a5a6a] font-black uppercase tracking-widest mb-1 block">{product.category}</span>
                    <h5 className="text-xl font-serif font-bold italic tracking-tight">{product.name}</h5>
                  </div>
                  <span className="text-[10px] font-black text-white/40">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-[#3a5a6a] text-white text-center px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl font-serif font-bold italic tracking-tighter mb-8">¿Buscás algo a medida?</h2>
          <p className="text-lg md:text-xl opacity-80 mb-12 font-serif">Trabajamos mano a mano con arquitectos y dueños de casa para crear piezas que se conviertan en el alma del ambiente.</p>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl"
          >
            <MessageCircle size={20} /> Hablar con el Carpintero
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="py-24 px-8 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="mb-12 text-center">
            <div className="w-16 h-16 border-2 border-[#3a5a6a] flex items-center justify-center font-serif font-black text-3xl mb-6 mx-auto text-[#3a5a6a]">DM</div>
            <h5 className="text-2xl font-serif font-bold tracking-tighter">DON MADERO</h5>
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#3a5a6a] font-black mt-2">Artesanía en Madera Maciza — Argentina</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-full border-y border-white/5 py-12 mb-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#3a5a6a] mb-4">Ubicación</p>
              <p className="text-sm opacity-50 uppercase tracking-widest flex items-center gap-2">
                <MapPin size={14} className="text-[#3a5a6a]" /> Buenos Aires, Argentina
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#3a5a6a] mb-4">Contacto Directo</p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-sm opacity-50 block hover:text-white transition-colors mb-1">+54 9 11 4167-1906</a>
              <p className="text-sm opacity-50">ventas@donmadero.com.ar</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#3a5a6a] mb-4">Redes</p>
              <div className="flex gap-4">
                <a href="#" className="opacity-50 hover:text-[#3a5a6a] transition-colors flex items-center gap-2 text-sm uppercase tracking-widest">
                  <Instagram size={18} /> Instagram
                </a>
              </div>
            </div>
          </div>
          
          <p className="text-[8px] uppercase tracking-[0.5em] opacity-20 text-center font-bold">
            © 2020 DON MADERO — HECHO A MANO — CALIDAD DE EXPORTACIÓN
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;