import styled from "styled-components";
import { useToDoStore } from "../../../shared/model/stores/useToDoStore";
import { EmptyTask } from "./EmptyTask";

interface DisplayTaskProps {
  mt: string;
  children: React.ReactNode;
}

export const DisplayTaskLayout: React.FC<DisplayTaskProps> = ({
  children,
  mt,
}) => {
  const { tasks } = useToDoStore();
  return (
    <TaskWrapper mt={mt}>
      {!tasks.length ? <EmptyTask /> : children}
    </TaskWrapper>
  );
};

const TaskWrapper = styled.section<{ mt?: string }>`
  margin-top: ${(props) => props.mt};
  padding: 12px 0;
  min-height: 400px;
  min-width: 100%;
  border-radius: 20px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: end;
`;
