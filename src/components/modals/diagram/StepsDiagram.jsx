import styles from './StepDiagram.module.css';

const StepDiagram = () => {
    return(
        <div className={styles.container}>
            <div className={styles.activeDiagram}><span>مشخصات</span><span>فرایند</span></div>
            <div className={styles.dottedLine}>----</div>
            <div className={styles.notActiveDiagram}><span>واحدهای</span><span>درگیر</span></div>
        </div>
    )
}

export default StepDiagram;