import styled from "styled-components";
import { UserInput } from "./components";
import {useState, useEffect } from "react";


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
  text-align: center;
  font-size: 1.8em;
`;
function App() {

  let arrayOfTasks:string[] = []

  const storageTask = JSON.parse(localStorage.getItem('tasks') as any)

  const [inputTask, setInputTask] = useState("");
  const [arrTask, setArrTask] = useState(storageTask);
  

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(arrTask))
  },[arrTask])

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(event.target.value);
  };

  const handleButton = () => {
    setArrTask((arr: string[]) => [...arr, inputTask]);
    
    
  };

  const handleTaskList =()=> {
    setArrTask(arrayOfTasks)
    setInputTask('')
  }
  

  return (
    <>
      <Title>ПРИВЕТ!</Title>
      <SubTitle> Это твой список дел</SubTitle>
      <Wrapper>
        <UserInput
          text={inputTask}
          tasks={arrTask}
          handleInput={handleInput}
          handleButton={handleButton}
          handleTaskList={handleTaskList}
        />
      </Wrapper>
    </>
  );
}

export default App;
