import styles from './OrganizationChart.module.css';
import { BsDiagram3 } from "react-icons/bs";
import { useState } from 'react';
import AssistanceIconChart from './AssistanceIconChart';
import AssistanceContentChart from './AssistanceContentChart';

const OrganizationChart = () => {
    const [organizationStatus, setOrganizationStatus] = useState({
        isOrganization: false,
        isIT: false
    })
    const { isOrganization } = organizationStatus
    return(
        <div className={styles.container}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <BsDiagram3 className={styles.diagram} onClick={() => setOrganizationStatus(prev => ({...prev, isOrganization: !prev.isOrganization}))} />
                {
                    isOrganization &&
                        <AssistanceIconChart {...{ organizationStatus }} />
                }
            </div>
            <div>
                <div className={styles.nodeText}>سازمان آموزش فنی و حرفه ای</div>
                {
                    isOrganization &&
                        <AssistanceContentChart {...{ organizationStatus, setOrganizationStatus }} />
                }
            </div>
        </div>
    )
}
export default OrganizationChart;
