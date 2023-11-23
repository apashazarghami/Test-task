import { IoIosMenu } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import profileImage from '../../assets/Profile-picture.png';
import styles from './Header.module.css'

const Header = () => {
    return(
        <>
            <header className={styles.container}>
                <div className={styles.navbar}>
                    <IoIosMenu className={styles.icons} />
                    <p className={styles.text}>سازمان آموزش فنی و حرفه ای</p>
                </div>
                <div className={styles.navbar}>
                    <div className={styles.mail}>
                        <span className={styles.mailMessages}>۲</span>
                        <GoMail className={styles.icons} />
                    </div>
                    <div className={styles.bell}>
                        <span className={styles.bellMessages}>۲</span>
                        <FaRegBell className={styles.icons} />
                    </div>
                    <img style={{width: '50px', height: '50px' }} src={profileImage} alt="عکس مربوط به پروفایل هر فرد می باشد" />
                </div>
            </header>
        </>
    )
}

export default Header;