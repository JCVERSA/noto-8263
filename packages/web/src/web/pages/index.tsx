import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Play,
  BookOpen,
  Search,
  Heart,
  WifiOff,
  Smartphone,
  Check,
  Headphones,
  Github,
  Sparkles,
} from "lucide-react";
import "./novay.css";
const apk =
  "https://github.com/jCVERSA/p/releases/latest/download/novay-universal-release.apk";
function DownloadLink({ light = false }: { light?: boolean }) {
  return (
    <a className={`button ${light ? "yellow" : ""}`} href={apk}>
      <Download size={17} /> Télécharger pour Android <ArrowUpRight size={17} />
    </a>
  );
}
function Phone() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="camera" />
      <div className="status">
        9:41 <span>● ▰</span>
      </div>
      <div className="phone-header">
        NoVaY
        <span>
          <Search size={17} />
        </span>
      </div>
      <div className="phone-sub">Ton prochain épisode t’attend.</div>
      <div className="phone-art">
        <div className="sun" />
        <div className="mountain one" />
        <div className="mountain two" />
        <span className="art-label">À LA UNE</span>
        <div className="art-title">
          Une nouvelle
          <br />
          aventure commence.
        </div>
        <span className="play">
          <Play size={12} fill="currentColor" /> Explorer le catalogue
        </span>
      </div>
      <div className="phone-section">
        Ta bibliothèque <Heart size={15} />
      </div>
      <div className="mini-grid">
        {["Aventure", "Fantastique", "Découverte"].map((x, i) => (
          <div key={x}>
            <div className={`mini-art a${i}`}>
              <Sparkles size={27} />
            </div>
            <span>{x}</span>
          </div>
        ))}
      </div>
      <div className="offline">
        <div className="offline-icon">
          <Download size={18} />
        </div>
        <div>
          Prêt pour le hors-ligne<small>Emporte tes épisodes avec toi</small>
        </div>
        <Check size={16} />
      </div>
      <div className="phone-nav">
        <span>
          <BookOpen size={17} />
          Bibliothèque
        </span>
        <span>
          <Search size={17} />
          Catalogue
        </span>
        <span>
          <Download size={17} />
          Plus
        </span>
      </div>
    </div>
  );
}
const features = [
  {
    num: "01",
    title: (
      <>
        Tes animés.
        <br />
        Ta langue.
      </>
    ),
    text: "Retrouve tes animés en VF ou en VOSTFR. Explore le catalogue, choisis ta saison et plonge dans le prochain épisode.",
    icon: Headphones,
    tag: "VF & VOSTFR",
  },
  {
    num: "02",
    title: (
      <>
        Moins de réseau.
        <br />
        Plus d’épisodes.
      </>
    ),
    text: "Télécharge tes épisodes dans la qualité de ton choix. Dans le train, en voyage ou sans connexion : la suite reste avec toi.",
    icon: WifiOff,
    tag: "LECTURE HORS LIGNE",
  },
  {
    num: "03",
    title: (
      <>
        Reprends là
        <br />
        où tu en étais.
      </>
    ),
    text: "Ta bibliothèque, tes favoris et ton historique au même endroit. Retrouve ta progression et continue sans chercher.",
    icon: BookOpen,
    tag: "TON ESPACE, TON RYTHME",
  },
];
export default function Index() {
  return (
    <div className="novay">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <header className="nav wrap">
        <a className="brand" href="#">
          NoVaY<span>.</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#fonctionnalites">L’expérience</a>
          <a href="#installation">Installation</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-download" href={apk}>
          Télécharger <ArrowDown size={14} />
        </a>
      </header>
      <main id="contenu" tabIndex={-1}>
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span /> TES ANIMÉS, PARTOUT AVEC TOI
            </div>
            <h1>
              Un épisode.
              <br />
              Puis un autre.
              <br />
              <span>À ton rythme.</span>
            </h1>
            <p>
              Le plaisir des animés, sans détour.
              <br />
              VF, VOSTFR et lecture hors ligne,
              <br />
              dans une seule appli Android.
            </p>
            <DownloadLink />
            <div className="download-note">
              <Smartphone size={13} /> Android 7+ <b>·</b> Gratuit <b>·</b> APK
              universel
            </div>
          </div>
          <div className="hero-visual">
            <div className="petal p1" />
            <div className="petal p2" />
            <div className="petal p3" />
            <div className="orbit" />
            <div className="floating-label">
              <span>Le prochain épisode ?</span>
              <strong>Il vient avec toi.</strong>
              <svg width="70" height="43" viewBox="0 0 70 43">
                <path
                  d="M2 4 Q55 -4 59 33 M49 25 L59 35 L68 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <Phone />
            <span className="preview-note">
              Aperçu illustratif de l’expérience NoVaY
            </span>
            <span className="little-star">✳</span>
          </div>
        </section>
        <section className="promise">
          <div className="promise-top">
            PAS BESOIN DE COMPLIQUER LES CHOSES.
          </div>
          <div className="promise-items">
            <div>
              <i>1.</i>
              <h2>
                Choisis
                <br />
                ton animé.
              </h2>
            </div>
            <div>
              <i>2.</i>
              <h2>
                Emporte
                <br />
                l’histoire.
              </h2>
            </div>
          </div>
          <p>Une appli. Tes épisodes. Et la liberté de regarder à ta façon.</p>
        </section>
        <section id="fonctionnalites" className="features wrap">
          <div className="section-label">UNE EXPÉRIENCE QUI TE SUIT</div>
          {features.map(({ num, title, text, icon: Icon, tag }, i) => (
            <article className={`feature f${i}`} key={num}>
              <div className="feature-copy">
                <span className="number">{num} /</span>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
              <div className="feature-illustration">
                <div className="illustration-disc">
                  <Icon strokeWidth={1} size={103} />
                  <span className="small-spark">✳</span>
                </div>
                <span className="illustration-tag">{tag}</span>
              </div>
            </article>
          ))}
        </section>
        <section id="installation" className="installation wrap">
          <div className="section-label">QUELQUES SECONDES, ET C’EST PARTI</div>
          <div className="section-heading">
            <h2>
              La suite commence
              <br />
              sur ton téléphone.
            </h2>
            <p>
              Pas de détour par un store.
              <br />
              Installe directement NoVaY sur Android.
            </p>
          </div>
          <div className="steps">
            {[
              [
                "01",
                "Télécharge l’APK",
                "Récupère le fichier depuis la version officielle publiée sur GitHub.",
              ],
              [
                "02",
                "Autorise l’installation",
                "Si Android le demande, autorise ton navigateur à installer cette application.",
              ],
              [
                "03",
                "Ouvre NoVaY",
                "Installe l’APK, ouvre l’appli et explore le catalogue.",
              ],
            ].map(([n, t, d]) => (
              <div key={n}>
                <span>
                  {n}
                  <ArrowUpRight size={20} />
                </span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <p className="safety-note">
            N’installe que l’APK provenant du dépôt officiel. Tu peux retirer
            l’autorisation d’installation après usage.
          </p>
        </section>
        <section id="faq" className="faq wrap">
          <div>
            <span className="section-label">BON À SAVOIR</span>
            <h2>
              Une question
              <br />
              avant de lancer ?
            </h2>
          </div>
          <div className="faq-list">
            {[
              [
                "NoVaY est-elle gratuite ?",
                "Oui. Le téléchargement de l’application est gratuit.",
              ],
              [
                "Mon téléphone est-il compatible ?",
                "NoVaY est compatible avec Android 7 et versions ultérieures. L’APK universel inclut les architectures 32 et 64 bits.",
              ],
              [
                "Puis-je regarder sans connexion ?",
                "Oui, après avoir téléchargé tes épisodes depuis l’application. Le catalogue et les contenus non téléchargés nécessitent une connexion.",
              ],
              [
                "Comment mettre l’application à jour ?",
                "Télécharge la dernière version depuis cette page, puis installe-la sur la version existante. Android peut te demander de confirmer la mise à jour.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="last">
          <span className="eyebrow">LAISSE LA SUITE T’EMPORTER</span>
          <h2>
            Ton prochain épisode.
            <br />
            <span>Dans ta poche.</span>
          </h2>
          <DownloadLink light />
          <p>Gratuit. Android 7+. À ton rythme.</p>
        </section>
      </main>
      <footer className="wrap">
        <div className="footer-top">
          <a href="#" className="brand">
            NoVaY<span>.</span>
          </a>
          <p>Des histoires à emporter.</p>
          <a
            href="https://github.com/JCVERSA/p"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> Le projet sur GitHub
            <span className="sr-only"> (nouvel onglet)</span>{" "}
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} NoVaY</span>
          <span>
            Utilise les contenus dans le respect des droits de leurs créateurs.
          </span>
        </div>
      </footer>
    </div>
  );
}
