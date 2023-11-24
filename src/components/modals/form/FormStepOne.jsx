import { useState } from 'react';
import styles from './FormStepOne.module.css';
import authentication from '../../../utilities/authentication';
import { useDispatch } from 'react-redux';
import SelectInput from './SelectInput';
import TextInput from './TextInput';

const FormStepOne = () => {
    const [selectedOwner, setSelectedOwner] = useState([]);
    const [selectedViewer, setSelectedViewer] = useState([]);
    const [information, setInformation] = useState({ processTitle: '', processIdentifier: '', processDescription: '' })
    const { processTitle, processIdentifier, processDescription } = information
    const dispatch = useDispatch();
    
    const submitHandler = event => {
        event.preventDefault();
        authentication({ information, processOwner: selectedOwner, processViewer: selectedViewer, dispatch });
    }

    return(
        <form className={styles.container} onSubmit={submitHandler}>
            <div className={styles.specificationsContainer}>
                <TextInput label='عنوان فرایند' value={processTitle} setInformation={setInformation} title='processTitle' id='title' />
                <TextInput label='شناسه فرایند' value={processIdentifier} setInformation={setInformation} title='processIdentifier' id='identifier' />
                <SelectInput value={selectedOwner} setSelected={setSelectedOwner} label='مالک فرایند' />
                <SelectInput value={selectedViewer} setSelected={setSelectedViewer} label='ناظر فرایند' />
            </div>
            <div className={styles.textareaContainer}>
                <label className={styles.label} htmlFor='description'>توضیحات فرایند</label>
                <textarea value={processDescription} className={styles.textarea} onChange={e => setInformation(prev => ({...prev, processDescription: e.target.value}))} id='description'></textarea>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} type='submit'>ثبت و ادامه</button>
            </div>
        </form>
    )
}

export default FormStepOne;