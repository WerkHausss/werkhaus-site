"use client"
import HeroDashboard from "@/components/hero-dashboard"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Zap,
  Globe,
  Bot,
  Star,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Clock,
  Users,
  Award,
  Code,
  Cpu,
  Monitor,
  Smartphone,
} from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function WerkhausLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: Globe,
      title: "Modern Websites",
      description:
        "Lightning-fast, responsive websites that convert visitors into customers with cutting-edge design and optimization.",
    },
    {
      icon: Bot,
      title: "AI Funnels",
      description:
        "Intelligent sales funnels powered by AI that automatically nurture leads and maximize your conversion rates.",
    },
    {
      icon: Zap,
      title: "Automation",
      description:
        "Streamline your business operations with smart automation tools that save time and boost productivity.",
    },
  ]

  const testimonials = [
    {
      name: "Dawn Bennett",
      role: "Elite Paralegal Services Founder",
      content:
        "Designed and developed a modern, user-friendly website for Elite Paralegal Services — a boutique legal support firm specializing in document prep, case management, and client advocacy.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Suzanne Sizemore",
      role: "Namaste Nook Founder & CEO",
      content:
        "The AI-powered automation tools saved us 20+ hours per week. Best investment we've made for our startup.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Harufa Nzuri",
      role: "E-commerce Brand",
      content: "Werkhaus built our full online store with Stripe checkout and a backend CRM system to manage orders and customers. Everything feels seamless and elevated.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const portfolioItems = [
    {
      title: "Elite Paralegal Services",
      category: "Web Design · Strategy",
      image: "/images/elite-paralegal.png",
      description:
        "Clean, professional website for a legal support agency with custom copy, contact forms, and mobile optimization. WordPress build reflecting trust and credibility.",
      highlights: ["WordPress", "Mobile-optimized", "Brand tone: authoritative + approachable"],
    },
    {
      title: "Namaste Nook with Suzanne",
      category: "Wellness Brand · Social Automation",
      image: "/images/namaste-nook.png",
      description:
        "Cohesive content strategy and automated social posting workflow for yoga instructor, elevating brand voice across YouTube, Instagram, and digital products.",
      highlights: ["Branded Canva templates", "Make.com + Instagram automation", "Custom YouTube cover + captions"],
    },
    {
      title: "My Closet App",
      category: "Fashion Tech · Pre-Launch Marketing",
      image: "/images/my-closet-app.png",
      description:
        "Visual and content strategy for fashion app targeting Gen Z with 'messy girl aesthetic.' Bold red-black branding and 30-day campaign planning.",
      highlights: ["Social media content calendar", "Launch funnel structure", "Bold aesthetic direction"],
    },
  ]

  

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md border-b border-orange-500/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Werkhaus
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  Services
                </a>
                <a href="#portfolio" className="hover:text-orange-500 transition-colors">
                  Portfolio
                </a>
                <a href="#testimonials" className="hover:text-orange-500 transition-colors">
                  Testimonials
                </a>
                <a href="#contact" className="hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-orange-500 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-orange-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 hover:text-orange-500 transition-colors">
                Services
              </a>
              <a href="#portfolio" className="block px-3 py-2 hover:text-orange-500 transition-colors">
                Portfolio
              </a>
              <a href="#testimonials" className="block px-3 py-2 hover:text-orange-500 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="block px-3 py-2 hover:text-orange-500 transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* CINEMATIC BACKGROUND */}
<div className="absolute inset-0 overflow-hidden bg-black">

  {/* Main Orange Atmosphere */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.12),transparent_60%)]" />

  {/* REALISTIC PLANET */}
  <div
  className="
  absolute
  right-[-95%] sm:right-[-55%] md:right-[-20%] xl:right-[-10%]
  top-1/2 -translate-y-1/2
  w-[700px] h-[700px]
  sm:w-[850px] sm:h-[850px]
  md:w-[950px] md:h-[950px]
  xl:w-[1100px] xl:h-[1100px]
  rounded-full
  planet-float
  overflow-hidden
"
>

    {/* Planet Core */}
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ff8a1c_0%,#ff7a00_25%,#ff4d00_55%,#120000_100%)] shadow-[0_0_180px_rgba(255,120,0,0.45)]" />

    {/* REAL PLANET TEXTURE */}
<div
  className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
  style={{
    backgroundImage: "url('/planet-texture.jpg')",
  }}
/>
    {/* Surface Veins */}
    <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_30%,transparent_60%)]" />

    {/* Realistic Shadow */}
<div className="absolute inset-0 bg-[linear-gradient(to_left,transparent_15%,rgba(0,0,0,0.2)_55%,rgba(0,0,0,1)_100%)]" />

    {/* Rim Glow */}
    <div className="absolute inset-0 rounded-full border border-orange-200/50 shadow-[0_0_18px_rgba(255,210,120,1)]" />

    {/* Atmosphere Ring */}
    <div className="absolute inset-[-40px] rounded-full border border-orange-400/10 blur-xl" />

  </div>

  {/* Large Atmospheric Blur */}
  <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-orange-500/6 blur-[220px]" />

  {/* Ambient Glow */}
  <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-orange-500/20 blur-[180px]" />

{/* Left Side Atmospheric Glow */}
<div className="absolute left-[-200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[180px]" />


{/* Star Particles */}
<div className="absolute top-20 left-1/3 w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_15px_rgba(255,120,0,1)] animate-pulse" />

<div className="absolute top-1/2 left-1/4 w-1 h-1 bg-orange-300 rounded-full shadow-[0_0_10px_rgba(255,120,0,0.8)]" />

<div className="absolute bottom-32 left-1/2 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(255,120,0,1)] animate-pulse" />
</div>


        {/* Floating Tech Icons and Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Icons */}
          <div
            className="absolute top-20 left-10 opacity-3 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "6s" }}
          >
            <Code className="hidden md:block w-8 h-8 text-orange-400" />
          </div>
          <div
            className="absolute top-32 right-20 opacity-15 animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          >
            <Cpu className="w-10 h-10 text-red-400" />
          </div>
          <div
            className="absolute top-1/3 left-1/4 opacity-10 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "8s" }}
          >
            <Bot className="w-12 h-12 text-orange-500" />
          </div>
          <div
            className="absolute top-1/2 right-10 opacity-20 animate-pulse"
            style={{ animationDelay: "3s", animationDuration: "5s" }}
          >
            <Globe className="w-6 h-6 text-red-300" />
          </div>
          <div
            className="absolute bottom-1/3 left-16 opacity-15 animate-bounce"
            style={{ animationDelay: "4s", animationDuration: "7s" }}
          >
            <Zap className="hidden md:block w-8 h-8 text-orange-400" />
          </div>
          <div
            className="absolute bottom-20 right-1/4 opacity-10 animate-pulse"
            style={{ animationDelay: "5s", animationDuration: "6s" }}
          >
            <Monitor className="hidden md:block w-10 h-10 text-red-400" />
          </div>

          {/* Geometric Shapes */}
<div
  className="absolute top-16 right-1/3 w-3 h-3 md:w-4 md:h-4 bg-orange-500/10 md:bg-orange-500/20 rotate-45 animate-spin"
  style={{ animationDuration: "20s" }}
></div>

<div
  className="absolute top-2/3 left-20 w-4 h-4 md:w-6 md:h-6 bg-red-500/10 md:bg-red-500/15 rounded-full animate-ping"
  style={{ animationDelay: "2s", animationDuration: "8s" }}
></div>

<div
  className="absolute bottom-1/4 right-16 w-2 h-2 md:w-3 md:h-3 bg-orange-400/15 md:bg-orange-400/25 rotate-12 animate-pulse"
  style={{ animationDelay: "1s", animationDuration: "4s" }}
></div>

<div
  className="hidden md:block absolute top-1/4 right-12 w-8 h-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 animate-pulse"
  style={{ animationDelay: "3s", animationDuration: "6s" }}
></div>

<div
  className="hidden md:block absolute bottom-1/2 left-8 w-2 h-8 bg-gradient-to-b from-red-400/15 to-orange-400/15 animate-bounce"
  style={{ animationDelay: "4s", animationDuration: "10s" }}
></div>

          {/* Floating Dots */}
          <div
            className="absolute top-1/5 left-1/3 w-2 h-2 bg-orange-500/30 rounded-full animate-ping"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-3/4 right-1/3 w-1 h-1 bg-red-500/40 rounded-full animate-pulse"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
          <div
            className="absolute bottom-1/5 left-1/2 w-3 h-3 bg-orange-400/20 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "7s" }}
          ></div>

          {/* Mobile-specific smaller elements */}
          <div
            className="md:hidden absolute top-24 right-8 opacity-15 animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          >
            <Smartphone className="w-6 h-6 text-orange-400" />
          </div>
          <div
            className="md:hidden absolute bottom-32 left-8 opacity-10 animate-bounce"
            style={{ animationDelay: "3s", animationDuration: "6s" }}
          >
            <Zap className="w-5 h-5 text-red-400" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 px-4 max-w-[320px] mx-auto">
              <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                <Clock className="w-4 h-4 mr-2" />
                72hr turnaround
              </Badge>
              <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                <Users className="w-4 h-4 mr-2" />
                Hablamos Español
              </Badge>
              <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                <Award className="w-4 h-4 mr-2" />
                Free Consultation
              </Badge>
            </div>

         <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
  <span className="bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">
    Build Smarter,
  </span>
  <br />
  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
    Scale Faster
  </span>
  <br />
  <span className="text-white">with Werkhaus</span>
</h1>

<p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
  Empower your business with AI-powered web design and automation tools. 
  We help entrepreneurs transform ideas into profitable digital experiences.
</p>

{/* DASHBOARD */}
<div className="mt-14 flex justify-center">
  <HeroDashboard />
</div>

{/* BUTTONS */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">

  <button
    onClick={() => setOpen(true)}
    className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg overflow-hidden group transition-all duration-300 transform hover:scale-105"
  >

    {/* TEXT */}
    <span className="relative z-10 flex items-center gap-2">
      Start My Project →
    </span>

    {/* GLOW */}
    <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></span>

    {/* SHINE */}
    <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white blur-2xl transition duration-500"></span>

  </button>

  <Button>
    View Portfolio
  </Button>

</div> 
</div>
</div>
</section>


  {/* Core Services Section */}
<section
  id="services"
  className="relative overflow-hidden py-32 bg-black"
>
  {/* Atmospheric Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,120,0,0.12),transparent_55%)]" />

  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000,#050816,#000000)]" />

  {/* Subtle Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-500/10 blur-[140px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Core Services
        </span>
      </h2>

      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Intelligent systems, modern experiences, and automation designed to scale your business.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* MODERN WEBSITES */}
      <Card className="bg-gray-900/50 border border-orange-500/20 hover:border-orange-400/60 hover:shadow-[0_0_60px_rgba(255,120,0,0.18)] transition-all duration-500 group overflow-hidden backdrop-blur-xl hover:-translate-y-2">
        <CardContent className="p-8 text-center">

          <div className="relative mx-auto mb-8 w-full max-w-[300px] h-[180px] rounded-2xl overflow-hidden border border-orange-500/20 bg-black/50 backdrop-blur-xl shadow-[0_0_60px_rgba(255,120,0,0.12)]">

  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/5" />

  {/* Browser Top */}
  <div className="flex items-center justify-between px-4 py-3 border-b border-orange-500/10 bg-black/40">
    <div className="flex gap-2">
      <div className="w-2 h-2 rounded-full bg-red-500" />
      <div className="w-2 h-2 rounded-full bg-yellow-500" />
      <div className="w-2 h-2 rounded-full bg-green-500" />
    </div>

    <div className="text-[9px] text-orange-300 tracking-[0.2em]">
      WERKHAUS
    </div>
  </div>

  {/* Hero UI */}
  <div className="p-4">

    <div className="h-3 w-28 rounded-full bg-orange-500/80 mb-3 animate-pulse" />

    <div className="space-y-2 mb-4">
      <div className="h-2 rounded-full bg-white/10 w-full" />
      <div className="h-2 rounded-full bg-white/10 w-5/6" />
      <div className="h-2 rounded-full bg-white/10 w-4/6" />
    </div>

    {/* CTA */}
    <div className="w-24 h-7 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_0_20px_rgba(255,120,0,0.5)] mb-5" />

    {/* Analytics */}
    <div className="flex items-end gap-2 h-14">

      <div className="w-5 rounded-t bg-orange-500/40 h-5 animate-pulse" />

      <div className="w-5 rounded-t bg-orange-500/60 h-8 animate-pulse" />

      <div className="w-5 rounded-t bg-orange-500/80 h-11 animate-pulse" />

      <div className="w-5 rounded-t bg-red-500/70 h-7 animate-pulse" />

      <div className="w-5 rounded-t bg-orange-400/90 h-12 animate-pulse" />

    </div>

  </div>

  {/* Floating Metric */}
  <div className="absolute top-14 right-4 rounded-xl border border-orange-500/20 bg-black/60 px-3 py-2 backdrop-blur-md">
    <div className="text-[10px] text-gray-400">Conversion</div>
    <div className="text-sm font-bold text-green-400">+38%</div>
  </div>

  {/* Bottom Glow */}
  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-52 h-24 bg-orange-500/20 blur-3xl" />

</div>

          <h3 className="text-2xl font-bold mb-4 text-white">
            Modern Websites
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Lightning-fast, responsive websites that convert visitors into customers with cutting-edge design and optimization.
          </p>

        </CardContent>
      </Card>

      {/* AI FUNNELS */}
      <Card className="bg-gray-900/50 border border-orange-500/20 hover:border-orange-400/60 hover:shadow-[0_0_60px_rgba(255,120,0,0.18)] transition-all duration-500 group overflow-hidden backdrop-blur-xl hover:-translate-y-2">
        <CardContent className="p-8 text-center">

          <div className="relative mx-auto mb-8 w-full max-w-[320px] h-[220px] rounded-3xl overflow-hidden border border-orange-500/20 bg-black/50 backdrop-blur-xl shadow-[0_0_60px_rgba(255,120,0,0.12)] p-5">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent" />

  {/* Header */}
  <div className="relative flex items-center justify-between mb-5">

    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-orange-400">
        AI Funnels
      </p>

      <h4 className="text-white font-semibold text-lg">
        Live Lead System
      </h4>
    </div>

    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-[10px] text-green-400">
        LIVE
      </span>
    </div>

  </div>

  {/* Metrics */}
  <div className="flex gap-2 mb-5">

    <div className="flex-1 rounded-xl border border-orange-500/10 bg-black/40 p-2 text-center">
      <p className="text-orange-400 text-sm font-bold">
        72%
      </p>

      <p className="text-[9px] text-gray-400 uppercase">
        Conversion
      </p>
    </div>

    <div className="flex-1 rounded-xl border border-green-500/10 bg-black/40 p-2 text-center">
      <p className="text-green-400 text-sm font-bold">
        14
      </p>

      <p className="text-[9px] text-gray-400 uppercase">
        Leads
      </p>
    </div>

    <div className="flex-1 rounded-xl border border-purple-500/10 bg-black/40 p-2 text-center">
      <p className="text-purple-400 text-sm font-bold">
        11s
      </p>

      <p className="text-[9px] text-gray-400 uppercase">
        AI Reply
      </p>
    </div>

  </div>

  {/* Funnel Pipeline */}
  <div className="relative flex items-center justify-between mb-6">

    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-orange-500/20 via-red-500/40 to-orange-500/20" />

    {/* Step 1 */}
    <div className="relative z-10 flex flex-col items-center">

      <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
        <span className="text-[9px] text-blue-400">
          Ad
        </span>
      </div>

      <p className="text-[9px] text-gray-400 mt-2">
        Meta
      </p>

    </div>

    {/* Step 2 */}
    <div className="relative z-10 flex flex-col items-center">

      <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center animate-pulse">
        <span className="text-[9px] text-orange-400">
          Lead
        </span>
      </div>

      <p className="text-[9px] text-gray-400 mt-2">
        Capture
      </p>

    </div>

    {/* Step 3 */}
    <div className="relative z-10 flex flex-col items-center">

      <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
        <span className="text-[9px] text-purple-400">
          AI
        </span>
      </div>

      <p className="text-[9px] text-gray-400 mt-2">
        Follow-Up
      </p>

    </div>

    {/* Step 4 */}
    <div className="relative z-10 flex flex-col items-center">

      <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
        <span className="text-[9px] text-green-400">
          CRM
        </span>
      </div>

      <p className="text-[9px] text-gray-400 mt-2">
        Saved
      </p>

    </div>

  </div>

  {/* AI Message */}
  <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-3">

    <p className="text-[9px] text-gray-500 mb-2">
      AI SMS Preview
    </p>

    <div className="rounded-xl bg-black/40 border border-white/5 p-3">

      <p className="text-xs text-gray-200 leading-relaxed">
        Hey Sarah 👋 thanks for your interest.  
        Here’s your booking link.
      </p>

      <button className="mt-3 px-3 py-2 rounded-lg bg-orange-500 text-black text-[10px] font-semibold hover:bg-orange-400 transition-colors">
        Book Call
      </button>

    </div>

  </div>

</div>

          <h3 className="text-2xl font-bold mb-4 text-white">
            AI Funnels
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Intelligent sales funnels powered by AI that automatically nurture leads and maximize your conversion rates.
          </p>

        </CardContent>
      </Card>

      {/* AUTOMATION */}
      <Card className="bg-gray-900/50 border border-orange-500/20 hover:border-orange-400/60 hover:shadow-[0_0_60px_rgba(255,120,0,0.18)] transition-all duration-500 group overflow-hidden backdrop-blur-xl hover:-translate-y-2">
        <CardContent className="p-8 text-center">

  <div className="relative mx-auto mb-8 w-full max-w-[260px] h-[160px] rounded-2xl border border-orange-500/20 bg-black/50 overflow-hidden backdrop-blur-xl">

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />

    {/* Fake CRM Panel */}
    <div className="absolute top-4 left-4 right-4 rounded-xl border border-orange-500/10 bg-black/40 p-3">

      <div className="flex items-center justify-between mb-3">
        <div className="text-[10px] text-orange-300">
          CRM System
        </div>

        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      </div>

      {/* Contact Rows */}
      <div className="space-y-2">

        <div className="flex items-center justify-between text-[9px]">
          <span className="text-gray-300">New Lead</span>
          <span className="text-green-400">Qualified</span>
        </div>

        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-4/5 bg-orange-500 animate-pulse rounded-full" />
        </div>

        <div className="flex items-center justify-between text-[9px]">
          <span className="text-gray-300">Follow-Up</span>
          <span className="text-orange-300">Sent</span>
        </div>

        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full w-3/5 bg-red-500 animate-pulse rounded-full"
            style={{ animationDelay: "1s" }}
          />
        </div>

      </div>
    </div>

    {/* Floating Notifications */}
    <div className="absolute bottom-5 left-4 text-[10px] text-green-400 animate-pulse">
      + Client Booked Call
    </div>

    <div
      className="absolute bottom-10 right-4 text-[10px] text-orange-300 animate-pulse"
      style={{ animationDelay: "1s" }}
    >
      AI Email Sent
    </div>

    {/* Glow Orb */}
    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-20 bg-orange-500/20 blur-3xl" />

  </div>

  <h3 className="text-2xl font-bold mb-4 text-white">
    Automation
  </h3>

  <p className="text-gray-300 leading-relaxed">
    Streamline your business operations with smart automation systems that manage leads, follow-ups, bookings, and client workflows automatically.
  </p>

</CardContent>
      </Card>

    </div>
  </div>
</section>

  
            {/* Client Testimonials */}
      <section
        id="testimonials"
        className="relative overflow-hidden py-32 bg-black"
      >
        {/* Atmospheric Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,120,0,0.10),transparent_50%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000,#030712,#000000)]" />

        {/* Ambient Glow */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[160px]" />

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Client Success Stories
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients say about working with Werkhaus.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white/[0.03] backdrop-blur-xl border border-orange-500/20 hover:border-orange-400/40 hover:bg-white/[0.05] transition-all duration-500"
                >
                  <CardContent className="p-8">

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-orange-500 fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 border border-orange-500/20"
                      />

                      <div>
                        <h4 className="font-bold text-white">
                          {testimonial.name}
                        </h4>

                        <p className="text-orange-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Get a Free Quote
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Ready to transform your business? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
                Werkhaus
              </div>
              <p className="text-gray-400 mb-4">
                Empowering entrepreneurs with AI-powered web design and automation solutions.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Modern Websites
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    AI Funnels
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-orange-500" />
                  info@werkhausagency.com
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-orange-500" />
                  +1 (205) 504 0802
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                  Miami, FL
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Werkhaus. All rights reserved. Built with passion for entrepreneurs.</p>
          </div>
        </div>
      </footer>

      {/* 🔥 MODAL GOES HERE */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-900 border border-orange-500/20 rounded-2xl p-8 w-full max-w-lg relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2 text-white">
              Let’s Build Something Iconic
            </h2>

            <p className="text-sm text-gray-400 mb-6">
              Takes less than 60 seconds.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)

                await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    projectType: formData.get("projectType"),
                    details: formData.get("details"),
                  }),
                })

                setOpen(false)
                alert("🔥 Submitted successfully!")
              }}
              className="space-y-4"
            >
              <input name="name" placeholder="Name" required className="w-full p-3 rounded bg-black border border-gray-700 text-white" />
              <input name="email" placeholder="Email" required className="w-full p-3 rounded bg-black border border-gray-700 text-white" />
              <input name="projectType" placeholder="Project Type" required className="w-full p-3 rounded bg-black border border-gray-700 text-white" />
              <textarea name="details" placeholder="Details" required className="w-full p-3 rounded bg-black border border-gray-700 text-white" />

              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold">
                Submit →
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}