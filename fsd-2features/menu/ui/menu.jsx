'use client'
import React from 'react'
import styles from './menu.module.scss'
import Close from '@/fsd-4shared/icons/icons-menu/close'
import LogoMenu from '@/fsd-4shared/icons/icons-menu/logo-menu'
import Link from 'next/link'

export default function Menu({open = false, close}) {
    const categories = [
        { name: 'Жакеты', linkUrl: '/jakety', action: false },
        { name: 'Пальто', linkUrl: '/palto', action: false },
        { name: 'Платья', linkUrl: '/platya', action: false },
        { name: 'Юбки', linkUrl: '/yubki', action: false },
        { name: 'Костюмы', linkUrl: '/kostyumy', action: false },
        { name: 'Брюки', linkUrl: '/bryuki', action: false },
        { name: 'NEW YEAR COLLECTION', linkUrl: '/new-year-collection', action: true },
        { name: 'Лонгсливы', linkUrl: '/longslyvy', action: false },
        { name: 'Топы', linkUrl: '/topy', action: false },
        { name: 'Блузы', linkUrl: '/blusy', action: false },
        { name: 'Велюр', linkUrl: '/velyur', action: false },
        { name: 'Обувь', linkUrl: '/obuv', action: false }
      ];
  return (
    <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        <div className={styles.head}><button onClick={()=>close(false)}><Close/></button><LogoMenu/></div>
        <div className={styles.links}>
            {
                categories.map((item, index)=>(
                    <Link key={index} href={item.linkUrl}>{item.action ? <b>{item.name.toUpperCase()}</b>: <>{item.name}</>}</Link>
                ))
            }
        </div>
        <div className={styles.buttons}>
            <button>СМОТРЕТЬ ВСЕ</button>
            <button>GIFT CARD/ПОДАРОЧНАЯ КАРТА</button>
        </div>
        <div className={styles.autor}>
                <span>ANNONCE</span>
                <span>Все права защищены</span>
        </div>
        {open ? <div className={styles.blocker} onClick={()=>close(false)}></div> : <></>}
    </nav>
  )
}
