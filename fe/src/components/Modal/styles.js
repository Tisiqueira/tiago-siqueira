import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0,0,0, 0.6);
  backdrop-filter: blur(7px);
  position: absolute;
  width: 100%;
  height: 100%;
  left:0;
  top:0;


`;


export const Container = styled.div`

  display: flex;
  align-items: center;
  width: 100%;
  max-width: 450px;
  background:${({ theme }) => theme.colorBackground};
  border-radius: 4px;
  padding: 24px;
  box-shadow 0px 4px 10px rbag( 0,0,0,0.04);
  margin:32px;

  & nav {
    width:100%;
    padding:  24px;
    display:grid;
    align-items: center;
    justify-content: space-beteween;
  }

  & button{
    padding:  8px;
    border: none;
    margin: 16px;
    border-radius:4px;
  }

  .close-modal {
    position:absolute;
    right:48%;
    top:3%;
    color: red;
    background: ${({ theme }) => theme.colorBackground};
    font-size:16px;
    padding:4px;

  }

`;


