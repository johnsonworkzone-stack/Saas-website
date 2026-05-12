import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  Layers, 
  ArrowRight, 
  Check, 
  ChevronRight,
  Menu,
  X,
  Database,
  Workflow,
  Sparkles
} from 'lucide-react';

// --- Navigation ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass-dark rounded-full px-6 py-2 flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-black/60 shadow-2xl shadow-violet-500/10' : ''}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-electric-violet flex items-center justify-center glow-violet">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">CORE</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Platforms', 'Solutions', 'Developers', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-medium text-white/70 hover:text-white">Log in</button>
            <button className="bg-electric-violet hover:bg-electric-violet-muted text-white text-sm font-semibold py-2 px-5 rounded-full transition-all hover:scale-105 active:scale-95 glow-violet">
              Get Started
            </button>
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-2xl tracking-tight">CORE</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white"><X className="w-8 h-8" /></button>
            </div>
            <div className="flex flex-col gap-6 ">
              {['Platforms', 'Solutions', 'Developers', 'Pricing'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-bold hover:text-electric-violet transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      {/* Background blobs */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-electric-violet/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-electric-violet animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">The Future of Enterprise Orchestration</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-[0.95]">
            <span className="text-gradient">Automate the</span><br />
            <span className="text-electric-violet">Infinite Layer.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 leading-relaxed">
            Unify your entire tech stack with our hyper-intelligent automation engine. 
            Scale operations, eliminate latency, and unlock latent data potential.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-black font-bold h-14 px-10 rounded-full flex items-center justify-center gap-2 hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5 cursor-pointer">
              Start Free Trial <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto glass h-14 px-10 rounded-full font-bold hover:bg-white/10 transition-all border-white/10 cursor-pointer">
              View Enterprise Demo
            </button>
          </div>
        </motion.div>

        {/* Hero Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="glass rounded-2xl p-2 border-white/5 shadow-2xl relative bg-black/20">
            <div className="bg-black/40 rounded-xl overflow-hidden aspect-video border border-white/5">
              <div className="w-full h-full p-4 md:p-8 flex flex-col gap-6">
                {/* Simulated UI components */}
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg border border-white/5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full" />
                    <div className="flex flex-col gap-1">
                      <div className="w-24 h-2 bg-white/20 rounded-full" />
                      <div className="w-16 h-2 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="w-20 h-8 bg-electric-violet/20 rounded-full border border-electric-violet/30" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                  <div className="glass-dark border-white/5 p-4 rounded-lg flex flex-col justify-end">
                    <div className="w-full h-24 bg-gradient-to-t from-electric-violet/20 to-transparent rounded-lg mb-4" />
                    <div className="w-full h-4 bg-white/5 rounded-full" />
                  </div>
                  <div className="md:col-span-2 glass-dark border-white/5 p-6 rounded-lg">
                    <div className="flex flex-col gap-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex gap-4 items-center">
                          <div className="w-6 h-6 rounded bg-white/10" />
                          <div className="w-full h-4 bg-white/5 rounded-full" />
                          <div className="w-12 h-4 bg-white/10 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Metric Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 hidden lg:block glass-dark p-6 rounded-2xl border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-electric-violet" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">Processing Velocity</span>
            </div>
            <div className="text-3xl font-display font-bold text-gradient">24.5 GB/s</div>
            <div className="mt-2 text-[10px] text-green-400 font-bold">↑ 12% FROM PEAK</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-10 -left-10 hidden lg:block glass-dark p-6 rounded-2xl border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">Global Node Health</span>
            </div>
            <div className="text-3xl font-display font-bold text-gradient">99.999%</div>
            <div className="mt-2 text-[10px] text-blue-400 font-bold">OPTIMIZED PERSISTENCE</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Features Bento Grid ---
const FeatureCard = ({ icon: Icon, title, description, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`glass p-8 rounded-3xl transition-all duration-500 hover:border-electric-violet/50 hover:bg-white/[0.07] group ${className}`}
  >
    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-electric-violet/20 transition-colors duration-500 text-white">
      <Icon className="w-6 h-6 group-hover:text-electric-violet transition-colors duration-500" />
    </div>
    <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
    <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
      {description}
    </p>
  </motion.div>
);

const BentoGrid = () => {
  return (
    <section id="platforms" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">The Core Paradigm.</h2>
            <p className="text-lg text-white/50">
              Stop stitching disparate tools. Start orchestrating a unified organism. 
              Our platform bridges the gap between infrastructure and execution.
            </p>
          </div>
          <button className="flex items-center gap-2 font-bold text-electric-violet group cursor-pointer">
            Explore All Capabilities <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <FeatureCard 
            icon={Database}
            title="Unified Data Core"
            description="Automatic normalization of heterogenous data streams from legacy and modern sources."
            className="md:col-span-3"
            delay={0.1}
          />
          <FeatureCard 
            icon={Cpu}
            title="Silicon Logic"
            description="Hardware-accelerated workflow execution for sub-millisecond response times."
            className="md:col-span-3"
            delay={0.2}
          />
          <FeatureCard 
            icon={Workflow}
            title="Visual Alchemy"
            description="Drag-and-drop complexity into elegant, self-healing automation paths."
            className="md:col-span-2"
            delay={0.3}
          />
          <FeatureCard 
            icon={Globe}
            title="Global Edge"
            description="Deploy your logic to 300+ Edge nodes for instantaneous global presence."
            className="md:col-span-2"
            delay={0.4}
          />
          <FeatureCard 
            icon={Shield}
            title="Iron-Clad Sec"
            description="Zero-trust architecture with end-to-end cryptographic verification."
            className="md:col-span-2"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

// --- Product Showcase (Tabs) ---
const Showcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { 
      label: 'Orchestration', 
      title: 'Design Infinite Workflows',
      description: 'Connect internal tools, customer data, and external APIs in a single visual canvas. If there’s an endpoint, there’s an automation.',
      stats: ['400+ Integrations', '10ms Latency', 'Auto-Scaling']
    },
    { 
      label: 'Hyper-Intelligence', 
      title: 'AI Driven Decisions',
      description: 'Deploy custom LLM agents that monitor your streams and take proactive actions based on real-time business context.',
      stats: ['Self-Learning', 'Anomaly Detect', 'Smart Routing']
    },
    { 
      label: 'Security Edge', 
      title: 'Fortress Infrastructure',
      description: 'Enterprise-grade isolation for every workload. Compliant with SOC2 Type II, GDPR, and HIPAA out of the box.',
      stats: ['TLS 1.3 Encryption', 'Audit Logging', 'Privileged Access']
    }
  ];

  return (
    <section id="solutions" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Built for Scale.</h2>
            <div className="flex flex-col gap-4 mb-12">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${activeTab === i ? 'bg-electric-violet/10 border-electric-violet/50 shadow-lg shadow-electric-violet/10' : 'border-white/5 hover:bg-white/5'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${activeTab === i ? 'text-electric-violet' : 'text-white/40'}`}>
                      {tab.label}
                    </span>
                    {activeTab === i && <Sparkles className="w-4 h-4 text-electric-violet" />}
                  </div>
                  <h3 className={`text-xl font-display font-bold ${activeTab === i ? 'text-white' : 'text-white/60'}`}>{tab.title}</h3>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass p-10 rounded-[3rem] border-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-electric-violet flex items-center justify-center mb-8 glow-violet text-white">
                   <Layers className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-6">{tabs[activeTab].title}</h3>
                <p className="text-lg text-white/50 mb-10 leading-relaxed">
                  {tabs[activeTab].description}
                </p>
                <div className="space-y-4">
                  {tabs[activeTab].stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-electric-violet/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-electric-violet" />
                      </div>
                      <span className="font-semibold text-white/80">{stat}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-12 w-full h-14 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all cursor-pointer">
                  Deep Dive Documentation <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Pricing ---
const PricingCard = ({ title, price, description, features, popular = false }) => (
  <div className={`glass p-8 rounded-3xl relative flex flex-col ${popular ? 'border-electric-violet/50 md:scale-105 shadow-2xl shadow-violet-500/10' : 'border-white/10'}`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric-violet text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full glow-violet">
        Most Recommended
      </div>
    )}
    <div className="mb-8">
      <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
      <p className="text-sm text-white/50">{description}</p>
    </div>
    <div className="mb-8">
      <span className="text-4xl font-display font-bold">${price}</span>
      <span className="text-white/40 font-medium tracking-wide">/node/mo</span>
    </div>
    <div className="space-y-4 mb-10 flex-1">
      {features.map((f, i) => (
        <div key={i} className="flex gap-3 items-start">
          <Check className="w-5 h-5 text-electric-violet shrink-0" />
          <span className="text-sm text-white/70">{f}</span>
        </div>
      ))}
    </div>
    <button className={`w-full py-4 rounded-2xl font-bold transition-all cursor-pointer ${popular ? 'bg-electric-violet text-white glow-violet hover:bg-electric-violet-muted' : 'glass hover:bg-white/10 border-white/10'}`}>
      Choose {title}
    </button>
  </div>
);

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16 text-white">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Scale as you Grow.</h2>
        <p className="text-white/50 mb-10">Predictable pricing for every stage of your evolution.</p>
        
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-bold ${!isYearly ? 'text-white' : 'text-white/40'}`}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-16 h-8 rounded-full glass border-white/20 relative p-1 cursor-pointer"
          >
            <motion.div 
              animate={{ x: isYearly ? 32 : 0 }}
              className="w-6 h-6 rounded-full bg-electric-violet glow-violet"
            />
          </button>
          <span className={`text-sm font-bold ${isYearly ? 'text-white' : 'text-white/40'}`}>Yearly <span className="text-electric-violet text-[10px] ml-1">SAVE 20%</span></span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard 
          title="Protocol"
          price={isYearly ? 49 : 59}
          description="Ideal for startups building their first core streams."
          features={['5 Active Core Workflows', '1,000 Operations / min', 'Standard Support', '50 Integrations']}
        />
        <PricingCard 
          title="Synthetics"
          price={isYearly ? 199 : 249}
          popular={true}
          description="Professional tier for growing enterprises."
          features={['Unlimited Workflows', '100k Operations / min', 'Priority Tech Support', 'All Marketplace Plugins', 'Single Sign-On (SSO)']}
        />
        <PricingCard 
          title="Universal"
          price="Custom"
          description="Global infrastructure for massive workloads."
          features={['Multi-Region Availability', 'Infinite Throughput', 'Custom SLA', 'Dedicated Engineer', 'On-premise Options']}
        />
      </div>
    </section>
  );
};

// --- Testimonials ---
const Testimonials = () => {
  const testimonials = [
    { name: 'Alex Riviera', role: 'CTO, OmniHealth', content: 'CORE literally saved us 40 hours a week in data reconciliation. It’s the closest thing to magic I’ve seen in enterprise software.' },
    { name: 'Sarah Chen', role: 'Lead Architect, FinEdge', content: 'The sub-10ms latency is not a marketing gimmick. Our real-time trading pipelines run flawlessly on their edge network.' },
    { name: 'Marcus Thorne', role: 'VPE, SolarScale', content: 'Visualizing complexity has never been easier. We moved from hardcoded scripts to CORE flows in just two weeks.' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-display font-bold mb-16 tracking-tight">Trusted by Industry Titans.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-electric-violet scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => <Sparkles key={s} className="w-4 h-4 text-electric-violet" />)}
              </div>
              <p className="text-lg text-white/80 mb-8 italic">"{t.content}"</p>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-white/40">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-white">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-electric-violet flex items-center justify-center glow-violet">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">CORE</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            The standard for modern enterprise orchestration.
            Building the neural network of the global economy.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/30">Platform</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-electric-violet transition-colors">Workflows</a></li>
            <li><a href="#" className="hover:text-electric-violet transition-colors">Database Core</a></li>
            <li><a href="#" className="hover:text-electric-violet transition-colors">Edge Runtime</a></li>
            <li><a href="#" className="hover:text-electric-violet transition-colors">AI Agents</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/30">Company</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-electric-violet transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-electric-violet transition-colors">Carbon Neutral</a></li>
            <li><a href="#" className="hover:text-electric-violet transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-electric-violet transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/30">Developer</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-electric-violet transition-colors">API Docs</a></li>
            <li><a href="#" className="hover:text-electric-violet transition-colors">Status</a></li>
            <li><a href="#" className="hover:text-electric-violet transition-colors">Open Source</a></li>
            <li><a href="#" className="hover:text-electric-violet transition-colors">Changelog</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
        <div className="text-white/30 text-[10px] uppercase tracking-widest">© 2024 CORE Automation Inc. All rights reserved.</div>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
          <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Signal</a>
          <a href="#" className="hover:text-white transition-colors">Security Manifesto</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-electric-violet/30 selection:text-electric-violet-muted text-white">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Showcase />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

