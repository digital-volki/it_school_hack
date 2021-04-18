import styles from './plch.module.scss'
import clsx from "clsx";
import { PlayerComponent } from './player'
import BatteleArena from '../BattleArena'
import HistoryMatch from '../HistoryMatch'
import {useEffect} from 'react';
import {useLazyQuery} from "@apollo/client";
import GET_REQUESTS_BATTLES from "../../lib/apollo/schemas/getRequestsBattles.graphql";
import GET_RESPONSES_BATTLES from "../../lib/apollo/schemas/getResponsesBattles.graphql";
import {useUserCtx} from "../UserMiddleware";

export default function playerChallenge ({children}){
  const {ctx: {id}} = useUserCtx()

  const [loadReq, {called: l_called, loading: left_load, data: left_data}] = useLazyQuery(GET_REQUESTS_BATTLES);
  const [loadRes, {called: r_called, loading: right_load, data: right_data}] = useLazyQuery(GET_RESPONSES_BATTLES);

  useEffect(() => {
    if (id) {
      loadRes({
        variables: {
          id
        }
      })
      loadReq({
        variables: {
          id
        }
      })
    }
  }, [id])

  return(
    <>
    <div className={styles.all}>
      <div className={styles.allHeith}>
        <div className={clsx(styles['playerChallenge'])}>
          <div className={clsx(styles['playerChallengeHeader'])}>
          <div className={clsx(styles['playerText'])}>
            <p>Вызовы игроков</p>
            <img alt="shit" src={'./bx-shield-quarter.svg'} />
          </div>
            {!l_called || left_load || left_data.battles.nodes.map((o, index) => (
                <PlayerComponent type={true} {...o} key={index}/>
            ))}
          </div>

        </div>
        <BatteleArena/>

        <div className={clsx(styles['playerChallenge'])}>
          <div className={clsx(styles['playerChallengeHeader'])}>
          <div className={clsx(styles['playerText'])}>
            <p>Вызовы игроков</p>
            <img alt="shit" src={'./bx-shield-quarter.svg'} />
          </div>
            {!r_called || right_load || right_data.battles.nodes.map((o, index) => (
                <PlayerComponent type={true} {...o} key={index}/>
            ))}
          </div>

        </div>
        </div>
        <HistoryMatch/>

      </div>
      <main>
        {children}
      </main>
    </>
  )
}
