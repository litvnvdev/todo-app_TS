import styled from "styled-components";
import { useToDoStore } from "../../../shared/model/stores/useToDoStore";
import { EmptyTask } from "./EmptyTask";

interface DisplayTaskProps {
  children: React.ReactNode;
}

export const DisplayTaskLayout: React.FC<DisplayTaskProps> = ({ children }) => {
  const { tasks } = useToDoStore();
  return <TaskWrapper>{!tasks.length ? <EmptyTask /> : children}</TaskWrapper>;
};

const TaskWrapper = styled.section`
  margin-top: 12px;
  padding: 12px 0;
  background: #fff;
  border-radius: 20px;
  height: 40dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
