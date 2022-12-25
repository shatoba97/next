import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.scss';

import Logo from"../../../public/vercel.svg";
import Button from "../button/Button";

export const Header = () => {
    return <>
        <nav className={styles.navContainer}>
            <div className={styles.titleGroup}>
                <Image src={Logo} alt={'Logo'} width={`${2}`} height={2}/>
                <span className={styles.title}>Настольный тенис</span>
            </div>
            <div className={styles.navigation}>
                <Link href={'/'}>Главная</Link>
                <Link href={'/masters'}>Тренерский состав</Link>
                <Link href={'/awards'}>Достижения</Link>
            </div>
            <div className={styles.buttonContainer}>
                <Button>Записаться на тренировку</Button>
            </div>
        </nav>
    </>
}

export default Header;
