import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useCallback, useState } from "react";

interface AddButtonProps {
  onAdd: (title: string) => void;
}

export const AddTaskButton: React.FC<AddButtonProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = useCallback(() => {
    onAdd(inputValue);
    setInputValue("");
  }, [inputValue]);

  return (
    <AddTaskButtonContainer>
      <Input
        value={inputValue}
        type="text"
        placeholder="Type here..."
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button onClick={handleAddTask}>
        <IoIosAddCircleOutline size={25} />
      </Button>
    </AddTaskButtonContainer>
  );
};

const AddTaskButtonContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 45px;
  margin-top: 10px;
`;
const Input = styled.input`
  background: #dbe2ef;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 2px solid #b1b1b1;
  padding: 8px 10px;
  font: 1rem/1.4 "Roboto", "sans-serif";
  &::placeholder {
    color: #7b7b7b;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  padding: 8px 10px;
  border-left: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  background: #3f72af;
  &:hover {
    opacity: 0.7;
    transition: 0.3s;
  }
`;
