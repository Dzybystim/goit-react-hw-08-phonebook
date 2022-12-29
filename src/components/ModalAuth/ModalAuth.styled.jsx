import styled from 'styled-components'

export const ModalBackground = styled.section`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
overflow: hidden;
background: rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

export const ModalCard = styled.div`
background: white;
padding: 25px;
border: 3px solid black;
border-radius: 5px;
`