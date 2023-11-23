import styles from './Home.module.css';
import Header from "../header/Header";
import Main from "../main/Main";
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modals/Modal';

const Home = () => {
    return(
        <div>
            <Header />
            <div className={styles.layout}>
                <Sidebar />
                <Main />
            </div>
            <Modal />
        </div>
    )
}

export default Home;