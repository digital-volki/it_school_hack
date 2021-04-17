import styles from '../../styles/RowTable.module.css'
import {Chip, Star, Trans} from "../icons";
import clsx from "clsx";

export default function Row({
                                img = "/avatar.png",
                                name = 'Влад Шкердин',
                                role = 'Транзистор',
                                chips = '22700',
                                stars = '32474',
                                bg = false
                            }) {
    return (
        <div className={clsx(styles.row, 'bd-callout bd-callout-danger')} style={{backgroundColor: bg ? '#1C2926' : '#191D2D', borderLeft: bg && '2px solid #6FD04F'}}>


            <div className={styles.name}><img src={img} className={styles.avatar} alt=""/>{name}</div>
            <div className={styles.role}><Trans/> <div className={styles.space}/> {role}</div>
            <div className={styles.chips}> <Chip/> <div className={styles.space}/> {chips}</div>
            <div className={styles.stars}><Star/> <div className={styles.space}/> {stars} </div>
            <div className={styles.button}/>



        </div>
    )
}
// Леха крыса
