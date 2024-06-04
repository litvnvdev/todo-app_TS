import { useToDoStore } from "../../shared/model/stores/useToDoStore";
import { DisplayTaskLayout } from "./ui/DisplayTaskLayout";
import { TaskCard } from "./ui/TaskCard";

export const Task: React.FC = () => {
  const { tasks, removeTask, updateTask } = useToDoStore();

  return (
    <DisplayTaskLayout mt="10px">
      {tasks &&
        tasks.map(({ title, id }) => (
          <TaskCard
            id={id}
            key={id}
            title={title}
            onRemoved={() => removeTask(id)}
            onDone={() => removeTask(id)}
            onEdited={() => updateTask(title, id)}
          />
        ))}
    </DisplayTaskLayout>
  );
};
