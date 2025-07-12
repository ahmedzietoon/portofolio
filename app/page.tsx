"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "skills", "portfolio", "military", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "military", label: "Military Service" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Ahmed Saleh Zaitoon</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Ahmed Saleh Zaitoon</h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
              Civil Engineer | Steel Detailing & 3D Modeling Specialist
            </p>
            <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed mb-8">
              With a passion for precision and innovation, I deliver constructible 3D models and detailed shop drawings
              using Tekla Structures, Revit, and advanced automation tools. My international experience spans industrial
              and architectural projects, ensuring seamless collaboration between design and construction teams.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("portfolio")}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg"
            >
              View Projects
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
            >
              <a
                href="https://1drv.ms/w/c/7c5e6e77887b13c7/ER6Wh_uKOxtMm1BGWZ2NHeEB3T07jQdd_U7pFI14zempaA?e=YLJ5bB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Delivered 20+ projects across USA and Saudi Arabia
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Reduced fabrication errors by more than 50% through automation, custom components & applications
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Developed custom Tekla plugins for workflow automation
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Story</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Growing up in Kafr Dawar, Egypt, I was fascinated by how structures were built to withstand time and
                  elements. This curiosity led me to pursue a B.Sc. in Civil Engineering at Alexandria University, where
                  I discovered my passion for steel detailing and 3D modeling.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My career has been driven by a commitment to precision and efficiency, using tools like Tekla
                  Structures and Revit to create models that are both accurate and constructible. I thrive on solving
                  complex engineering challenges and collaborating with teams to bring designs to life.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Engineering Philosophy</h3>
                <p className="text-gray-600 leading-relaxed">
                  I believe in bridging the gap between design and construction through clear communication and
                  meticulous attention to detail. My work focuses on creating models that are not only technically sound
                  but also practical for fabrication and erection, minimizing errors and delays.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Career Goals</h3>
                <p className="text-gray-600 leading-relaxed">
                  My goal is to lead innovation in steel detailing by integrating advanced automation and parametric
                  design, pushing the boundaries of efficiency and accuracy in structural engineering.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl shadow-2xl overflow-hidden">
                  <img src="/images/HeadShot.png" alt="Professional Headshot" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Education & Certifications</h2>

          <div className="space-y-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      B.Sc. Civil Engineering, Alexandria University
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      Class of 2022, Graduated with Distinction (Grade: Very Good "Ranked 30th")
                    </p>

                    <div className="mb-6">
                      <p className="text-gray-700 mb-3">Completed rigorous coursework in:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {[
                          "Structural Analysis and Design",
                          "Steel Structures (AISC, Eurocode)",
                          "Building Information Modeling (BIM)",
                          "Computer-Aided Design (CAD)",
                          "Finite Element Analysis",
                        ].map((course, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span className="text-gray-600">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        Graduation Project: Steel Industrial Building
                      </h4>
                      <p className="text-gray-700 mb-3">
                        Designed and detailed a 4200 sqm steel industrial Building, including complex connections and
                        erection plans. Achieved an Excellent grade for precision and innovation.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-gray-900">Scope:</p>
                          <p className="text-gray-600">
                            Full structural modeling, connection design, shop drawings, and material take-offs.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Tools:</p>
                          <p className="text-gray-600">Tekla Structures, SAP2000, AutoCAD, IDEA StatiCa, MS Excel</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img
                          src="/images/grad1.png"
                          alt="Graduation Project 1"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img
                          src="/images/grad2.png"
                          alt="Graduation Project 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img
                          src="/images/grad3.png"
                          alt="Graduation Project 3"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img
                          src="/images/grad4.png"
                          alt="Graduation Project 4"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Certifications</h3>
                    <div className="space-y-3">
                      {[
                        "Tekla Structures Certified Steel Fundamentals Certification (2024)",
                        "Grasshopper Basics Training (2024)",
                        "Certified Human Resources Essentials (2021)",
                      ].map((cert, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                          <span className="text-gray-700">{cert}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-gray-600">
                      Ongoing learning through online courses in C# programming and advanced BIM workflows to enhance
                      automation capabilities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Professional Experience</h2>

          <div className="space-y-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Steel Detailer, Infinity Steel, Egypt</h3>
                    <p className="text-blue-600 font-medium mb-4">2024–Present</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Led detailing for over 20 international projects, producing high-quality 3D models and shop
                      drawings for industrial and architectural steel structures. Collaborated with architects,
                      engineers, and contractors to ensure seamless project execution.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          "Developed 3D models and shop drawings using Tekla Structures and Revit",
                          "Performed clash detection with Tekla and Navisworks, resolving 95% of issues pre-construction",
                          "Created custom Tekla components, reducing modeling time by more than 50%",
                          "Managed RFIs, improving project delivery timelines by 20%",
                          "Trained 3 junior detailers, enhancing team productivity",
                          "Created Shop Drawings for Rebars using Autodesk Revit",
                          "Helped The Estimation team with tight deadlines to create proposals for bid and MTO Models",
                          "Created An Application To create Beams and Columns from Cad Files to Streamline Modeling and Help Estimation",
                        ].map((responsibility, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600 text-sm">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Leadership & Teamwork</h4>
                      <p className="text-gray-700">
                        Spearheaded coordination meetings with fabrication teams, fostering clear communication.
                        Mentored junior engineers, promoting a culture of continuous learning and precision.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Junior Engineer, Egyptian Armed Forces Engineering Authority
                    </h3>
                    <p className="text-green-600 font-medium mb-4">2023–2024</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Supported infrastructure projects, including roads and military facilities, focusing on project
                      management, quality control, and site coordination.
                    </p>

                    <div className="space-y-3 mb-6">
                      {[
                        "Managed material procurement and scheduling for 3 projects",
                        "Ensured compliance with engineering standards under tight deadlines",
                        "Developed skills in teamwork and high-pressure decision-making",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-700 italic">
                      This experience instilled discipline and a strong sense of responsibility, shaping my approach to
                      engineering challenges.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Software Proficiency</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "Tekla Structures",
                      level: 95,
                      description:
                        "Expert in modeling, custom components, custom applications and shop drawing production.",
                    },
                    {
                      name: "Autodesk Revit",
                      level: 85,
                      description: "Proficient in BIM coordination and reinforcement detailing.",
                    },
                    { name: "AutoCAD", level: 97, description: "Skilled in 2D drafting and cleanup." },
                    {
                      name: "Navisworks",
                      level: 75,
                      description: "Used for clash detection and project coordination.",
                    },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-cyan-600 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Programming & Automation</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "C#",
                      level: 60,
                      description: "Developing plugins for Tekla to automate repetitive tasks.",
                    },
                    {
                      name: "Grasshopper",
                      level: 60,
                      description: "Creating parametric models for complex geometries.",
                    },
                    {
                      name: "Tekla Custom Components",
                      level: 75,
                      description: "Creating custom components to reduce repetitive tasks",
                    },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div
                          className="bg-gradient-to-r from-green-600 to-emerald-600 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Analysis & Standards</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "SAP2000",
                      level: 65,
                      description: "Structural analysis for steel and concrete structures.",
                    },
                    { name: "Etabs, Robot", level: 65, description: "Structural analysis and checking" },
                    { name: "IDEA StatiCa", level: 70, description: "Connection design and finite element analysis." },
                    {
                      name: "Industry Standards",
                      level: 85,
                      description: "Expertise in AISC, NYSCA, Eurocode standards for global compliance.",
                    },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Project Portfolio</h2>

          <div className="space-y-16">
            {/* Graduation Project */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Graduation Project: Steel Industrial Building
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">Alexandria University, 2022</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        <strong>Overview:</strong> Designed a 4200 sqm steel industrial facility with complex
                        connections and erection sequences.
                      </p>
                      <p>
                        <strong>Challenges:</strong> Designing moment-resisting connections under seismic loads, meeting
                        tight academic deadlines.
                      </p>
                      <p>
                        <strong>Solutions:</strong> Utilized Tekla Structures for precise modeling, SAP2000 for
                        structural analysis, and IDEA StatiCa for connection design.
                      </p>
                      <p>
                        <strong>Tools:</strong> Tekla Structures, SAP2000, AutoCAD, IDEA StatiCa, MS Excel
                      </p>
                      <p>
                        <strong>Outcomes:</strong> Achieved an Excellent grade, produced fully constructible shop
                        drawings and erection plans.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img
                        src="/images/grad2.png"
                        alt="Graduation Project Model"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img src="/images/grad5.png" alt="Connection Detail" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img src="/images/grad6.png" alt="Erection Plan" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img src="/images/grad1.png" alt="3D Model" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* USA Projects */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-4 h-4 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Architectural Steel Project, New York, USA
                    </h3>
                    <p className="text-red-600 font-medium mb-4">2024</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        <strong>Overview:</strong> Detailed handrails, guardrails, dunnage platforms, and window guards
                        for a high-rise building, adhering to NYSCA and AISC standards.
                      </p>
                      <p>
                        <strong>Challenges:</strong> Strict safety regulations, complex coordination with architectural
                        elements.
                      </p>
                      <p>
                        <strong>Solutions:</strong> Used Navisworks for clash detection and Revit for precise BIM
                        coordination.
                      </p>
                      <p>
                        <strong>Tools:</strong> Revit, Navisworks, Tekla Structures, AutoCAD
                      </p>
                      <p>
                        <strong>Outcomes:</strong> Zero on-site clashes, delivered ahead of schedule.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img src="/images/TH1.jpg" alt="Guardrail Model" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img src="/images/TH2.jpg" alt="WIF Model" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 max-w-md">
                    <img src="/images/TH3.jpg" alt="Dunnage Platform" className="w-full h-full object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Saudi Arabia Projects */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Industrial Pipe Racks, Saudi Arabia</h3>
                    <p className="text-green-600 font-medium mb-4">2025</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        <strong>Overview:</strong> Detailed large-scale pipe racks and access platforms for an oil
                        refinery, coordinating with extensive piping layouts.
                      </p>
                      <p>
                        <strong>Challenges:</strong> Complex interdisciplinary coordination, harsh environmental
                        conditions.
                      </p>
                      <p>
                        <strong>Solutions:</strong> Advanced clash detection in Navisworks, precise modeling in Tekla
                        Structures.
                      </p>
                      <p>
                        <strong>Tools:</strong> Tekla Structures, Navisworks, AutoCAD
                      </p>
                      <p>
                        <strong>Outcomes:</strong> Error-free fabrication
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img src="/images/AR1.jpg" alt="Pipe Rack Model" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img src="/images/AR2.jpg" alt="Pipe Rack Model" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 max-w-md">
                    <img src="/images/AR3.png" alt="Access Platform Model" className="w-full h-full object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Applications */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-4 h-4 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Custom Applications & Components</h3>
                    <p className="text-purple-600 font-medium mb-4">2024-2025</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-purple-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">AZ Filtering Tool</h4>
                      <p className="text-gray-700 mb-3">
                        Created an Application to filter Parts, Bolts and Components in the entire model
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Tools:</strong> Visual Studio C#, Tekla Structures, AI
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Outcome:</strong> Robust Application, Fast and Accurate Filtering
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">AZ Creator</h4>
                      <p className="text-gray-700 mb-3">Application to Create Beams and Columns from CAD Drawings</p>
                      <p className="text-sm text-gray-600">
                        <strong>Tools:</strong> Visual Studio C#, Tekla Structures, AI
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Outcome:</strong> Modeling a Large 250Tons Piperack in less than 6 Hours
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-green-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Parametric WIF Component</h4>
                      <p className="text-gray-700 mb-3">
                        Custom component in Tekla for completely parametric Wrought Iron Fence
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Tools:</strong> Tekla Structures
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Outcome:</strong> Delivered accurate Modeling in 90% less Time
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img src="/images/C1.png" alt="WIF Component" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img src="/images/C2.png" alt="WIF Component" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img src="/images/AZF.png" alt="AZ Filtering Tool" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img src="/images/AZC.png" alt="AZ Creator Tool" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Military Service Section */}
      <section id="military" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Military Service</h2>

          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Egyptian Armed Forces Engineering Authority
                </h3>
                <p className="text-lg text-gray-600">2023–2024</p>
              </div>

              <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                Served in the Egyptian Armed Forces Engineering Authority, contributing to infrastructure projects under
                high-pressure conditions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Experiences</h4>
                  <div className="space-y-3">
                    {[
                      "Led a team of 6 in constructing a military facility, ensuring quality and safety.",
                      "Managed logistics and material procurement for time-sensitive projects.",
                      "Developed discipline and leadership skills, handling complex project timelines.",
                      "Coordinated with multiple sub-contractors to meet strict deadlines.",
                    ].map((experience, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{experience}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Skills Developed</h4>
                  <p className="text-gray-700 leading-relaxed">
                    This experience honed my ability to work efficiently in teams, maintain discipline, and deliver
                    results under pressure, skills I apply to every engineering project.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Contact Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">ahmed.zietoon@hotmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+20 155 623 2672</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Kafr Dawar, Beheira, Egypt</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Linkedin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/ahmed-saleh-zaitoon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        linkedin.com/in/ahmed-saleh-zaitoon
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <p className="text-gray-700 font-medium">
                    Availability: Open to new opportunities in steel detailing and BIM projects worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3"
                    onClick={(e) => {
                      e.preventDefault()
                      alert("Message sent successfully! I will get back to you soon.")
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-2">© 2025 Ahmed Saleh Zaitoon. All rights reserved.</p>
          <p className="text-gray-400">Built with precision and passion for engineering excellence.</p>
        </div>
      </footer>
    </div>
  )
}
