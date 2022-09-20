import { Link } from "react-router-dom";
import styles from './Navbar.module.scss';
import IcTv from './../../assets/icon/ic-tv';

function Navbar() {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.navContent}>
                    <ul className={styles.logo}>
                        <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <li>
                                {/* <IcTv/> */}
                                <span style={{ fontWeight: '1000' }}>DAN</span><span style={{ fontWeight: '100' }}>PHIM</span>
                            </li>
                        </Link>
                    </ul>
                    <ul className={styles.menu}>
                        <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <li>
                                <a>  Phim mới</a>
                            </li>
                        </Link>
                        <Link to='/oddmovies' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <li>
                                Phim lẻ
                            </li>
                        </Link>
                        <Link to='/seriesmovies' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <li>
                                Phim bộ
                            </li>
                        </Link>
                        <Link to='/cartoonMovies' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <li>
                                Phim hoạt hình
                            </li>
                        </Link>
                        <Link to='/movieTheaters' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <li>
                                Phim chiếu rạp
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;