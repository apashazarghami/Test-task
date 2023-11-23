import { useProcess } from '../../context/ProcessProvider';
import styles from './Main.module.css';

const Main = () => {
    const { dispatch } = useProcess();
    return(
        <div className={styles.container}>
            <article className={styles.article}>
                <p className={styles.content}>
                    تعریف دارایی
                </p>
                <button className={styles.button} onClick={() => dispatch({ type: 'GO_TO_STEP_ONE' })}>اضافه کردن فرآیند</button>
            </article>
            <main className={styles.main}></main>
        </div>
    )
}

export default Main