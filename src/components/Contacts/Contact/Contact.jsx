import { ContactStyled, ContactStyledButton, ContactParahStyled, ContactStyledTwo } from "./Contact.styled"
import ChangeForm from "./ChangeForm/ChangeForm"
import { useDispatch } from "react-redux";
import { deleteContact} from "../../../redux/operations"
import { useState } from "react"
import PropTypes from 'prop-types';


export default function Contact({contact}) {

    const dispatch = useDispatch();
    const [changeClick, setChangeClick] = useState(false);

    const handleClickDelete = () => {
        dispatch(deleteContact(contact.id))
    }

    const handleClickChange = () => {
        setChangeClick(changeClick ? false : true)
    }


    
    return <>
        {changeClick ?  
        <>
        <ContactStyledTwo>
        <ChangeForm contact={contact} setChangeClick={setChangeClick}/>
        <ContactStyledButton type="button" onClick={handleClickChange}>No Change</ContactStyledButton> 
        </ContactStyledTwo>
        </>
        :
        <>
        <ContactStyled>
        <ContactParahStyled>{contact.name}: {contact.number}</ContactParahStyled>
        <ContactStyledButton type="button" onClick={handleClickDelete} > Delete</ContactStyledButton>
        <ContactStyledButton type="button" onClick={handleClickChange}>Change</ContactStyledButton>
        </ContactStyled>
        </> 
            }
            </>
    
}

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }) 
}