import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, DollarSign, Globe, Phone, Building, User, Mail, MessageSquare, MapPin, Users, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import CustomAlert from '../components/ui/CustomAlert';

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    organizationName: '',
    position: '',
    websiteUrl: '',
    eventDate: '',
    eventLocation: '',
    audienceSize: '',
    budget: '',
    eventDescription: '',
    eventType: '',
    hearAbout: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [alertState, setAlertState] = useState({ isOpen: false, title: '', message: '' });

  const validate = (step) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required.';
      if (!formData.lastName) newErrors.lastName = 'Last name is required.';
      if (!formData.email) {
        newErrors.email = 'Email address is required.';
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required.';
    }

    if (step === 2) {
      if (!formData.organizationName) newErrors.organizationName = 'Organization name is required.';
    }

    if (step === 3) {
      if (!formData.eventDate) newErrors.eventDate = 'Preferred event date is required.';
      if (!formData.audienceSize) newErrors.audienceSize = 'Expected audience size is required.';
      if (!formData.eventLocation) newErrors.eventLocation = 'Event location is required.';
      if (!formData.eventType) newErrors.eventType = 'Event type is required.';
      if (!formData.budget) newErrors.budget = 'Budget range is required.';
      if (!formData.eventDescription) newErrors.eventDescription = 'Event description is required.';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear the error for the current field when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: undefined
    }));
  };

  const handleNext = () => {
    const newErrors = validate(currentStep);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(3);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // Send data to webhook
      await fetch('https://public.lindy.ai/api/v1/webhooks/lindy/42be1f43-b59c-40c6-b67d-36d297264e9e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 5260b56946de1b6adfe2acd23712cc4ba6d81ec0b488fbbb23098b9eef13e2f1'
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Failed to submit booking request:", error);
      setAlertState({
        isOpen: true,
        title: "Submission Failed",
        message: "There was an error submitting your request. Please try again later."
      });
      setIsSubmitting(false);
      return;
    }
    
    setIsSubmitting(false);

    setAlertState({
      isOpen: true,
      title: "Thank You!",
      message: `Your booking request has been submitted.\n\nWhat to expect next:\n1. We'll review your request and check date availability within 24 hours\n2. If the date is available, we'll reach out to schedule an initial kickoff call\n3. During the call, we'll discuss event details and confirm the speaking fee\n4. To secure your event date, we'll need 50% of the agreed fee as a deposit\n5. We'll send you a formal agreement with all event details\n6. Then we'll work together to ensure everything is ready for your event\n\nWe're excited about the possibility of bringing Denis to your organization!`
    });
  };

  const closeAlertAndResetForm = () => {
    setAlertState({ isOpen: false, title: '', message: '' });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      organizationName: '',
      position: '',
      websiteUrl: '',
      eventDate: '',
      eventLocation: '',
      audienceSize: '',
      budget: '',
      eventDescription: '',
      eventType: '',
      hearAbout: ''
    });
    setCurrentStep(1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <>
      <CustomAlert 
        isOpen={alertState.isOpen}
        onClose={closeAlertAndResetForm}
        title={alertState.title}
        message={alertState.message}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side - Content */}
            <motion.div
              className="lg:sticky lg:top-32 order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-4 sm:mb-6">
                  Book <span className="font-medium" style={{ color: '#95bbc2' }}>Denis</span> for Your Event
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  Transform uncertainty into unstoppable momentum. Let's discover how the Movement Framework in Denis's core leadership teachings can impact your organization.
                </p>
              </motion.div>

              <motion.div 
                className="space-y-4 sm:space-y-6 mb-6 sm:mb-8"
                variants={itemVariants}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Quick Response</h3>
                    <p className="text-sm sm:text-base text-gray-600">We'll respond to your booking request within 24 hours with a customized proposal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Tailored Experience</h3>
                    <p className="text-sm sm:text-base text-gray-600">Every presentation is customized for your specific organization and audience.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">All-Inclusive Pricing</h3>
                    <p className="text-sm sm:text-base text-gray-600">One flat fee covers everything—speaking, travel, accommodation, and materials.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-48 sm:h-64 lg:h-64"
                variants={itemVariants}
              >
                <img 
                  src="/assets/00806c54e_IMG_5487.jpg"
                  alt="Denis Estimon speaking on stage with microphone"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Right Side - Multi-step Form */}
            <motion.div
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 lg:p-12 flex flex-col order-1 lg:order-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Progress Steps */}
              <div className="flex items-center w-full mb-6 sm:mb-8 px-2 sm:px-0">
                {[1, 2, 3].map((step, index) => (
                  <React.Fragment key={step}>
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out flex-shrink-0 ${
                        currentStep >= step
                          ? 'text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                      style={{ backgroundColor: currentStep >= step ? '#95bbc2' : undefined }}
                    >
                      {currentStep > step ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : step}
                    </div>
                    {index < 2 && (
                      <div
                        className={`flex-1 h-1 mx-2 sm:mx-4 transition-all duration-300 ease-in-out ${
                          currentStep > step ? 'bg-[#95bbc2]' : 'bg-gray-200'
                        }`}
                      ></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Step Titles */}
              <div className="mb-4 sm:mb-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {currentStep === 1 && "Personal Information"}
                  {currentStep === 2 && "Organization Details"}
                  {currentStep === 3 && "Event Information"}
                </h2>
                <p className="text-gray-600">
                  {currentStep === 1 && "Let's start with your contact information"}
                  {currentStep === 2 && "Tell us about your organization"}
                  {currentStep === 3 && "Share your event details with us"}
                </p>
              </div>

              {/* Form Steps */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                              placeholder="First name"
                            />
                          </div>
                          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                              placeholder="Last name"
                            />
                          </div>
                          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                            placeholder="you@organization.com"
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all ${errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Organization Details */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Organization Name *
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="organizationName"
                            value={formData.organizationName}
                            onChange={handleInputChange}
                            className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all ${errors.organizationName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                            placeholder="Your Organization Name"
                          />
                        </div>
                        {errors.organizationName && <p className="text-red-500 text-sm mt-1">{errors.organizationName}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Position/Title
                        </label>
                        <input
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your Position/Title"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Website URL
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="url"
                            name="websiteUrl"
                            value={formData.websiteUrl}
                            onChange={handleInputChange}
                            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="https://yourorganization.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          How did you hear about Denis?
                        </label>
                        <select
                          name="hearAbout"
                          value={formData.hearAbout}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select an option</option>
                          <option value="website">Website/Google Search</option>
                          <option value="referral">Colleague Referral</option>
                          <option value="social">Social Media</option>
                          <option value="speaking-bureau">Speaking Bureau</option>
                          <option value="previous-event">Saw him speak before</option>
                          <option value="media">Media/Press Coverage</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Event Information */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      variants={stepVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Event Date *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="date"
                              name="eventDate"
                              value={formData.eventDate}
                              onChange={handleInputChange}
                              className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all ${errors.eventDate ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                            />
                          </div>
                          {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expected Audience Size *
                          </label>
                          <div className="relative">
                            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                              name="audienceSize"
                              value={formData.audienceSize}
                              onChange={handleInputChange}
                              className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all ${errors.audienceSize ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                            >
                              <option value="">Select size</option>
                              <option value="50-100">50-100 attendees</option>
                              <option value="100-250">100-250 attendees</option>
                              <option value="250-500">250-500 attendees</option>
                              <option value="500-1000">500-1000 attendees</option>
                              <option value="1000+">1000+ attendees</option>
                            </select>
                          </div>
                          {errors.audienceSize && <p className="text-red-500 text-sm mt-1">{errors.audienceSize}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Event Location *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="eventLocation"
                            value={formData.eventLocation}
                            onChange={handleInputChange}
                            className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all ${errors.eventLocation ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                            placeholder="City, State"
                          />
                        </div>
                        {errors.eventLocation && <p className="text-red-500 text-sm mt-1">{errors.eventLocation}</p>}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Event Type *
                          </label>
                          <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all ${errors.eventType ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                          >
                            <option value="">Select event type</option>
                            <option value="keynote">Keynote Speech (45-60 min)</option>
                            <option value="workshop">Interactive Workshop (90-120 min)</option>
                            <option value="training">Leadership Training (60-90 min)</option>
                            <option value="virtual">Virtual Presentation</option>
                            <option value="custom">Custom Format</option>
                          </select>
                          {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Budget Range *
                          </label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all ${errors.budget ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                            >
                              <option value="">Select budget range</option>
                              <option value="5000-10000">$5,000 - $10,000</option>
                              <option value="10000-15000">$10,000 - $15,000</option>
                              <option value="15000-20000">$15,000 - $20,000</option>
                              <option value="20000+">$20,000+</option>
                              <option value="discuss">Prefer to discuss</option>
                            </select>
                          </div>
                          {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Event Description & Goals *
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                          <textarea
                            name="eventDescription"
                            value={formData.eventDescription}
                            onChange={handleInputChange}
                            rows="4"
                            className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all ${errors.eventDescription ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                            placeholder="Tell us about your event goals, target audience, and any specific themes you'd like Denis to address..."
                          ></textarea>
                        </div>
                        {errors.eventDescription && <p className="text-red-500 text-sm mt-1">{errors.eventDescription}</p>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                {currentStep > 1 ? (
                  <motion.button
                    type="button"
                    onClick={handlePrevious}
                    className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                    whileHover={{ x: -5 }}
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Previous
                  </motion.button>
                ) : (
                  <div></div>
                )}

                {currentStep < 3 ? (
                  <motion.button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300"
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Next
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                ) : (
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Submitting...
                      </div>
                    ) : (
                      'Submit Request'
                    )}
                  </motion.button>
                )}
              </div>

              {currentStep === 3 && (
                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting this form, you agree to be contacted about your speaking request.
                  We'll review your request within 24 hours and guide you through our booking process.
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}