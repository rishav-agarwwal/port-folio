import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  Sun,
  Moon,
  Code,
  Database,
  Zap,
  Shield,
  BarChart3,
  Bot,
  Gamepad2,
  MapPin
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-portfolio-cream-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-portfolio-lavender-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              RA
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-portfolio-green-600 dark:text-portfolio-green-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-portfolio-green-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Dark mode toggle and mobile menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-portfolio-lavender-100 dark:bg-gray-800 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 hover:bg-portfolio-lavender-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-portfolio-lavender-100 dark:bg-gray-800 text-portfolio-lavender-700 dark:text-portfolio-lavender-300"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-portfolio-lavender-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-portfolio-green-500 hover:bg-portfolio-cream-100 dark:hover:bg-gray-800"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-4 text-gray-600 dark:text-gray-400">
                <MapPin size={20} className="mr-2" />
                <span>Hyderabad, India</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Rishav Agarwal
              </h1>
              <div className="typewriter text-xl md:text-2xl text-portfolio-green-600 dark:text-portfolio-green-400 font-medium mb-8">
                Product-Minded Builder | Data × Automation × Security
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Product-minded professional with 3+ years of experience in SaaS implementation, ERP integrations, and workflow automation. 
                Proven track record in delivering enterprise AR/Collections solutions, building automation tools, and developing product-style prototypes. 
                Currently transitioning into Product Management and Software Engineering.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="./resume.pdf"
                  download
                  className="inline-flex items-center px-8 py-4 bg-portfolio-green-500 hover:bg-portfolio-green-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg"
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </a>
                <a
                  href="https://linkedin.com/in/rishav--agarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-portfolio-green-500 text-portfolio-green-600 dark:text-portfolio-green-400 font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:bg-portfolio-green-50 dark:hover:bg-gray-700"
                >
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-portfolio-lavender-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Bridging Business Needs with Tech Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm a product-minded professional with 3+ years of experience in SaaS implementation, ERP integrations, 
                and workflow automation. With a proven track record in delivering enterprise AR/Collections solutions 
                for 10+ enterprise clients, I've successfully reduced DSO by 22% and maintained over 90% client satisfaction rates.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                My journey spans from Implementation Analyst at HighRadius to Product & Implementation Consultant, 
                where I've built 5+ interactive dashboards, automated workflows reducing task time by 30%, and developed 
                Flask REST APIs for backend workflow improvements. I excel at bridging business needs with technical execution.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently, I'm developing my "Power Trio" portfolio — Data, Automation, and Security — as a foundation 
                for growing into Product Management and Software Engineering roles. Every project I build reflects both 
                technical execution and product mindset, from AR visualization tools to job automation bots.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-portfolio-cream-100 dark:bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-all">
                <div className="text-3xl font-bold text-portfolio-green-600 dark:text-portfolio-green-400 mb-2">22%</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">DSO Reduction</div>
              </div>
              <div className="bg-portfolio-cream-100 dark:bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-all">
                <div className="text-3xl font-bold text-portfolio-green-600 dark:text-portfolio-green-400 mb-2">30%</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Task Time Reduction</div>
              </div>
              <div className="bg-portfolio-cream-100 dark:bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-all">
                <div className="text-3xl font-bold text-portfolio-green-600 dark:text-portfolio-green-400 mb-2">10+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Enterprise Clients</div>
              </div>
              <div className="bg-portfolio-cream-100 dark:bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-all">
                <div className="text-3xl font-bold text-portfolio-green-600 dark:text-portfolio-green-400 mb-2">3+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-portfolio-cream-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-portfolio-lavender-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product & Delivery */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Code className="text-portfolio-green-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Product & Delivery</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Product Discovery</li>
                <li>• Requirement Gathering</li>
                <li>• Agile & Scrum</li>
                <li>• UAT & Release Readiness</li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <BarChart3 className="text-portfolio-green-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Programming</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Python, REST APIs</li>
                <li>• Flask, Automation</li>
                <li>• Selenium, Zapier</li>
                <li>• GitHub, Linux</li>
              </ul>
            </div>

            {/* Data & Analytics */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Zap className="text-portfolio-green-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data & Analytics</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• SQL, PostgreSQL</li>
                <li>• Power BI, Excel (Advanced)</li>
                <li>• Data Pipelines</li>
                <li>• Power Query, Visio</li>
              </ul>
            </div>

            {/* Platforms & Tools */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Database className="text-portfolio-green-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Platforms</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Jira, Salesforce</li>
                <li>• Livecube, Miro</li>
                <li>• Stakeholder Collaboration</li>
                <li>• Customer Success</li>
              </ul>
            </div>
          </div>

          {/* Power Trio */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              The Power Trio
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 p-8 rounded-lg">
                <Database className="text-portfolio-lavender-600 dark:text-portfolio-lavender-400 mx-auto mb-4" size={48} />
                <h4 className="text-2xl font-bold text-portfolio-lavender-800 dark:text-portfolio-lavender-200 mb-2">Data</h4>
                <p className="text-portfolio-lavender-700 dark:text-portfolio-lavender-300">
                  Analytics, visualization, and insights that drive business decisions
                </p>
              </div>
              <div className="text-center bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 p-8 rounded-lg">
                <Bot className="text-portfolio-lavender-600 dark:text-portfolio-lavender-400 mx-auto mb-4" size={48} />
                <h4 className="text-2xl font-bold text-portfolio-lavender-800 dark:text-portfolio-lavender-200 mb-2">Automation</h4>
                <p className="text-portfolio-lavender-700 dark:text-portfolio-lavender-300">
                  Streamlining processes and eliminating manual, repetitive tasks
                </p>
              </div>
              <div className="text-center bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 p-8 rounded-lg">
                <Shield className="text-portfolio-lavender-600 dark:text-portfolio-lavender-400 mx-auto mb-4" size={48} />
                <h4 className="text-2xl font-bold text-portfolio-lavender-800 dark:text-portfolio-lavender-200 mb-2">Security</h4>
                <p className="text-portfolio-lavender-700 dark:text-portfolio-lavender-300">
                  Building secure, reliable systems that protect valuable data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-portfolio-lavender-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Current Role */}
            <div className="bg-portfolio-cream-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Product & Implementation Consultant
                  </h3>
                  <div className="text-xl text-portfolio-green-600 dark:text-portfolio-green-400 font-semibold mb-2">
                    Self-Employed
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  July 2024 – Present
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Built 5+ interactive dashboards analyzing overdue trends and recovery performance
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Automated workflows with Zapier + Python, reducing task time by 30%
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Developed Flask REST API simulating product features for usability testing
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Built AR Flow Visualization Tool with Python → PostgreSQL → Power BI pipeline
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Focus Areas</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Mock implementation blueprints across SaaS, Retail, Manufacturing
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Fit-Gap analysis, config rules, and UAT test cases
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Structured problem-solving via 25+ product scenarios
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      LeetCode challenges for analytical thinking improvement
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* HighRadius Associate */}
            <div className="bg-portfolio-cream-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Associate Techno-Functional Consultant
                  </h3>
                  <div className="text-xl text-portfolio-green-600 dark:text-portfolio-green-400 font-semibold mb-2">
                    HighRadius
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  July 2022 – June 2024
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Delivered Collections Cloud for 10+ enterprise clients, reducing DSO by 22%
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Configured Livecube modules, cutting ops effort by ~20%
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Created SQL/Excel reports boosting AR coverage by 20%
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Reduced go-live defects by 40% through UAT strategy design
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Responsibilities</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Partnered with product & engineering on ERP migrations
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Maintained over 90% client satisfaction rates
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Built dashboards for AR aging and collector performance
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Resolved escalations with structured RCA approach
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* HighRadius Trainee */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-portfolio-lavender-200 dark:border-portfolio-lavender-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Trainee Implementation Analyst
                  </h3>
                  <div className="text-xl text-portfolio-green-600 dark:text-portfolio-green-400 font-semibold mb-2">
                    HighRadius
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  July 2021 – June 2022
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Contributions</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Configured 5+ product modules (worklists, P2P, dunning rules)
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Migrated Excel processes to automated workflows (20% effort reduction)
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Resolved 150+ hypercare tickets with 99.5% uptime
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Built AR metrics dashboards for leadership tracking
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Learning & Growth</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Ran Fit-Gap workshops with enterprise clients
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Maintained SLA across multiple go-lives
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Developed expertise in collector efficiency metrics
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-green-500 mr-2 mt-1">•</span>
                      Foundation in enterprise software implementation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-portfolio-cream-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-portfolio-lavender-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* AR Flow Automation Simulator */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="text-portfolio-green-500 mr-3" size={32} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">AR Flow Automation Simulator</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  End-to-end AR pipeline with synthetic data generation using Python → PostgreSQL storage → 
                  SQL insights → Power BI dashboards. Reduced reporting effort by 40% through complete automation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Power BI
                  </span>
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Data Pipeline
                  </span>
                </div>
                <div className="text-sm text-portfolio-green-600 dark:text-portfolio-green-400 font-medium mb-4">
                  Status: Production Ready
                </div>
              </div>
            </div>

            {/* Indeed Job Application Bot */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Bot className="text-portfolio-green-500 mr-3" size={32} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Indeed Job Application Bot</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Intelligent Selenium automation that scrapes job roles, auto-selects tailored resume variants, 
                  handles OTP email flows, and applies to relevant positions at scale. Streamlines job search process completely.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Selenium
                  </span>
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Email Automation
                  </span>
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Web Scraping
                  </span>
                </div>
                <div className="text-sm text-portfolio-green-600 dark:text-portfolio-green-400 font-medium mb-4">
                  Status: Deployed & Active
                </div>
              </div>
            </div>

            {/* Elementals Framework */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Gamepad2 className="text-portfolio-green-500 mr-3" size={32} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Elementals Framework</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Modular RPG character creation system with Race, Element, Faction, and Class components. 
                  Features stat trade-off logic and Excel automation for optimal loadout selection and balancing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Game Design
                  </span>
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Excel Automation
                  </span>
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Systems Design
                  </span>
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Modular Architecture
                  </span>
                </div>
                <div className="text-sm text-portfolio-green-600 dark:text-portfolio-green-400 font-medium mb-4">
                  Status: Framework Complete
                </div>
              </div>
            </div>

            {/* REST API Development */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="text-portfolio-green-500 mr-3" size={32} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Flask Task Management API</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Product-style Flask REST API with GET/POST endpoints for task management. 
                  Built to practice API design, testing methodologies, and backend workflow optimization patterns.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Flask
                  </span>
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    REST API
                  </span>
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    API Testing
                  </span>
                  <span className="px-3 py-1 bg-portfolio-lavender-100 dark:bg-portfolio-lavender-900 text-portfolio-lavender-700 dark:text-portfolio-lavender-300 rounded-full text-sm">
                    Backend Design
                  </span>
                </div>
                <div className="text-sm text-portfolio-green-600 dark:text-portfolio-green-400 font-medium mb-4">
                  Status: API Live & Tested
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-portfolio-lavender-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
              Ready to collaborate on product development or discuss opportunities? I'm always open to connecting with fellow builders, 
              product enthusiasts, and forward-thinking teams working on impactful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-portfolio-cream-100 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-all">
              <Mail className="text-portfolio-green-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <a 
                href="mailto:rishav.agarwal@outlook.in"
                className="text-portfolio-green-600 dark:text-portfolio-green-400 hover:underline"
              >
                rishav.agarwal@outlook.in
              </a>
            </div>

            <div className="text-center bg-portfolio-cream-100 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-all">
              <Phone className="text-portfolio-green-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
              <a 
                href="tel:+916309847428"
                className="text-portfolio-green-600 dark:text-portfolio-green-400 hover:underline"
              >
                +91-6309847428
              </a>
            </div>

            <div className="text-center bg-portfolio-cream-100 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-all">
              <Linkedin className="text-portfolio-green-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/rishav--agarwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-green-600 dark:text-portfolio-green-400 hover:underline inline-flex items-center"
              >
                Connect with me
                <ExternalLink size={16} className="ml-1" />
              </a>
            </div>

            <div className="text-center bg-portfolio-cream-100 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-all">
              <Github className="text-portfolio-green-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
              <a 
                href="https://github.com/rishav-agarwwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-green-600 dark:text-portfolio-green-400 hover:underline inline-flex items-center"
              >
                View Projects
                <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Looking for my detailed resume and project portfolio?
            </p>
            <a
              href="./resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-portfolio-green-500 hover:bg-portfolio-green-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Rishav Agarwal. Built with React and Tailwind CSS.
            </p>
            <p className="text-gray-500 mt-2">
              Product-Minded Builder | Data × Automation × Security
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;