import styles from './Modal.module.css'
import ModalHeader from "./header/ModalHeader";
import StepDiagram from './diagram/StepsDiagram';
import FormStepOne from './form/FormStepOne';

const Modal = () => {
    return(
        <div className={styles.container}>
            <ModalHeader />
            <StepDiagram />
            <FormStepOne />
        </div>
    )
}

export default Modal;