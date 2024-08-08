import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  margin: 16px 8px;
  width: calc(100% - 8px);

  @media (max-width: 768px) {
    width: calc(100% - 4px);
    margin: 8px 4px;
  }
`;

export const Container = styled.div`
  margin: 8px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    padding: 4px;
  }
`;

export const ButtonWrapper = styled.div`
  flex: 0 1 auto;

  @media (max-width: 768px) {
    button {
      padding: 8px 12px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    button {
      padding: 6px 10px;
      font-size: 12px;
    }
  }
`;

export const Logo = styled.img`
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 150px;
  }
`;
