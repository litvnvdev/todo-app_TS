import { useToDoStore } from "../../shared/model/stores/useToDoStore";
import { DisplayTaskLayout } from "./ui/DisplayTaskLayout";
import { TaskCard } from "./ui/TaskCard";

export const Task: React.FC = () => {
  const { tasks } = useToDoStore();
  return (
    <DisplayTaskLayout>
      {tasks.map(({ title }) => (
        <TaskCard title={title} />
      ))}
    </DisplayTaskLayout>
  );
};
