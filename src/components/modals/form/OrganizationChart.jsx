import styles from './OrganizationChart.module.css';
import { BsDiagram3 } from "react-icons/bs";
import { TbLineDotted } from "react-icons/tb";
import { CiSquarePlus } from "react-icons/ci";

const OrganizationChart = () => {
  return(
    <div className={styles.container}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <BsDiagram3 className={styles.diagram} />
            {/* <div style={{display: 'flex', flexDirection: 'column'}}>
                <TbLineDotted style={{transform: 'rotate(90deg)'}} />
                <CiSquarePlus />
                <TbLineDotted style={{transform: 'rotate(90deg)'}} />
                <CiSquarePlus />
                <TbLineDotted style={{transform: 'rotate(90deg)'}} />
                <CiSquarePlus />
            </div> */}
        </div>
        <div>
            <div className={styles.nodeText}>سازمان آموزش فنی و حرفه ای</div>
            {/* <div style={{display: 'flex', alignItems: 'center'}}>
                <TbLineDotted />
                <BsDiagram3 />
                <div>معاونت فناوری اطلاعات</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <TbLineDotted />
                <BsDiagram3 />
                <div>معاونت آموزش</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <TbLineDotted />
                <BsDiagram3 />
                <div>معاونت پژوهش</div>
            </div> */}
        </div>
    </div>
  )
}
export default OrganizationChart;
