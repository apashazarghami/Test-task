import styles from './Home.module.css';
import Header from "../header/Header";
import Main from "../main/Main";
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modals/Modal';
import { useSelector } from 'react-redux';

const Home = () => {
    const { modalStatus } =  useSelector(state => state.process);
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