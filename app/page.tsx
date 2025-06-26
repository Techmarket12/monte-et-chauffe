"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Home,
  Wrench,
  Shield,
  Clock,
  Users,
  Award,
  ChevronDown,
  Zap,
  Eye,
  Heart,
  Calendar,
  MessageSquare,
  Gauge,
  Building,
  Hammer,
  PaintBucket,
  Sun,
  Quote,
  PlayCircle,
  Download,
  BookOpen,
  Camera,
  MapPinIcon,
  Send,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      title: "Toitures Neuves Premium",
      description: "Conception et installation complète avec matériaux haut de gamme et garantie étendue.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Home className="w-6 h-6" />,
      features: ["Matériaux premium", "Garantie 20 ans", "Design personnalisé"],
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Rénovation Complète",
      description: "Transformation totale de votre toiture avec techniques modernes et isolation renforcée.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Wrench className="w-6 h-6" />,
      features: ["Isolation thermique", "Étanchéité parfaite", "Finitions soignées"],
      color: "from-purple-600 to-purple-800",
    },
    {
      title: "Entretiens Professionnels",
      description: "Maintenance préventive et curative pour prolonger la durée de vie de votre toiture.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Shield className="w-6 h-6" />,
      features: ["Démoussage écologique", "Traitement hydrofuge", "Inspection complète"],
      color: "from-green-600 to-green-800",
    },
    {
      title: "Interventions d'Urgence",
      description: "Service 24h/24 pour tous vos problèmes de toiture nécessitant une action immédiate.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Zap className="w-6 h-6" />,
      features: ["Disponible 24h/24", "Intervention rapide", "Réparation durable"],
      color: "from-red-600 to-red-800",
    },
    {
      title: "Bardages Modernes",
      description: "Solutions d'isolation et d'esthétique pour transformer l'apparence de votre façade.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Building className="w-6 h-6" />,
      features: ["Isolation renforcée", "Design contemporain", "Matériaux durables"],
      color: "from-indigo-600 to-indigo-800",
    },
    {
      title: "Panneaux Photovoltaïques",
      description: "Installation et entretien pour optimiser votre production d'énergie renouvelable.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Sun className="w-6 h-6" />,
      features: ["Installation certifiée", "Maintenance optimisée", "Rendement maximal"],
      color: "from-yellow-600 to-orange-600",
    },
  ]

  const specialties = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Charpenterie Traditionnelle",
      description: "Savoir-faire ancestral pour des structures durables",
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: "Zinguerie Artistique",
      description: "Finitions métalliques sur mesure et décoratives",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Diagnostic Précis",
      description: "Analyse complète avec rapport détaillé",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Performance Énergétique",
      description: "Optimisation de l'isolation et de l'étanchéité",
    },
  ]

  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Wanze",
      text: "Travail impeccable ! Jérôme et son équipe ont rénové notre toiture avec un professionnalisme remarquable. La transformation est spectaculaire et la qualité des finitions exceptionnelle.",
      rating: 5,
      project: "Rénovation complète",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Pierre Martin",
      location: "Huy",
      text: "Service rapide et efficace pour un dépannage urgent. Prix honnête et travail de qualité. L'équipe est arrivée dans l'heure et a résolu le problème définitivement.",
      rating: 5,
      project: "Dépannage d'urgence",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Sophie Laurent",
      location: "Andenne",
      text: "Excellent suivi du projet de A à Z. Devis clair, délais respectés et finitions parfaites. Une équipe de confiance que je recommande sans hésitation !",
      rating: 5,
      project: "Toiture neuve",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Jean-Claude Moreau",
      location: "Namur",
      text: "Installation de panneaux photovoltaïques parfaitement réalisée. Rendement optimal et service après-vente irréprochable. Un investissement rentable grâce à leur expertise.",
      rating: 5,
      project: "Panneaux solaires",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const faqs = [
    {
      question: "Proposez-vous des devis gratuits et sans engagement ?",
      answer:
        "Oui, nous proposons des devis gratuits et sans engagement. Nous nous déplaçons pour évaluer vos besoins et vous fournir une estimation précise avec un rapport détaillé.",
    },
    {
      question: "Quelle est la durée de garantie sur vos travaux ?",
      answer:
        "Nous offrons une garantie décennale sur tous nos travaux de toiture neuve et rénovation, ainsi qu'une garantie de 5 ans sur les travaux d'entretien et de réparation.",
    },
    {
      question: "Intervenez-vous en urgence et quels sont vos délais ?",
      answer:
        "Nous proposons un service d'urgence 24h/24 pour les fuites et problèmes critiques. Pour les autres interventions, nos délais sont généralement de 48h à 1 semaine selon la saison.",
    },
    {
      question: "Quels types de matériaux utilisez-vous ?",
      answer:
        "Nous travaillons exclusivement avec des matériaux de première qualité : tuiles en terre cuite, ardoises naturelles, zinc, cuivre, et matériaux d'isolation haute performance.",
    },
    {
      question: "Proposez-vous des solutions d'isolation et d'étanchéité ?",
      answer:
        "Absolument ! Nous intégrons des solutions d'isolation thermique et phonique performantes, ainsi que des systèmes d'étanchéité modernes pour optimiser l'efficacité énergétique.",
    },
    {
      question: "Travaillez-vous avec les assurances ?",
      answer:
        "Oui, nous avons l'habitude de travailler avec les compagnies d'assurance pour les sinistres. Nous vous accompagnons dans toutes les démarches administratives.",
    },
  ]

  const stats = [
    { number: "500+", label: "Projets Réalisés", icon: <Home className="w-6 h-6" /> },
    { number: "15+", label: "Années d'Expérience", icon: <Award className="w-6 h-6" /> },
    { number: "100%", label: "Clients Satisfaits", icon: <Heart className="w-6 h-6" /> },
    { number: "24h", label: "Service d'Urgence", icon: <Clock className="w-6 h-6" /> },
  ]

  const blogPosts = [
    {
      title: "Guide Complet : Quand et Comment Démousser sa Toiture",
      excerpt:
        "Découvrez les signes qui indiquent qu'il est temps de démousser votre toiture et les techniques professionnelles pour un résultat durable.",
      image: "/placeholder.svg?height=200&width=300",
      date: "15 Mars 2024",
      category: "Entretien",
      readTime: "5 min",
    },
    {
      title: "Rénovation de Toiture : Aides Financières en Wallonie 2024",
      excerpt:
        "Tour d'horizon complet des primes et aides disponibles pour vos projets de rénovation de toiture en Région wallonne.",
      image: "/placeholder.svg?height=200&width=300",
      date: "8 Mars 2024",
      category: "Financement",
      readTime: "7 min",
    },
    {
      title: "Bardage : Isolation et Esthétique pour votre Façade",
      excerpt: "Comment le bardage peut transformer votre maison tout en améliorant ses performances énergétiques.",
      image: "/placeholder.svg?height=200&width=300",
      date: "1 Mars 2024",
      category: "Bardage",
      readTime: "6 min",
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white sticky top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image src="/logo-jerhome.png" alt="Jer'Home Toiture" width={180} height={60} className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#accueil" className="hover:text-[#96C044] transition-all duration-300 font-medium">
                Accueil
              </a>
              <div className="relative group">
                <button className="hover:text-[#96C044] transition-all duration-300 flex items-center font-medium">
                  Nos Services <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <a href="#realisations" className="hover:text-[#96C044] transition-all duration-300 font-medium">
                Réalisations
              </a>
              <a href="#qui-sommes-nous" className="hover:text-[#96C044] transition-all duration-300 font-medium">
                À Propos
              </a>
              <a href="#temoignages" className="hover:text-[#96C044] transition-all duration-300 font-medium">
                Témoignages
              </a>
              <a href="#blog" className="hover:text-[#96C044] transition-all duration-300 font-medium">
                Blog
              </a>
              <a href="#contact" className="hover:text-[#96C044] transition-all duration-300 font-medium">
                Contact
              </a>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-[#96C044] bg-white/10 px-4 py-2 rounded-full">
                <Phone className="w-4 h-4" />
                <span className="font-bold">0496/22.95.90</span>
              </div>
              <Button className="bg-gradient-to-r from-[#96C044] to-[#7da036] hover:from-[#7da036] hover:to-[#96C044] text-white font-bold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                Devis Gratuit
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-700">
              <nav className="flex flex-col space-y-4">
                <a href="#accueil" className="hover:text-[#96C044] transition-colors">
                  Accueil
                </a>
                <a href="#services" className="hover:text-[#96C044] transition-colors">
                  Nos Services
                </a>
                <a href="#realisations" className="hover:text-[#96C044] transition-colors">
                  Réalisations
                </a>
                <a href="#qui-sommes-nous" className="hover:text-[#96C044] transition-colors">
                  À Propos
                </a>
                <a href="#temoignages" className="hover:text-[#96C044] transition-colors">
                  Témoignages
                </a>
                <a href="#contact" className="hover:text-[#96C044] transition-colors">
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="accueil"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9), rgba(51, 65, 85, 0.85)), url('https://cdn.discordapp.com/attachments/1086348722159484928/1387351657905651776/480317754_1200467115418472_505568237253095816_n.png?ex=685d076a&is=685bb5ea&hm=d6055596001a6acee2319ac22de406aae937e62fedc69049ba4764a05be370d0&')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#96C044]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block bg-gradient-to-r from-[#96C044] to-[#7da036] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                Excellence & Passion depuis 15 ans
              </span>
            </div>

            <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Votre Toit,
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#96C044] via-[#7da036] to-[#96C044] bg-clip-text text-transparent">
                Notre Passion
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-6 opacity-90 max-w-3xl mx-auto leading-relaxed">
              L'excellence par Jer'Home Toiture : Solutions complètes pour toutes vos toitures et bardages à Wanze et
              ses environs
            </p>

            <p className="text-lg lg:text-xl mb-12 text-[#96C044] font-bold max-w-2xl mx-auto">
              Jérôme Fourneau et son équipe d'experts, dédiés à la longévité et à la beauté de votre habitat
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#96C044] to-[#7da036] hover:from-[#7da036] hover:to-[#96C044] text-white text-lg px-10 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <PlayCircle className="mr-3 w-6 h-6" />
                Découvrir Nos Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-10 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="mr-3 w-6 h-6" />
                Appel Gratuit
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-[#96C044] mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#96C044]" />
        </div>
      </section>

      {/* Qui sommes-nous Section */}
      <section id="qui-sommes-nous" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#96C044]/20 to-transparent rounded-3xl"></div>
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="Jérôme Fourneau et son équipe"
                width={700}
                height={600}
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#96C044] to-[#7da036] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-black">15+</div>
                <div className="text-sm font-bold">Années d'Excellence</div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-[#96C044] to-[#7da036] text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                  Notre Histoire
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
                Jérôme Fourneau :<span className="text-[#96C044]"> Votre Toit, Ma Passion</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Depuis plus de <strong className="text-[#96C044]">15 ans</strong>, Jérôme Fourneau met son expertise
                  et sa passion au service de votre habitat. Basée à Wanze, notre entreprise familiale s'est forgée une
                  réputation d'excellence grâce à un savoir-faire artisanal allié aux techniques les plus modernes.
                </p>
                <p>
                  Chaque projet est unique et mérite une attention particulière. C'est pourquoi nous privilégions
                  l'écoute, le conseil personnalisé et un suivi rigoureux de chaque étape de votre projet.
                </p>
                <p>
                  Notre philosophie ? <strong className="text-slate-900">La qualité avant tout</strong>, des matériaux
                  premium aux finitions parfaites, en passant par le respect des délais et la transparence totale.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <Users className="w-8 h-8 text-[#96C044] mb-3" />
                  <div className="font-bold text-slate-900 mb-1">Équipe Experte</div>
                  <div className="text-sm text-gray-600">Artisans qualifiés et passionnés</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <Award className="w-8 h-8 text-[#96C044] mb-3" />
                  <div className="font-bold text-slate-900 mb-1">Certifications</div>
                  <div className="text-sm text-gray-600">Normes et qualité garanties</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-[#96C044] to-[#7da036] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Nos Spécialités
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Un Savoir-Faire <span className="text-[#96C044]">Unique</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des compétences techniques pointues au service de vos projets les plus exigeants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center hover:bg-gradient-to-br hover:from-[#96C044]/20 hover:to-[#7da036]/20 transition-all duration-500 transform hover:scale-105">
                  <div className="text-[#96C044] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{specialty.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{specialty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-gradient-to-r from-[#96C044] to-[#7da036] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Nos Services Premium
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Des Solutions <span className="text-[#96C044]">Complètes</span> pour Chaque Besoin
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              De la conception à l'entretien, nous couvrons tous vos besoins en matière de toiture et bardage avec une
              expertise reconnue
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                    <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-black text-white mb-2">{service.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#96C044] flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#96C044] to-[#7da036] hover:from-[#7da036] hover:to-[#96C044] text-white font-bold py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                      Découvrir ce Service
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-gradient-to-r from-[#96C044] to-[#7da036] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Notre Méthode
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              De Votre Idée à Votre <span className="text-[#96C044]">Toit Parfait</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un processus éprouvé en 5 étapes pour garantir votre satisfaction totale
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#96C044] to-[#7da036] transform -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {[
                {
                  title: "Contact & Écoute",
                  desc: "de Votre Projet",
                  icon: <MessageSquare className="w-8 h-8" />,
                  detail: "Première prise de contact pour comprendre vos besoins et attentes",
                },
                {
                  title: "Visite sur Site",
                  desc: "& Devis Gratuit",
                  icon: <Eye className="w-8 h-8" />,
                  detail: "Diagnostic complet et établissement d'un devis détaillé et transparent",
                },
                {
                  title: "Planification",
                  desc: "& Choix des Matériaux",
                  icon: <Calendar className="w-8 h-8" />,
                  detail: "Sélection des meilleurs matériaux et planification optimale des travaux",
                },
                {
                  title: "Réalisation",
                  desc: "par l'Équipe Fourneau",
                  icon: <Hammer className="w-8 h-8" />,
                  detail: "Exécution des travaux avec le plus grand soin et respect des délais",
                },
                {
                  title: "Vérification",
                  desc: "& Garantie",
                  icon: <Shield className="w-8 h-8" />,
                  detail: "Contrôle qualité final et mise en place de nos garanties étendues",
                },
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#96C044] to-[#7da036] text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <div className="absolute -top-2 -left-2 w-24 h-24 border-2 border-[#96C044]/30 rounded-full group-hover:border-[#96C044] transition-colors duration-300"></div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 group-hover:bg-white/20 transition-all duration-300">
                    <div className="text-[#96C044] mb-4 flex justify-center">{step.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-[#96C044] font-semibold mb-3">{step.desc}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section id="realisations" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-gradient-to-r from-[#96C044] to-[#7da036] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Portfolio
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              L'Excellence de Nos <span className="text-[#96C044]">Réalisations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos projets les plus remarquables et laissez-vous inspirer
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/placeholder.svg?height=600&width=1200" alt="Projet vedette" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-[#96C044] px-4 py-2 rounded-full text-sm font-bold">Projet Vedette</span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    Rénovation Complète
                  </span>
                </div>
                <h3 className="text-3xl lg:text-5xl font-black mb-4">Villa Moderne - Wanze</h3>
                <p className="text-lg lg:text-xl opacity-90 max-w-2xl">
                  Transformation complète d'une toiture traditionnelle en toiture moderne avec isolation renforcée et
                  panneaux photovoltaïques intégrés.
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Toiture Ardoise", location: "Huy", type: "Neuve" },
              { title: "Bardage Moderne", location: "Andenne", type: "Rénovation" },
              { title: "Démoussage Pro", location: "Namur", type: "Entretien" },
              { title: "Réparation Urgente", location: "Wanze", type: "Dépannage" },
              { title: "Isolation Renforcée", location: "Liège", type: "Rénovation" },
              { title: "Panneaux Solaires", location: "Seraing", type: "Installation" },
              { title: "Charpente Traditionnelle", location: "Verviers", type: "Neuve" },
              { title: "Zinguerie Artistique", location: "Spa", type: "Spécialité" },
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={`/placeholder.svg?height=300&width=400`}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-[#96C044] px-2 py-1 rounded text-xs font-bold">{project.type}</span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">{project.title}</h4>
                    <p className="text-sm opacity-90">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-[#96C044] to-[#7da036] hover:from-[#7da036] hover:to-[#96C044] text-white text-lg px-10 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Camera className="mr-3 w-6 h-6" />
              Voir Toute Notre Galerie
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-gradient-to-r from-[#96C044] to-[#7da036] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Témoignages
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Ils Nous Font <span className="text-[#96C044]">Confiance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La satisfaction de nos clients est notre plus belle récompense
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <Quote className="w-16 h-16 text-[#96C044] mx-auto mb-8" />
                <p className="text-2xl lg:text-3xl text-gray-700 font-medium leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center justify-center space-x-6">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-[#96C044]"
                  />
                  <div className="text-left">
                    <div className="font-bold text-xl text-slate-900">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].location}</div>
                    <div className="text-[#96C044] font-semibold text-sm">
                      {testimonials[currentTestimonial].project}
                    </div>
                    <div className="flex items-center mt-2">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text.substring(0, 120)}..."</p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-gradient-to-r from-[#96C044] to-[#7da036] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Blog & Conseils
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              L'Expertise à Votre <span className="text-[#96C044]">Portée</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nos conseils d'experts pour un toit en parfaite santé
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#96C044] text-white px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <Button
                    variant="outline"
                    className="border-[#96C044] text-[#96C044] hover:bg-[#96C044] hover:text-white font-bold"
                  >
                    <BookOpen className="mr-2 w-4 h-4" />
                    Lire l'Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-[#96C044] to-[#7da036] hover:from-[#7da036] hover:to-[#96C044] text-white text-lg px-10 py-6 rounded-full font-bold shadow-2xl">
              Voir Tous Nos Articles
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-24 bg-gradient-to-br from-[#96C044] via-[#7da036] to-[#96C044]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Intervention Rapide à <span className="text-slate-900">Wanze</span> et Alentours
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Jer'Home Toiture se situe à Wanze et intervient dans toute la région avec des délais d'intervention
              optimisés
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                <MapPinIcon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Zone Principale</h3>
                <p className="text-white/90">Wanze et communes limitrophes</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                <Clock className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Délai d'Intervention</h3>
                <p className="text-white/90">24h pour les urgences</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Contact Direct</h3>
                <p className="text-white/90 font-bold text-lg">0496/22.95.90</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-gradient-to-r from-[#96C044] to-[#7da036] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Questions Fréquentes
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Vos Questions, <span className="text-[#96C044]">Nos Réponses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Toutes les informations essentielles pour votre projet de toiture
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden"
              >
                <button
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-white text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#96C044] transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-8">
                    <div className="border-t border-white/20 pt-6">
                      <p className="text-gray-300 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-[#96C044] to-[#7da036] hover:from-[#7da036] hover:to-[#96C044] text-white text-lg px-10 py-6 rounded-full font-bold shadow-2xl">
              <MessageSquare className="mr-3 w-6 h-6" />
              Poser une Question
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-gradient-to-r from-[#96C044] to-[#7da036] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Contact
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Prêt à Réaliser Votre <span className="text-[#96C044]">Projet</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contactez-nous dès maintenant pour un devis gratuit et personnalisé
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Parlons de Votre Projet</h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-gradient-to-br from-[#96C044] to-[#7da036] text-white rounded-2xl shadow-lg">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2">Téléphone</h4>
                    <p className="text-[#96C044] text-2xl font-black mb-2">0496/22.95.90</p>
                    <p className="text-gray-600">Disponible 7j/7 pour les urgences</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-gradient-to-br from-[#96C044] to-[#7da036] text-white rounded-2xl shadow-lg">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2">Email</h4>
                    <p className="text-gray-700 text-lg mb-2">info@jerhometoiture.be</p>
                    <p className="text-gray-600">Réponse sous 24h garantie</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-gradient-to-br from-[#96C044] to-[#7da036] text-white rounded-2xl shadow-lg">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2">Adresse</h4>
                    <p className="text-gray-700 text-lg mb-2">Wanze, Belgique</p>
                    <p className="text-gray-600">Zone d'intervention étendue</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-12 space-y-4">
                <Button className="w-full bg-gradient-to-r from-[#96C044] to-[#7da036] hover:from-[#7da036] hover:to-[#96C044] text-white text-lg py-6 rounded-2xl font-bold shadow-xl">
                  <Phone className="mr-3 w-6 h-6" />
                  Appeler Maintenant
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#96C044] text-[#96C044] hover:bg-[#96C044] hover:text-white text-lg py-6 rounded-2xl font-bold"
                >
                  <Download className="mr-3 w-6 h-6" />
                  Télécharger Notre Brochure
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Demande de Devis Gratuit</h3>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Prénom *</label>
                        <input
                          type="text"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#96C044] focus:outline-none transition-colors duration-300"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nom *</label>
                        <input
                          type="text"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#96C044] focus:outline-none transition-colors duration-300"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#96C044] focus:outline-none transition-colors duration-300"
                        placeholder="Votre numéro de téléphone"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#96C044] focus:outline-none transition-colors duration-300"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Type de service *</label>
                      <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#96C044] focus:outline-none transition-colors duration-300">
                        <option>Sélectionnez un service</option>
                        <option>Toiture Neuve</option>
                        <option>Rénovation Complète</option>
                        <option>Entretien & Démoussage</option>
                        <option>Dépannage Urgent</option>
                        <option>Bardage</option>
                        <option>Panneaux Photovoltaïques</option>
                        <option>Autre / Conseil</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Décrivez votre projet *</label>
                      <textarea
                        rows={5}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#96C044] focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Décrivez-nous votre projet en détail : type de toiture, surface approximative, problèmes rencontrés, délais souhaités..."
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1" />
                      <p className="text-sm text-gray-600">
                        J'accepte d'être contacté par Jer'Home Toiture concernant ma demande et je consens au traitement
                        de mes données personnelles.
                      </p>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#96C044] to-[#7da036] hover:from-[#7da036] hover:to-[#96C044] text-white text-xl py-6 rounded-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300">
                      <Send className="mr-3 w-6 h-6" />
                      Envoyer ma Demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Image
                src="/logo-jerhome.png"
                alt="Jer'Home Toiture"
                width={200}
                height={70}
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
                Votre toit, ma passion. L'expertise au service de votre foyer depuis plus de 15 ans à Wanze et ses
                environs.
              </p>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#96C044] rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#96C044] font-bold text-xl">0496/22.95.90</p>
                  <p className="text-gray-400 text-sm">Service d'urgence 24h/24</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-[#96C044]">Nos Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-[#96C044] transition-colors cursor-pointer">Toitures Neuves</li>
                <li className="hover:text-[#96C044] transition-colors cursor-pointer">Rénovations</li>
                <li className="hover:text-[#96C044] transition-colors cursor-pointer">Entretiens & Démoussage</li>
                <li className="hover:text-[#96C044] transition-colors cursor-pointer">Dépannages Urgents</li>
                <li className="hover:text-[#96C044] transition-colors cursor-pointer">Bardages</li>
                <li className="hover:text-[#96C044] transition-colors cursor-pointer">Panneaux Photovoltaïques</li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-[#96C044]">Liens Utiles</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-[#96C044] transition-colors cursor-pointer">À Propos</li>
                <li className="hover:text-[#96C044] transition-colors cursor-pointer">Nos Réalisations</li>
                <li className="hover:text-[#96C044] transition-colors cursor-pointer">Blog & Conseils</li>
                <li className="hover:text-[#96C044] transition-colors cursor-pointer">Témoignages</li>
                <li className="hover:text-[#96C044] transition-colors cursor-pointer">Devis Gratuit</li>
                <li className="hover:text-[#96C044] transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                <p>&copy; 2024 Jer'Home Toiture. Tous droits réservés.</p>
              </div>
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-[#96C044] transition-colors">
                  Mentions Légales
                </a>
                <a href="#" className="hover:text-[#96C044] transition-colors">
                  Politique de Confidentialité
                </a>
                <a href="#" className="hover:text-[#96C044] transition-colors">
                  CGV
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
