import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import styled from "styled-components";
import { EditTask } from "./EditTask";

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
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const removeTask = (id: string) => {
    if (confirm(`Are you sure to remove the "${title}" task?`)) {
      onRemoved(id);
    }
  };
  const handleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const doneTask = (id: string) => {
    onDone(id);
  };

  return (
    <>
      {isEditMode ? (
        <EditTask
          id={id}
          title={title}
          setEditMode={handleEditMode}
          isEditMode={isEditMode}
        />
      ) : (
        <TaskContainer>
          <TaskText>{title}</TaskText>
          <ButtonContainer>
            <DoneTaskButton onClick={() => doneTask(id)}>
              <FaCalendarCheck size={25} />
            </DoneTaskButton>
            <EditTaskButton onClick={handleEditMode}>
              <FaEdit size={25} />
            </EditTaskButton>
            <RemoveTaskButton onClick={() => removeTask(id)}>
              <FaRegTrashCan size={25} />
            </RemoveTaskButton>
          </ButtonContainer>
        </TaskContainer>
      )}
    </>
  );
};

export const TaskContainer = styled.section`
  border-radius: 5px;
  padding: 50px;
  margin-top: 5px;
  width: 100%;
  padding: 8px 12px;
  background: #dbe2ef;
  display: flex;
  justify-content: space-between;
  word-wrap: break-word;
  gap: 8px;
`;
export const TaskText = styled.p`
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
  color: #b30c0c;
`;
const EditTaskButton = styled(TaskButton)`
  color: #a1a1a1;
`;
export const DoneTaskButton = styled(TaskButton)`
  color: green;
`;
