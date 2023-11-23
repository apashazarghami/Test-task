import styles from './Modal.module.css'
import ModalHeader from "./header/ModalHeader";
import StepDiagram from './diagram/StepsDiagram';
import FormStepOne from './form/FormStepOne';
import FormStepTwo from './form/FormStepTwo';
import { useProcess } from '../../context/ProcessProvider';

const Modal = () => {
    const { state: { modalStatus } } = useProcess();
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