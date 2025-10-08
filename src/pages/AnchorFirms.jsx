"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import AnimatedText from "../components/AnimatedText.jsx"
import {
  FaIndustry,
  FaRecycle,
  FaSeedling,
  FaFish,
  FaFlask,
  FaUtensils,
  FaChartLine,
  FaHandshake,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa"

export default function AnchorFirms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Intro Section */}
        <IntroSection />

        {/* Ennovate Partnership */}
        <PartnershipSection />

        {/* Criteria */}
        <CriteriaSection />

        {/* Value Chains */}
        <ValueChainsSection />

        {/* Benefits */}
        <BenefitsSection />

        {/* Application Process */}
        <ApplicationProcessSection />

        {/* Key Dates */}
        <KeyDatesSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src="/green-sustainable-city-with-modern-buildings-and-n.jpg" alt="Green and Smart Cities" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#0a0a0a]" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 bg-[#f9bd00]/20 border border-[#f9bd00] rounded-full"
          >
            <span className="text-[#f9bd00] font-semibold text-sm uppercase tracking-wider">Call for Applications</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Investment Readiness & <br />
            <span className="text-[#f9bd00]">Acceleration Programme</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">For Anchor Firms in Green & Circular Economy</p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#f9bd00] rounded-full animate-pulse" />
              <span className="text-lg">Application Window</span>
            </div>
            <span className="hidden sm:block text-gray-500">|</span>
            <span className="text-lg font-semibold">5th October – 31st October 2025</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function IntroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <AnimatedText text="About the Program" size="3xl" color="white" />

      <div className="prose prose-lg prose-invert max-w-none">
        <p className="text-gray-300 leading-relaxed text-lg">
          The <span className="text-[#f9bd00] font-semibold">Green and Smart Cities Program</span> is an EU-funded
          initiative led by Enabel to promote sustainable urban development by improving green infrastructure,
          stimulating local economic growth through circular economy and digital skills development, and enhancing
          public service delivery in cities like Mwanza, Tanga, and Pemba.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg">
          The project empowers youth and women by providing digital and financial literacy, supporting green business
          development, fostering entrepreneurship, and improving access to financial services in these regions.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg">
          Within the framework of the programme, Enabel is launching an{" "}
          <span className="text-[#f9bd00] font-semibold">investment-readiness programme</span> for the top 10
          growth-stage companies building resilient solutions in the green and circular economy sector.
        </p>
      </div>
    </motion.section>
  )
}

function PartnershipSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <AnimatedText text="Ennovate Ventures Partnership" size="3xl" color="white" />

      <div className="prose prose-lg prose-invert max-w-none space-y-6">
        <p className="text-gray-300 leading-relaxed text-lg">
          Ennovate Ventures is supporting Enabel in the implementation of this programme. Eligible companies are invited
          to join a tailored, investor-led acceleration experience designed to unlock growth, scale impact, and attract
          capital for 10 Anchor Firms operating in the green and circular economy within Mwanza, Tanga, and Pemba.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg">
          Through this <span className="text-[#f9bd00] font-semibold">12-month programme</span>, selected firms will
          receive end-to-end venture support, including diagnostics, customized acceleration, due diligence, investor
          engagement, and systemic advocacy.
        </p>
      </div>
    </motion.section>
  )
}

function CriteriaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const criteria = [
    "Annual revenues between USD 150,000 – 2 million.",
    "Employ 20+ staff with potential for expansion.",
    "Demonstrated market share and sector influence.",
    "High potential for SME linkages across their value chain.",
    "Registered and operational in Tanzania, with a focus on green and circular economy solutions.",
    "Commitment to ESG compliance and inclusive growth (gender, youth, climate-positive impact).",
  ]

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <AnimatedText text="Who We Are Looking For" size="3xl" color="white" />
      <p className="text-xl text-gray-400 -mt-4">Anchor Firm Criteria</p>

      <div className="grid gap-4">
        {criteria.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f9bd00]/20 border border-[#f9bd00] flex items-center justify-center">
              <span className="text-[#f9bd00] font-bold text-sm">{index + 1}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function ValueChainsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const valueChains = [
    { icon: FaFish, title: "Fish Processing & Trading" },
    { icon: FaSeedling, title: "Seaweed Farming & Processing" },
    { icon: FaRecycle, title: "Waste Collection & Management" },
    { icon: FaFlask, title: "Soap & Essential Oils Production" },
    { icon: FaUtensils, title: "Food Processing & Food Systems" },
  ]

  return (
    <section ref={ref} className="space-y-12">
      <AnimatedText text="Preferred Value Chains" size="4xl" color="white" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {valueChains.map((chain, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#f9bd00]/50 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f9bd00]/0 to-[#f9bd00]/0 group-hover:from-[#f9bd00]/10 group-hover:to-[#f9bd00]/5 transition-all duration-300" />

            <div className="relative space-y-4">
              <div className="w-16 h-16 rounded-xl bg-[#f9bd00]/20 flex items-center justify-center group-hover:bg-[#f9bd00]/30 transition-colors">
                <chain.icon className="text-3xl text-[#f9bd00]" />
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-[#f9bd00] transition-colors">
                {chain.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function BenefitsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const benefits = [
    {
      icon: FaChartLine,
      title: "Investment-Readiness Diagnostics",
      description: "Comprehensive assessment of strategy, financials, governance, market readiness, and ESG.",
    },
    {
      icon: FaUsers,
      title: "Tailored Acceleration",
      description: "8-week sprint with workshops on financial modeling, governance, pitch prep, and SME integration.",
    },
    {
      icon: FaFileAlt,
      title: "Due Diligence Support",
      description: "Simulated investor due diligence to address compliance and documentation gaps.",
    },
    {
      icon: FaHandshake,
      title: "Investor Engagement",
      description: "Access to monthly investor series, quarterly roadshows, and curated matchmaking opportunities.",
    },
    {
      icon: FaIndustry,
      title: "Linkages & Systemic Support",
      description: "SME matchmaking, pilots in green innovation, and policy advocacy to address market barriers.",
    },
  ]

  return (
    <section ref={ref} className="space-y-12">
      <AnimatedText text="What Selected Firms Will Receive" size="4xl" color="white" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#f9bd00]/50 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-[#f9bd00]/20 flex items-center justify-center group-hover:bg-[#f9bd00]/30 transition-colors">
                <benefit.icon className="text-2xl text-[#f9bd00]" />
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-[#f9bd00] transition-colors">
                {benefit.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ApplicationProcessSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const steps = [
    { step: "Application Submission", detail: "5th – 31st October 2025" },
    {
      step: "Eligibility Screening",
      detail: "Based on predefined criteria (revenue, team, scalability, ESG, linkage potential)",
    },
    {
      step: "Interviews",
      detail: "Conducted with a Selection Committee (Enabel, Ennovate Ventures, investors, experts)",
    },
    { step: "Validation Visits", detail: "On-site verification of shortlisted firms" },
    { step: "Final Selection", detail: "10 Anchor Firms announced in November 2025" },
  ]

  return (
    <section ref={ref} className="space-y-12">
      <AnimatedText text="Application & Selection Process" size="4xl" color="white" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f9bd00] flex items-center justify-center">
                  <span className="text-black font-bold">{index + 1}</span>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-bold text-white">{item.step}</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative h-[400px] rounded-2xl overflow-hidden"
        >
          <img src="/business-meeting-with-diverse-professionals-discus.jpg" alt="Application process" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

function KeyDatesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const dates = [
    { label: "Call Opens", date: "5th October 2025" },
    { label: "Deadline", date: "31st October 2025" },
    { label: "Interviews & Validation", date: "November 2025" },
    { label: "Final Selection", date: "2nd week of November 2025" },
    { label: "Programme Start", date: "3rd week of November 2025" },
  ]

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <AnimatedText text="Key Dates" size="3xl" color="white" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dates.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-gradient-to-br from-[#f9bd00]/20 to-[#f9bd00]/10 border border-[#f9bd00]/30"
          >
            <p className="text-sm text-gray-400 mb-2">{item.label}</p>
            <p className="text-lg font-bold text-white">{item.date}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center space-y-8 py-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Join the next generation of green economy leaders. Apply now and unlock your growth potential.
        </p>

        <motion.a
          href="http://bit.ly/3IQfdmN"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-12 py-4 bg-[#f9bd00] text-black font-bold text-lg rounded-full hover:bg-[#f9a500] transition-colors shadow-lg shadow-[#f9bd00]/20"
        >
          Apply Now
        </motion.a>

        <p className="text-gray-500 mt-8">
          For inquiries:{" "}
          <a href="mailto:info@ennovateventures.co" className="text-[#f9bd00] hover:underline font-semibold">
            info@ennovateventures.co
          </a>
        </p>
      </motion.div>
    </motion.section>
  )
}
