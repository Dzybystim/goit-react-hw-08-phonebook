import {MainContainer, MainImgContainer, MainImg} from "./WelcomePage.styled"



export default function WelcomePage() {

    const phraseGreeting = `Record phone contacts with our application`

    return <MainContainer>
        <h1>{phraseGreeting} 😎</h1>
        <MainImgContainer>
            <MainImg src="https://cdn-icons-png.flaticon.com/512/3455/3455271.png" alt="Phone book" />
        </MainImgContainer>
    </MainContainer>
    
}