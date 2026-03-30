/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Menu,
  Star,
  Cpu,
  Globe,
  Rocket
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-pink rounded-xl flex items-center justify-center shadow-lg shadow-brand-purple/20">
            <Zap className="text-white fill-white" size={24} />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-white">Slay.io</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <button className="btn-primary py-2 px-6 text-sm">Get Started</button>
        </div>

        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-purple/20 blur-[120px] rounded-full -z-10 opacity-50" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-pink/10 blur-[100px] rounded-full -z-10 opacity-30" />

    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-bold text-brand-purple mb-6 border-brand-purple/20">
          🚀 THE AI COMMAND CENTER FOR DIGITAL LEADERS
        </span>
        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8 text-white">
          Stop Grinding. <br />
          <span className="text-gradient">Start Slaying.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          The AI-powered command center that automates your productivity, builds your personal brand, and scales your influence while you sleep.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-primary group">
            Start Slaying Now
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="btn-secondary text-white">
            Watch Demo
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 text-white">
          <Globe size={40} />
          <Cpu size={40} />
          <Rocket size={40} />
          <TrendingUp size={40} />
        </div>
      </motion.div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-20 border-y border-white/5 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-display font-bold text-gradient mb-2">50k+</div>
          <div className="text-white/40 text-sm uppercase tracking-widest font-bold">Active Slayers</div>
        </div>
        <div>
          <div className="text-4xl font-display font-bold text-gradient mb-2">1.2M</div>
          <div className="text-white/40 text-sm uppercase tracking-widest font-bold">Tasks Automated</div>
        </div>
        <div>
          <div className="text-4xl font-display font-bold text-gradient mb-2">4.9/5</div>
          <div className="text-white/40 text-sm uppercase tracking-widest font-bold">App Store Rating</div>
        </div>
        <div>
          <div className="text-4xl font-display font-bold text-gradient mb-2">98%</div>
          <div className="text-white/40 text-sm uppercase tracking-widest font-bold">Success Rate</div>
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-8">
        {[
          { name: "Alex Rivera", role: "Founder @ ScaleAI", text: "Slay.io literally gave me 20 hours of my week back. It's like having a chief of staff in my pocket." },
          { name: "Sarah Chen", role: "Digital Creator", text: "My personal brand exploded after using the AI Content Engine. I went from 5k to 50k followers in 3 months." },
          { name: "Marcus Thorne", role: "Growth Lead", text: "The most intuitive productivity tool I've ever used. It doesn't just track tasks; it solves them." }
        ].map((t, i) => (
          <div key={i} className="glass p-8 rounded-3xl relative overflow-hidden group">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-brand-purple text-brand-purple" />)}
            </div>
            <p className="text-white/80 mb-6 italic">"{t.text}"</p>
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

const ProblemSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 leading-tight text-white">
        The 9-5 is dead. <br />
        <span className="text-white/40">The creator economy is crowded.</span> <br />
        You're stuck in the middle.
      </h2>
      <div className="grid md:grid-cols-2 gap-6 text-left">
        {[
          "Information overload is killing your focus.",
          "Building a brand feels like a full-time job.",
          "You're working hard, but not moving the needle.",
          "AI is moving fast, and you're falling behind.",
          "Burnout is your constant companion."
        ].map((p, i) => (
          <div key={i} className="flex items-start gap-4 p-6 glass rounded-2xl">
            <X className="text-brand-pink shrink-0" size={24} />
            <p className="text-lg text-white/80">{p}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section id="features" className="py-24 px-6 bg-gradient-to-b from-transparent to-brand-purple/5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">Your AI-Powered <br /><span className="text-gradient">Unfair Advantage.</span></h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">Slay.io isn't just a tool. It's your digital twin that handles the noise so you can focus on the signal.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Zap />, title: "AI Content Engine", desc: "Generate high-performing content across all platforms in your unique voice." },
          { icon: <Target />, title: "Deep Work Mode", desc: "Smart blocking and focus timers that adapt to your biological peak hours." },
          { icon: <TrendingUp />, title: "Brand Analytics", desc: "Real-time insights into your digital footprint and growth opportunities." },
          { icon: <ShieldCheck />, title: "Goal Guard", desc: "AI accountability partner that nudges you when you drift off track." },
          { icon: <Users />, title: "Network Intelligence", desc: "Automatically identifies and helps you connect with high-value peers." },
          { icon: <Globe />, title: "Global Sync", desc: "Your entire digital life, synchronized and optimized across every device." }
        ].map((f, i) => (
          <div key={i} className="glass p-10 rounded-[2.5rem] hover:border-brand-purple/50 transition-all group">
            <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-white">{f.title}</h3>
            <p className="text-white/60 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Transformation = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto glass rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 blur-[100px] -z-10" />
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-display font-bold mb-8 text-white">Before Slay.io</h2>
          <ul className="space-y-6">
            {["Scattered focus & constant anxiety", "Invisible digital presence", "Manual, repetitive tasks", "Stagnant career growth"].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white/40">
                <X size={20} className="text-brand-pink" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-brand-purple/10 blur-3xl -z-10" />
          <h2 className="text-4xl font-display font-bold mb-8 text-gradient">After Slay.io</h2>
          <ul className="space-y-6">
            {["Laser focus & mental clarity", "Authority in your niche", "Automated workflows", "Exponential success"].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white">
                <CheckCircle2 size={20} className="text-brand-purple" />
                <span className="font-bold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">3 Steps to <span className="text-gradient">Total Dominance.</span></h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">We've simplified the path to digital success. No more guessing, just execution.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-purple/0 via-brand-purple/20 to-brand-purple/0 -z-10" />
        
        {[
          { step: "01", title: "Sync Your World", desc: "Connect your socials, calendar, and goals. Our AI builds your digital profile in seconds." },
          { step: "02", title: "Activate AI Twin", desc: "Your AI twin starts drafting content, managing focus, and identifying growth opportunities." },
          { step: "03", title: "Scale & Slay", desc: "Watch your influence grow while you focus on high-level strategy and living your life." }
        ].map((s, i) => (
          <div key={i} className="text-center group">
            <div className="w-20 h-20 bg-brand-black border-2 border-brand-purple/20 rounded-full flex items-center justify-center text-3xl font-display font-bold text-brand-purple mx-auto mb-8 group-hover:border-brand-purple group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500">
              {s.step}
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-white">{s.title}</h3>
            <p className="text-white/60 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-display font-bold mb-4 text-white">Simple, Transparent <span className="text-gradient">Pricing</span></h2>
        <p className="text-white/60">Choose the plan that fits your ambition.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Starter", price: "0", features: ["Basic AI Content", "Focus Timer", "Goal Tracking", "Community Access"], cta: "Start for Free" },
          { name: "Pro", price: "29", popular: true, features: ["Advanced AI Engine", "Brand Analytics", "Network Intelligence", "Priority Support", "Custom Workflows"], cta: "Go Pro Now" },
          { name: "Elite", price: "99", features: ["Personal AI Training", "1-on-1 Strategy", "White-label Branding", "Exclusive Events", "API Access"], cta: "Join the Elite" }
        ].map((p, i) => (
          <div key={i} className={cn(
            "glass p-10 rounded-[2.5rem] flex flex-col relative",
            p.popular && "border-brand-purple ring-2 ring-brand-purple/20 bg-brand-purple/5"
          )}>
            {p.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">Most Popular</div>}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-white">{p.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-display font-bold text-white">${p.price}</span>
                <span className="text-white/40">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={18} className="text-brand-purple" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className={cn(
              "w-full py-4 rounded-2xl font-bold transition-all",
              p.popular ? "bg-brand-purple text-white hover:bg-brand-purple/80" : "bg-white/10 text-white hover:bg-white/20"
            )}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: "Is Slay.io really powered by AI?", a: "Yes, we use a proprietary blend of LLMs and custom productivity models to provide personalized insights and automation." },
    { q: "Can I cancel my subscription anytime?", a: "Absolutely. No contracts, no hidden fees. Cancel with one click from your dashboard." },
    { q: "How does the AI Content Engine work?", a: "It analyzes your previous high-performing posts and your unique voice to draft content that sounds exactly like you, but better." },
    { q: "Is my data secure?", a: "We use bank-level encryption and never sell your data. Your privacy is our top priority." },
    { q: "Do you offer a student discount?", a: "Yes! Verify your .edu email and get 50% off the Pro plan for life." }
  ];

  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-display font-bold mb-12 text-center text-white">Frequently Asked <span className="text-brand-purple">Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors text-white"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }}>
                  <Menu size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-white/60"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GrowthFeatures = () => (
  <section className="py-24 px-6 bg-brand-purple/5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold mb-4 text-white">Built for <span className="text-gradient">Exponential Growth.</span></h2>
        <p className="text-white/60">Viral loops and gamification built directly into your workflow.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Viral Loop Engine", desc: "Automatically share your wins and invite peers to join your squad." },
          { title: "Referral Rewards", desc: "Earn Elite tier features by bringing other digital leaders to the platform." },
          { title: "Slay Streaks", desc: "Gamified productivity tracking that rewards consistency and deep work." },
          { title: "Leaderboards", desc: "Compete with the top 1% of digital creators and professionals." }
        ].map((g, i) => (
          <div key={i} className="glass p-6 rounded-2xl border-brand-purple/10">
            <h3 className="text-xl font-bold mb-2 text-white">{g.title}</h3>
            <p className="text-sm text-white/40">{g.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 px-6 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 to-transparent -z-10" />
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight text-white">
        Ready to <span className="text-gradient">Slay</span> Your Goals?
      </h2>
      <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">
        Join 50,000+ ambitious professionals who have already upgraded their digital life. Limited spots available for the Elite tier.
      </p>
      <button className="btn-primary scale-125 hover:scale-135">
        Get Started for Free
      </button>
      <p className="mt-8 text-sm text-white/40">No credit card required. 14-day free trial of Pro features.</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <Zap className="text-brand-purple" size={24} />
        <span className="text-xl font-display font-bold text-white">Slay.io</span>
      </div>
      <div className="flex gap-8 text-sm text-white/40">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">Discord</a>
      </div>
      <div className="text-sm text-white/20">
        © 2026 Slay.io. All rights reserved.
      </div>
    </div>
  </footer>
);

const ExitIntentModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="glass p-10 rounded-[3rem] max-w-lg w-full relative z-10 text-center"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white">
            <X size={24} />
          </button>
          <div className="w-20 h-20 bg-brand-purple/20 rounded-3xl flex items-center justify-center text-brand-purple mx-auto mb-8">
            <Star size={40} className="fill-brand-purple" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-4 text-white">Wait! Don't Leave Empty Handed.</h2>
          <p className="text-white/60 mb-8">Get our exclusive <span className="text-white font-bold">"2026 Digital Success Blueprint"</span> (Value $97) for free before you go.</p>
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Enter your best email" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-colors text-white"
            />
            <button className="btn-primary w-full">Send Me The Blueprint</button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

// --- Main App ---

export default function App() {
  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    // Simulate exit intent after 20 seconds or mouse leaving window
    const timer = setTimeout(() => setShowExitModal(true), 20000);
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setShowExitModal(true);
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-brand-purple/30 bg-brand-black">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Transformation />
      <Pricing />
      <GrowthFeatures />
      <FAQ />
      <FinalCTA />
      <Footer />

      {/* CRO Elements */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:block">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary shadow-2xl shadow-brand-purple/50"
        >
          Start Slaying
        </motion.button>
      </div>

      <ExitIntentModal isOpen={showExitModal} onClose={() => setShowExitModal(false)} />
    </div>
  );
}
