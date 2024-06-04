import styled from "styled-components";

export const EmptyTask: React.FC = () => {
  return (
    <EmptyTaskWrapper>
      <Text>There is no one task 😓</Text>
    </EmptyTaskWrapper>
  );
};

const EmptyTaskWrapper = styled.section`
  height: 90%;
  display: flex;
  height: 40dvh;
  align-items: center;
  justify-content: center;
`;
const Text = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
`;
