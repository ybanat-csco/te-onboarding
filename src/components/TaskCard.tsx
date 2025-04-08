
import React, { useState } from "react";
import { Task } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { userProgress, completeTask } = useProgress();
  const [isMarking, setIsMarking] = useState(false);
  const navigate = useNavigate();
  
  const isCompleted = userProgress.completedTasks.includes(task.id);
  
  const handleStartTask = () => {
    navigate(`/task/${task.id}/steps/1`);
  };
  
  const handleMarkCompleted = () => {
    if (isCompleted) return;
    
    setIsMarking(true);
    setTimeout(() => {
      completeTask(task.id);
      setIsMarking(false);
    }, 600);
  };

  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-sm overflow-hidden border-l-4",
        isCompleted ? "border-success" : "border-primary"
      )}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
          {isCompleted ? (
            <CheckCircle className="h-6 w-6 text-success" />
          ) : (
            <Circle className="h-6 w-6 text-primary" />
          )}
        </div>
        
        <p className="text-gray-600 mb-4">{task.description}</p>
        
        {task.badge && (
          <div className="flex items-center mb-4 bg-primary-light p-2 rounded-md">
            <Award className="h-5 w-5 mr-2 text-badge" />
            <span className="text-sm font-medium text-primary">Reward: {task.badge} Badge</span>
          </div>
        )}
        
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={handleStartTask}
          >
            {isCompleted ? "Review Steps" : "Start Task"}
          </Button>
          
          <Button 
            className={cn(
              "flex-1",
              isCompleted ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary/90",
              isMarking && "animate-pulse"
            )}
            disabled={isCompleted || isMarking}
            onClick={handleMarkCompleted}
          >
            {isCompleted ? "Completed" : isMarking ? "Marking..." : "Mark as Completed"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
