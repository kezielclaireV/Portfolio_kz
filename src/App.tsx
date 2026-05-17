import { Code, Database, Globe, Award, Target, Briefcase, Mail,} from 'lucide-react';
import { ImageWithFallback } from './components/ImageWithFallback';
import { GithubIcon, LinkedinIcon } from './components/icons';

export default function App() {
  const skills = [
    { name: "React", level: "Advanced", category: "Frontend" },
    { name: "Node.js", level: "Advanced", category: "Backend" },
    { name: "TypeScript", level: "Advanced", category: "Language" },
    { name: "Python", level: "Intermediate", category: "Language" },
    { name: "PostgreSQL", level: "Intermediate", category: "Database" },
    { name: "MongoDB", level: "Intermediate", category: "Database" },
    { name: "AWS", level: "Intermediate", category: "Cloud" },
    { name: "Docker", level: "Intermediate", category: "DevOps" },
  ];

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2025",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta",
      year: "2024",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google",
      year: "2024",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "MongoDB Developer",
      issuer: "MongoDB University",
      year: "2026",
      icon: <Database className="w-8 h-8" />
    },
  ];

  const objectives = [
    "Build scalable, user-centric applications that solve real-world problems",
    "Continuously learn emerging technologies and industry best practices",
    "Collaborate with cross-functional teams to deliver innovative solutions",
    "Contribute to open-source projects and the developer community"
  ];

  const emailAddress = 'kezielclairevalencia01@gmail.com';

  const copyEmailAddress = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      alert('Email address copied to clipboard!');
    } catch (error) {
      console.error('Copy failed', error);
      alert('Could not copy email address. Please copy it manually.');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF9F7' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 px-6 py-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7D0531' }}>
              <span className="text-white font-bold">KV</span>
            </div>
            <span className="font-semibold" style={{ color: '#7D0531' }}>Keziel Claire Valencia</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:opacity-80 transition-opacity" style={{ color: '#7D0531' }}>Home</a>
            <a href="#skills" className="hover:opacity-80 transition-opacity" style={{ color: '#7D0531' }}>Skills</a>
            <a href="#certifications" className="hover:opacity-80 transition-opacity" style={{ color: '#7D0531' }}>Certifications</a>
            <a href="#objectives" className="hover:opacity-80 transition-opacity" style={{ color: '#7D0531' }}>Objectives</a>
         
          </nav>
          <a href="#contact" className="px-6 py-2 rounded-full text-white transition-opacity hover:opacity-90" style={{ backgroundColor: '#7D0531' }}>
            Contact Me
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="px-6 py-16" style={{ backgroundColor: '#B05276' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image in Circle */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <ImageWithFallback
                    src="/image/profilekz.jpg"
                    alt="Keziel Claire Valencia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg" style={{ backgroundColor: '#DBBABF' }}>
                  <div className="w-full h-full flex items-center justify-center" style={{ color: '#7D0531' }}>
                    <Code className="w-12 h-12" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg" style={{ backgroundColor: '#75824D' }}>
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <Database className="w-12 h-12" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Name, Position, Intro */}
            <div className="text-white text-center md:text-left">
              <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <span className="text-sm">Welcome to my prtfolio</span>
              </div>
              <h1 className="mb-4" style={{ fontSize: '3.5rem', fontWeight: '700', lineHeight: '1.1' }}>
                Keziel Claire Valencia
              </h1>
              <div className="inline-block px-6 py-3 rounded-full mb-6" style={{ backgroundColor: '#7D0531' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Fullstack Developer</h2>
              </div>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Passionate about creating elegant solutions to complex problems. With 4+ years of experience in fullstack development,
                I specialize in Ui/Ux design, wireframing and applications development that blends beautiful design with robust functionality.
                I thrive in collaborative environments where innovation meets execution.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/kezielclaireV?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full text-white font-semibold transition-transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  style={{ backgroundColor: '#75824D' }}
                >
                  View Projects
                </a>
                <a
                  href="/CV_kz.pdf"
                  download
                  className="px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  style={{ backgroundColor: 'white', color: '#7D0531' }}
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: '#7D0531', fontSize: '2.5rem', fontWeight: '700' }}>Technical Skills</h2>
            <p style={{ color: '#75824D', fontSize: '1.125rem' }}>My expertise across the development stack</p>
          </div>

          {/* Category Icons */}
          <div className="flex justify-center gap-8 mb-12 flex-wrap">
            {['Frontend', 'Backend', 'Database', 'DevOps'].map((category) => (
              <div key={category} className="flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110">
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#DBBABF' }}>
                  <Code className="w-10 h-10" style={{ color: '#7D0531' }} />
                </div>
                <span className="font-semibold" style={{ color: '#7D0531' }}>{category}</span>
              </div>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#7D0531', fontSize: '1.25rem' }}>
                      {skill.name}
                    </h3>
                    <span className="text-sm" style={{ color: '#75824D' }}>{skill.category}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#B05276' }}>
                    {skill.level}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#DBBABF' }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      backgroundColor: '#7D0531',
                      width: skill.level === 'Advanced' ? '90%' : '70%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="px-6 py-16" style={{ backgroundColor: '#DBBABF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: '#7D0531', fontSize: '2.5rem', fontWeight: '700' }}>Certifications & Achievements</h2>
            <p style={{ color: '#75824D', fontSize: '1.125rem' }}>Professional credentials that validate my expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer text-center"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#7D0531' }}>
                  <div className="text-white">{cert.icon}</div>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#7D0531', fontSize: '1.125rem' }}>
                  {cert.title}
                </h3>
                <p className="text-sm mb-2" style={{ color: '#75824D' }}>{cert.issuer}</p>
                <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#B05276' }}>
                  {cert.year}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-full text-white font-semibold transition-transform hover:scale-105 shadow-lg" style={{ backgroundColor: '#7D0531' }}>
              VIEW ALL CERTIFICATIONS
            </button>
          </div>
        </div>
      </section>

      {/* Career Objectives */}
      <section id="objectives" className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: '#7D0531', fontSize: '2.5rem', fontWeight: '700' }}>Career Objectives</h2>
            <p style={{ color: '#75824D', fontSize: '1.125rem' }}>My vision for growth and impact in the tech industry</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#B05276' }}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#7D0531', fontSize: '1.5rem' }}>Short-term Goals</h3>
                  <ul className="space-y-3">
                    {objectives.slice(0, 2).map((obj, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#75824D' }}></span>
                        <span style={{ color: '#333' }}>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#75824D' }}>
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#7D0531', fontSize: '1.5rem' }}>Long-term Vision</h3>
                  <ul className="space-y-3">
                    {objectives.slice(2).map((obj, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#B05276' }}></span>
                        <span style={{ color: '#333' }}>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Promotional Box - Similar to "Magical Ticket" */}
          <div className="mt-12 rounded-3xl p-8 shadow-xl" style={{ backgroundColor: '#7D0531' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h3 className="mb-2" style={{ fontSize: '2rem', fontWeight: '700' }}>LET'S BUILD SOMETHING AMAZING</h3>
                <p style={{ fontSize: '1.125rem' }}>Open to exciting opportunities and collaborations</p>
              </div>
              <button
                type="button"
                onClick={copyEmailAddress}
                className="px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg whitespace-nowrap"
                style={{ backgroundColor: 'white', color: '#7D0531' }}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </section>

          {/* Contact Section */}
      <section id="contact" className="px-6 py-16" style={{ backgroundColor: '#B05276' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white" style={{ fontSize: '2.5rem', fontWeight: '700' }}>Get In Touch</h2>
            <p className="text-white" style={{ fontSize: '1.125rem' }}>Let's connect and create something amazing together</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href="mailto:kezielclairevalencia01@gmail.com"
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer text-center group"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center transition-all group-hover:scale-110" style={{ backgroundColor: '#7D0531' }}>
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#7D0531', fontSize: '1.25rem' }}>Email</h3>
              <p className="text-sm break-all" style={{ color: '#75824D' }}>kezielclairevalencia01@gmail.com</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kezielclaireV"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer text-center group"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center transition-all group-hover:scale-110" style={{ backgroundColor: '#7D0531' }}>
                <GithubIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#7D0531', fontSize: '1.25rem' }}>GitHub</h3>
              <p className="text-sm" style={{ color: '#75824D' }}>@kezielclaireV</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/keziel-claire-valencia-97a44a315"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer text-center group"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center transition-all group-hover:scale-110" style={{ backgroundColor: '#7D0531' }}>
                <LinkedinIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#7D0531', fontSize: '1.25rem' }}>LinkedIn</h3>
              <p className="text-sm" style={{ color: '#75824D' }}>Keziel Claire Valencia</p>
            </a>
          </div>

          {/* Additional Contact Form or Message */}
          <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl text-center">
            <h3 className="mb-4" style={{ color: '#7D0531', fontSize: '1.75rem', fontWeight: '600' }}>Open to Opportunities</h3>
            <p className="mb-6" style={{ color: '#75824D', fontSize: '1.125rem' }}>
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of the channels above!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:kezielclairevalencia01@gmail.com"
                onClick={copyEmailAddress}
                className="px-8 py-3 rounded-full text-white font-semibold transition-transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#7D0531' }}
              >
                Send Email
              </a>
              <a
                href="/CV_kz.pdf"
                download
                className="px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#75824D', color: 'white' }}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>             
  

      {/* Footer */}
      <footer className="px-6 py-12" style={{ backgroundColor: '#7D0531', color: 'white' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Keziel Claire Valencia</h3>
            <p className="mb-6">Fullstack Developer | Building the Future, One Line of Code at a Time</p>
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ backgroundColor: '#B05276' }}>
              <Globe className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ backgroundColor: '#B05276' }}>
              <Code className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ backgroundColor: '#B05276' }}>
              <Award className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm" style={{ color: '#DBBABF' }}>© 2026 Keziel Claire Valencia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}