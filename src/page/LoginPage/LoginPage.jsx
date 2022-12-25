import {InputStyled, LoginPageFormStyled, ButtonStyled} from "./LoginPage.styled"

export default function LoginPage() {
    return <LoginPageFormStyled> 
    <span>Email</span>
    <label>
     <InputStyled 
       type="email"
       name="email"
       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
       title="Enter email address"
       required />
    </label>
    <span>Password</span>
    <label>
     <InputStyled 
     type="password"
     name="password"
     minlength="6"
     required />
    </label>
    <ButtonStyled type="submit">Enter</ButtonStyled>
    </LoginPageFormStyled>  
}