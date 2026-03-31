import { 
  Droplets, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  ExternalLink,
  Menu,
  X,
  Zap,
  ChevronRight,
  Database,
  Wifi,
  Layers,
  Activity,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom SVGs for Social Media to avoid import issues
const InstagramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-3 border-b border-purple-500/20' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 relative"> 

             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-lg blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative bg-black rounded-lg w-full h-full flex items-center justify-center border border-white/20">
               <img  src="/logo zyra.jpeg" alt="Logo"/> 
             </div>
          </div>
          <span className="text-white font-bold text-2xl tracking-tighter uppercase italic">Zyra <span className="text-cyan-400 font-light">Systems</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors uppercase">Tecnologia</a>
          <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors uppercase">Sobre</a>
          <a href="#app" className="text-gray-300 hover:text-cyan-400 transition-colors uppercase">App</a>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-all flex items-center gap-2">
            ACESSAR SISTEMA <ExternalLink size={16} />
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-purple-500/20 overflow-hidden"
          >
            <div className="flex flex-col gap-6 p-6">
              <a href="#features" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 uppercase font-bold">Tecnologia</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 uppercase font-bold">Sobre</a>
              <a href="#app" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 uppercase font-bold">App</a>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-4 rounded-xl font-bold uppercase">
                Acessar Sistema
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description, color }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm relative group overflow-hidden h-full"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-20 group-hover:opacity-60 transition-opacity bg-gradient-to-br ${color}`}></div>
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${color} text-white shadow-2xl relative z-10 group-hover:scale-110 transition-transform`}>
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-black text-white mb-4 tracking-tighter italic uppercase">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-medium">{description}</p>
    <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
      Saiba Mais <ChevronRight size={14} />
    </div>
  </motion.div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-cyan-500/30 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-600/5 blur-[120px] rounded-full -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-cyan-600/5 blur-[120px] rounded-full translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-black tracking-widest uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              SISTEMA DE IRRIGAÇÃO INTELIGENTE
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.85] tracking-tighter italic">
              ZYRA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400">
                SYSTEMS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed font-light">
              Tecnologia de ponta em sensores de solo e automação para maximizar sua produtividade agrícola com economia real.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="group relative px-10 py-5 bg-white text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors uppercase italic tracking-tighter">
                  Acessar Plataforma <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <div className="flex gap-4">
                <a href="#" className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors group">
                  <InstagramIcon size={24} className="group-hover:text-purple-400 transition-colors" />
                </a>
                <a href="#" className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors group">
                  <TikTokIcon size={24} className="group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
              <div>
                <div className="text-3xl font-black italic mb-1 text-cyan-400">40%</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Economia Hídrica</div>
              </div>
              <div>
                <div className="text-3xl font-black italic mb-1 text-purple-500">24/7</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Monitoramento</div>
              </div>
              <div>
                <div className="text-3xl font-black italic mb-1 text-green-400">+25%</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Produtividade</div>
              </div>
            </div>
          </motion.div>

          {/* Right Mascot - Floating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-20"
            >
              {/* Floating Mascot Visualization */}
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                {/* Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-purple-500/30 to-green-500/30 blur-[100px] rounded-full scale-75 animate-pulse"></div>
                
                {/* Mascot Frame */}
                <div className="relative h-full w-full rounded-[4rem] border border-white/20 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl p-8 flex flex-col items-center justify-center overflow-hidden group shadow-2xl">
                   {/* Circuit Lines Effect */}
                   <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
                      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                   </div>

                   {/* Central "Z" Logo / Mascot Symbol */}
                  <div className="relative mb-12 flex justify-center">
  <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 scale-150"></div>

  <img  
    src="/Zyro.jpeg"  
    alt="Mascote" 
    className="w-40 md:w-56 object-contain mx-auto group-hover:scale-110 transition-transform duration-500"
  />
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-bounce delay-150"></div>
                      </div>
                   </div>

                   <div className="text-center">
                     <div className="text-2xl font-black italic tracking-tighter uppercase mb-2">Mascote Zyro</div>
                     <div className="text-xs font-bold text-cyan-400 tracking-[0.3em] uppercase opacity-70">Sistema Inteligente Ativo</div>
                   </div>
                </div>

                {/* Satellite Elements */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-white/5 rounded-full -m-10 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black border border-white/20 rounded-xl flex items-center justify-center text-cyan-400 shadow-xl">
                    <Wifi size={20} />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-black border border-white/20 rounded-xl flex items-center justify-center text-purple-400 shadow-xl">
                    <Database size={20} />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Platform Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/50 blur-2xl rounded-full scale-x-150"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Tech Grid - Compact Version from B */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="text-center group">
            <div className="mb-4 flex justify-center"><Activity className="text-cyan-400 group-hover:scale-110 transition-transform" /></div>
            <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Análise Real</div>
          </div>
          <div className="text-center group">
            <div className="mb-4 flex justify-center"><Layers className="text-purple-500 group-hover:scale-110 transition-transform" /></div>
            <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Multicamadas</div>
          </div>
          <div className="text-center group">
            <div className="mb-4 flex justify-center"><Cpu className="text-green-400 group-hover:scale-110 transition-transform" /></div>
            <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Processamento</div>
          </div>
          <div className="text-center group">
            <div className="mb-4 flex justify-center"><ShieldCheck className="text-white group-hover:scale-110 transition-transform" /></div>
            <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Cloud Segura</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 italic tracking-tighter">O QUE NOS FAZ <br /><span className="text-cyan-400">DIFERENTES?</span></h2>
            <div className="h-1 w-20 bg-cyan-400"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Droplets}
              title="Precisão Radical"
              description="Nossos sensores proprietários capturam dados de umidade e nutrientes com precisão laboratorial no campo."
              color="from-cyan-500 to-blue-500"
            />
            <FeatureCard 
              icon={Cpu}
              title="Rede Mesh AI"
              description="Sensores que se comunicam entre si criando uma rede inteligente que otimiza o fluxo de água autonomamente."
              color="from-purple-500 to-fuchsia-500"
            />
            <FeatureCard 
              icon={BarChart3}
              title="Analytics Avançado"
              description="Dashboards que mostram o ROI em tempo real, economia de recursos e projeção de colheita."
              color="from-green-500 to-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* App & Control Section */}
      <section id="app" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-20 relative">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <div className="text-[12rem] font-black leading-none italic">APP</div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 italic">CONTROLE <br /><span className="text-purple-500">TOTAL.</span></h2>
                <p className="text-gray-400 text-lg mb-12 font-medium leading-relaxed">
                  Gerencie sua fazenda de qualquer lugar. Nosso ecossistema de sensores se conecta diretamente ao seu smartphone.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-12">
                   <div className="flex flex-col gap-2">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <ShieldCheck size={20} />
                      </div>
                      <span className="font-bold">Seguro</span>
                   </div>
                   <div className="flex flex-col gap-2">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                        <Zap size={20} />
                      </div>
                      <span className="font-bold">Rápido</span>
                   </div>
                </div>

                <button className="bg-white text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-cyan-400 transition-colors uppercase tracking-tighter">
                  Acessar Painel de Controle <ExternalLink size={20} />
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-[100px]"></div>
                {/* Visualizing the drop logo from user image */}
                <div className="relative z-10 w-full aspect-square max-w-[400px] mx-auto bg-black rounded-[3rem] border-4 border-white/10 p-8 flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="relative w-32 h-32 mx-auto mb-6">
                         <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-40 animate-pulse"></div>
                         <div className="relative w-full h-full bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
                            <Droplets size={64} fill="white" className="text-white" />
                         </div>
                      </div>
                      <h4 className="text-2xl font-black uppercase tracking-widest italic">Zyra <span className="text-cyan-400">Flow</span></h4>
                      <div className="mt-4 px-4 py-1 bg-white/10 rounded-full text-xs font-bold text-green-400 border border-green-400/20">SISTEMA ONLINE</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded flex items-center justify-center font-bold text-xl italic">Z</div>
                <span className="text-2xl font-black tracking-tighter uppercase italic">ZYRA</span>
              </div>
              <p className="text-gray-500 text-sm max-w-xs">
                Inovando o campo com inteligência artificial e sensores de alta precisão.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
               <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all border border-white/10">
                    <InstagramIcon size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all border border-white/10">
                    <TikTokIcon size={24} />
                  </a>
               </div>
               <div className="text-gray-600 text-xs font-bold uppercase tracking-widest">Social Media</div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="text-gray-400 text-sm font-bold">Dúvidas? <span className="text-white">suporte@zyra.com.br</span></div>
              <p className="text-gray-600 text-[10px] mt-4 font-mono">
                © 2024 ZYRA SYSTEMS INC.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;