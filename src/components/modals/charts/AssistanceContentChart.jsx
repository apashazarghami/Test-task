import styles from './AssistanceContentChart.module.css';
import { BsDiagram3 } from "react-icons/bs";
import { TbLineDotted } from "react-icons/tb";
import ITIconChart from './ITIconChart';
import ITContentChart from './ITContentChart';
import { useDispatch } from 'react-redux';
import { addOption } from '../../../redux/process/processActions';

const AssistanceContentChart = ({ organizationStatus, setOrganizationStatus }) => {
    const { isIT } = organizationStatus
    const dispatch = useDispatch();
    return(
        <>
            <div className={styles.contentContainer}>
                <TbLineDotted className={styles.dottedLine} />
                <BsDiagram3 className={styles.diagram} onClick={() => setOrganizationStatus(prev => ({...prev, isIT: !prev.isIT}))} />
                <div>
                    { isIT && <ITIconChart /> }   
                </div>
                <div className={styles.nodeText} onClick={() => dispatch(addOption({ id: 'A.01.01', department: 'معاونت فناوری اطلاعات' }))}>معاونت فناوری اطلاعات</div>
            </div>
            { isIT && <ITContentChart /> }
            <div className={`${styles.contentContainer} ${isIT && styles.displayIT}`}>
                <TbLineDotted className={styles.dottedLine} />
                <BsDiagram3 className={styles.diagram} />
                <div className={styles.nodeText} onClick={() => dispatch(addOption({ id: 'A.01.05', department: 'معاونت آموزش' }))}>معاونت آموزش</div>
            </div>
            <div className={`${styles.contentContainer}`}>
                <TbLineDotted className={styles.dottedLine} />
                <BsDiagram3 className={styles.diagram} />
                <div className={styles.nodeText} onClick={() => dispatch(addOption({ id: 'A.01.06', department: 'معاونت پژوهش' }))}>معاونت پژوهش</div>
            </div>
        </>
    )
}

export default AssistanceContentChart;