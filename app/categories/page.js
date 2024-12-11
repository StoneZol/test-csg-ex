import ProductCartCategory from '@/fsd-3entities/product-cart-category/ui/product-cart-category'
import localFont from 'next/font/local';
import styles from './page.module.scss'
import Link from 'next/link';

const manrope = localFont({
    src: "./../fonts/Manrope.ttf",
    weight: "100 900"
  })


export default function Page() {

    const data = [
        {
            name: 'Колье',
            price: '10 000',
            imageUrl: '/caterorys-card-mock.webp',
            sku: '24245646423'
        }, {
            name: 'Колье',
            price: '10 000',
            imageUrl: '/caterorys-card-mock.webp',
            sku: '24245646423'
        }, {
            name: 'Колье',
            price: '10 000',
            imageUrl: '/caterorys-card-mock.webp',
            sku: '24245646423'
        },        {
            name: 'Колье',
            price: '10 000',
            imageUrl: '/caterorys-card-mock.webp',
            sku: '24245646423'
        }, {
            name: 'Колье',
            price: '10 000',
            imageUrl: '/caterorys-card-mock.webp',
            sku: '24245646423'
        }, {
            name: 'Колье',
            price: '10 000',
            imageUrl: '/caterorys-card-mock.webp',
            sku: '24245646423'
        }
    ]
    const categories = [
        { name: 'Серьги', linkUrl: '/categories/sergi', action: false },
        { name: 'Кольца', linkUrl: '/categories/kolca', action: false },
        { name: 'Браслеты', linkUrl: '/categories/braslety', action: false },
        { name: 'Цепочки', linkUrl: '/categories/cepochki', action: false },
        { name: 'Сеты', linkUrl: '/categories/sety', action: false },
        { name: 'Пояса', linkUrl: '/categories/poiasa', action: false },
        { name: 'Чокеры', linkUrl: '/categories/chokery', action: false },
    ];    

  return (
    <div className={`${manrope.className} ${styles.page}`}> 
    <div className={styles.header_bg}> </div>              
    <div className={styles.left_side}>
        <span>КАТЕГОРИИ</span>
        <div>
        <Link href={"#"}><b>Все украшения</b></Link>
            {
                categories.map((item,index)=>(
                    <Link key={index} href={item.linkUrl}>{item.name}</Link>
                ))
            }
        </div>
    </div>
    <div className={styles.right_side}>        
    {
        data.map((item, index)=>(
            <ProductCartCategory width={405} height={424} data={item} key={index}/>
        ))
        }</div>
    </div>
  )
}
