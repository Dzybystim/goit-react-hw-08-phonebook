import { useDispatch } from "react-redux";
import { useState } from "react"
import { changeContact } from "../../../../redux/operations"
import {FormChange, InputStyled, ContainerStyled, ContactStyledButton, SpanStyled} from "./ChangeForm.styled"

export default function ChangeForm({contact, setChangeClick}) {
const dispatch = useDispatch();
const [changeName, setChangeName] = useState(contact.name);
const [changeNumber, setChangeNumber] = useState(contact.number);

const handleChange = event => {
    switch(event.target.name){
      case 'name':
        setChangeName(event.target.value);
        break;
      case 'number':
        setChangeNumber(event.target.value);
        break;
        default: console.error('Ошибка в Contact (handleChange)')
    }
  }

const handleSubmit = event => {
    event.preventDefault();
    dispatch(changeContact({id: contact.id, name: event.target.elements.name.value, phone: event.target.elements.number.value}))
    setChangeClick(false)
}


return <>
<FormChange onSubmit={handleSubmit}>
<ContainerStyled>
<SpanStyled>Name:</SpanStyled>
<InputStyled 
type="text"
name="name"
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. 
For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
required
value={changeName}
onChange={handleChange}
/>
<SpanStyled>Number:</SpanStyled>
<InputStyled 
value={changeNumber}
onChange={handleChange}
type="tel"
name="number"
pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required
/>

</ContainerStyled>
<ContactStyledButton type="submit">Save</ContactStyledButton>
</FormChange>
</>
}