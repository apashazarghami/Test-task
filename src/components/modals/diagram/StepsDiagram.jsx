import { useProcess } from '../../../context/ProcessProvider';
import styles from './StepsDiagram.module.css';

const StepDiagram = () => {
    const { state: { modalStatus }} = useProcess();
    return(
        <div className={styles.container}>
            <div className={styles.activeDiagram}><span>مشخصات</span><span>فرایند</span></div>
            <div className={styles.dottedLine}>----</div>
            <div className={`${modalStatus === 'stepOne' ? styles.notActiveDiagram : styles.activeDiagram}`}><span>واحدهای</span><span>درگیر</span></div>
        </div>
    )
}

export default StepDiagram;