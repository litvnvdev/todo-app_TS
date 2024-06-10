import { create } from "zustand";
import { persist } from "zustand/middleware";
import { uid } from "uid";

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      createTask: (title: string) => {
        const { tasks } = get();
        const newTask = {
          id: uid(),
          title,
          createdAt: Date.now(),
        };

        set({
          tasks: [newTask].concat(tasks),
        });
      },

      updateTask: (id: string, title: string) => {
        const { tasks } = get();

        set({
          tasks: tasks.map((task) => ({
            ...task,
            title: task.id === id ? title : task.title,
          })),
        });
      },
      removeTask: (id: string) => {
        const { tasks } = get();
        set({
          tasks: tasks.filter((task) => task.id !== id),
        });
      },
    }),
    { name: "toDoStore" }
  )
);
