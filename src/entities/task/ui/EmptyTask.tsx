import styled from "styled-components";

export const EmptyTask: React.FC = () => {
  return (
    <EmptyTaskWrapper>
      <Text>There is no one task 😓</Text>
    </EmptyTaskWrapper>
  );
};

const EmptyTaskWrapper = styled.section`
  height: 40dvh;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;
`;
