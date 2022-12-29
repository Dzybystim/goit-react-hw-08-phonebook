import {InputStyled, LoginPageFormStyled, ButtonStyled} from "./LoginPage.styled"
import { useState } from "react";
import { useDispatch } from "react-redux"
import {logIn} from "../../redux/operations"


export default function LoginPage() {

const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleChange = event => {
  switch(event.target.name){
    case 'email':
      setEmail(event.target.value);
      break;
    case 'password':
      setPassword(event.target.value);
      break;
      default: console.error('Ошибка в RegisterPage (handleChange)')
  }
}

const handleSubmit = event => {
  event.preventDefault();
  dispatch(logIn({email, password}));
  setEmail('');
  setPassword('');
}

    return <LoginPageFormStyled onSubmit={handleSubmit}> 
    <span>Email</span>
    <label>
     <InputStyled 
       type="email"
       name="email"
       value={email}
       onChange={handleChange}
       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
       title="Enter email address"
       required />
    </label>
    <span>Password</span>
    <label>
     <InputStyled 
     type="password"
     name="password"
     value={password}
     onChange={handleChange}
     minlength="6"
     required />
    </label>
    <ButtonStyled type="submit">Enter</ButtonStyled>
    </LoginPageFormStyled>  
}