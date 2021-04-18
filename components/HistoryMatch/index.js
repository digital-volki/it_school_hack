import styles from './hismatch.module.scss'
import clsx from "clsx";
import ResultMatch from "./result"
import TransComponent from '../transition/trans'
import {useUserCtx} from "../UserMiddleware";
import {useLazyQuery} from "@apollo/client";
import GET_HISTORY_BATTLES from "../../lib/apollo/schemas/getResponsesBattles.graphql";
import {useEffect} from "react";

export default function hismatch (){
  const {ctx: {id}} = useUserCtx()

  const [loadReq, {called, loading, data}] = useLazyQuery(GET_HISTORY_BATTLES);

  useEffect(() => {
    if (id) {
      loadReq({
        variables: {
          id
        }
      })
    }
  }, [id])

  return(
    <>
      <div className={styles.history}>
        <div className={styles.historyHeader}>
          <div className={clsx(styles['historyText'])}>
            <p className={clsx(styles['Text'])}>История игр</p>
            <img alt="clock" src={'./clock.svg'}/>
          </div>
        </div>
          <div className={styles.title}>
            <p>Победитель</p>
            <p>Проигравший</p>
            <p>Счет</p>
            <p>Награда</p>
            <p>Время</p>
          </div>
          <div className={styles.titileandbutton}>

              {(called && !loading) && (data.battles.nodes.map((o) => <ResultMatch {...o} />))}

            <TransComponent/>
        </div>
      </div>
    </>
  )
}
