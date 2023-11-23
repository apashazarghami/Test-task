import { useProcess } from '../../../context/ProcessProvider';
import styles from './ModalHeader.module.css';
import { IoIosCloseCircleOutline } from "react-icons/io";

const ModalHeader = () => {
    const { dispatch } = useProcess()
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <IoIosCloseCircleOutline className={styles.closeIcon} onClick={() => dispatch({ type: 'GO_TO_HOME'})} />
                <p className={styles.text}>اضافه کردن فرایند</p>
            </div>
            <div>
                <p className={styles.codeNumber}>A.01.003</p>
            </div>
        </div>
    )
}

export default ModalHeader;