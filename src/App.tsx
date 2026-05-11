import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Recycle, 
  Settings, 
  Crown, 
  ArrowRight, 
  MousePointer2, 
  Hammer, 
  Trash2, 
  Wind, 
  Leaf, 
  Cpu,
  Menu,
  X,
  Instagram,
  Linkedin,
  Mail
} from 'lucide-react';

// Types
type Section = 'home' | 'proceso' | 'catalogo' | 'impacto';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [userName, setUserName] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      if (scrollY < 500) setActiveSection('inicio' as any);
      else if (scrollY < 1200) setActiveSection('sostenibilidad' as any);
      else if (scrollY < 2000) setActiveSection('productos' as any);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-tessa-bone selection:bg-tessa-bright selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 ${isScrolled ? 'bg-white opacity-100 shadow-xl py-3 border-b border-tessa-deep/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-xl shadow-lg">
              <span className="text-tessa-deep font-serif text-xl font-bold">T</span>
            </div>
            <span className={`text-2xl font-serif font-extrabold tracking-tighter ${isScrolled ? 'text-tessa-deep' : 'text-white'}`}>TESSA</span>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] ${isScrolled ? 'text-tessa-deep' : 'text-white'}`}>
            {['Inicio', 'Productos', 'Sostenibilidad', 'Nosotros', 'Contacto'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-all hover:text-tessa-bright relative pb-1 opacity-70 hover:opacity-100"
              >
                {item}
              </a>
            ))}
          </div>

          <button 
            className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-tessa-deep hover:bg-tessa-deep/5' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main>
        {/* Section: Hero */}
        <section id="inicio" className="relative h-screen flex items-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
              alt="Oficina Corporativa TESSA" 
              className="w-full h-screen object-cover scale-105"
            />
            <div className="absolute inset-0 bg-tessa-deep/40 backdrop-brightness-75"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <h1 className="text-6xl md:text-[7rem] font-black text-white leading-[0.9] mb-8 tracking-tighter">
                DEL RESIDUO A LA <br />
                <span className="text-stroke text-white opacity-80">RELIQUIA.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-xl mb-12 leading-relaxed font-light">
                Transformamos plástico reciclado en mobiliario corporativo premium con impacto ambiental positivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-tessa-bright text-white px-10 py-5 flex items-center justify-center space-x-3 rounded-2xl hover:bg-white hover:text-tessa-deep transition-all font-bold uppercase tracking-widest text-xs shadow-2xl shadow-tessa-bright/20 active:scale-95">
                  <span>Explorar colección</span>
                  <ArrowRight size={18} />
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl hover:bg-white hover:text-tessa-deep transition-all font-bold uppercase tracking-widest text-xs shadow-sm active:scale-95">
                  Conocer impacto
                </button>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/50">Scroll para explorar</span>
            <div className="w-px h-12 bg-gradient-to-b from-tessa-bright to-transparent"></div>
          </motion.div>
        </section>


        {/* Section: Beneficios */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-12 text-center">
              {[
                { label: 'Material Reciclado', icon: <Recycle size={32} /> },
                { label: 'Diseño Exclusivo', icon: <Crown size={32} /> },
                { label: 'Alta Durabilidad', icon: <Hammer size={32} /> },
                { label: 'Fácil Limpieza', icon: <Leaf size={32} /> },
                { label: 'Personalización', icon: <Settings size={32} /> },
                { label: 'Impacto Positivo', icon: <Cpu size={32} /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-6 flex flex-col items-center group"
                >
                  <div className="w-20 h-20 bg-tessa-bone rounded-full flex items-center justify-center text-tessa-deep group-hover:bg-tessa-bright group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-tessa-deep/60 leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Section: Sostenibilidad (Timeline) */}
        <section id="sostenibilidad" className="py-40 bg-tessa-deep text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-32">
              <span className="text-tessa-bright uppercase tracking-[0.6em] text-[10px] font-black mb-6 block">Ciclo Regenerativo</span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Proceso Sostenible</h2>
              <div className="w-24 h-1 bg-tessa-bright mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: "01", name: "Recolección", desc: "Plásticos PET y HDPE de fuentes certificadas.", icon: <Trash2 size={24} /> },
                { step: "02", name: "Clasificación", desc: "Separación por densidad y pureza cromática.", icon: <Cpu size={24} /> },
                { step: "03", name: "Trituración", desc: "Reducción mecánica a partículas milimétricas.", icon: <Wind size={24} /> },
                { step: "04", name: "Fusión", desc: "Transformación térmica sin emisiones tóxicas.", icon: <Hammer size={24} /> },
                { step: "05", name: "Fabricación", desc: "Mobiliario de lujo con diseño industrial.", icon: <Recycle size={24} /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group relative overflow-hidden active:scale-95"
                >
                  <div className="absolute -top-6 -right-6 text-white/5 font-black text-7xl group-hover:text-tessa-bright/10 transition-colors">{item.step}</div>
                  <div className="w-14 h-14 bg-tessa-bright text-white flex items-center justify-center rounded-2xl mb-8 shadow-lg shadow-tessa-bright/20">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{item.name}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Section: Productos (Featured Cards) */}
        <section id="productos" className="py-40 bg-tessa-bone">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8 text-tessa-deep">
              <div className="max-w-2xl">
                <span className="text-tessa-bright uppercase tracking-[0.4em] text-[10px] font-black block mb-6">Mobiliario de Lujo</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Diseño sin <br /><span className="text-tessa-bright italic">Compromisos.</span></h2>
              </div>
              <div className="flex bg-white/50 backdrop-blur-sm p-1 rounded-2xl border border-tessa-deep/5 shadow-inner">
                {['Todo', 'Corporativo', 'Home Office'].map((tab) => (
                  <button key={tab} className="text-[9px] uppercase font-bold tracking-[0.2em] px-8 py-3 rounded-xl transition-all hover:bg-white focus:bg-tessa-deep focus:text-white">
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-40">
              {[
                { 
                  title: 'Mesa de Reuniones ZENITH', 
                  material: 'Terrazo Regenerativo PET', 
                  benefits: 'Superficie anti-manchas, núcleo reforzado.',
                  img: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1000' 
                },
                { 
                  title: 'Recepciones VECTOR', 
                  material: 'Polímero HDPE Alta Densidad', 
                  benefits: 'Impacto visual masivo, diseño monolítico.',
                  img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000' 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="bg-white rounded-[3rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-700 group overflow-hidden border border-tessa-deep/5"
                >
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                    />
                    <div className="absolute bottom-6 left-6 flex space-x-2">
                       <div className="w-8 h-8 rounded-full bg-tessa-stone border-2 border-white shadow-lg"></div>
                       <div className="w-8 h-8 rounded-full bg-tessa-deep border-2 border-white shadow-lg"></div>
                       <div className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-lg"></div>
                    </div>
                  </div>
                  <div className="px-8 pb-8 flex justify-between items-end">
                    <div className="max-w-[70%]">
                      <span className="text-tessa-bright text-[10px] font-black uppercase tracking-widest mb-2 block">{item.material}</span>
                      <h4 className="text-2xl font-black text-tessa-deep mb-3 leading-tight uppercase">{item.title}</h4>
                      <p className="text-tessa-deep/50 text-sm italic">{item.benefits}</p>
                    </div>
                    <button className="w-16 h-16 bg-tessa-deep text-white rounded-2xl flex items-center justify-center hover:bg-tessa-bright transition-colors active:scale-90">
                      <ArrowRight size={24} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id=" impact" className="py-40 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-tessa-bright uppercase tracking-[0.4em] text-[10px] font-black block mb-6">Métrica de Impacto</span>
                <h2 className="text-5xl md:text-7xl font-black text-tessa-deep tracking-tighter leading-none mb-12">Cuantificamos <br /> tu <span className="text-tessa-bright italic">Legado.</span></h2>
                
                <div className="grid sm:grid-cols-2 gap-12">
                  {[
                    { val: '15kg', label: 'Plástico Recuperado', desc: 'Por cada mesa de reuniones fabricada.' },
                     { val: '25kg', label: 'Fibras Textiles', desc: 'Rescatadas de vertederos industriales.' },
                    { val: '80%', label: 'Ahorro H2O', desc: 'En procesos de fusión circular.' },
                    { val: '100%', label: 'Carbono Neutro', desc: 'Planta de producción regenerativa.' }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-4">
                      <div className="text-5xl font-black text-tessa-deep tracking-tighter">{stat.val}</div>
                      <div>
                        <p className="text-xs font-black uppercase text-tessa-bright tracking-widest mb-1">{stat.label}</p>
                        <p className="text-tessa-deep/40 text-xs leading-relaxed">{stat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-tessa-bone rounded-[3rem] p-12 border border-tessa-deep/5 relative z-10">
                   <div className="flex justify-between items-center mb-12">
                      <div className="flex items-center space-x-3">
                         <div className="w-10 h-10 bg-tessa-deep rounded-xl flex items-center justify-center text-white">
                            <span className="font-serif font-black">T</span>
                         </div>
                         <span className="text-xs font-black uppercase tracking-widest text-tessa-deep">Certificado TESSA</span>
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-tessa-stone flex items-center justify-center">
                         <Crown size={20} className="text-tessa-stone" />
                      </div>
                   </div>
                   
                   <div className="space-y-8">
                      <h3 className="text-2xl font-black text-tessa-deep leading-tight">Validador de Impacto <br /> para tu Empresa</h3>
                      <div className="space-y-4">
                         <input 
                            type="text" 
                            placeholder="Nombre de tu corporación"
                            className="w-full bg-white border border-tessa-deep/10 p-6 rounded-2xl outline-none focus:border-tessa-bright transition-all"
                         />
                         <button className="w-full bg-tessa-deep text-white py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-tessa-bright transition-all shadow-xl shadow-tessa-deep/20">
                            Generar Reporte Digital
                         </button>
                      </div>
                   </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-tessa-bone/50 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Galería Pinterest Style */}
        <section className="py-40 bg-tessa-bone">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-tessa-deep tracking-tighter">Inspiración Corporativa</h2>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {[
                { img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000', size: 'aspect-square' },
                { img: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1000', size: 'aspect-[3/4]' },
                { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000', size: 'aspect-video' },
                { img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000', size: 'aspect-[4/5]' },
                { img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000', size: 'aspect-square' },
                { img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000', size: 'aspect-[3/2]' }
              ].map((item, i) => (
                <div key={i} className={`relative overflow-hidden rounded-[2rem] group cursor-none`}>
                   <img 
                      src={item.img} 
                      alt={`Gallery ${i}`} 
                      className={`w-full ${item.size} object-cover transition-transform duration-[1.5s] group-hover:scale-110`}
                   />
                   <div className="absolute inset-0 bg-tessa-deep/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-tessa-deep shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                         <MousePointer2 size={32} />
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Stats Section */}
        <section className="py-24 bg-tessa-deep">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: "Plástico Reciclado", value: "480T", prefix: "+" },
                { label: "Muebles Fabricados", value: "12K", prefix: "" },
                { label: "Países Alcanzados", value: "14", prefix: "" },
                { label: "Reducción Emisiones", value: "65", prefix: "%" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-5xl font-black text-tessa-bone tracking-tighter">{stat.prefix}{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-tessa-deep text-white py-32 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-32">
            <div className="space-y-12 max-w-sm">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white flex items-center justify-center rounded-2xl shadow-2xl">
                  <span className="text-tessa-deep font-serif text-3xl font-black">T</span>
                </div>
                <span className="text-4xl font-serif font-black tracking-tighter">TESSA</span>
              </div>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                Diseñamos hoy el legado del mañana. Mobiliario premium con impacto ambiental positivo.
              </p>
              <div className="flex space-x-6">
                {[Linkedin, Instagram, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-tessa-bright transition-all group active:scale-90">
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-20 flex-1">
              <div className="space-y-10">
                <h6 className="uppercase tracking-[0.4em] text-[10px] font-black text-tessa-bright">Colecciones</h6>
                <ul className="space-y-5 text-white/60 text-sm font-medium">
                  {['Office Prime', 'Executive Series', 'Lounge & Reception', 'Custom Projects'].map(item => (
                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div className="space-y-10">
                <h6 className="uppercase tracking-[0.4em] text-[10px] font-black text-tessa-bright">Empresa</h6>
                <ul className="space-y-5 text-white/60 text-sm font-medium">
                  {['Nosotros', 'Sostenibilidad', 'Certificaciones', 'Impacto'].map(item => (
                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div className="space-y-10">
                <h6 className="uppercase tracking-[0.4em] text-[10px] font-black text-tessa-bright">Contacto</h6>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  San Pedro Sula, Honduras <br />
                  hello@tessa.design <br />
                  +504 2200-XX00
                </p>
              </div>
            </div>
          </div>

          <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase font-bold tracking-[0.4em] text-white/20">
            <p>TESSA · DISEñAMOS HOY EL LEGADO DEL MAñANA</p>
            <p>© 2024 TESSA DESIGN. TODOS LOS DERECHOS RESERVADOS.</p>
          </div>
        </div>
        
        {/* Decorative background text */}
        <div className="absolute -bottom-20 -left-20 text-[25rem] font-serif font-black text-white/5 leading-none pointer-events-none select-none">
          TESSA
        </div>
      </footer>

    </div>
  );
}
