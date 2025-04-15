
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Trophy } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary-light to-white p-4">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-8">
        <img 
            src="/ThousandEyes-logo.png" 
            alt="Welcome Trophy" 
            className="h-64 w-96 mx-auto object-cover object-center"
          />        </div>

        <p className="text-lg text-gray-700 mb-8">
          We've created an interactive journey to help you get the most out of ThousandEyes. 
          Complete tasks to earn badges and master the platform's capabilities!
        </p>
        
        <div className="mb-8 bg-primary-light rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-3">What you'll learn:</h2>
          <ul className="text-left list-disc list-inside text-gray-700 space-y-2">
            <li>Creating and configuring network tests</li>
            <li>Exploring data visualization on the Views page</li>
            <li>Deploying templates for efficient monitoring</li>
            <li>Building custom dashboards for personalized insights</li>
            <li>Setting up proactive alerts</li>
            <li>Configuring role-based access controls</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary mb-3">How it works:</h2>
          <p className="text-gray-700">
            Complete tasks to earn badges and progress through your onboarding journey. Each task includes step-by-step guidance to help you gain hands-on experience with key platform features.
          </p>
        </div>
        
        <Button 
          className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg text-lg"
          onClick={() => navigate("/tasks")}
        >
          Start Your Journey
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
