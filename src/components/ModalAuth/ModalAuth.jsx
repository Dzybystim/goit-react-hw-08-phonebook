import { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackground, ModalCard} from "./ModalAuth.styled"


const modalRootElement = document.querySelector("#modalRoot");

export default function ModalAuth({children, open, setOpen}) {
const element = useMemo(() => document.createElement("div"), []);


const onClose = (event) => {
    if(event.target.nodeName === "SECTION") {
        setOpen(false)
    }}


useEffect(() => {
    if(open){
        modalRootElement.appendChild(element);

        return () => {
            modalRootElement.removeChild(element);
        }
    }

})


if(open) {
    return createPortal(
        <ModalBackground onClick={onClose} >
            <ModalCard>{children}</ModalCard>
        </ModalBackground>,
        element
    )
}
return null


  };