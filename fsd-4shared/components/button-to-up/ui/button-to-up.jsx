'use client'
import styles from './button-to-up.module.scss'

import IconUpButton from "@/fsd-4shared/icons/icon-up-button/icon-up-button"

export default function ButtonToUp() {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

  return (
    <button className={styles.button} onClick={scrollToTop}><IconUpButton/></button>
  )
}
