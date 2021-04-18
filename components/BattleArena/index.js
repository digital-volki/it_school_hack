import {useEffect, useState} from 'react';
import styles from './battle.module.scss'
import clsx from "clsx";
import {GamersComponent} from './gamers'
import TransComponent from '../transition/trans'
import {useLazyQuery} from "@apollo/client";
import GET_ALL_USERS from '../../lib/apollo/schemas/getAllUsers.graphql'
import {useUserCtx} from "../UserMiddleware";

export default function BattleArena() {
    const [type, setType] = useState(0);

    const {ctx: {id}} = useUserCtx()

    const [loadUsers, {loading, data}] = useLazyQuery(GET_ALL_USERS);

    useEffect(() => {
        console.log(id)
        if (id) {
            console.log(id, 1)
            loadUsers({
                variables: {
                    id
                }
            })
        }
    }, [id])

    return (
        <>
            <div className={styles.batteleArena}>
                <div className={styles.logoArena}>
                    <img alt="trap" src={'./trap.svg'} className={styles.logoImg}/>
                    <p className={styles.logoText}>Арена Битв</p>
                </div>
                <div className={styles.panel}>
                    <button onClick={() => setType(0)}
                            className={clsx(styles['button'], type === 0 && styles['buttonActive'])}>все игроки
                    </button>
                    <button
                            className={clsx(styles['button'], type === 1 && styles['buttonActive'])}>Подписчики
                    </button>
                    <button
                            className={clsx(styles['button'], type === 2 && styles['buttonActive'])}>Подписка
                    </button>
                    {loading || data?.allUsers.nodes.map((o, index)=> (
                        <GamersComponent type={type} {...o} key={String(index)}/>
                    ))}

                    <TransComponent/>
                </div>
            </div>

        </>
    )
}
