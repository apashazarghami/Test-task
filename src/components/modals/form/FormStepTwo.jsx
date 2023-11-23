import styles from './FormStepTwo.module.css';
import { MdOutlineDoubleArrow } from "react-icons/md";
import OrganizationChart from './OrganizationChart';

const FormStepTwo = () => {
    const options = [{
        id: 1,
        key: 'A.01.02',
        desc: 'واحد 1'
    }]
    return(
        <>
            <div className={styles.container}>
                <div>
                    <p className={styles.text}>لیست کل واحدهای سازمانی</p>
                    <div className={styles.charts}>
                        <OrganizationChart />
                    </div>
                </div>
                <MdOutlineDoubleArrow className={styles.doubleArrow} />
                <div>
                    <p className={styles.text}>واحدهای سازمانی مرتبط با فرایند</p>
                    <div className={styles.charts}>
                        {
                            options.map(item => {
                                return (
                                    <div className={styles.optionsContainer} key={item.id}>
                                        {`${item.key}: ${item.desc}`}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>قبلی</button>
                <button className={styles.button}>ثبت و ادامه</button>
            </div>
        </>
    )
}

export default FormStepTwo;