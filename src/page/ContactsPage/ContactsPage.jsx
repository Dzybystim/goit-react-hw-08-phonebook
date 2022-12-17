import InputField from "components/InputField/InputField";
import Filter from "components/Filter/Filter";
import Contacts from "components/Contacts/Contacts";
import {selectIsLoading, selectError} from "../../redux/selectors"
import {useSelector} from "react-redux";

export default function ContactsPage() {

    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)

    return <>
           <InputField title='Phonebook' titleInputOne='Name' titleInputTwo='Number'/>
           <Filter title='Contacts' titleInput='Find contacts by name'/>
           {isLoading && !error && <p>Request in progress...</p>}
           <Contacts />
    </>
}