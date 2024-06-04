import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import styled from "styled-components";

interface TaskCardProps {
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  onRemoved,
  onDone,
  onEdited,
}) => {
  const removeTask = (id: string) => {
    onRemoved(id);
  };
  const editTask = (id: string, title: string) => {
    onEdited(id, title);
  };
  const doneTask = (id: string) => {
    onDone(id);
  };

  return (
    <TaskContainer>
      <TaskText>{title}</TaskText>
      <ButtonContainer>
        <RemoveTaskButton onClick={() => removeTask(id)}>
          <IoIosRemoveCircleOutline size={25} />
        </RemoveTaskButton>
        <EditTaskButton onClick={() => editTask(id, title)}>
          <RiEditLine size={25} />
        </EditTaskButton>
        <DoneTaskButton onClick={() => doneTask(id)}>
          <MdDone size={25} />
        </DoneTaskButton>
      </ButtonContainer>
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
  justify-content: space-between;
  gap: 8px;
`;
const TaskText = styled.p`
  font-size: 1.1rem;
  padding: 6px 4px;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const TaskButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RemoveTaskButton = styled(TaskButton)`
  color: red;
`;
const EditTaskButton = styled(TaskButton)`
  color: grey;
`;
const DoneTaskButton = styled(TaskButton)`
  color: green;
`;
