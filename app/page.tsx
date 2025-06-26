
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
  Flame,
  Droplet,
  Wind,
  ThermometerSun,
  Quote,
  Send,
  Facebook,
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
      title: "Installation Chauffage",
      description: "Installation complète de systèmes de chauffage modernes et économiques pour votre confort optimal.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Flame className="w-6 h-6" />,
      features: ["Chaudières gaz/mazout", "Pompes à chaleur", "Chauffage sol"],
      color: "from-[#007BBD] to-[#08C5F7]",
    },
    {
      title: "Sanitaire",
      description: "Solutions sanitaires complètes pour salles de bain et installations d'eau avec finitions soignées.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Droplet className="w-6 h-6" />,
      features: ["Installation complète", "Rénovation sanitaire", "Dépannage rapide"],
      color: "from-[#8CC54A] to-[#7da036]",
    },
    {
      title: "Ventilation",
      description: "Systèmes de ventilation performants pour un air sain et une régulation optimale de l'humidité.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Wind className="w-6 h-6" />,
      features: ["VMC simple/double flux", "Ventilation industrielle", "Entretien régulier"],
      color: "from-[#F79431] to-[#ff9f4d]",
    },
    {
      title: "Entretien & Maintenance",
      description: "Entretien régulier et maintenance préventive pour garantir la longévité de vos installations.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Wrench className="w-6 h-6" />,
      features: ["Contrats d'entretien", "Dépannage 24/7", "Diagnostic approfondi"],
      color: "from-[#007BBD] to-[#0066a1]",
    },
    {
      title: "Économies d'Énergie",
      description: "Solutions pour réduire votre consommation énergétique et vos factures de chauffage.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <ThermometerSun className="w-6 h-6" />,
      features: ["Audit énergétique", "Optimisation système", "Conseils personnalisés"],
      color: "from-[#8CC54A] to-[#6fa038]",
    },
    {
      title: "Urgences 24/7",
      description: "Service d'intervention rapide disponible 24h/24 et 7j/7 pour tous vos problèmes urgents.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Zap className="w-6 h-6" />,
      features: ["Intervention rapide", "Disponibilité 24/7", "Devis transparent"],
      color: "from-[#EF313A] to-[#d62830]",
    },
  ]

  const specialties = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Chauffage Central",
      description: "Expertise en systèmes de chauffage central performants",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Régulation Intelligente",
      description: "Systèmes de régulation pour un confort optimal",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Conformité Légale",
      description: "Respect des normes wallonnes et certifications",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Garantie Qualité",
      description: "Travail certifié avec garantie étendue",
    },
  ]

  const testimonials = [
    {
      name: "Sophie Martin",
      location: "Liège",
      text: "Excellente intervention pour l'installation de notre nouvelle chaudière. Équipe professionnelle, travail propre et soigné. Les conseils pour les économies d'énergie sont très appréciés.",
      rating: 5,
      project: "Installation chaudière",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Jean Dubois",
      location: "Verviers",
      text: "Service d'urgence impeccable ! Fuite réparée en moins de 2h un dimanche. Prix correct et transparence totale. Je recommande vivement Monte & Chauffe.",
      rating: 5,
      project: "Dépannage urgent",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Marie Laurent",
      location: "Spa",
      text: "Entretien annuel de notre chaudière mazout toujours parfait. L'équipe est ponctuelle, efficace et de bon conseil. Un vrai service de qualité.",
      rating: 5,
      project: "Entretien chaudière",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Pierre Moreau",
      location: "Eupen",
      text: "Installation complète du chauffage et sanitaire dans notre nouvelle maison. Travail remarquable, délais respectés et équipe très professionnelle.",
      rating: 5,
      project: "Installation complète",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const faqs = [
    {
      question: "Proposez-vous des contrats d'entretien pour les chaudières ?",
      answer:
        "Oui, nous proposons des contrats d'entretien annuels pour tous types de chaudières (gaz, mazout). Ces contrats incluent la visite annuelle obligatoire, le nettoyage, les réglages et un tarif préférentiel sur les dépannages.",
    },
    {
      question: "Quelles sont vos zones d'intervention ?",
      answer:
        "Nous intervenons principalement sur Liège et sa région (04/374.17.53) ainsi que sur Verviers et environs (087/34.07.29). Pour les urgences, nous couvrons une zone élargie.",
    },
    {
      question: "Êtes-vous disponibles pour les urgences ?",
      answer:
        "Oui, nous proposons un service d'urgence 24h/24 et 7j/7. Vous pouvez nous contacter au 0497/83.16.75 (également WhatsApp) pour toute intervention urgente.",
    },
    {
      question: "Qu'est-ce que le diagnostic approfondi obligatoire ?",
      answer:
        "Le diagnostic approfondi est une obligation légale en Wallonie pour les propriétaires. Il permet d'évaluer la performance énergétique de votre installation et d'identifier les améliorations possibles pour réaliser des économies d'énergie.",
    },
    {
      question: "Travaillez-vous avec toutes les marques de chaudières ?",
      answer:
        "Oui, nos techniciens sont formés et certifiés pour intervenir sur toutes les grandes marques de chaudières et systèmes de chauffage du marché.",
    },
    {
      question: "Comment puis-je réduire ma consommation de chauffage ?",
      answer:
        "Nous proposons des audits énergétiques complets pour identifier les points d'amélioration : isolation, régulation, entretien régulier, remplacement d'équipements vétustes. Nos experts vous conseillent les solutions les plus adaptées à votre situation.",
    },
  ]

  const stats = [
    { number: "15+", label: "Années d'Expérience", icon: <Award className="w-6 h-6" /> },
    { number: "1000+", label: "Clients Satisfaits", icon: <Heart className="w-6 h-6" /> },
    { number: "24/7", label: "Service Urgence", icon: <Clock className="w-6 h-6" /> },
    { number: "100%", label: "Conformité Légale", icon: <Shield className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-white text-gray-800 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <span className="text-2xl font-black text-[#007BBD]">Monte</span>
                <span className="text-2xl font-black text-[#F79431]">&</span>
                <span className="text-2xl font-black text-[#007BBD]">Chauffe</span>
                <div className="ml-2 flex">
                  <div className="w-2 h-6 bg-[#08C5F7] rounded-full"></div>
                  <div className="w-2 h-6 bg-[#8CC54A] rounded-full -ml-1"></div>
                  <div className="w-2 h-6 bg-[#F79431] rounded-full -ml-1"></div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#accueil" className="hover:text-[#007BBD] transition-all duration-300 font-medium">
                Accueil
              </a>
              <div className="relative group">
                <button className="hover:text-[#007BBD] transition-all duration-300 flex items-center font-medium">
                  Nos Services <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <a href="#qui-sommes-nous" className="hover:text-[#007BBD] transition-all duration-300 font-medium">
                À Propos
              </a>
              <a href="#temoignages" className="hover:text-[#007BBD] transition-all duration-300 font-medium">
                Témoignages
              </a>
              <a href="#contact" className="hover:text-[#007BBD] transition-all duration-300 font-medium">
                Contact
              </a>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-[#007BBD] bg-[#007BBD]/10 px-4 py-2 rounded-full">
                <Phone className="w-4 h-4" />
                <span className="font-bold">0497/83.16.75</span>
              </div>
              <Button className="bg-[#007BBD] hover:bg-[#0066a1] text-white font-bold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
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
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a href="#accueil" className="hover:text-[#007BBD] transition-colors">
                  Accueil
                </a>
                <a href="#services" className="hover:text-[#007BBD] transition-colors">
                  Nos Services
                </a>
                <a href="#qui-sommes-nous" className="hover:text-[#007BBD] transition-colors">
                  À Propos
                </a>
                <a href="#temoignages" className="hover:text-[#007BBD] transition-colors">
                  Témoignages
                </a>
                <a href="#contact" className="hover:text-[#007BBD] transition-colors">
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
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#007BBD] via-[#0066a1] to-[#08C5F7]"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8CC54A]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F79431]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                Qualité & Fiabilité depuis 15 ans
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block">Votre Confort,</span>
              <span className="bg-gradient-to-r from-[#8CC54A] via-[#F79431] to-[#8CC54A] bg-clip-text text-transparent">
                Notre Priorité
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-6 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Installation de chauffage, sanitaire et ventilation réalisée exclusivement avec qualité et fiabilité
            </p>

            <p className="text-lg lg:text-xl mb-12 font-semibold max-w-2xl mx-auto">
              L'équilibre entre le budget et votre satisfaction au cœur du projet
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#8CC54A] hover:bg-[#7da036] text-white text-lg px-10 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="mr-3 w-6 h-6" />
                Appel Gratuit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#007BBD] text-lg px-10 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageSquare className="mr-3 w-6 h-6" />
                WhatsApp
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-[#8CC54A] mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-[#F79431] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <div>
                <div className="font-bold">Liège et région</div>
                <div className="text-lg">04 / 374.17.53</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <div>
                <div className="font-bold">Verviers et région</div>
                <div className="text-lg">087 / 34.07.29</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5" />
              <div>
                <div className="font-bold">Mobile & WhatsApp</div>
                <div className="text-lg">0497 / 83.16.75</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous Section */}
      <section id="qui-sommes-nous" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-[#007BBD] text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                  Notre Expertise
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Monte & Chauffe : <span className="text-[#007BBD]">Votre Partenaire de Confiance</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Depuis plus de <strong className="text-[#007BBD]">15 ans</strong>, Monte & Chauffe est votre
                  spécialiste en chauffage, sanitaire et ventilation dans les régions de Liège et Verviers.
                </p>
                <p>
                  Notre équipe d'experts certifiés met son savoir-faire au service de votre confort, en respectant
                  scrupuleusement la législation wallonne et en privilégiant les solutions économes en énergie.
                </p>
                <p>
                  <strong className="text-gray-900">Notre engagement :</strong> trouver l'équilibre parfait entre votre
                  budget et la qualité des installations, pour votre satisfaction totale.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <Shield className="w-8 h-8 text-[#007BBD] mb-3" />
                  <div className="font-bold text-gray-900 mb-1">Conformité Garantie</div>
                  <div className="text-sm text-gray-600">Respect législation wallonne</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <Award className="w-8 h-8 text-[#007BBD] mb-3" />
                  <div className="font-bold text-gray-900 mb-1">Certifications</div>
                  <div className="text-sm text-gray-600">Techniciens agréés toutes marques</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#007BBD]/20 to-transparent rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-[#007BBD] to-[#08C5F7] rounded-3xl p-12 text-white">
                <Flame className="w-24 h-24 mx-auto mb-6 opacity-20" />
                <h3 className="text-3xl font-bold text-center mb-6">Nos Valeurs</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#8CC54A]" />
                    <span>Qualité et fiabilité garanties</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#8CC54A]" />
                    <span>Service client personnalisé</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#8CC54A]" />
                    <span>Prix transparents et justes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#8CC54A]" />
                    <span>Disponibilité 24/7 pour urgences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#007BBD] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Nos Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Des Solutions <span className="text-[#007BBD]">Complètes</span> pour Votre Confort
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              De l'installation à l'entretien, nous couvrons tous vos besoins en chauffage, sanitaire et ventilation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color}`}></div>
                    <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-black text-white mb-2">{service.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#8CC54A] flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-[#007BBD] hover:bg-[#0066a1] text-white font-bold py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                      En savoir plus
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-gradient-to-r from-[#007BBD] to-[#08C5F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Pourquoi Choisir <span className="text-[#8CC54A]">Monte & Chauffe</span> ?
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Une expertise reconnue au service de votre confort thermique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                  <div className="text-[#8CC54A] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{specialty.title}</h3>
                  <p className="text-gray-100 leading-relaxed">{specialty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#007BBD] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Notre Méthode
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Un Service <span className="text-[#007BBD]">Transparent</span> et Efficace
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Contact",
                desc: "Premier échange",
                icon: <MessageSquare className="w-8 h-8" />,
                detail: "Discussion de vos besoins et prise de rendez-vous",
              },
              {
                title: "Diagnostic",
                desc: "Analyse complète",
                icon: <Eye className="w-8 h-8" />,
                detail: "Évaluation sur place et devis détaillé gratuit",
              },
              {
                title: "Installation",
                desc: "Travaux de qualité",
                icon: <Wrench className="w-8 h-8" />,
                detail: "Réalisation par nos techniciens certifiés",
              },
              {
                title: "Suivi",
                desc: "Service après-vente",
                icon: <Shield className="w-8 h-8" />,
                detail: "Garantie et contrat d'entretien disponible",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#007BBD] to-[#08C5F7] text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto shadow-xl">
                    {index + 1}
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-lg">
                  <div className="text-[#007BBD] mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-[#F79431] font-semibold mb-3">{step.desc}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#007BBD] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Témoignages
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              La Satisfaction de Nos <span className="text-[#007BBD]">Clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de nos services
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#F79431] fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#007BBD] mb-4" />
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#007BBD] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location} - {testimonial.project}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#8CC54A] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Questions Fréquentes
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
              Tout Ce Que Vous Devez <span className="text-[#8CC54A]">Savoir</span>
            </h2>
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
                    className={`w-6 h-6 text-[#8CC54A] transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-8">
                    <div className="border-t border-white/20 pt-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-[#007BBD] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Contact
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Besoin d'un <span className="text-[#007BBD]">Expert</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contactez-nous pour un devis gratuit ou une intervention rapide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Nous Sommes Là Pour Vous</h3>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Contacts Directs</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#007BBD] text-white rounded-xl">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Liège et région</p>
                        <p className="text-[#007BBD] text-xl font-bold">04 / 374.17.53</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#007BBD] text-white rounded-xl">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Verviers et région</p>
                        <p className="text-[#007BBD] text-xl font-bold">087 / 34.07.29</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#8CC54A] text-white rounded-xl">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Mobile & WhatsApp</p>
                        <p className="text-[#8CC54A] text-xl font-bold">0497 / 83.16.75</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">Adresse & Horaires</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-[#F79431] text-white rounded-xl">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Adresse</p>
                        <p className="text-gray-700">Rue Fyon 10, 4800 Verviers</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-[#F79431] text-white rounded-xl">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Horaires</p>
                        <p className="text-gray-700">Lun-Ven: 08:00-18:00</p>
                        <p className="text-gray-500">Sam-Dim: Fermé</p>
                        <p className="text-[#EF313A] font-semibold mt-2">Urgences 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-[#007BBD] hover:bg-[#0066a1] text-white font-bold py-4 rounded-2xl shadow-xl">
                    <Phone className="mr-2 w-5 h-5" />
                    Appeler
                  </Button>
                  <Button className="flex-1 bg-[#8CC54A] hover:bg-[#7da036] text-white font-bold py-4 rounded-2xl shadow-xl">
                    <MessageSquare className="mr-2 w-5 h-5" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Demande de Devis Gratuit</h3>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nom *</label>
                        <input
                          type="text"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#007BBD] focus:outline-none transition-colors duration-300"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Prénom *</label>
                        <input
                          type="text"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#007BBD] focus:outline-none transition-colors duration-300"
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#007BBD] focus:outline-none transition-colors duration-300"
                        placeholder="Votre numéro de téléphone"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#007BBD] focus:outline-none transition-colors duration-300"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Type d'intervention *</label>
                      <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#007BBD] focus:outline-none transition-colors duration-300">
                        <option>Sélectionnez un service</option>
                        <option>Installation chauffage</option>
                        <option>Entretien chaudière</option>
                        <option>Dépannage urgent</option>
                        <option>Installation sanitaire</option>
                        <option>Système de ventilation</option>
                        <option>Diagnostic énergétique</option>
                        <option>Autre demande</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#007BBD] focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Décrivez votre projet ou votre problème..."
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#007BBD] to-[#08C5F7] hover:from-[#0066a1] hover:to-[#007BBD] text-white text-xl py-6 rounded-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300">
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
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-2xl font-black text-white">Monte</span>
                <span className="text-2xl font-black text-[#F79431]">&</span>
                <span className="text-2xl font-black text-white">Chauffe</span>
                <div className="ml-2 flex">
                  <div className="w-2 h-6 bg-[#08C5F7] rounded-full"></div>
                  <div className="w-2 h-6 bg-[#8CC54A] rounded-full -ml-1"></div>
                  <div className="w-2 h-6 bg-[#F79431] rounded-full -ml-1"></div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Votre spécialiste en chauffage, sanitaire et ventilation. Qualité, fiabilité et satisfaction garanties depuis plus de 15 ans.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="p-3 bg-[#007BBD] rounded-full hover:bg-[#0066a1] transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://wa.me/32497831675" className="p-3 bg-[#8CC54A] rounded-full hover:bg-[#7da036] transition">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-[#F79431]">Nos Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-[#8CC54A] transition-colors cursor-pointer">Chauffage</li>
                <li className="hover:text-[#8CC54A] transition-colors cursor-pointer">Sanitaire</li>
                <li className="hover:text-[#8CC54A] transition-colors cursor-pointer">Ventilation</li>
                <li className="hover:text-[#8CC54A] transition-colors cursor-pointer">Entretien</li>
                <li className="hover:text-[#8CC54A] transition-colors cursor-pointer">Dépannage 24/7</li>
                <li className="hover:text-[#8CC54A] transition-colors cursor-pointer">Diagnostic énergétique</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-[#F79431]">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Liège: 04 / 374.17.53</li>
                <li>Verviers: 087 / 34.07.29</li>
                <li>Mobile: 0497 / 83.16.75</li>
                <li>Rue Fyon 10, 4800 Verviers</li>
                <li className="text-[#8CC54A]">Urgences 24/7</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-center text-gray-400">
              <p>&copy; 2024 Monte & Chauffe. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
