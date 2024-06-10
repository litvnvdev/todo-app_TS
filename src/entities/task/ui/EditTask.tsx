import styled from "styled-components";
import { MdDone } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useToDoStore } from "../../../shared/model/stores/useToDoStore";

interface EditTaskProps {
  title: string;
  id: string;
  isEditMode: boolean;
  setEditMode: () => void;
}

export const EditTask: React.FC<EditTaskProps> = ({
  id,
  title,
  isEditMode,
  setEditMode,
}) => {
  const { updateTask } = useToDoStore();
  const [inputValue, setInputValue] = useState(title);
  const editTaskFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditMode) {
      editTaskFocus?.current?.focus();
    }
  }, [isEditMode]);
  return (
    <EditTaskContainer>
      <EditInput
        ref={editTaskFocus}
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
        onKeyDown={(evt) => {
          if (evt.key === "Enter") {
            updateTask(id, inputValue);
            setEditMode();
          }
        }}
      />
      <EditTaskButton
        onClick={() => {
          console.log(inputValue);

          updateTask(id, inputValue);
          setEditMode();
        }}
      >
        <MdDone size={25} />
      </EditTaskButton>
    </EditTaskContainer>
  );
};
const EditTaskContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-top: 5px;
  padding: 8px 12px;
  background: #dbe2ef;
  word-wrap: break-word;
`;
const EditInput = styled.input`
  width: 90%;
  border-radius: 5px;
  border: 2px solid #3f72af;
  padding: 8px 10px;
  background: none;
`;
const EditTaskButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid green;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
`;
