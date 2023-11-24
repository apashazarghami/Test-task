import styles from './Modal.module.css'
import ModalHeader from "./header/ModalHeader";
import StepDiagram from './diagram/StepsDiagram';
import FormStepOne from './form/FormStepOne';
import FormStepTwo from './form/FormStepTwo';
import { useSelector } from 'react-redux';

const Modal = () => {
    const { modalStatus } = useSelector(state => state.process);
    return(
        <div className={`${styles.container} ${modalStatus === 'stepOne' || modalStatus === 'stepTwo' ? styles.displayModal : styles.hiddenModal}`}>
            <ModalHeader />
            <StepDiagram />
            {
                modalStatus === 'stepOne' ? <FormStepOne /> : modalStatus === 'stepTwo' && <FormStepTwo />
            }
        </div>
    )
}

export default Modal;