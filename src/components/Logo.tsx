import Link from "next/link";

import styles from "../styles/logo.module.scss";


const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href='/'>Дмитрий Скрипка</Link>        
        </div>
    )
}

export default Logo;