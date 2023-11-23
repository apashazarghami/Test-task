import styles from './FormStepTwo.module.css';
import { MdOutlineDoubleArrow } from "react-icons/md";
import OrganizationChart from '../charts/OrganizationChart';
import { useProcess } from '../../../context/ProcessProvider';
import axios from 'axios';
import toast from 'react-hot-toast'

const FormStepTwo = () => {
    const { state, dispatch } = useProcess();
    const { options, processDescription, processIdentifier, processOwner, processTitle, processViewer} = state
    const sendInformation = () => {
        const data = {
            options,
            processDescription,
            processIdentifier,
            processOwner,
            processTitle,
            processViewer,
            createdAt: new Date().toISOString() 
        }
        const notify = (content) => toast.success(content)
        const sendData = async() => {
            notify(`اطلاعات فرایند ${processTitle} با شناسه ${processIdentifier} در تاریخ ${new Date(data.createdAt).toLocaleString('fa')} با موفقیت ثبت شد`)
            dispatch({ type: 'GO_TO_HOME' })
            await axios.post('', data);
        }
        sendData()
    }
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
                                    <div className={styles.optionsContainer} key={item.id} onClick={() => dispatch({ type: "REMOVE_OPTION", payload: item.id })}>
                                        {`${item.id}: واحد ${item.department}`}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => dispatch({ type: 'GO_TO_STEP_ONE' })}>قبلی</button>
                <button className={styles.button} onClick={sendInformation}>ثبت و ادامه</button>
            </div>
        </>
    )
}

export default FormStepTwo;