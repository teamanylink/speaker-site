import Layout from "./Layout.jsx";

import Home from "./Home";

import About from "./About";

import Booking from "./booking";

// Speaker Pages
import HighSchoolMotivationalSpeaker from "./HighSchoolMotivationalSpeaker";
import AntiBullyingSpeaker from "./AntiBullyingSpeaker";
import CollegeKeynoteSpeaker from "./CollegeKeynoteSpeaker";
import CorporateLeadershipSpeaker from "./CorporateLeadershipSpeaker";
import StudentAssemblySpeaker from "./StudentAssemblySpeaker";
import DiversityInclusionSpeaker from "./DiversityInclusionSpeaker";
import GraduationCommencementSpeaker from "./GraduationCommencementSpeaker";
import MentalHealthSpeakerTeens from "./MentalHealthSpeakerTeens";
import PersonalBrandingSpeaker from "./PersonalBrandingSpeaker";
import FloridaSchoolSpeaker from "./FloridaSchoolSpeaker";

// AI-Optimized Pages
import AboutDenisEstimon from "./AboutDenisEstimon";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import MovementFramework from "./MovementFramework";

// State Pages - full dynamic SEO pages
import StateSpeakerPage from "./StateSpeakerPage";
import StatesSpeakerIndex from "./StatesSpeakerIndex";
import StateCitySpeakerPage from "./StateCitySpeakerPage";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import BlogIndex from './BlogIndex';
import BlogPost from './BlogPost';

const PAGES = {
    
    Home: Home,
    
    About: About,
    
    booking: Booking,
    
    // Speaker Pages
    'high-school-motivational-speaker': HighSchoolMotivationalSpeaker,
    'anti-bullying-speaker-schools': AntiBullyingSpeaker,
    'college-keynote-speaker': CollegeKeynoteSpeaker,
    'corporate-leadership-training-speaker': CorporateLeadershipSpeaker,
    'student-assembly-speaker': StudentAssemblySpeaker,
    'diversity-inclusion-speaker': DiversityInclusionSpeaker,
    'graduation-commencement-speaker': GraduationCommencementSpeaker,
    'mental-health-speaker-teens': MentalHealthSpeakerTeens,
    'personal-branding-speaker-students': PersonalBrandingSpeaker,
    'florida-school-speaker': FloridaSchoolSpeaker,
    
    // AI-Optimized Pages
    'about-denis-estimon': AboutDenisEstimon,
    'frequently-asked-questions': FrequentlyAskedQuestions,
    'movement-framework': MovementFramework,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    // const location = useLocation();
    // const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout>
            <Routes>
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                <Route path="/home" element={<Home />} />
                
                <Route path="/About" element={<About />} />
                <Route path="/about" element={<About />} />
                
                <Route path="/booking" element={<Booking />} />
                
                {/* Speaker Pages */}
                <Route path="/high-school-motivational-speaker" element={<HighSchoolMotivationalSpeaker />} />
                <Route path="/anti-bullying-speaker-schools" element={<AntiBullyingSpeaker />} />
                <Route path="/college-keynote-speaker" element={<CollegeKeynoteSpeaker />} />
                <Route path="/corporate-leadership-training-speaker" element={<CorporateLeadershipSpeaker />} />
                <Route path="/student-assembly-speaker" element={<StudentAssemblySpeaker />} />
                <Route path="/diversity-inclusion-speaker" element={<DiversityInclusionSpeaker />} />
                <Route path="/graduation-commencement-speaker" element={<GraduationCommencementSpeaker />} />
                <Route path="/mental-health-speaker-teens" element={<MentalHealthSpeakerTeens />} />
                <Route path="/personal-branding-speaker-students" element={<PersonalBrandingSpeaker />} />
                <Route path="/florida-school-speaker" element={<FloridaSchoolSpeaker />} />
                
                {/* AI-Optimized Pages */}
                <Route path="/about-denis-estimon" element={<AboutDenisEstimon />} />
                <Route path="/frequently-asked-questions" element={<FrequentlyAskedQuestions />} />
                <Route path="/movement-framework" element={<MovementFramework />} />
                
                {/* Blog */}
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                
                {/* State Speaker Pages */}
                <Route path="/speakers-by-state" element={<StatesSpeakerIndex />} />
                <Route path="/speaker/:state" element={<StateSpeakerPage />} />
                <Route path="/speaker/:state/:city" element={<StateCitySpeakerPage />} />
                
                {/* Catch-all route - redirect to home */}
                <Route path="*" element={<Home />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}