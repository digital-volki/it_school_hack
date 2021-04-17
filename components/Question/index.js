import clsx from "clsx";
import styles from "../PlayerChallenge/plch.module.scss";
import { CheckErr, CheckSuc } from "../icons";

export const Question = ({r=null, q=null, now=false, num = 0, answer = false, pass = false}) => {
    return (
        <div>
            <div className={clsx(styles['playerComponent'], now && 'bg-main-b')}>
                <div className={clsx(styles['dateAcc'])}>
                    <div className={'d-flex align-items-center justify-content-between w-100 p-3'}>
                        <div>
                            {q || `${num} Вопрос`}
                        </div>
                        <div>
                            {!q ? answer && (pass ? <CheckSuc/> : <CheckErr/>): r}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
