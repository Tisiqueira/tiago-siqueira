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
  background:#fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow 0px 4px 10px rbag( 0,0,0,0.04);
  margin:32px;

  & button{
    padding:  24px;
    display:flex;
    align-items: center;
    justify-content: space-beteween;
    border: none;
    margin: 8px;
  }

`;


