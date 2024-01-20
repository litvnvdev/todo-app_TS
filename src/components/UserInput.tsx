import styled from "styled-components";

type Props = {
  text: string;
  handleInput: any;
  handleButton: any;
  handleTaskList: any;
  tasks: string[];
};

interface StyledProps {
  background?: string;
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
const Container = styled.div<StyledProps>`
  padding: 0.5rem;
  border-radius: 8px;
  border: 2px solid red;
  margin-top: 0.5rem;
  height: fit-content;
  align-items: flex-start;
  display: flex;
  width: ${(props) => props.width};
  justify-content: flex-start;
  gap: 1rem;
  flex-direction: column;
  background: ${(props) => props.background};
`;
const Input = styled.input`
  margin-left: 1rem;
  font-size: 1.2em;
  background: papayawhip;
  padding: 0.5rem;
  width: 75%;
  height: 75px;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-left: 1rem;
  font-size: 1em;
  border-radius: 7px;
  height: 45px;
  width: 40%;
  background-color: peachpuff;
  cursor: pointer;
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
  handleTaskList,
}: Props) => {
  return (
    <Wrapper>
      <Container background="papayawhip" width="450px">
        <Input
          placeholder="Напиши, что хочешь выполнить - сюда"
          type="text"
          value={text}
          onChange={handleInput}
        />
        <Button onClick={handleButton}>Добавить</Button>
        <Button onClick={handleTaskList}>Очистить</Button>
      </Container>

      <Container background="aliceblue" width="60%">
        {tasks.length > 0 && <SubTitle>Вот твой список дел 😉</SubTitle>}
        {tasks.length <= 0 && <SubTitle>Пока список дел пуст 🙁</SubTitle>}
        {tasks.map((el, i) => (
          <TaskText key={el + i}>
            {`№${i + 1}. ${el}`} <CheckBox />
          </TaskText>
        ))}
      </Container>
    </Wrapper>
  );
};

export default UserInput;
