import styles from './Home.module.css';
import Header from "../header/Header";
import Main from "../main/Main";

const Home = () => {
    return(
        <div className={styles.container}>
            <Header />
            <Main />
        </div>
    )
}

export default Home;