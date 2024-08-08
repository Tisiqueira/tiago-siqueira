import styled from "styled-components";

export const Button = styled.button`
  width: auto;
  border: none;
  background: ${({ theme }) => theme.colorBackground};

  .menu {
    width: 50px;
  }

  @media (max-width: 768px) {
  .menu {
    width: 40px;
    }
  }

  @media (max-width: 480px) {
  .menu {
    width: 30px;
  }
`;
