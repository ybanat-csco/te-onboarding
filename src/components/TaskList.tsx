
import React from "react";
import { useProgress } from "@/context/ProgressContext";
import { TASKS_DATA } from "@/data/tasks";
import TaskCard from "@/components/TaskCard";
import { Progress } from "@/components/ui/progress";
import { Trophy, Medal, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FINAL_BADGE } from "@/data/tasks";
import { toast } from "sonner";

const TaskList = () => {
  const { percentageComplete, userProgress, resetProgress } = useProgress();
  const navigate = useNavigate();
  const allTasksCompleted = percentageComplete === 100;
  const hasFinalBadge = userProgress.earnedBadges.includes("ThousandEyes Explorer");

  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset your progress? This cannot be undone.")) {
      resetProgress();
    }
  };

  const navigateToWelcome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header section */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">ThousandEyes Onboarding</h1>
            <p className="text-gray-600 mt-2">
              Complete the tasks below to master ThousandEyes
            </p>
          </div>
          <div className="mt-4 md:mt-0 space-x-2">
            <Button variant="outline" onClick={navigateToWelcome}>
              Back to Welcome
            </Button>
            <Button variant="outline" onClick={handleResetProgress}>
              Reset Progress
            </Button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700">Your Progress</h2>
            <span className="font-medium text-primary">{percentageComplete}% Complete</span>
          </div>
          <Progress value={percentageComplete} className="h-2" />
        </div>

        {/* Tasks section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TASKS_DATA.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>

        {/* Badges section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-primary mb-6">Your Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TASKS_DATA.filter(task => task.badge).map((task) => {
              const earned = userProgress.earnedBadges.includes(task.badge as string);
              return (
                <div 
                  key={task.badge}
                  className={`flex flex-col items-center p-4 rounded-lg ${
                    earned ? "bg-primary-light" : "bg-gray-100"
                  }`}
                >
                  <div className="h-16 w-16 rounded-full flex items-center justify-center">
                    {task.badgeName === "Investigator" && (
                      <Award 
                        className={`h-12 w-12 ${earned ? "text-badge" : "text-gray-400"}`} 
                      />
                    )}
                    {task.badgeName === "Designer" && (
                      <Medal 
                        className={`h-12 w-12 ${earned ? "text-badge" : "text-gray-400"}`} 
                      />
                    )}
                    {task.badgeName === "Security Guru" && (
                      <Award 
                        className={`h-12 w-12 ${earned ? "text-badge" : "text-gray-400"}`} 
                      />
                    )}
                  </div>
                  <p className={`mt-2 font-medium text-center ${earned ? "text-primary" : "text-gray-500"}`}>
                    {task.badge}
                  </p>
                </div>
              );
            })}
            {/* Final badge */}
            <div 
              className={`flex flex-col items-center p-4 rounded-lg ${
                hasFinalBadge ? "bg-primary-light" : "bg-gray-100"
              }`}
            >
              <div className="h-16 w-16 rounded-full flex items-center justify-center">
                <Trophy 
                  className={`h-12 w-12 ${hasFinalBadge ? "text-badge" : "text-gray-400"}`} 
                />
              </div>
              <p className={`mt-2 font-medium text-center ${hasFinalBadge ? "text-primary" : "text-gray-500"}`}>
                {FINAL_BADGE.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
