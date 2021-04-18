// import Timer from "../../components/Timer";
import HeaderComponent from "../../components/HeaderComponent";
// import SidePanel from "../../components/Panel";
import style from '../../styles/Battle.module.scss'
import clsx from "clsx";
import Timer from "../../components/Timer";
import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";

import styles from "../../components/PlayerChallenge/plch.module.scss";
import { Question } from "../../components/Question";
import { Chip, Star } from "../../components/icons";
import START_BATTLE from '../../lib/apollo/schemas/startBattle.graphql'
import CHECK_ANSWER from '../../lib/apollo/schemas/checkAnswers.graphql'
import {useMutation} from "@apollo/client";
import {useRouter} from "next/router";
import {useUserCtx} from "../../components/UserMiddleware";

// import { PlayerComponent } from "../../components/PlayerChallenge/player";


export default function Battle() {
  const [panel, setPanel] = useState(true)

    const {query} = useRouter()
    const { id: bid } = query



    const [start, {data, loading, called}] = useMutation(START_BATTLE)
    const [check] = useMutation(CHECK_ANSWER)

    const {ctx} = useUserCtx()

    useEffect(async () => {
        (bid && ctx.id) && await start({
            variables: {
                id: ctx?.id,
                bid
            }
        })
    }, [ctx.id, bid])

    const [num, setNum] = useState(0);
    const [isShowResult, setShowing] = useState(false)
    const [questions, setQue] = useState([]);
    const [answers] = useState(new Map());

    useEffect(() => {
        if (called && !loading)
            setQue(data.startBattle.value.task.questions)
    }, [called, loading])

    const {handleSubmit, reset, register} = useForm();

    if (!called || loading) {
        return (
            <>
                <div className="spinner-border text-light text-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </>
        )
    }

    return (
        <form onSubmit={handleSubmit(async (data) => {
            answers.set(num, data.answer)
            setNum(s => s + 1)
            reset()
            if (questions.length - 1 < answers.size) {
                const d = []
                answers.forEach((v, k) => d.push({ key: questions[k].id, value: v}))

                console.log(answers.entries())
                await check({
                    variables: {
                        qa: [...d],
                        bid,
                        id: ctx?.id
                    }
                })
            }
        })}>
            <HeaderComponent panel={true}/>
            <div className={'d-flex bg-l-bg mx-5 rounded row '}>
                <div className={clsx(styles['playerChallenge'])}>
                    <div className={clsx(styles['playerChallengeHeader'])}>
                        <div className={clsx(styles['playerText'])}>
                            <p>Быстрые тесты</p>
                            <div>
                                {Math.round((answers.size) / questions.length * 100)} %
                            </div>
                        </div>
                        {questions.map((o, index) => (
                            <div onClick={() => setNum(index)}>
                                <Question
                                    num={index+1}
                                    now={index === num}
                                    pass={true}
                                    answer={answers.get(index)}
                                />
                            </div>
                        ))}
                    </div>

                </div>
                <div className={'main col-4'}>
                    <div
                        className={clsx('align-items-center d-flex bg-block-bg rounded m-1 p-4 justify-content-between', style.container)}>
                        <div className={'d-flex'}>
                            <div className={'rounded'} style={{
                                width: 48,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage: "url('/n/image1.jpg')"
                            }}
                            />
                            <div className={'text-white p-2'}>
                                <div className={style.title}>
                                    Макар иванович
                                </div>
                                <div className={style.sub}>
                                    Транзистор
                                </div>
                            </div>
                        </div>
                        <div className={clsx(style.count, '')}>
                            0:3
                        </div>
                        <div className={'d-flex'}>
                            <div className={'text-white p-2'}>
                                <div className={style.title}>
                                    Макар иванович
                                </div>
                                <div className={style.sub}>
                                    Транзистор
                                </div>
                            </div>
                            <div className={'rounded'} style={{
                                width: 48,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage: "url('/n/image1.jpg')"
                            }}
                            />
                        </div>
                    </div>
                    <div
                        className={clsx('text-white align-items-center bg-block-bg rounded m-1 p-4 justify-content-between', style.container)}>
                        {/*{JSON.stringify(questions)}*/}
                        {questions[num]?.description}
                        {questions[num]?.type !== 'code' ? (
                            <input className={'form-control bg-dark text-white'} {...register('answer')}/>
                        ) : (
                            <div id={'code_r'} style={{
                                height: '500px'
                            }}/>
                        )}
                        <div className={'d-flex mt-2'}>
                            <button className={clsx('btn btn-success', num > questions.length - 2 && 'd-none')}
                                    type={'submit'}>
                                к следующему шагу
                            </button>
                            <button onClick={() => setShowing(true)}
                                    className={clsx('btn btn-outline-success', isShowResult && 'd-none')}
                                    type={'button'}>
                                Закончить
                            </button>
                        </div>
                    </div>
                </div>
                <div className={'col-4'}>
                    {!(num < questions.length - 1) ? <Timer/> : (
                        <div className={'d-flex flex-column align-self-start justify-content-center'}>
                            <div className={clsx(styles['playerChallenge_b'])}>
                                <div className={clsx(styles['playerChallengeHeader'])}>
                                    <div className={clsx(styles['playerText'])}>
                                        <p>
                                            Статистика
                                        </p>
                                    </div>
                                    <div>
                                        <Question
                                            q={'Время'}
                                            r={'14:32'}
                                        />
                                    </div>
                                    <div>
                                        <Question
                                            q={'Правильных ответов'}
                                            r={'4'}
                                        />
                                    </div>
                                    <div>
                                        <Question
                                            q={'Неправильных ответов'}
                                            r={'3'}
                                        />
                                    </div>
                                    <div>
                                        <Question
                                            q={'Награда'}
                                            r={
                                                <div className={'d-flex'}>
                                                    <div>
                                                        300
                                                    </div>
                                                    <div>
                                                        <Chip/>
                                                    </div>
                                                    <div>
                                                        250
                                                    </div>
                                                    <div>
                                                        <Star/>
                                                    </div>
                                                </div>
                                            }
                                        />
                                    </div>

                                </div>

                            </div>
                            <div className={clsx(styles['playerChallenge_b'])}>
                                <div className={clsx(styles['playerChallengeHeader'])}>
                                    <div className={clsx(styles['playerText'])}>
                                        <p>
                                            Рекомендации
                                        </p>
                                    </div>
                                    <div>
                                        <Question
                                            q={'Типы данных и операции'}
                                        />
                                    </div>
                                    <div>
                                        <Question
                                            q={'Представление отрицательн...'}
                                        />
                                    </div>
                                    <div>
                                        <Question
                                            q={'Циклы while, do while'}
                                        />
                                    </div>
                                    <div>
                                        <Question
                                            q={'Награда'}
                                            r={
                                                <div className={'d-flex'}>
                                                    <div>
                                                        300
                                                    </div>
                                                    <div>
                                                        <Chip/>
                                                    </div>
                                                    <div>
                                                        250
                                                    </div>
                                                    <div>
                                                        <Star/>
                                                    </div>
                                                </div>
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </form>
    )
}
