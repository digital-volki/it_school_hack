import styles from './battle.module.scss'
import clsx from "clsx";
import Link from 'next/link'
import {leagues} from "../../lib/consts";

export const GamersComponent = ({username, league, balance, experience, i}) => {
    return (
        <>
            <div className={clsx(styles['playerComponent'])}>
                <div className={clsx(styles['dateAcc'])}>

                    <div style={{
                        backgroundImage: `url("https://www.thiswaifudoesnotexist.net/example-${i}.jpg")`,
                        width: '36px',
                        height: '36px',
                        backgroundSize: 'cover'
                    }} className={clsx(styles['avatar'])}/>

                    <p className={clsx(styles['Info2'])}>{username}</p>

                    <div className={clsx(styles['allTRan'])}>
                        <img alt='transistor' src={'/transistor.svg'} className={clsx(styles['chipimg'])}/>
                        <p className={clsx(styles['Transistor'])}>{leagues[league]}</p>
                    </div>
                    <div className={clsx(styles['dateAcc1'])}>
                        <p className={clsx(styles['Info'])}>{balance}</p>
                        <img alt='chip' src={'/bx-chip.svg'} className={clsx(styles['chipimg'])}/>
                        <p className={clsx(styles['Info'])}>{experience}</p>
                        <img alt='chip' src={'/bx-star.svg'} className={clsx(styles['chipimg'])}/>

                    </div>
                    <Link href='/'>
                        <a>
                            <div className={clsx(styles['paralle'])}>
                                <img alt='question' src={'/right.svg'} className={clsx(styles['question'])}/>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}
