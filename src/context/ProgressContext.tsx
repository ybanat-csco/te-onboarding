
import React, { createContext, useContext, useState, useEffect } from "react";
import { UserProgress, TaskProgress } from "@/types";
import { TASKS_DATA } from "@/data/tasks";
import { useToast } from "@/hooks/use-toast";

interface ProgressContextType {
  userProgress: UserProgress;
  completeTask: (taskId: number) => void;
  updateStepProgress: (taskId: number, stepIndex: number) => void;
  percentageComplete: number;
  resetProgress: () => void;
}

const defaultUserProgress: UserProgress = {
  completedTasks: [],
  taskProgress: TASKS_DATA.map(task => ({ taskId: task.id, completed: false })),
  earnedBadges: [],
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const savedProgress = localStorage.getItem("userProgress");
    return savedProgress ? JSON.parse(savedProgress) : defaultUserProgress;
  });
  
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem("userProgress", JSON.stringify(userProgress));
  }, [userProgress]);

  const percentageComplete = Math.round(
    (userProgress.completedTasks.length / TASKS_DATA.length) * 100
  );

  const completeTask = (taskId: number) => {
    if (userProgress.completedTasks.includes(taskId)) {
      return;
    }

    const task = TASKS_DATA.find(t => t.id === taskId);
    
    const updatedProgress = {
      ...userProgress,
      completedTasks: [...userProgress.completedTasks, taskId],
      taskProgress: userProgress.taskProgress.map(tp => 
        tp.taskId === taskId ? { ...tp, completed: true } : tp
      )
    };

    if (task?.badge && !userProgress.earnedBadges.includes(task.badge)) {
      updatedProgress.earnedBadges = [...updatedProgress.earnedBadges, task.badge];
      toast({
        title: "Badge Earned!",
        description: `You've earned the ${task.badge} badge!`,
        variant: "default", // Changed from "success" to "default"
      });
    }

    // Check if all tasks are completed
    const allTasksCompleted = TASKS_DATA.every(task => 
      [...userProgress.completedTasks, taskId].includes(task.id)
    );

    if (allTasksCompleted && !userProgress.earnedBadges.includes("ThousandEyes Explorer")) {
      updatedProgress.earnedBadges = [...updatedProgress.earnedBadges, "ThousandEyes Explorer"];
      
      toast({
        title: "Congratulations!",
        description: "You've earned the ThousandEyes Explorer badge by completing all tasks!",
        variant: "default" // Changed from "success" to "default"
      });
    }

    setUserProgress(updatedProgress);
    
    if (!allTasksCompleted) {
      toast({
        title: "Task Completed!",
        description: `You've completed: ${task?.title}`,
        variant: "default" // Changed from "success" to "default"
      });
    }
  };

  const updateStepProgress = (taskId: number, stepIndex: number) => {
    setUserProgress(prev => ({
      ...prev,
      taskProgress: prev.taskProgress.map(tp => 
        tp.taskId === taskId ? { ...tp, currentStepIndex: stepIndex } : tp
      )
    }));
  };

  const resetProgress = () => {
    setUserProgress(defaultUserProgress);
    localStorage.removeItem("userProgress");
    toast({
      title: "Progress Reset",
      description: "Your onboarding progress has been reset.",
    });
  };

  return (
    <ProgressContext.Provider value={{ 
      userProgress, 
      completeTask, 
      updateStepProgress,
      percentageComplete,
      resetProgress 
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
