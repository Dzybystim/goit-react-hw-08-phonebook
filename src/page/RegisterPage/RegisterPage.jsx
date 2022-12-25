import { useState } from "react";
import { useDispatch } from "react-redux"
import {RegisterPageFormStyled, ButtonStyled, InputStyled} from "./RegisterPage.styled"
import {register} from "../../redux/operations"

export default function RegisterPage() {
const dispatch = useDispatch();
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleChange = event => {
  switch(event.target.name){
    case 'name':
      setName(event.target.value);
      break;
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
  dispatch(register({name, email, password}));
  setName('');
  setEmail('');
  setPassword('');
}


    return <RegisterPageFormStyled onSubmit={handleSubmit}>
        <span>Name</span>
         <label>
          <InputStyled             
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
         </label>
         <span>Email</span>
         <label>
          <InputStyled 
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Enter email address"
            required/>
         </label>
         <span>Password</span>
         <label>
          <InputStyled 
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          minlength="6"
          required/>
         </label>
         <ButtonStyled type="submit">Register</ButtonStyled>
    </RegisterPageFormStyled>
}