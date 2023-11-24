import { goToStepOne } from '../../redux/process/processActions';
import styles from './Main.module.css';
import { useDispatch } from 'react-redux'

const Main = () => {
    const dispatch = useDispatch()
    return(
        <div className={styles.container}>
            <article className={styles.article}>
                <p className={styles.content}>
                    تعریف دارایی
                </p>
                <button className={styles.button} onClick={() => dispatch(goToStepOne())}>اضافه کردن فرآیند</button>
            </article>
            <main className={styles.main}></main>
        </div>
    )
}

export default Main