import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isOn ? "flex-end" : "flex-start")};
  width: 40px;
  height: 20px;
  background-color: ${(props) => (props.isOn ? "#cfd7e1" : "#ccc")};
  border-radius: 50px;
  padding: 2px;
  cursor: pointer;
  transition: background-color 0.3s;

  .toggle-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background-color: ${(props) => (props.isOn ? "#afbfcd" : "#999")};
    border-radius: 50%;
    transition: transform 0.3s, background-color 0.3s;
    transform: ${(props) => (props.isOn ? "translateX(1px)" : "translateX(0)")};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${(props) => (props.isOn ? "#EAB308" : "#666")};
  }
`;
