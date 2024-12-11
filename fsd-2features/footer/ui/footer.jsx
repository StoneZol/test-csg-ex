import CSG from '@/fsd-4shared/icons/csg'
import styles from './footer.module.scss'
import ButtonToUp from '@/fsd-4shared/components/button-to-up/ui/button-to-up'
import Link from 'next/link'
import Tg from '@/fsd-4shared/icons/icons-socials/tg'
import Vk from '@/fsd-4shared/icons/icons-socials/vk'
import Insta from '@/fsd-4shared/icons/icons-socials/insta'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top_side}>
                <div className={styles.left_side}>
                    <div className={styles.subscribe}>
                        <span>ПОДПИСКА НА РАССЫЛКУ И СКИДКА</span>
                        <button>ПОДПИСАТЬСЯ</button>
                    </div>
                </div>
                <div className={styles.right_side}>
                    <div className={styles.help}>
                        <span>ПОМОЩЬ</span>
                        <div className={styles.links}>
                            <Link href={'#'}>Оплата</Link>
                            <Link href={'#'}>Доставка</Link>
                            <Link href={'#'}>Обмен и возврат</Link>
                            <Link href={'#'}>Подарочные карты</Link>
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <span>КОНТАКТЫ</span>
                        <div className={styles.links}>
                            <div className={styles.phone}>
                                <Link href={'#'}>Обратная связь</Link>
                                <Link href={'#'}>Контакты</Link>
                                <Link href={'tel:8(800)250-19-50'}>8(800)250-19-50</Link>
                            </div>
                            <div className={styles.icons}>
                                <Link href={'#'}><Tg/></Link>
                                <Link href={'#'}><Vk/></Link>
                                <Link href={'#'}><Insta/></Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <span>ИНФОРМАЦИЯ</span>
                        <div className={styles.links}>
                            <Link href={'#'}>О компании</Link>
                            <Link href={'#'}>Публичная оферта</Link>
                            <Link href={'#'}>Политика конфедициаальности</Link>
                            <Link href={'#'}>Использование файлов cookie</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom_side}>
                <div className={styles.autor}>
                    <span>&#169;</span>
                    <div>
                        <span>ANNONCE</span>
                        <span>Все права защищены</span>
                    </div>
                </div>
                <Link href={'/#'}><CSG/></Link>
                <ButtonToUp/>
            </div>
        </footer>
    )
}
