import { useRef, useState } from 'react';
import styles from './FormStepOne.module.css';
import { TbTopologyStar3 } from "react-icons/tb";
import Select from 'react-select';
import authentication from '../../utilities/authentication';
import { useProcess } from '../../../context/ProcessProvider';

const FormStepOne = () => {
    const [selectedOwner, setSelectedOwner] = useState([]);
    const [selectedViewer, setSelectedViewer] = useState([]);
    const [information, setInformation] = useState({
        processTitle: '',
        processIdentifier: '',
        processDescription: ''
    })
    const { processTitle, processIdentifier, processDescription } = information
    const refOwner = useRef()
    const refViewer = useRef()
    const options = [
        { value: '1', label: 'فرهاد غفاری' },
        { value: '2', label: 'محمد امینی' },
    ]
    const { dispatch } = useProcess();
    const changeOwnerHandler = selected => setSelectedOwner(selected)
    const changeViewerHandler = selected => setSelectedViewer(selected)
    const DropdownIndicator = () => null;
    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          border: `1px solid ${state.isFocused ? '#b7b9bb' : '#b7b9bb'}`,
          height: '42px',
          width: '422px',
          color: '#9c9e9e',
          boxShadow: 'none',
          '&:hover': {
            border: `1px solid ${state.isFocused ? '#b7b9bb' : '#b7b9bb'}`,
          },
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: 'none',
        }),
        option: (provided, state) => ({
            ...provided,
            background: state.isSelected ? '#b7b9bb' : '#fff',
            '&:hover': {
              background: '#b7b9bb',
              color: '#fff'
            },
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            padding: '5px',
            ':hover': {
              background: '#b1b1b1',
              color: '#fff'
            },
        }),
        input: (provided) => ({
            ...provided,
            color: '#9c9e9e',
        }),
      };

    const submitHandler = event => {
        event.preventDefault();
        authentication({ information, processOwner: selectedOwner, processViewer: selectedViewer, type: 'GO_TO_STEP_TWO', dispatch });
    }

    return(
        <form className={styles.container} onSubmit={submitHandler}>
            <div className={styles.specificationsContainer}>
                <div>
                    <div className={styles.labelContainer}>
                        <label className={styles.label} htmlFor='title'>عنوان فرایند</label>
                        <TbTopologyStar3 className={styles.icon} />
                    </div>
                    <input value={processTitle} onChange={e => setInformation(prev => ({...prev, processTitle: e.target.value}))} className={styles.input} id='title' />
                </div>
                <div>
                    <div className={styles.labelContainer}>
                        <label className={styles.label} htmlFor='identifier'>شناسه فرایند</label>
                        <TbTopologyStar3 className={styles.icon} />
                    </div>
                    <input value={processIdentifier} onChange={e => setInformation(prev => ({...prev, processIdentifier: e.target.value}))} className={styles.input} id='identifier' />
                </div>
                <div>
                    <div className={styles.labelContainer}>
                        <label className={styles.label} onClick={() => refOwner.current.focus()}>مالک فرایند</label>
                        <TbTopologyStar3 className={styles.icon} />
                    </div>
                    <Select noOptionsMessage={() => 'موردی وجود ندارد'} ref={refOwner} styles={customStyles} isClearable={false} options={options} components={{ DropdownIndicator }} placeholder="" value={selectedOwner} onChange={changeOwnerHandler} isMulti />
                </div>
                <div>
                    <div className={styles.labelContainer}>
                        <label className={styles.label} onClick={() => refViewer.current.focus()}>ناظر فرایند</label>
                        <TbTopologyStar3 className={styles.icon} />
                    </div>
                    <Select noOptionsMessage={() => 'موردی وجود ندارد'} ref={refViewer} styles={customStyles} isClearable={false} options={options} components={{ DropdownIndicator }} placeholder="" value={selectedViewer} onChange={changeViewerHandler} isMulti />
                </div>
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