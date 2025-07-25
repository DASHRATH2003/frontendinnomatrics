import React, { forwardRef, useEffect } from "react";
import app from "../../../assets/AppDev.jpg";
import app2 from "../../../assets/app2.jpg";
import approach from "../../../assets/approach.jpg";
import a1 from "../../../assets/appServices/strategicPlanApp.jpg";
import a2 from "../../../assets/appServices/usercentric.webp";
import a3 from "../../../assets/appServices/customDev.jpg";
import a4 from "../../../assets/appServices/crossPlatform.png";
import a5 from "../../../assets/appServices/qualityTest.png";
import a6 from "../../../assets/appServices/maintainenece.jpg";
import "./Appdev.css";
import { Link } from 'react-router-dom';
import { 
  FaAndroid, 
  FaApple, 
  FaMobile, 
  FaCode, 
  FaRocket, 
  FaCogs, 
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaLayerGroup,
  FaCheckCircle
} from 'react-icons/fa';

const AppDev = forwardRef((props, ref) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const platforms = [
    {
      icon: <FaAndroid className="w-12 h-12 text-green-500" />,
      name: "Android Development",
      description: "Native and cross-platform solutions for the world's most popular mobile OS",
      technologies: ["Kotlin", "Java", "Flutter", "React Native"],
      features: [
        "Material Design implementation",
        "Google Play Store optimization",
        "Android Enterprise support",
        "Background services integration"
      ]
    },
    {
      icon: <FaApple className="w-12 h-12 text-gray-600" />,
      name: "iOS Development",
      description: "Elegant and powerful applications for Apple's ecosystem",
      technologies: ["Swift", "SwiftUI", "Flutter", "React Native"],
      features: [
        "Human Interface Guidelines compliance",
        "App Store optimization",
        "Apple Pay integration",
        "ARKit for augmented reality"
      ]
    },
    {
      icon: <FaMobile className="w-12 h-12 text-blue-500" />,
      name: "Cross-Platform",
      description: "Build once, deploy everywhere with modern frameworks",
      technologies: ["React Native", "Flutter", "Xamarin", "Ionic"],
      features: [
        "80% code reuse across platforms",
        "Native-like performance",
        "Consistent UI across devices",
        "Faster time-to-market"
      ]
    }
  ];

  const services = [
    {
      icon: <FaCode className="w-8 h-8 text-blue-600" />,
      title: "Custom App Development",
      description: "Tailored mobile solutions designed to meet your specific business needs and user requirements",
      features: [
        "Native app development (iOS & Android)",
        "Cross-platform solutions (React Native, Flutter)",
        "UI/UX design following latest trends",
        "Secure backend integration",
        "Third-party API development"
      ],
      image: a3
    },
    {
      icon: <FaRocket className="w-8 h-8 text-blue-600" />,
      title: "App Modernization",
      description: "Transform your legacy applications into modern, scalable solutions with enhanced features",
      features: [
        "Code refactoring and optimization",
        "Performance benchmarking",
        "UI/UX redesign for modern standards",
        "Technology stack upgrade",
        "Cloud migration (AWS, Azure, GCP)"
      ],
      image: a2
    },
    {
      icon: <FaCogs className="w-8 h-8 text-blue-600" />,
      title: "Enterprise Mobility",
      description: "Secure and scalable enterprise mobile solutions for workforce productivity",
      features: [
        "Enterprise app integration (ERP, CRM)",
        "Mobile device management (MDM)",
        "End-to-end encrypted data handling",
        "Offline-first capabilities",
        "Advanced analytics integration"
      ],
      image: a1
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-blue-600" />,
      title: "App Maintenance",
      description: "Comprehensive support and maintenance services to keep your app performing optimally",
      features: [
        "Regular OS compatibility updates",
        "Bug fixes and performance tuning",
        "Real-time crash monitoring",
        "Security patches and vulnerability fixes",
        "Feature enhancements and upgrades"
      ],
      image: a6
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that drive engagement and user satisfaction",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Motion design and micro-interactions",
        "Accessibility compliance (WCAG)",
        "Usability testing and iteration"
      ],
      image: a4
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-blue-600" />,
      title: "App Analytics",
      description: "Data-driven insights to optimize performance and user experience",
      features: [
        "User behavior tracking",
        "Conversion funnel analysis",
        "Performance monitoring",
        "A/B testing framework",
        "Custom reporting dashboards"
      ],
      image: a5
    }
  ];

  const developmentProcess = [
    {
      phase: "Discovery & Strategy",
      description: "Comprehensive analysis to define your app's vision, goals, and technical requirements",
      activities: [
        "Business requirement workshops",
        "Market research & competitor analysis",
        "Technical feasibility assessment",
        "Project roadmap creation"
      ],
      icon: <FaLightbulb className="text-blue-600 w-6 h-6" />
    },
    {
      phase: "Design & Prototyping",
      description: "Creating intuitive and engaging user experiences with pixel-perfect designs",
      activities: [
        "User flows & journey mapping",
        "Wireframing & UI mockups",
        "Interactive prototyping",
        "Design system development"
      ],
      icon: <FaLayerGroup className="text-blue-600 w-6 h-6" />
    },
    {
      phase: "Development",
      description: "Building your app with clean, efficient code following industry best practices",
      activities: [
        "Agile sprints with bi-weekly demos",
        "Frontend development",
        "Backend & API integration",
        "Continuous integration/delivery"
      ],
      icon: <FaCode className="text-blue-600 w-6 h-6" />
    },
    {
      phase: "Quality Assurance",
      description: "Rigorous testing to ensure your app is performant, secure, and bug-free",
      activities: [
        "Automated & manual testing",
        "Performance benchmarking",
        "Security vulnerability scanning",
        "User acceptance testing"
      ],
      icon: <FaCheckCircle className="text-blue-600 w-6 h-6" />
    },
    {
      phase: "Deployment & Launch",
      description: "Seamless app store submission and go-to-market strategy execution",
      activities: [
        "App store optimization (ASO)",
        "Beta testing program",
        "Production deployment",
        "Launch marketing support"
      ],
      icon: <FaRocket className="text-blue-600 w-6 h-6" />
    }
  ];

  const caseStudies = [
    {
      title: "Healthcare Telemedicine App",
      description: "Developed a HIPAA-compliant telehealth platform serving 50,000+ patients",
      result: "Reduced patient wait times by 75%",
      image: app
    },
    {
      title: "Retail E-Commerce App",
      description: "Built a scalable mobile shopping platform with AR product visualization",
      result: "Increased conversions by 40%",
      image: app2
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" ref={ref}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6">
              Mobile App Development Services
            </h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">
              Innomatrics Technologies delivers innovative mobile solutions that engage users and drive business growth
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-bold rounded-md text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-300 shadow-lg"
              >
                Get Your Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Your Business with Mobile Technology
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Innomatrics Technologies, we specialize in creating high-performance mobile applications that deliver 
            exceptional user experiences and measurable business results. With over 10 years of experience, our team 
            of certified developers builds apps that are scalable, secure, and tailored to your specific industry needs.
          </p>
        </div>

        {/* Platforms Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Platform Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">{platform.name}</h3>
                <p className="text-gray-600 text-center mb-6">{platform.description}</p>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comprehensive App Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Proven Development Methodology
          </h2>
          <div className="space-y-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="mr-3">
                        {phase.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.activities.map((activity, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg inline-block font-medium">
                    <span className="font-bold">Result:</span> {caseStudy.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Innomatrics */}
        <div className="mb-20 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Innomatrics Technologies?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-xl">Years in Mobile Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-xl">Successful App Launches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-xl">Certified Developers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-xl">Client Satisfaction Rating</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 mr-2">★★★★★</div>
                <div className="text-gray-600">5.0 Rating</div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Innomatrics delivered our healthcare app ahead of schedule while exceeding all quality expectations. 
                Their team's expertise in HIPAA compliance was particularly impressive."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                  DR
                </div>
                <div>
                  <p className="font-medium text-gray-900">Dr. Robert Chen</p>
                  <p className="text-gray-500">CMO, HealthPlus Systems</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 mr-2">★★★★★</div>
                <div className="text-gray-600">5.0 Rating</div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "The e-commerce app developed by Innomatrics increased our mobile revenue by 65% in the first year. 
                Their attention to detail in UX design made all the difference."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                  SJ
                </div>
                <div>
                  <p className="font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-500">Director of Digital, UrbanStyle</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how Innomatrics Technologies can help you create an app that delights users and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-3 border border-2 border-blue-600 text-lg font-bold rounded-md text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AppDev;