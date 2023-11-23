import styles from './Modal.module.css'
import ModalHeader from "./header/ModalHeader";
import StepDiagram from './diagram/StepsDiagram';
import FormStepOne from './form/FormStepOne';
import FormStepTwo from './form/FormStepTwo';

const Modal = () => {
    return(
        <div className={styles.container}>
            <ModalHeader />
            <StepDiagram />
            <FormStepOne />
            {/* <FormStepTwo /> */}
        </div>
    )
}

export default Modal;