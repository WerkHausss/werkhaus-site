"use client"

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
        "Werkhaus transformed our online presence completely. Our conversion rate increased by 340% in just 3 months!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Marcus Rodriguez",
      role: "SaaS Entrepreneur",
      content:
        "The AI-powered automation tools saved us 20+ hours per week. Best investment we've made for our startup.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Veronica Franco",
      role: "Digital Marketing Agency",
      content: "Professional, fast, and results-driven. Werkhaus delivered exactly what they promised and more.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const portfolioItems = [
    {
      title: "TechFlow SaaS",
      category: "SaaS Platform",
      image: "/images/techflow-saas.png",
      description: "AI-powered project management platform",
    },
    {
      title: "EcoMarket",
      category: "E-commerce",
      image: "/images/ecomarket.png",
      description: "Sustainable products marketplace",
    },
    {
      title: "FinanceAI",
      category: "Fintech",
      image: "/images/financeai.png",
      description: "Automated investment platform",
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
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/10 to-black"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Floating Tech Icons and Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Icons */}
          <div
            className="absolute top-20 left-10 opacity-20 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "6s" }}
          >
            <Code className="w-8 h-8 text-orange-400" />
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
            <Zap className="w-8 h-8 text-orange-400" />
          </div>
          <div
            className="absolute bottom-20 right-1/4 opacity-10 animate-pulse"
            style={{ animationDelay: "5s", animationDuration: "6s" }}
          >
            <Monitor className="w-10 h-10 text-red-400" />
          </div>

          {/* Geometric Shapes */}
          <div
            className="absolute top-16 right-1/3 w-4 h-4 bg-orange-500/20 rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute top-2/3 left-20 w-6 h-6 bg-red-500/15 rounded-full animate-ping"
            style={{ animationDelay: "2s", animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-16 w-3 h-3 bg-orange-400/25 rotate-12 animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-1/4 right-12 w-8 h-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 animate-pulse"
            style={{ animationDelay: "3s", animationDuration: "6s" }}
          ></div>
          <div
            className="absolute bottom-1/2 left-8 w-2 h-8 bg-gradient-to-b from-red-400/15 to-orange-400/15 animate-bounce"
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
            <div className="flex justify-center space-x-6 mb-8">
              <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                <Clock className="w-4 h-4 mr-2" />
                48hr Turnaround
              </Badge>
              <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                <Users className="w-4 h-4 mr-2" />
                500+ Happy Clients
              </Badge>
              <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                <Award className="w-4 h-4 mr-2" />
                Award Winning
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
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

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empower your business with AI-powered web design and automation tools. We help entrepreneurs transform
              ideas into profitable digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 text-lg group transition-all duration-300 transform hover:scale-105"
              >
                Launch My Site
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold px-8 py-4 text-lg transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Core Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <service.icon className="w-16 h-16 mx-auto text-orange-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Previews */}
      <section id="portfolio" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Portfolio Showcase
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results for real businesses. See how we've transformed ideas into success stories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-orange-500/20 text-orange-400 border-orange-500/30">{item.category}</Badge>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black">
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
                className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-orange-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                  arlo.beautyco@gmail.com
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
    </div>
  )
}
