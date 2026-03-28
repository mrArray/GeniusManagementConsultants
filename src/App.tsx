import {
  ArrowRight,
  Briefcase,
  Calculator,
  CheckCircle,
  FileText,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const expertiseAreas = [
  { icon: Calculator,  title: 'Tax Planning & Compliance', count: '15+ Years' },
  { icon: TrendingUp,  title: 'Revenue Optimization',      count: 'Expert Level' },
  { icon: Briefcase,   title: 'Financial Auditing',         count: 'IPSAS & IFRS' },
  { icon: Lightbulb,   title: 'Business Advisory',          count: 'SME Focused' },
]

const services = [
  {
    icon: Calculator,
    title: 'Tax Advisory Services',
    featured: true,
    description:
      'Comprehensive tax solutions including audit, compliance, and strategic planning to minimize tax liability and ensure regulatory adherence.',
    details: [
      'Tax audit and determination of all tax obligations',
      'Corporate and personal income tax planning',
      'VAT/TIN registration and compliance',
      'Withholding tax management and certificates',
      'Capital allowance claims and tax holidays',
      'Tax refund processing and dispute resolution',
      'Transfer pricing documentation',
      'International tax advisory for cross-border transactions',
    ],
  },
  {
    icon: TrendingUp,
    title: 'IGR & Revenue Services',
    featured: true,
    description:
      'Strategic revenue generation solutions to maximize internally generated revenue, identify leakages, and optimize collection processes.',
    details: [
      'IGR portfolio development and management',
      'Revenue leakage identification and blocking',
      'Cost center analysis and streamlining',
      'Revenue collection agency services',
      'Tax base expansion strategies',
      'Revenue forecasting and budgeting',
    ],
  },
  {
    icon: FileText,
    title: 'Accounting Services',
    featured: false,
    description:
      'Complete accounting solutions from system design to financial reporting, ensuring accuracy and compliance with accounting standards.',
    details: [
      'Accounting system design and implementation',
      'Financial statement preparation (IFRS/IPSAS)',
      'Bookkeeping and record management',
      'Management accounting and reporting',
      'Financial operational guidelines review',
      'Internal control system evaluation',
    ],
  },
  {
    icon: Briefcase,
    title: 'Assurance & Audit Services',
    featured: false,
    description:
      'Independent assurance services providing confidence in financial reporting, internal controls, and operational efficiency.',
    details: [
      'Statutory and regulatory audits',
      'Special project and program audits',
      'Donor fund and grant audits',
      'Payroll and manpower audits',
      'Internal audit structure development',
      'Compliance audits',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Forensic & Investigation Services',
    featured: false,
    description:
      'Expert forensic accounting to detect, investigate, and prevent fraud, financial misconduct, and operational irregularities.',
    details: [
      'Fraud detection and investigation',
      'Asset tracing and recovery',
      'Financial misconduct investigations',
      'Transaction irregularity analysis',
      'Litigation support services',
      'Anti-fraud system implementation',
    ],
  },
  {
    icon: Users,
    title: 'Recruitment & Training',
    featured: false,
    description:
      'Specialized recruitment and capacity building for finance professionals and financial literacy training for non-finance executives.',
    details: [
      'Finance and accounting recruitment',
      'Tax personnel sourcing',
      'Professional development training',
      'Financial training for non-finance staff',
      'Capacity building workshops',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Advisory & Consultancy',
    featured: false,
    description:
      'Strategic financial advisory services covering feasibility studies, investment analysis, and business optimization strategies.',
    details: [
      'Business feasibility studies',
      'Financial forecasting and modeling',
      'Investment portfolio management',
      'Debt recovery and restructuring',
      'Fixed asset management and valuation',
      'Accounting software implementation',
      'SME business modeling and support',
    ],
  },
]

const certifications = [
  { name: 'ICAN', full: 'ICAN CERTIFIED' },
  { name: 'ANAN', full: 'ANAN MEMBER' },
  { name: 'CPA', full: 'CPA MEMBER' },
  { name: 'NIM', full: 'NIM MEMBER' },
]

const teamMembers = [
  {
    name: 'Jamilu Salisu Ahmad',
    role: 'Managing Partner - Public Sector',
    qualifications: 'B.Sc, MBA, M.Sc, PhD. MNIM, CNA, CPA, ACA',
    experience:
      'Over 18 years of experience in public and private sectors, specializing in accounting and auditing standards (IPSAS and IFRS).',
    specialization: 'Public sector accounting, IPSAS implementation, capacity building',
  },
  {
    name: 'Sunusi Ibrahim Madaki',
    role: 'Partner - Private Sector',
    qualifications: 'B.Sc., M.Sc. (in progress), ICAN',
    experience:
      'Over 17 years of experience in public sector and private practice, specializing in private sector operations.',
    specialization: 'SME advisory, private sector accounting, business consulting',
  },
  {
    name: 'Nura Ahmad Ishaq',
    role: 'Partner - Tax Matters',
    qualifications: 'B.Sc., M.Sc., PhD, ANAN',
    experience: 'Over 17 years of tremendous experience on tax matters in the public sector.',
    specialization: 'Tax planning, compliance, dispute resolution, revenue optimization',
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)

// ─── Sub-components ───────────────────────────────────────────────────────────

function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`bg-card text-card-foreground rounded-xl border shadow-sm ${className}`}>
      {children}
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ backgroundColor: 'color-mix(in oklab, var(--color-background) 95%, transparent)', backdropFilter: 'blur(8px)' }}>
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">GMC</span>
              </div>
              <span className="font-bold text-lg hidden sm:inline">Genius Management Consultants</span>
            </div>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-6">
              {['expertise', 'services', 'about', 'team', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className="text-sm font-medium hover:text-primary transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  CAC Registered • BN2603548
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Expert Tax Advisory &amp; Financial Management Solutions
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-xl">
                Genius Management Consultants delivers specialized tax planning, revenue optimization, and
                comprehensive financial services backed by chartered accountants and certified tax practitioners
                with over 15 years of combined expertise.
              </p>

              {/* Credential badges */}
              <div className="flex flex-wrap gap-3">
                {['ICAN CERTIFIED', 'ANAN MEMBER', 'CPA MEMBER', 'NIM MEMBER'].map((label) => (
                  <span key={label} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-secondary/10 text-secondary">
                    <CheckCircle className="w-4 h-4" />
                    {label}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollTo('services')}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Schedule Consultation
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                {[
                  { value: '15+', label: 'Years Experience' },
                  { value: '3',   label: 'Expert Partners' },
                  { value: '7',   label: 'Service Areas' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column – image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img
                src="/images/team-meeting.jpg"
                alt="Professional team meeting"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section id="expertise" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise Areas</h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Specialized knowledge and proven track record in critical financial disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area) => {
              const Icon = area.icon
              return (
                <div key={area.title} className="rounded-xl border border-primary-foreground/20 p-6 text-center"
                  style={{ backgroundColor: 'color-mix(in oklab, var(--color-primary-foreground) 10%, transparent)', backdropFilter: 'blur(4px)' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'color-mix(in oklab, var(--color-primary-foreground) 20%, transparent)' }}>
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-primary-foreground text-lg font-semibold mb-1">{area.title}</h3>
                  <p className="text-primary-foreground/80 font-medium text-sm">{area.count}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Comprehensive Financial &amp; Tax Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Full-spectrum professional services designed to optimize your tax position, enhance financial
              performance, and ensure regulatory compliance.
            </p>
          </div>

          <div className="grid gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className={`group hover:shadow-xl transition-all duration-300 p-6 ${service.featured ? 'border-primary/50 bg-primary/5' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                      service.featured ? 'bg-primary text-primary-foreground' : 'bg-muted text-primary'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        {service.featured && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="grid sm:grid-cols-2 gap-1">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Professional Associations */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6 font-medium uppercase tracking-widest">
              Professional Memberships &amp; Certifications
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex flex-col items-center px-6 py-4 rounded-xl border bg-background shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-lg font-bold text-primary">{cert.name}</span>
                  <span className="text-xs text-muted-foreground text-center mt-1 max-w-[140px]">{cert.full}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/office.jpg"
                alt="Professional office"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Building Trust Through Professional Excellence
              </h2>

              <div className="space-y-4">
                {/* Vision */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <RotateCcw className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the very best in all sectors of our business, and thereby build strong referrals from our
                      clients through exceptional tax advisory and financial management services.
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To consistently deliver efficient tax planning, revenue optimization, and financial advisory
                      services that provide constant operational and financial performance improvements at an
                      affordable cost.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Genius Management Consultants is managed by well-experienced chartered accountants and certified
                tax practitioners. Our team specializes in IPSAS and IFRS standards, tax compliance and planning,
                revenue generation strategies, and comprehensive financial advisory services for both public and
                private sector clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet our experienced partners who bring decades of combined expertise in tax advisory, accounting,
              and financial management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition-shadow">
                {/* Card header */}
                <div className="p-6 pb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold text-white mb-4">
                    {initials(member.name)}
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>

                {/* Card content */}
                <div className="px-6 pb-6 space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">Qualifications</p>
                    <p className="text-sm text-muted-foreground">{member.qualifications}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Experience</p>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Specialization</p>
                    <p className="text-sm text-muted-foreground">{member.specialization}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Get Expert Tax &amp; Financial Advice
                </h2>
                <p className="text-lg text-muted-foreground">
                  Contact us today for professional tax planning, revenue optimization, and comprehensive
                  financial advisory services tailored to your business needs.
                </p>
              </div>

              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Office Address</p>
                    <p className="text-muted-foreground">No. 60 SKY Memorial Complex, Zoo Road Kano, Nigeria</p>
                  </div>
                </div>

                {/* Registered Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Registered Address</p>
                    <p className="text-muted-foreground">
                      No. 3336 Yamadawa Quarters, Gwale L.G. Kano State, Nigeria
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone Numbers</p>
                    <div className="text-muted-foreground space-y-1">
                      <p>+234 803 6363 9797</p>
                      <p>+234 802 3565 137</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <div className="text-muted-foreground space-y-1">
                      <p>geniusmc2018@gmail.com</p>
                      <p>aljameelsalees@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/images/team.jpg"
                alt="Professional team"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-background text-foreground rounded-lg flex items-center justify-center">
                  <span className="font-bold text-xl">GMC</span>
                </div>
                <span className="font-bold">
                  Genius Management
                  <br />
                  Consultants
                </span>
              </div>
              <p className="text-sm text-background/80">
                Expert tax advisory and financial management services backed by chartered accountants and
                certified professionals.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-background/80">
                {['Tax Advisory Services', 'IGR & Revenue Services', 'Accounting Services', 'Assurance & Audit', 'Forensic Services'].map(
                  (s) => <li key={s}>{s}</li>,
                )}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-background/80">
                {([['about', 'About Us'], ['expertise', 'Expertise'], ['team', 'Our Team'], ['contact', 'Contact']] as const).map(
                  ([id, label]) => (
                    <li key={id}>
                      <button onClick={() => scrollTo(id)} className="hover:text-background transition-colors">
                        {label}
                      </button>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2 text-sm text-background/80">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <span className="font-medium text-background">{cert.name}</span> – {cert.full}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>© {new Date().getFullYear()} Genius Management Consultants. All rights reserved.</p>
            <p>CAC Registered • BN2603548</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
