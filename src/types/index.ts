
export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  badge?: string;
  badgeName?: string;
}

export interface Step {
  title: string;
  description: string;
  image: string;
  resources: Resource[];
}

export interface Resource {
  title: string;
  link: string;
}

export interface TaskWithSteps extends Task {
  steps: Step[];
}

export type TaskProgress = {
  taskId: number;
  completed: boolean;
  currentStepIndex?: number;
};

export interface UserProgress {
  completedTasks: number[];
  taskProgress: TaskProgress[];
  earnedBadges: string[];
}
