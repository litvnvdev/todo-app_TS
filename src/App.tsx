import styled from "styled-components";
import { UserInput } from "./components";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;

const SubTitle = styled.h3`
  font-weight: 400;
  text-align: center;
  font-size: 1.6em;
`;
const Text = styled.p`
  text-align: center;
  font-size: 1.2em;
`;
function App() {
  const storageTask = JSON.parse(localStorage.getItem("tasks") as any) || [];
  const [inputTask, setInputTask] = useState("");
  const [arrTask, setArrTask] = useState(storageTask);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(arrTask));
  }, [arrTask]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(event.target.value);
  };

  const handleButton = () => {
    setArrTask((arr: string[]) => [...arr, inputTask]);
  };

  const handleClearTaskList = () => {
    setArrTask([]);
    setInputTask("");
  };


  let date = new Date().toLocaleDateString();

  return (
    <>
      <Title>Привет!</Title>
      <SubTitle>Сегодня: {date} </SubTitle>
      <Text>
        Ниже будет расположен Ваш список дел. Заполните поле и нажмите кнопку
        "Добавить"
      </Text>
      <Wrapper>
        <UserInput
          text={inputTask}
          tasks={arrTask}
          handleInput={handleInput}
          handleButton={handleButton}
          handleClearTaskList={handleClearTaskList}
        />
      </Wrapper>
    </>
  );
}

export default App;
