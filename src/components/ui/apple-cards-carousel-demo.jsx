
"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) =>
  <Card key={card.src} card={card} index={index} />
  );

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-4xl font-semibold text-neutral-800 dark:text-neutral-200 font-sans">Who Denis serves

      </h2>
      <Carousel items={cards} />
    </div>);

}

const YouMovementContent = () => {
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-8 md:p-12 rounded-3xl mb-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">Who we serve</h3>
          <div className="grid gap-4">
            <div className="flex items-center space-x-3 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-700 text-lg font-medium">Students (grades 3–12)</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-700 text-lg font-medium">Teachers, counselors, deans, principals</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-700 text-lg font-medium">Families/PTA</span>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">Issues Denis addresses</h3>
          <div className="grid gap-3">
            {[
              "Bullying (in person and online)",
              "Feeling left out or alone", 
              "Low confidence; afraid to speak up",
              "Drama and name-calling",
              "Bystanders not sure what to do",
              "Classrooms that don't feel safe or calm",
              "Teachers short on time and tools",
              "Dropping focus, attendance, and kindness"
            ].map((issue, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-gray-700 text-lg font-medium">{issue}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center p-6 bg-black/5 rounded-2xl border border-gray-200">
          <p className="text-gray-800 text-xl font-semibold">
            Uses the Movement Method and the Movement Framework.
          </p>
        </div>
      </div>
    </div>
  );
};

const MovementUContent = () => {
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-8 md:p-12 rounded-3xl mb-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">Who we serve</h3>
          <div className="grid gap-4">
            {[
              "College students (18–24)",
              "First-gen and transfer students", 
              "Student leaders, athletes, RAs",
              "Orientation and career programs"
            ].map((audience, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-gray-700 text-lg font-medium">{audience}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">Issues Denis addresses</h3>
          <div className="grid gap-3">
            {[
              "Not sure which major or career fits",
              "Fear that AI will take jobs",
              "Feeling behind when others post wins",
              "Low confidence; imposter thoughts",
              "Don't know how to network or ask for help",
              "Start–stop habits; procrastination",
              "Stress and poor sleep",
              "No simple 90-day plan"
            ].map((issue, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-gray-700 text-lg font-medium">{issue}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center p-6 bg-black/5 rounded-2xl border border-gray-200 mb-8">
          <p className="text-gray-800 text-xl font-semibold">
            Uses the Movement Method and the Movement Framework.
          </p>
        </div>
        
        <div className="text-center">
          <a 
            href="https://movementu.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Visit MovementU.com
            <svg 
              className="ml-3 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const MovementLeaderContent = () => {
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-8 md:p-12 rounded-3xl mb-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">Who we serve</h3>
          <div className="grid gap-4">
            {[
              "Team leads and managers",
              "School leaders, coaches, club advisors",
              "Community and nonprofit leaders"
            ].map((audience, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-gray-700 text-lg font-medium">{audience}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">Issues Denis addresses</h3>
          <div className="grid gap-3">
            {[
              "Constant change and fire-fighting",
              "Low trust; mixed messages",
              "Unclear goals; slow meetings",
              "Avoided hard talks; growing conflict",
              "Tired teams; low morale",
              "Plans too big; no next small step",
              "Wins not shared; momentum stalls",
              "New habits don't stick"
            ].map((issue, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-gray-700 text-lg font-medium">{issue}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center p-6 bg-black/5 rounded-2xl border border-gray-200">
          <p className="text-gray-800 text-xl font-semibold">
            Uses the Movement Method and the Movement Framework.
          </p>
        </div>
      </div>
    </div>
  );
};

const MovementBrandContent = () => {
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-8 md:p-12 rounded-3xl mb-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">Who we serve</h3>
          <div className="grid gap-4">
            {[
              "Founders, solo owners, small teams",
              "Service businesses, agencies, creators",
              "Nonprofits that want to grow"
            ].map((audience, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-gray-700 text-lg font-medium">{audience}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">Issues Denis addresses</h3>
          <div className="grid gap-3">
            {[
              "Fuzzy message; customers don't \"get it\"",
              "Slow or uneven sales",
              "Too many tools; messy systems",
              "Manual work that AI could do",
              "Weak lead → book → close flow",
              "Website and content not converting",
              "No simple scorecard to track what works",
              "Help is costly; need a clear, simple plan"
            ].map((issue, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-gray-700 text-lg font-medium">{issue}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center p-6 bg-black/5 rounded-2xl border border-gray-200">
          <p className="text-gray-800 text-xl font-semibold">
            Uses the Movement Method and the Movement Framework.
          </p>
        </div>
      </div>
    </div>
  );
};

const data = [
{
  category: "K–12",
  title: "YouMovement",
  description: "For students who feel left out, stressed, or unsure where they fit — YouMovement helps them feel seen, make real friends, and take small daily steps to grow.",
  src: "/assets/955587a66_ChatGPTImageAug14202501_45_22PM.png",
  content: <YouMovementContent />
},
{
  category: "Universities",
  title: "MovementU",
  description: "For college students who fear the future and AI — MovementU turns fear into a clear plan: know who you are, what you bring, and your next 90 days to stand out before you graduate.",
  src: "/assets/8d981ef2c_ChatGPTImageAug14202501_54_55PM.png",
  content: <MovementUContent />
},
{
  category: "Leadership",
  title: "The Movement Leader",
  description: "For leaders who feel tired and pulled in ten directions — The Movement Leader helps you lead yourself first, build trust, and move your team with simple weekly steps.",
  src: "https://sz1374rvkm.ufs.sh/f/MDxJytqA5U0OHh9DrKuMI2LoxvDYCOkqlwjt0Ss4rKunyVpP",
  content: <MovementLeaderContent />
},
{
  category: "Business",
  title: "Movement Brand",
  description: "For teams lost in a loud market and fast tech — Movement Brand gets you clear on who you are, says it simply, serves better, and sets up smart AI helpers so your people can do work that matters.",
  src: "https://sz1374rvkm.ufs.sh/f/MDxJytqA5U0OUdscNIREGvQHRkCiNXrcnIT0YVJPKSLzaMAx",
  content: <MovementBrandContent />
}];