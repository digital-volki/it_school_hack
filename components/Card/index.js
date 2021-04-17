import styles from '../../styles/CardShop.module.css'
import {Chip} from "../icons";

export default function Card ({img = "/MerchSweatshot.png", name='свитшот унисекс белый', price='15000'}){
    return(
        <div className={styles.card}>
            <img src={img} className={styles.img_product} alt=""/>
            <div className={styles.name_product}>
                {name}
            </div>
            <div className={styles.price_product}>
                {price} <Chip/>
            </div>
        </div>
    )
}
