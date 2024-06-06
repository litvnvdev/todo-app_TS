import styled from "styled-components";
import { useToDoStore } from "./shared/model/stores/useToDoStore";
import { AddTaskButton } from "./features/task-form/ui/AddTaskButton";
import { Task } from "./entities/task";

function App() {
  const [tasks, createTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
  ]);
  console.log(tasks);

  return (
    <>
      <Wrapper>
        <Title>Simple To Do List</Title>
        <AddTaskButton
          onAdd={(title) => {
            createTask(title);
          }}
        />
        <Task />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.article`
  box-shadow: 1px 1px 39px -8px rgba(255, 255, 255, 0.75);
  display: flex;
  flex-direction: column;
  width: 50vw;
  background: white;
  border-radius: 20px;
  padding: 50px 50px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-weight: 500;
  color: black;
  font-size: 40px;
  margin-bottom: 2rem;
  text-align: center;
`;

export default App;
