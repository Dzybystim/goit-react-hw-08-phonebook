import InputField from "components/InputField/InputField";
import Filter from "components/Filter/Filter";
import Contacts from "components/Contacts/Contacts";
//import {selectIsLoading, selectError} from "../../redux/selectors"
import {useDispatch} from "react-redux";
import { fetchContacts } from "../../redux/operations";
import { useEffect } from "react";

export default function ContactsPage() {
    const dispatch = useDispatch();

//    const isLoading = useSelector(selectIsLoading)
//    const error = useSelector(selectError)
// {isLoading && !error && <p>Request in progress...</p>}


      useEffect(() => { dispatch(fetchContacts());}, [dispatch])


    return <>
           <InputField title='Phonebook' titleInputOne='Name' titleInputTwo='Number'/>
           <Filter title='Contacts' titleInput='Find contacts by name'/>
           <Contacts />
    </>
}