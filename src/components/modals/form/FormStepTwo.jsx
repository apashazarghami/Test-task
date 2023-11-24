import styles from './FormStepTwo.module.css';
import { MdOutlineDoubleArrow } from "react-icons/md";
import OrganizationChart from '../charts/OrganizationChart';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { goToHome, removeOption } from '../../../redux/process/processActions';
import { notify } from '../../../utilities/authentication';

const FormStepTwo = () => {
    const dispatch = useDispatch();
    const { options, processDescription, processIdentifier, processOwner, processTitle, processViewer } = useSelector(state => state.process)
    const sendInformation = () => {
        const data = { options, processDescription, processIdentifier, processOwner, processTitle, processViewer, createdAt: new Date().toISOString() }
        const sendData = async() => {
            notify(`اطلاعات فرایند ${processTitle} با شناسه ${processIdentifier} در تاریخ ${new Date(data.createdAt).toLocaleString('fa')} با موفقیت ثبت شد`, 'success')
            dispatch(goToHome())
            console.log(data)
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
                                    <div className={styles.optionsContainer} key={item.id} onClick={() => dispatch(removeOption(item.id))}>
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