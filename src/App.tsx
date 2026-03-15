/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Heart, 
  Trophy, 
  Users, 
  ChevronRight, 
  CheckCircle2, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const GOOGLE_SHEET_WEBHOOK_URL =
  import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL?.trim() ?? '';
const GOOGLE_SHEET_IFRAME_NAME = 'solisport-google-sheet-target';

type LeadPayload = {
  email: string;
  uses_second_hand_platform: 'yes' | 'no';
  source: string;
  submitted_at: string;
  interest_goal: string;
};

async function submitLeadToGoogleSheet(payload: LeadPayload) {
  if (!GOOGLE_SHEET_WEBHOOK_URL) {
    throw new Error('Google Sheet webhook URL is missing.');
  }

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = GOOGLE_SHEET_WEBHOOK_URL;
  form.target = GOOGLE_SHEET_IFRAME_NAME;
  form.style.display = 'none';

  Object.entries(payload).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);

  await new Promise((resolve) => window.setTimeout(resolve, 400));
}

export default function App() {
  const [email, setEmail] = useState('');
  const [isSeller, setIsSeller] = useState<boolean | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSeller === null) return;

    setStatus('loading');
    setErrorMessage('');
    try {
      await submitLeadToGoogleSheet({
        email: email.trim(),
        uses_second_hand_platform: isSeller ? 'yes' : 'no',
        source: 'solisport-landing-page',
        submitted_at: new Date().toISOString(),
        interest_goal:
          'Confirmer linteret des vendeurs de seconde main pour la proposition de valeur Solisport',
      });
      setStatus('success');
      setEmail('');
      setIsSeller(null);
    } catch (error) {
      console.error('Error saving lead:', error);
      setStatus('error');
      setErrorMessage(
        GOOGLE_SHEET_WEBHOOK_URL
          ? 'Une erreur est survenue. Veuillez reessayer.'
          : 'La collecte Google Sheets nest pas encore configuree.'
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#FF6B35] selection:text-white">
      <iframe
        title="Google Sheet lead submission"
        name={GOOGLE_SHEET_IFRAME_NAME}
        className="hidden"
      />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
            <span className="text-xl font-bold tracking-tight">Solisport</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60">
            <a href="#concept" className="hover:text-[#FF6B35] transition-colors">Concept</a>
            <a href="#arguments" className="hover:text-[#FF6B35] transition-colors">Avantages</a>
            <a href="#mission" className="hover:text-[#FF6B35] transition-colors">Notre Mission</a>
          </div>
          <a 
            href="#join" 
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#FF6B35] transition-all duration-300 shadow-lg shadow-black/5"
          >
            Rejoindre
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-bold uppercase tracking-wider mb-6">
              <Trophy size={14} />
              Le sport de haut niveau a besoin de vous
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-[0.95] tracking-tighter mb-8">
              Vendez mieux. <br />
              <span className="text-[#FF6B35]">Soutenez plus.</span>
            </h1>
            <p className="text-xl text-black/60 max-w-lg mb-10 leading-relaxed">
              Solisport aide les vendeurs de seconde main à maximiser leurs revenus pour financer les rêves des sportifs de haut niveau peu médiatisés.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="sellerStatus" 
                    checked={isSeller === true}
                    onChange={() => setIsSeller(true)}
                    className="mt-1 w-5 h-5 accent-[#FF6B35]"
                  />
                  <span className="text-sm text-black/70 group-hover:text-black transition-colors">
                    Je suis vendeur de seconde main sur une plateforme comme Vinted, Le Bon Coin....
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="sellerStatus" 
                    checked={isSeller === false}
                    onChange={() => setIsSeller(false)}
                    className="mt-1 w-5 h-5 accent-[#FF6B35]"
                  />
                  <span className="text-sm text-black/70 group-hover:text-black transition-colors">
                    Je ne suis pas vendeur de seconde main sur une plateforme comme Vinted, Le Bon Coin...
                  </span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30" size={18} />
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-black/10 focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 outline-none transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={status === 'loading' || isSeller === null}
                  className="bg-[#FF6B35] text-white px-8 py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-xl shadow-[#FF6B35]/20 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? 'Envoi...' : 'Rejoindre la liste'}
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
            
            <AnimatePresence>
              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-emerald-600 font-medium flex items-center gap-2"
                >
                  <CheckCircle2 size={18} /> L'equipe de Solisport vous remercie. Nous avons bien recu votre email :)
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-red-500 font-medium"
                >
                  {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl rotate-3 bg-gradient-to-br from-[#FF6B35] to-[#FF8E64] p-1">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000" 
                alt="Sport performance" 
                className="w-full h-full object-cover rounded-[38px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-black/5 max-w-sm -rotate-3">
              <p className="text-base text-black/70 italic leading-relaxed">
                "Grâce à Solisport, j'ai pu financer mon prochain stage de préparation de haut niveau en équipe de France."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Arguments Section */}
      <section id="arguments" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Pourquoi choisir Solisport ?</h2>
            <p className="text-lg text-black/50">Et si chaque vente de seconde main pouvait aider un sportif de haut niveau ?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-[#FF6B35]" size={32} />,
                title: "Garantir l'état de l'objet",
                desc: "Fini les mauvaises surprises. Notre option 'Tiers de Confiance' vérifie l'état réel de chaque objet avant l'envoi."
              },
              {
                icon: <TrendingUp className="text-[#FF6B35]" size={32} />,
                title: "Gagnez plus d'argent",
                desc: "Nous vous mettons en relation avec des particuliers qui n'ont pas le temps de vendre. Devenez leur vendeur expert."
              },
              {
                icon: <Zap className="text-[#FF6B35]" size={32} />,
                title: "Vendre efficacement",
                desc: "Apprenez des meilleurs. Nos vendeurs expérimentés accompagnent les novices pour booster leurs performances sur Vinted."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[32px] bg-[#FDFCFB] border border-black/5 hover:shadow-xl transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-black/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-[#FF6B35] to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                Le sport de haut niveau <br />
                <span className="text-[#FF6B35]">mérite d'être soutenu.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Users className="text-[#FF6B35]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Peu de médiatisation</h4>
                    <p className="text-white/50">La majorité des athlètes n'attirent pas assez de sponsors malgré leurs exploits.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Heart className="text-[#FF6B35]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Ils nous font vibrer</h4>
                    <p className="text-white/50">Sans eux, pas d'exploits. Ils méritent un soutien financier pour leurs déplacements et matériel.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="text-[#FF6B35]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Points Solisport</h4>
                    <p className="text-white/50">Chaque don est valorisé en points valables chez nos partenaires (Fnac, billetterie, etc.).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[40px] border border-white/10">
              <div className="text-center mb-10">
                <div className="text-[#FF6B35] font-bold text-sm uppercase tracking-widest mb-2">Exemple concret</div>
                <div className="text-4xl font-bold">10€ de don = 20 pts</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-white/60">Points Vendeur</span>
                  <span className="font-bold text-[#FF6B35]">+10 pts</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-white/60">Points Acheteur</span>
                  <span className="font-bold text-[#FF6B35]">+10 pts</span>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-white/40">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Valable sur la billetterie Fnac</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Athletes */}
      <section className="py-32 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Ils nous font confiance</h2>
              <p className="text-black/50">Découvrez les athlètes qui portent les valeurs de Solisport au quotidien.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Yannick Matejicek",
                sport: "Triathlete",
                eyebrow: "Video portrait",
                embedSrc: "https://www.canva.com/design/DAG-tcOM1yg/hjXuXImqnimGwBd-LuB-TQ/watch?embed",
                watchHref:
                  "https://www.canva.com/design/DAG-tcOM1yg/hjXuXImqnimGwBd-LuB-TQ/watch?utm_content=DAG-tcOM1yg&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
              },
              {
                name: "Jade Marechal",
                sport: "Escrimeuse - Equipe de France",
                eyebrow: "Video portrait",
                embedSrc: "https://www.canva.com/design/DAG-soE0I-Y/DFPEX5LDrndSo8lMAgcoog/watch?embed",
                watchHref:
                  "https://www.canva.com/design/DAG-soE0I-Y/DFPEX5LDrndSo8lMAgcoog/watch?utm_content=DAG-soE0I-Y&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
              },
              {
                name: "Alice Recher",
                sport: "Escrimeuse - Equipe de France",
                eyebrow: "Video portrait",
                embedSrc: "https://www.canva.com/design/DAG_vKUvtm0/UEjBzcxDpVsYweQO2sMpQg/watch?embed",
                watchHref:
                  "https://www.canva.com/design/DAG_vKUvtm0/UEjBzcxDpVsYweQO2sMpQg/watch?utm_content=DAG_vKUvtm0&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
              }
            ].map((athlete) => (
              <div
                key={athlete.name}
                className="rounded-[32px] overflow-hidden shadow-xl bg-white border border-black/5"
              >
                <div className="bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#FF6B35] p-5 text-white">
                  <div className="text-white/60 text-xs font-bold uppercase tracking-[0.25em] mb-2">
                    {athlete.eyebrow}
                  </div>
                  <div className="text-2xl font-bold mb-1">{athlete.name}</div>
                  <div className="text-white/70 text-sm">{athlete.sport}</div>
                </div>

                <div className="p-4">
                  <div className="relative w-full pt-[56.25%] overflow-hidden bg-black rounded-[24px] shadow-lg">
                    <iframe
                      loading="lazy"
                      className="absolute inset-0 h-full w-full border-0"
                      src={athlete.embedSrc}
                      allowFullScreen
                      allow="fullscreen"
                      title={`${athlete.name} - video Canva`}
                    />
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <p className="text-black/55 text-sm leading-relaxed mb-4">
                    Decouvrez son parcours et l'energie qui porte Solisport sur le terrain.
                  </p>
                  <a
                    href={athlete.watchHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B35] hover:text-black transition-colors"
                  >
                    Voir la video complete
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#FF6B35] rounded-[48px] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl shadow-[#FF6B35]/30">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[100px]" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Prêt à changer la donne ?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Rejoignez la communauté Solisport et transformez vos ventes de seconde main en victoires sportives.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
              <div className="space-y-3 text-left bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="sellerStatusFooter" 
                    checked={isSeller === true}
                    onChange={() => setIsSeller(true)}
                    className="mt-1 w-5 h-5 accent-white"
                  />
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                    Je suis vendeur de seconde main sur une plateforme comme Vinted, Le Bon Coin....
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="sellerStatusFooter" 
                    checked={isSeller === false}
                    onChange={() => setIsSeller(false)}
                    className="mt-1 w-5 h-5 accent-white"
                  />
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                    Je ne suis pas vendeur de seconde main sur une plateforme comme Vinted, Le Bon Coin...
                  </span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-8 py-5 rounded-2xl bg-white text-black outline-none focus:ring-4 focus:ring-white/20 transition-all"
                />
                <button 
                  type="submit"
                  disabled={status === 'loading' || isSeller === null}
                  className="bg-black text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-black transition-all disabled:opacity-50"
                >
                  C'est parti
                </button>
              </div>
            </form>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-white font-medium flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={18} /> L'equipe de Solisport vous remercie. Nous avons bien recu votre email :)
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-white font-medium"
                >
                  {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
            <span className="text-lg font-bold tracking-tight">Solisport</span>
          </div>
          <div className="text-sm text-black/40">
            © 2026 Solisport. Tous droits réservés.
          </div>
          <div className="flex gap-6 text-sm font-medium text-black/60">
            <a href="#" className="hover:text-[#FF6B35]">Mentions légales</a>
            <a href="#" className="hover:text-[#FF6B35]">Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
