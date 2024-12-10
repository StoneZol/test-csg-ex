import Search from '@/fsd-4shared/icons/icons-header/search'
import styles from './header.module.scss'
import Profile from '@/fsd-4shared/icons/icons-header/profile'
import Basket from '@/fsd-4shared/icons/icons-header/basket'
import Favorite from '@/fsd-4shared/icons/icons-header/favorite'
import Burger from '@/fsd-4shared/icons/icons-header/burger'
import Logo from '@/fsd-4shared/icons/icons-header/logo'
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.left_side}>
            <button><Burger/></button>
            <Link href={'/'}><Logo/></Link>
        </div>
        <div className={styles.right_side}>
            <Search/>
            <Profile/>
            <Basket/>
            <Favorite/>
        </div>
    </header>
  )
}
