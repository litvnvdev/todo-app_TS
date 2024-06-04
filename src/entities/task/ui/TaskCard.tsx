import styled from "styled-components";

interface TaskCardProps {
  title: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({ title }) => {
  return (
    <TaskContainer>
      <TaskText>{title}</TaskText>
    </TaskContainer>
  );
};

const TaskContainer = styled.section`
  border-radius: 5px;
  padding: 50px;
  margin-top: 5px;
  width: 90%;
  padding: 8px 12px;
  background: #dbe2ef;
  display: flex;
  gap: 8px;
`;
const TaskText = styled.p`
  font-size: 1.1rem;
  padding: 6px 4px;
`;
