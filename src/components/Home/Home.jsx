import styles from './Home.module.css';
import Header from "../header/Header";
import Main from "../main/Main";
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modals/Modal';
import { useProcess } from '../../context/ProcessProvider';

const Home = () => {
    const { state: { modalStatus }} =  useProcess();
    return(
        <>
            <div className={`${modalStatus !== 'hidden' && styles.lowOpacity}`}>
                <Header />
                <div className={styles.layout}>
                    <Sidebar />
                    <Main />
                </div>
            </div>
            <Modal />
        </>
    )
}

export default Home;