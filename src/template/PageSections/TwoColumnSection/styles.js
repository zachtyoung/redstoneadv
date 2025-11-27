import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: flex-start;
@media screen and (max-width: 1470px) {
    grid-template-columns: 1fr;
  }
`;