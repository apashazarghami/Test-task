import { useRef } from 'react';
import styles from './SelectInput.module.css'
import Select from 'react-select';
import { TbTopologyStar3 } from "react-icons/tb";
import { customStyles, options } from './selectInputFunction';

const SelectInput = ({ value, setSelected, label }) => {
    const ref = useRef();
    const changeHandler = selected => setSelected(selected)
    const DropdownIndicator = () => null;

    return(
        <div>
            <div className={styles.labelContainer}>
                <label className={styles.label} onClick={() => ref.current.focus()}>{label}</label>
                <TbTopologyStar3 className={styles.icon} />
            </div>
            <Select
                ref={ref}
                noOptionsMessage={() => 'موردی وجود ندارد'}
                styles={customStyles}
                isClearable={false}
                options={options}
                components={{ DropdownIndicator }}
                placeholder=""
                value={value}
                onChange={changeHandler}
                isMulti
            />
        </div>
    )
}

export default SelectInput