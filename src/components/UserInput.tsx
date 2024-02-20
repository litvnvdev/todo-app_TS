import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

type Props = {
  text: string;
  handleInput: any;
  handleButton: any;
  handleClearTaskList: any;
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
`;
const SubTitle = styled.h3`
  margin: 0 auto;
  text-align: center;
  font-size: 1.3em;
`;
const Container = styled.div<ContainerProps>`
  margin: ${(props) => props.margin};
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
`;

const Button = styled.button<ButtonProps>`
  transition: 0.2s;
  margin-left: 1rem;
  border: none;
  color: #fff;
  font-size: 1em;
  border-radius: 7px;
  height: 45px;
  width: ${(props) => props.width};
  background-color: #59abcb;
  cursor: pointer;
  border: 2px solid #e0e1e3;

  &:hover {
    background-color: #656b72;
  }
`;

const TaskText = styled.p`
  line-height: 1;
  text-decoration: underline;
`;
const CheckBox = styled.input.attrs({ type: "checkbox" })`
  margin-left: 1rem;
`;

const UserInput = ({
  text,
  tasks,
  handleInput,
  handleButton,
  handleClearTaskList,
}: Props) => {
  return (
    <Wrapper>
      <Container
        background="#f0f0f1"
        width="450px"
        flex="column"
        shadow="-5px 3px 10px 10px rgba(0, 0, 0, 0.2)"
      >
        <Input
          placeholder="Напиши сюда какую-нибудь задачу"
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
        width="60%"
        flex="column"
        shadow="7px 10px 10px 10px rgba(0, 0, 0, 0.2)"
      >
        {tasks?.length > 0 && <SubTitle>Вот твой список дел 😉</SubTitle>}
        {tasks?.length <= 0 && <SubTitle>Пока список дел пуст 🙁</SubTitle>}

        {tasks?.map((el, i) => (
          <Container
            key={el + i}
            flex="row"
            background="#59abcb"
            width="50%"
            align="center"
            justify="space-between"
            margin="0 auto"
          >
            <TaskText key={el + i}>{`№${i + 1}. ${el}`}</TaskText>
            <Container
              flex="row"
              width="15%"
              align="center"
              justify="space-between"
            >
              <CheckBox />
              <IoIosClose className="close-item" size={35} />
            </Container>
          </Container>
        ))}
      </Container>
    </Wrapper>
  );
};

export default UserInput;
