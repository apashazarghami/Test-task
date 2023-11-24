import { useDispatch } from 'react-redux';
import styles from './ModalHeader.module.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { goToHome } from '../../../redux/process/processActions';

const ModalHeader = () => {
    const dispatch = useDispatch();
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <IoIosCloseCircleOutline className={styles.closeIcon} onClick={() => dispatch(goToHome())} />
                <p className={styles.text}>اضافه کردن فرایند</p>
            </div>
            <div>
                <p className={styles.codeNumber}>A.01.003</p>
            </div>
        </div>
    )
}

export default ModalHeader;