import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

type Props = {
  text: string;
  handleInput: any;
  handleButton: () => void;
  handleClearTaskList: () => void;
  tasks: string[];
};

interface ContainerProps {
  background?: string;
  width?: string;
  flex?: string;
  align?: string;
  justify?: string;
  margin?: string;
  shadow?: string;
  md_width?: string;
  md_justify?: string;
  sm_width?: string;
  text_line?: string;
}
interface ButtonProps {
  width?: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  padding-left: 1rem;
  font-size: 1.1em;
  width: 90%;
  gap: 1rem;
  color: #000;

  @media (min-width: 480px) and (max-width: 992px) {
    font-size: 0.8em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 0.8em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const SubTitle = styled.h3`
  margin: 0 auto;
  text-align: center;
  font-size: 1.3em;
`;
const Container = styled.div<ContainerProps>`
  margin: ${(props) => props.margin};
  text-decoration: ${(props) => props.text_line};
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
  color: #fff;
  font-weight: 500;
  text-shadow: 1px 1px 2px #000;
  padding: 0.5rem;
  border-radius: 8px;
  margin-top: 0.5rem;
  height: fit-content;
  align-items: ${(props) => props.align};
  display: flex;
  width: ${(props) => props.width};
  justify-content: ${(props) => props.justify};
  gap: 1rem;
  flex-direction: ${(props) => props.flex};
  background: ${(props) => props.background};
  box-shadow: ${(props) => props.shadow};

  @media (min-width: 480px) and (max-width: 992px) {
    font-size: 1em;
    width: ${(props) => props.md_width};
    justify-content: ${(props) => props.md_justify};
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 0.9em;
    width: ${(props) => props.sm_width};
  }
`;
const Input = styled.input`
  margin-left: 1rem;
  border: none;
  outline: none;
  color: #656b72;
  font-size: 1.1em;
  background: #e0e1e3;
  padding: 0.5rem;
  width: 75%;
  height: 75px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 2px solid #59abcb;
  }
  @media (min-width: 480px) and (max-width: 992px) {
    width: 80%;
  }
`;

const Button = styled.button<ButtonProps>`
  transition: 0.2s;
  margin-left: 1rem;
  border: none;
  color: #fff;
  font-size: 1em;
  border-radius: 7px;
  height: 45px;
  max-width: ${(props) => props.width};
  background-color: #59abcb;
  cursor: pointer;
  border: 2px solid #e0e1e3;

  &:hover {
    background-color: #656b72;
  }
`;

const TaskText = styled.p`
  line-height: 1;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.2em;
  }
`;
const CheckBox = styled.input<ContainerProps>`
  margin-left: 1rem;
`;

const UserInput = ({
  text,
  tasks,
  handleInput,
  handleButton,
  handleClearTaskList,
}: Props) => {
  const [isChecked, setIsChecked] = useState(
    new Array(tasks.length).fill(false)
  );
 
  const handleCheckBox = (position: number) => {
      const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );
    setIsChecked(updatedCheckedState);
    console.log(isChecked[position]);
    
  };

  return (
    <Wrapper>
      <Container
        background="#f0f0f1"
        width="400px"
        sm_width="235px"
        flex="column"
        shadow="-5px 3px 10px 10px rgba(0, 0, 0, 0.2)"
      >
        <Input
          placeholder="Напишите сюда какую-нибудь задачу"
          type="text"
          value={text}
          onChange={handleInput}
        />
        <Button onClick={handleButton} width="150px">
          Добавить
        </Button>
        <Button onClick={handleClearTaskList} width="250px">
          Очистить весь список
        </Button>
      </Container>

      <Container
        background="#f0f0f1"
        width="1000px"
        sm_width="100%"
        flex="column"
        shadow="7px 10px 10px 10px rgba(0, 0, 0, 0.2)"
        md_width="100%"
      >
        {tasks?.length > 0 && <SubTitle>Вот твой список дел 😉</SubTitle>}
        {tasks?.length <= 0 && <SubTitle>Пока список дел пуст 🙁</SubTitle>}

        {tasks?.map((el, id) => (
          <Container
            key={el + id}
            flex="row"
            // background={isChecked ? "#656b72" : "#59abcb"}
            background="#59abcb"
            width="75%"
            md_width="90%"
            sm_width="80%"
            align="center"
            justify="space-between"
            margin="0 auto"
            // text_line={isChecked ? "line-through" : "underline"}
            text_line="underline"
          >
            <TaskText key={el + id}>{`№${id + 1}. ${el}`}</TaskText>
            <Container
              flex="row"
              width="15%"
              md_width="35%"
              align="center"
              md_justify="flex-end"
              justify="flex-end"
            >
              <CheckBox
                type="checkbox"
                onChange={() => handleCheckBox(id)}
                checked={isChecked[id]}
              />
              <IoIosClose className="close-item" size={35} />
            </Container>
          </Container>
        ))}
      </Container>
    </Wrapper>
  );
};

export default UserInput;
