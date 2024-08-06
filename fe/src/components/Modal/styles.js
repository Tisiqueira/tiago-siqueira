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
  max-width: 500px;
  background:${({ theme }) => theme.colorBackground};
  border-radius: 4px;
  padding: 24px;
  box-shadow 0px 4px 10px rbag( 0,0,0,0.04);
  margin:32px;

  & nav {
    width:100%;
    display: grid;
    gap:16px;
    align-items: center;
    justify-content: center;
  }

  & button{
    width: 100%;
    padding:  8px;
    border: none;
    margin: 16px;
    border-radius:4px;

  }

  .close-modal {
    width:10%;
    position:absolute;
    right:32%;
    top:0;
    color: red;
    background: none;
    font-size:24px;
    padding:4px;

  }

  & footer {
    padding:8px;
    margin-bottom:8px;
  }

  & img {
    width: 8%;
    position: absolute;
    top:55%;
    left:28%;


  }

`;


