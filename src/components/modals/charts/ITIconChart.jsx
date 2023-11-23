import styles from './ITIconChart.module.css';
import { TbLineDotted } from "react-icons/tb";
import { CiSquarePlus } from "react-icons/ci";
const ITIconChart = () => {
    return(
        <div className={styles.container}>
            <TbLineDotted className={styles.dottedLine} />
            <CiSquarePlus  className={styles.plus}/>
            <TbLineDotted className={styles.dottedLine} />
            <CiSquarePlus  className={styles.plus}/>
            <TbLineDotted className={styles.dottedLine} />
            <CiSquarePlus  className={styles.plus}/>
        </div>
    )
}

export default ITIconChart;