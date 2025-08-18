import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { 
  Target, 
  Users, 
  MessageSquare, 
  Building2,
  ArrowRight,
  CheckCircle,
  Eye,
  Brain,
  Heart,
  Zap
} from 'lucide-react';

export default function MovementFramework() {
  const [activeStep, setActiveStep] = useState(0);

  // Animated background colors - using darker, more subtle colors for our brand
  const COLORS_TOP = ["#95bbc2", "#6b9ca3", "#4a7c85", "#2d5a61"];
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color, COLORS_TOP]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #111827 50%, ${color})`;

  const frameworkSteps = [
    {
      id: 'confront',
      title: 'Confront Conflict',
      icon: Target,
      color: '#95bbc2',
      description: 'Define and address the challenges you aim to overcome',
      questions: [
        'Define the conflict you aim to confront? Identify',
        'How will we confront said conflict?'
      ]
    },
    {
      id: 'cultivate',
      title: 'Cultivate Connections',
      icon: Users,
      color: '#95bbc2',
      description: 'Build meaningful relationships with aligned individuals and organizations',
      questions: [
        'List out individuals, organizations, and/or associations that are confronting said conflict?',
        'Where can you connect with these individuals, organizations, and/or associations?',
        'How will you connect with these individuals, organizations, and/or associations?',
        'List out ways you can add value at no cost to these individuals, organizations, and/or associations'
      ]
    },
    {
      id: 'communicate',
      title: 'Communicate Your Story',
      icon: MessageSquare,
      color: '#95bbc2',
      description: 'Craft and share your narrative of transformation',
      questions: [
        'Start off by stating the problem or pain point that most of your target audience face',
        'Talk about your solution to the problem. How you help people fix this problem.',
        'Finally, talk about the success. Clearly explain how your Audience will feel after you solve their problem.'
      ]
    },
    {
      id: 'create',
      title: 'Create a Community',
      icon: Building2,
      color: '#95bbc2',
      description: 'Build a thriving community around your movement',
      questions: [
        'Where can people go to connect with you?',
        'How can they become a part of what you\'re doing?',
        'What positive outcome will occur if they join your community?',
        'What is a &quot;no-brainer&quot; offer you can provide in exchange for their attention/contact information?',
        'How frequently will you communicate with your Community?'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>The Movement Framework™ | Denis Estimon's Signature Methodology</title>
        <meta name="description" content="Discover Denis Estimon's Movement Framework™ - a proven methodology to confront conflict, cultivate connections, communicate your story, and create community. Transform your perspective and build lasting movements." />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "The Movement Framework™",
          "description": "Denis Estimon's signature methodology that helps individuals and organizations confront conflict, cultivate connections, communicate their story, and create community.",
          "author": {
            "@type": "Person",
            "name": "Denis Estimon"
          },
          "publisher": {
            "@type": "Person",
            "name": "Denis Estimon"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://denisestimon.com/movement-framework"
          }
        })}
        </script>
      </Helmet>

      <motion.div 
        style={{ backgroundImage }}
        className="min-h-screen bg-gray-900 text-white relative overflow-hidden"
      >
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-light mb-6">
                The <span className="font-medium" style={{ color: '#95bbc2' }}>Movement Framework™</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-16">
                A proven methodology to confront conflict, cultivate connections, communicate your story, and create community
              </p>
            </motion.div>

            {/* Standalone Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                {/* Quote marks */}
                <div className="absolute -top-4 -left-4 text-6xl font-serif opacity-20" style={{ color: '#95bbc2' }}>
                  &ldquo;
                </div>
                <div className="absolute -bottom-8 -right-4 text-6xl font-serif opacity-20 rotate-180" style={{ color: '#95bbc2' }}>
                  &rdquo;
                </div>
                
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                  {/* Subtle accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#95bbc2] to-transparent opacity-60"></div>
                  
                  <p className="text-xl md:text-2xl text-white font-light italic leading-relaxed text-center mb-6">
                    Before a movement takes place around you, it must first take place within you.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#95bbc2]"></div>
                    <p className="text-sm font-medium tracking-wider" style={{ color: '#95bbc2' }}>
                      DENIS ESTIMON
                    </p>
                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#95bbc2]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3D Stars Background */}
          <div className="absolute inset-0 z-0">
            <Canvas>
              <Stars radius={50} count={2500} factor={4} fade speed={1.5} />
            </Canvas>
          </div>
        </section>

        {/* Framework Visualization */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-4">
                The Four Pillars
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Each pillar builds upon the next, creating a comprehensive framework for sustainable change
              </p>
            </motion.div>

            {/* Interactive Framework Visualization */}
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Framework Steps */}
              <div className="space-y-4">
                {frameworkSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeStep === index ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`bg-white/10 backdrop-blur-lg border rounded-2xl p-5 shadow-xl transition-all duration-300 ${
                      activeStep === index 
                        ? 'border-[#95bbc2] bg-white/15' 
                        : 'border-white/20 hover:border-white/30'
                    }`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div 
                          className="w-12 h-12 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: `${step.color}20`, border: `2px solid ${step.color}` }}
                        >
                          <step.icon className="w-6 h-6" style={{ color: step.color }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium text-white">{step.title}</h3>
                          <p className="text-gray-300 text-sm">{step.description}</p>
                        </div>
                      </div>
                      
                      {activeStep === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3 pt-4 border-t border-white/20"
                        >
                          {step.questions.map((question, qIndex) => (
                            <div key={qIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: step.color }} />
                              <p className="text-gray-200 text-sm leading-relaxed">{question}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Visual Chart */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="sticky top-8"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl">
                  <h3 className="text-xl font-medium mb-6 text-center">Framework Flow</h3>
                  
                  {/* Circular Visualization */}
                  <div className="relative w-80 h-80 mx-auto">
                    <svg viewBox="0 0 320 320" className="w-full h-full">
                      {/* Center Circle */}
                      <circle
                        cx="160"
                        cy="160"
                        r="40"
                        fill="#95bbc2"
                        fillOpacity="0.2"
                        stroke="#95bbc2"
                        strokeWidth="2"
                      />
                      <text
                        x="160"
                        y="165"
                        textAnchor="middle"
                        className="fill-white text-sm font-medium"
                      >
                        Movement
                      </text>
                      
                      {/* Framework Steps in Circle */}
                      {frameworkSteps.map((step, index) => {
                        const angle = (index * 90 - 90) * (Math.PI / 180);
                        const x = 160 + Math.cos(angle) * 100;
                        const y = 160 + Math.sin(angle) * 100;
                        
                        return (
                          <g key={step.id}>
                            {/* Connection Line */}
                            <line
                              x1="160"
                              y1="160"
                              x2={x}
                              y2={y}
                              stroke="#95bbc2"
                              strokeWidth="2"
                              strokeOpacity="0.5"
                            />
                            
                            {/* Step Circle */}
                            <circle
                              cx={x}
                              cy={y}
                              r="30"
                              fill={activeStep === index ? "#95bbc2" : "rgba(149, 187, 194, 0.2)"}
                              stroke="#95bbc2"
                              strokeWidth="2"
                              className="cursor-pointer transition-all duration-300"
                              onClick={() => setActiveStep(index)}
                            />
                            
                            {/* Step Number */}
                            <text
                              x={x}
                              y={y + 5}
                              textAnchor="middle"
                              className={`text-sm font-bold cursor-pointer ${
                                activeStep === index ? 'fill-gray-900' : 'fill-white'
                              }`}
                              onClick={() => setActiveStep(index)}
                            >
                              {index + 1}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                  
                  {/* Active Step Info */}
                  <div className="mt-6 text-center">
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#95bbc2' }}>
                      {frameworkSteps[activeStep].title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {frameworkSteps[activeStep].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                The Movement <span className="font-medium" style={{ color: '#95bbc2' }}>Mindset</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#95bbc2]/20 border-2 border-[#95bbc2] flex items-center justify-center">
                    <Brain className="w-6 h-6" style={{ color: '#95bbc2' }} />
                  </div>
                  <h3 className="text-2xl font-medium">Perspective Shift</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Sometimes before you see a movement take place in your life, it will be your perspective that has to move. When you move your perspective, it will change your behavior.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When you intentionally change your behavior, you begin to take back control of your life. Because before a movement takes place around you, it must first take place within you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#95bbc2]/20 border-2 border-[#95bbc2] flex items-center justify-center">
                    <Eye className="w-6 h-6" style={{ color: '#95bbc2' }} />
                  </div>
                  <h3 className="text-2xl font-medium">Visionary Thinking</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  It&apos;s the individual or organization that not only sees things as they are but as they could be. It&apos;s the ability to see what&apos;s in front of you and what&apos;s to come.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  It&apos;s moving towards an intended destination while maneuvering through the challenges that come with life&apos;s situations, people, and circumstances.
                </p>
              </motion.div>
            </div>

            {/* Call to Action Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-r from-[#95bbc2]/20 to-transparent backdrop-blur-lg border border-[#95bbc2]/30 rounded-3xl p-12 shadow-2xl">
                <h3 className="text-3xl md:text-4xl font-light mb-6">
                  The Choice is <span className="font-medium" style={{ color: '#95bbc2' }}>Yours</span>
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                  Who do you want to be? What type of organization would you want to be a part of? The one who remains stagnant, or the one despite the difficulties and challenges, makes up their mind to make a difference where they are with what they have.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Heart className="w-6 h-6" style={{ color: '#95bbc2' }} />
                  <p className="text-lg font-medium" style={{ color: '#95bbc2' }}>
                    The most significant movement that will ever take place is the movement that takes place in your mind.
                  </p>
                  <Zap className="w-6 h-6" style={{ color: '#95bbc2' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 shadow-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Ready to Build Your <span className="font-medium" style={{ color: '#95bbc2' }}>Movement</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover how Denis Estimon can help you implement the Movement Framework™ in your organization or personal journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full px-8 text-base text-gray-900 hover:bg-[#95bbc2]/90 transition-all duration-300"
                  style={{ backgroundColor: '#95bbc2' }}
                >
                  <Link to={createPageUrl('booking')}>
                    <span className="text-nowrap">Book Denis to Speak</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full px-8 text-base text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  <Link to={createPageUrl('about-denis-estimon')}>
                    Learn More About Denis
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
