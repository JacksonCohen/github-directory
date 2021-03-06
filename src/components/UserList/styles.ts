import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 50px;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
