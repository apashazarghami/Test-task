import styles from './ITContentChart.module.css';
import { TbLineDotted } from "react-icons/tb";
import { BsDiagram3 } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addOption } from '../../../redux/process/processActions';

const ITContentChart = () => {
    const dispatch  = useDispatch();
    return(
        <div className={styles.container}>
            <div className={styles.ITDepartmentContainer}>
                <TbLineDotted className={styles.dottedLine} />
                <BsDiagram3 className={styles.diagram} />
                <div className={styles.nodeText} onClick={() => dispatch(addOption({ id: 'A.01.02', department: 'مدیریت نرم افزار' }))}>مدیریت نرم افزار</div>
            </div>
            <div className={`${styles.ITDepartmentContainer} ${styles.ITMargin}`}>
                <TbLineDotted className={styles.dottedLine} />
                <BsDiagram3 className={styles.diagram} />
                <div className={styles.nodeText} onClick={() => dispatch(addOption({ id: 'A.01.03', department: 'مدیریت زیرساخت' }))}>مدیریت زیر ساخت</div>
            </div>
            <div className={`${styles.ITDepartmentContainer} ${styles.ITMargin}`}>
                <TbLineDotted className={styles.dottedLine} />
                <BsDiagram3 className={styles.diagram} />
                <div className={styles.nodeText} onClick={() => dispatch(addOption({ id: 'A.01.04', department: 'مدیریت امنیت تبادل اطلاعات' }))}>مدیریت امنیت تبادل اطلاعات</div>
            </div>
        </div>
    )
}

export default ITContentChart;