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
import solisportLogo from './assets/solisport-logo.png';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function SolisportLogo({ className }: { className?: string }) {
  return (
    <img
      src={solisportLogo}
      alt="Logo Solisport"
      className={cn("shrink-0 object-contain", className)}
    />
  );
}

function SiteHeader({ isLegalPage = false }: { isLegalPage?: boolean }) {
  const prefix = isLegalPage ? '/' : '';
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <SolisportLogo className="w-12 h-12" />
          <span className="text-xl font-bold tracking-tight">Solisport</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60">
          <a href={`${prefix}#concept`} className="hover:text-[#FF6B35] transition-colors">Concept</a>
          <a href={`${prefix}#arguments`} className="hover:text-[#FF6B35] transition-colors">Avantages</a>
          <a href={`${prefix}#mission`} className="hover:text-[#FF6B35] transition-colors">Notre Mission</a>
          <a href={`${prefix}#athletes`} className="hover:text-[#FF6B35] transition-colors">Sportifs haut niveau</a>
        </div>
        <a
          href={isLegalPage ? '/#join' : '#join'}
          className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#FF6B35] transition-all duration-300 shadow-lg shadow-black/5"
        >
          Rejoindre
        </a>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="py-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <a href="/" className="flex items-center gap-3">
          <SolisportLogo className="w-10 h-10" />
          <span className="text-lg font-bold tracking-tight">Solisport</span>
        </a>
        <div className="text-sm text-black/40">
          © 2026 Solisport. Tous droits réservés.
        </div>
        <div className="flex gap-6 text-sm font-medium text-black/60">
          <a href="/mentions-legales" className="hover:text-[#FF6B35]">Mentions légales</a>
          <a href="/confidentialite" className="hover:text-[#FF6B35]">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

function LegalPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#FF6B35] selection:text-white">
      <SiteHeader isLegalPage />
      <main className="pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Informations légales
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Mentions légales</h1>
            <p className="text-lg text-black/55 leading-relaxed max-w-2xl">
              Retrouvez ici les informations relatives à l’éditeur du site, à l’hébergement, au nom de domaine
              et aux règles applicables au contenu publié sur Solisport.
            </p>
          </div>

          <div className="space-y-10">
            {[
              {
                title: 'Éditeur du site',
                content: [
                  'Le présent site est édité par Loïc Métivier, porteur du projet Solisport.',
                  'Statut : projet en cours de création, non encore constitué en société immatriculée.',
                  'Adresse : 5 rue de la Vendée, 85120 Saint-Hilaire de Voust',
                  'Email : lometivier@gmail.com',
                  'Téléphone : 0613524886',
                ],
              },
              {
                title: 'Directeur de la publication',
                content: ['Loïc Métivier'],
              },
              {
                title: 'Hébergement',
                content: [
                  'Le site est hébergé par :',
                  'Vercel Inc.',
                  '440 N Barranca Ave #4133',
                  'Covina, CA 91723',
                  'United States',
                  'Téléphone : +1 559 288 7060',
                  'Site web : https://vercel.com',
                ],
              },
              {
                title: 'Nom de domaine',
                content: [
                  'Le nom de domaine est enregistré via :',
                  'HOSTINGER operations, UAB',
                  'Švitrigailos str. 34',
                  'Vilnius 03230',
                  'Lithuania',
                  'Téléphone : +370 645 03378',
                  'Site web : https://www.hostinger.com',
                ],
              },
              {
                title: 'Propriété intellectuelle',
                content: [
                  'L’ensemble des éléments présents sur ce site, notamment les textes, visuels, logos, illustrations, graphismes, icônes, vidéos, structure et mise en page, sauf mention contraire, est protégé par le droit de la propriété intellectuelle.',
                  'Toute reproduction, représentation, diffusion, adaptation, modification ou exploitation, totale ou partielle, de tout ou partie du site, par quelque procédé que ce soit, sans autorisation écrite préalable, est interdite.',
                ],
              },
              {
                title: 'Responsabilité',
                content: [
                  'L’éditeur s’efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour des informations, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.',
                ],
              },
              {
                title: 'Liens hypertextes',
                content: [
                  'Le site peut contenir des liens vers d’autres sites. L’éditeur ne peut être tenu responsable du contenu, du fonctionnement ou des pratiques de ces sites tiers.',
                ],
              },
              {
                title: 'Contact',
                content: [
                  'Pour toute question concernant le site ou son contenu, vous pouvez écrire à : lometivier@gmail.com',
                ],
              },
            ].map((section) => (
              <section
                key={section.title}
                className="rounded-[32px] bg-white border border-black/5 shadow-sm p-8 md:p-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-5">{section.title}</h2>
                <div className="space-y-3 text-black/65 leading-relaxed">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#FF6B35] selection:text-white">
      <SiteHeader isLegalPage />
      <main className="pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Données personnelles
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Politique de confidentialité</h1>
            <p className="text-lg text-black/55 leading-relaxed max-w-2xl">
              Cette page explique quelles données peuvent être collectées sur Solisport, pourquoi elles le
              sont, combien de temps elles sont conservées et comment exercer vos droits.
            </p>
          </div>

          <div className="space-y-10">
            {[
              {
                title: '1. Qui traite vos données ?',
                content: [
                  'Les données personnelles collectées sur le site Solisport sont traitées par :',
                  'Loïc Métivier',
                  'Porteur du projet Solisport',
                  'Adresse : 5 rue de la Vendée, 85120 Saint-Hilaire de Voust',
                  'Email : lometivier@gmail.com',
                  'Téléphone : 0613524886',
                  'Le responsable du traitement est Loïc Métivier, en sa qualité d’éditeur du site et porteur du projet.',
                ],
              },
              {
                title: '2. Quelles données sont collectées ?',
                content: [
                  'Selon votre utilisation du site, Solisport peut collecter les données suivantes :',
                  'votre adresse email ;',
                  'votre profil déclaré via le formulaire, par exemple : vendeur de seconde main / non vendeur ;',
                  'toute information transmise volontairement via un formulaire ou un échange ;',
                  'les données techniques strictement nécessaires au fonctionnement du site.',
                ],
              },
              {
                title: '3. Pourquoi vos données sont-elles collectées ?',
                content: [
                  'Vos données sont collectées pour les finalités suivantes :',
                  'gérer les inscriptions à la liste d’attente du projet Solisport ;',
                  'vous recontacter au sujet du lancement du projet ;',
                  'vous adresser des informations liées à l’évolution de Solisport, si vous y avez consenti ;',
                  'répondre à vos demandes ;',
                  'assurer la sécurité et le bon fonctionnement du site.',
                ],
              },
              {
                title: '4. Quelle est la base légale du traitement ?',
                content: [
                  'Le traitement de vos données repose :',
                  'sur votre consentement, lorsque vous remplissez un formulaire pour rejoindre la liste d’attente ou recevoir des informations ;',
                  'sur l’intérêt légitime de l’éditeur, lorsque cela est nécessaire pour assurer la sécurité du site, prévenir les abus ou répondre à une demande spontanée.',
                ],
              },
              {
                title: '5. Le caractère obligatoire ou facultatif des données',
                content: [
                  'Les champs identifiés comme obligatoires dans les formulaires sont nécessaires pour traiter votre demande.',
                  'Si vous ne renseignez pas ces champs, Solisport pourrait ne pas être en mesure de vous recontacter ou de traiter correctement votre inscription.',
                ],
              },
              {
                title: '6. Qui peut accéder à vos données ?',
                content: [
                  'Les données collectées sont destinées uniquement :',
                  'à Loïc Métivier, porteur du projet Solisport ;',
                  'aux prestataires techniques strictement nécessaires au fonctionnement du site, de l’hébergement ou de l’outil de collecte d’emails ;',
                  'le cas échéant, aux outils de gestion de la relation email et d’analyse d’audience utilisés par le site.',
                  'Les données ne sont ni vendues ni cédées à des tiers à des fins commerciales sans votre accord.',
                ],
              },
              {
                title: '7. Combien de temps vos données sont-elles conservées ?',
                content: [
                  'Les données collectées via le formulaire sont conservées pendant une durée n’excédant pas celle nécessaire aux finalités pour lesquelles elles sont traitées.',
                  'En pratique :',
                  'les données liées aux demandes de contact peuvent être conservées jusqu’à 2 ans après le dernier contact ;',
                  'les données de prospects ou de personnes inscrites pour être recontactées peuvent être conservées jusqu’à 3 ans à compter de la collecte ou du dernier contact émanant de la personne. Cette durée est cohérente avec les recommandations de la CNIL en matière de prospection.',
                ],
              },
              {
                title: '8. Vos droits',
                content: [
                  'Conformément à la réglementation applicable, vous disposez des droits suivants :',
                  'droit d’accès à vos données ;',
                  'droit de rectification ;',
                  'droit à l’effacement ;',
                  'droit à la limitation du traitement ;',
                  'droit d’opposition, lorsque ce droit est applicable ;',
                  'droit à la portabilité, lorsque ce droit est applicable ;',
                  'droit de retirer votre consentement à tout moment lorsque le traitement repose sur ce consentement.',
                  'Vous pouvez exercer vos droits en écrivant à : lometivier@gmail.com',
                  'Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.',
                ],
              },
              {
                title: '9. Transfert des données hors Union européenne',
                content: [
                  'Par principe, les données sont hébergées ou traitées au sein de l’Union européenne.',
                  'Si certains outils utilisés impliquent un transfert hors Union européenne, Solisport s’engage à encadrer ce transfert conformément à la réglementation applicable et à en informer les personnes concernées.',
                ],
              },
              {
                title: '10. Cookies et traceurs',
                content: [
                  'Le site peut utiliser des cookies ou traceurs nécessaires à son fonctionnement.',
                  'Si des cookies de mesure d’audience, de personnalisation ou publicitaires sont utilisés, une information claire et, lorsque la loi l’exige, votre consentement seront recueillis avant leur dépôt.',
                ],
              },
              {
                title: '11. Sécurité',
                content: [
                  'Solisport met en œuvre des mesures techniques et organisationnelles raisonnables pour protéger les données personnelles contre l’accès non autorisé, la perte, l’altération ou la divulgation.',
                  'La CNIL recommande notamment une information claire, une page vie privée accessible et un parcours sécurisé, notamment en HTTPS.',
                ],
              },
              {
                title: '12. Mise à jour de la politique',
                content: [
                  'La présente politique de confidentialité peut être modifiée à tout moment pour tenir compte d’une évolution du site, du projet ou de la réglementation.',
                  'La version en ligne est celle qui fait foi à la date de consultation.',
                ],
              },
            ].map((section) => (
              <section
                key={section.title}
                className="rounded-[32px] bg-white border border-black/5 shadow-sm p-8 md:p-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-5">{section.title}</h2>
                <div className="space-y-3 text-black/65 leading-relaxed">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
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
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const isLegalPage = pathname === '/mentions-legales';
  const isPrivacyPage = pathname === '/confidentialite';
  const [email, setEmail] = useState('');
  const [isSeller, setIsSeller] = useState<boolean | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (isLegalPage) {
    return <LegalPage />;
  }

  if (isPrivacyPage) {
    return <PrivacyPage />;
  }

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
      <SiteHeader />

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
                title: "Garantir l’état de l’objet",
                desc: "Fini les mauvaises surprises pour vos acheteurs. Notre option « Tiers de Confiance » vérifie l’état réel de chaque objet avant l’envoi."
              },
              {
                icon: <TrendingUp className="text-[#FF6B35]" size={32} />,
                title: "Gagner plus d’argent",
                desc: "Nous vous mettons en relation avec des particuliers qui n’ont pas le temps de vendre leurs objets. Vendez pour eux et partagez les gains."
              },
              {
                icon: <Zap className="text-[#FF6B35]" size={32} />,
                title: "Vendre plus efficacement",
                desc: "Apprenez aux autres. Nos vendeurs expérimentés accompagnent les novices pour booster leurs performances sur Vinted. Devenez coach pour des vendeurs novices."
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

      {/* Points Rewards Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Sur Solisport
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Plus vous utilisez Solisport, plus vous gagnez
              </h2>
              <div className="space-y-4 text-lg text-black/60 leading-relaxed max-w-2xl">
                <p>
                  Avec Solisport, chaque action utile génère des points.
                </p>
                <p>
                  Certifier un objet, vendre pour quelqu’un, accompagner un vendeur novice ou générer un don après une vente : plus vous utilisez Solisport, plus vous cumulez d’avantages.
                </p>
                <p>
                  Une fois validés, vos points sont crédités sur votre compte et peuvent être transformés en réductions, cadeaux ou offres proposées par les partenaires.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-10">
                {[
                  {
                    step: "01",
                    title: "Une action utile rapporte",
                    desc: "Chaque utilisation de Solisport peut générer des points.",
                  },
                  {
                    step: "02",
                    title: "Les points s’accumulent",
                    desc: "Vos actions validées créditent votre compte Solisport.",
                  },
                  {
                    step: "03",
                    title: "Les points deviennent un avantage",
                    desc: "Réductions, cadeaux ou bénéfices concrets chez les partenaires.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[28px] border border-black/5 bg-[#FDFCFB] p-6 shadow-sm"
                  >
                    <div className="text-[#FF6B35] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-tight">{item.title}</h3>
                    <p className="text-sm text-black/55 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[36px] bg-[#111111] text-white p-8 md:p-10 shadow-2xl shadow-black/10">
              <div className="text-[#FF6B35] font-bold text-sm uppercase tracking-[0.25em] mb-4">
                Exemple
              </div>
              <div className="space-y-4">
                <div className="rounded-[28px] bg-white/5 border border-white/10 p-6">
                  <div className="text-white/60 text-sm uppercase tracking-[0.2em] mb-2">Points Solisport</div>
                  <div className="text-4xl font-bold">70 points Solisport</div>
                  <div className="mt-5 space-y-3">
                    {[
                      "20 points objet certifié",
                      "30 points vente pour un proche",
                      "15 points accompagnement vendeur novice",
                      "5 points don généré",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 border border-white/15 px-4 py-3"
                      >
                        <span className="text-white/75 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[28px] bg-[#FF6B35] text-white p-6">
                  <div className="text-white/75 text-sm uppercase tracking-[0.2em] mb-2">Avantage partenaire</div>
                  <div className="text-3xl font-bold">Réductions, cadeaux ou offres exclusives</div>
                </div>
              </div>
            </div>
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
                <span className="text-[#FF6B35]">mérite plus de soutien.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Users className="text-[#FF6B35]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Mission</h4>
                    <p className="text-white/50">
                      Solisport soutient les sportifs de haut niveau peu médiatisés, trop souvent laissés de côté faute de visibilité.
                      Dans un contexte de baisse des subventions et de tensions économiques, accéder au sponsoring devient un véritable parcours d’obstacles.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Heart className="text-[#FF6B35]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Valeur</h4>
                    <p className="text-white/50">
                      Solisport défend une vision solidaire du sport. En tant qu’entreprise à mission relevant de l’économie sociale
                      et solidaire, la plateforme reverse 70 % des revenus générés aux sportifs qu’elle accompagne.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="text-[#FF6B35]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Vision</h4>
                    <p className="text-white/50">
                      Solisport veut devenir un acteur de référence du soutien aux sportifs de haut niveau peu médiatisés, avec un
                      modèle solidaire, durable et innovant capable de couvrir, dans la durée, l’ensemble de leurs besoins financiers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[40px] border border-white/10">
              <div className="text-center mb-10">
                <div className="text-[#FF6B35] font-bold text-sm uppercase tracking-widest mb-2">Notre engagement</div>
                <div className="text-4xl font-bold">70 % des revenus générés reversés aux sportifs accompagnés</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-white/60">Entreprise à mission</span>
                  <span className="font-bold text-[#FF6B35]">Impact social</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-white/60">Économie sociale et solidaire</span>
                  <span className="font-bold text-[#FF6B35]">Utilité concrète</span>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-white/40">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Objectif : obtenir le label ESUS et bâtir un soutien durable pour les athlètes.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Athletes */}
      <section id="athletes" className="py-32 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Ils nous font confiance</h2>
              <p className="text-black/50">Découvrez les athlètes soutenus par Solisport.</p>
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

      <SiteFooter />
    </div>
  );
}
