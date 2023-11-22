import styles from './Home.module.css';
import Header from "../header/Header";
import Main from "../main/Main";
import Sidebar from '../sidebar/Sidebar';

const Home = () => {
    return(
        <div>
            <Header />
            <div className={styles.layout}>
                <Sidebar />
                <Main />
            </div>
        </div>
    )
}

export default Home;