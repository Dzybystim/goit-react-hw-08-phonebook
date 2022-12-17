import {RegisterPageFormStyled, ButtonStyled} from "./RegisterPage.styled"

export default function RegisterPage() {
    return <RegisterPageFormStyled>
        <span>Name</span>
         <label>
          <input             
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
         </label>
         <span>Email</span>
         <label>
          <input 
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Enter email address"
            required/>
         </label>
         <span>Password</span>
         <label>
          <input 
          type="password"
          name="password"
          minlength="6"
          required/>
         </label>
         <ButtonStyled type="submit">Register</ButtonStyled>
    </RegisterPageFormStyled>
}