import styles from './Main.module.css';

const Main = () => {
    return(
        <div className={styles.container}>
            <article className={styles.article}>
                <p className={styles.content}>
                    تعریف دارایی
                </p>
                <button className={styles.button}>اضافه کردن فرآیند</button>
            </article>
            <main className={styles.main}></main>
        </div>
    )
}

export default Main