
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TASKS_DATA } from "@/data/tasks";
import { useProgress } from "@/context/ProgressContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

const StepsGuide = () => {
  const { taskId, stepNumber } = useParams();
  const navigate = useNavigate();
  const { updateStepProgress, userProgress } = useProgress();
  const [imageLoading, setImageLoading] = useState(true);
  
  // Validate params
  const taskIdNum = Number(taskId);
  const stepNum = Number(stepNumber);
  
  const task = TASKS_DATA.find((t) => t.id === taskIdNum);
  
  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Task not found</h1>
          <p className="mt-4">
            <Button onClick={() => navigate("/tasks")}>
              Return to Task List
            </Button>
          </p>
        </div>
      </div>
    );
  }
  
  const steps = task.steps;
  const currentStep = steps[stepNum - 1];
  
  if (!currentStep) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Step not found</h1>
          <p className="mt-4">
            <Button onClick={() => navigate(`/tasks`)}>
              Return to Task List
            </Button>
          </p>
        </div>
      </div>
    );
  }
  
  // Function to determine image source
  const getImageSource = (imagePath: string) => {
    // If the path starts with "/" or "http", use it directly as a custom image
    if (imagePath.startsWith("/")) {
      return imagePath;
    }
    // Otherwise, use it as an Unsplash ID
    return `https://source.unsplash.com/${imagePath}`;
  };
  
  useEffect(() => {
    // Save current step progress
    updateStepProgress(taskIdNum, stepNum - 1);
  }, [taskIdNum, stepNum, updateStepProgress]);
  
  const handleNext = () => {
    if (stepNum < steps.length) {
      navigate(`/task/${taskIdNum}/steps/${stepNum + 1}`);
    } else {
      // Last step, go back to tasks
      navigate("/tasks");
    }
  };
  
  const handlePrevious = () => {
    if (stepNum > 1) {
      navigate(`/task/${taskIdNum}/steps/${stepNum - 1}`);
    } else {
      // First step, go back to tasks
      navigate("/tasks");
    }
  };

  const isLastStep = stepNum === steps.length;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="outline" onClick={() => navigate("/tasks")} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tasks
          </Button>
          
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">{task.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span>Step {stepNum} of {steps.length}:</span>
            <span className="font-medium ml-2">{currentStep.title}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Step information */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">{currentStep.title}</h2>
                <p className="text-gray-700 mb-8">{currentStep.description}</p>
                
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-8">
                  {imageLoading && (
                    <div className="bg-gray-200 animate-pulse h-64 w-full flex items-center justify-center">
                      Loading image...
                    </div>
                  )}
                  <img 
                   

                    src={getImageSource(currentStep.image)}
                    alt={currentStep.title}
                    className="w-full h-auto object-cover"
                    onLoad={() => setImageLoading(false)}
                    style={{ display: imageLoading ? "none" : "block" }}
                  />
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" /> 
                    {stepNum === 1 ? "Back to Tasks" : "Previous Step"}
                  </Button>
                  
                  <Button 
                    onClick={handleNext}
                  >
                    {isLastStep ? "Finish" : "Next Step"} 
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right column - Resources */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
                
                {currentStep.resources.length > 0 ? (
                  <ul className="space-y-4">
                    {currentStep.resources.map((resource, index) => (
                      <li key={index}>
                        <a 
                          href={resource.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-primary hover:text-primary/80 hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>{resource.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No resources available for this step.</p>
                )}
              </CardContent>
            </Card>
            
            {/* Task progress card */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${(stepNum / steps.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="ml-4 text-sm font-medium text-gray-600">
                    {Math.round((stepNum / steps.length) * 100)}%
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsGuide;
