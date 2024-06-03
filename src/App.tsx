import styled from "styled-components";
import { useToDoStore } from "./shared/model/stores/useToDoStore";
import { AddTaskButton } from "./features/task-form/AddTaskButton";

function App() {
  const [tasks, createTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
  ]);
  console.log(tasks);

  return (
    <Wrapper>
      <Title>To Do App</Title>
      <AddTaskButton
        onAdd={(title) => {
          createTask(title);
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  background: white;
  border-radius: 20px;
  padding: 20px 50px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-weight: 500;
  color: black;
  font-size: 40px;
  margin-bottom: 0.3rem;
  text-align: center;
`;

export default App;
