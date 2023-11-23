import styles from './AssistanceIconChart.module.css'
import { TbLineDotted } from "react-icons/tb";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

const AssistanceIconChart = ( { organizationStatus } ) => {
    const { isIT } = organizationStatus;
    return(
        <div className={styles.container}>
            <TbLineDotted className={styles.dottedLine} />
            {isIT ? <CiSquareMinus className={styles.plus} />  : <CiSquarePlus className={styles.plus} />}
            <TbLineDotted className={styles.dottedLine} />
            {isIT && 
            <>
                <TbLineDotted className={styles.dottedLine} />
                <TbLineDotted className={styles.dottedLine} />
                <TbLineDotted className={styles.dottedLine} />
                <TbLineDotted className={styles.dottedLine} />
                <TbLineDotted className={styles.dottedLine} />
                <TbLineDotted className={styles.dottedLine} />
            </>}
            <CiSquarePlus className={styles.plus} />
            <TbLineDotted className={styles.dottedLine} />
            <CiSquarePlus className={styles.plus} />
        </div>
    )
}

export default AssistanceIconChart;