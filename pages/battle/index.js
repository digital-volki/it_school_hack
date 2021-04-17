// import Timer from "../../components/Timer";
import HeaderComponent from "../../components/HeaderComponent";
// import SidePanel from "../../components/Panel";
import style from '../../styles/Battle.module.scss'
import clsx from "clsx";
import Timer from "../../components/Timer";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PullQuestions } from "../../components/none/PullQuestions";
import styles from "../../components/PlayerChallenge/plch.module.scss";
import { Question } from "../../components/Question";
import { useRouter } from "next/router";
// import { PlayerComponent } from "../../components/PlayerChallenge/player";


export default function Battle() {

    const [num, setNum] = useState(0);
    const [questions] = useState(PullQuestions());
    const [answers] = useState(new Map());
    const {handleSubmit, reset, register} = useForm();

    const {push} = useRouter()

    return (
        <form onSubmit={handleSubmit((data) => {
            answers.set(num, data.answer)
            setNum(s => s < questions.length - 1 ? s + 1 : s)
            reset()
        })}>
            <HeaderComponent/>
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
                                    num={index}
                                    now={index === num}
                                    pass={answers.get(index) === o.answer}
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
                        className={clsx('align-items-center bg-block-bg rounded m-1 p-4 justify-content-between', style.container)}>
                        {/*<div className={style.count}>*/}
                        {/*    Классификатор*/}
                        {/*</div>*/}
                        {/*<div className={'text-white'}>*/}
                        {/*    Дано целое число N. Определите, к какой категории оно относится:*/}
                        {/*    <br/>*/}
                        {/*    <br/>*/}
                        {/*    "DIGIT", если это однозначное неотрицательное целое число;<br/>*/}
                        {/*    "NUM", если это двузначное целое положительное число; <br/>*/}
                        {/*    "OTHER", если оно не относится к первым двум категориям. <br/>*/}
                        {/*</div>*/}
                        {/*<div className={style.count}>*/}
                        {/*    Входные данные*/}
                        {/*</div>*/}
                        {/*<div className={'text-white'}>*/}
                        {/*    Во входном потоке в единственной строке записано целое число N (−10≤N≤10)*/}
                        {/*</div>*/}
                        {/*<div className={style.count}>*/}
                        {/*    Пример*/}
                        {/*</div>*/}
                        {/*<div className={'text-white'}>*/}
                        {/*    <table className="table-block-bg table-bordered border-main-b table text-white">*/}
                        {/*        <thead className={'rounded'}>*/}
                        {/*        <tr>*/}
                        {/*            <th scope="col">Входные данные</th>*/}
                        {/*            <th scope="col">Выходные данные</th>*/}
                        {/*        </tr>*/}
                        {/*        </thead>*/}
                        {/*        <tbody>*/}
                        {/*        <tr>*/}
                        {/*            <td>6</td>*/}
                        {/*            <td>ENUM</td>*/}
                        {/*        </tr>*/}
                        {/*        <tr>*/}
                        {/*            <td>5</td>*/}
                        {/*            <td>DIGIT</td>*/}
                        {/*        </tr>*/}
                        {/*        <tr>*/}
                        {/*            <th>3</th>*/}
                        {/*            <td>DIGIT</td>*/}
                        {/*        </tr>*/}
                        {/*        </tbody>*/}
                        {/*    </table>*/}
                        {/*</div>*/}
                        <div dangerouslySetInnerHTML={{__html: questions[num].question}} />
                        {questions[num]?.type !== 'code' ? (
                            <input className={'form-control bg-dark text-white'} {...register('answer')}/>
                        ) : (
                            <div id={'code_r'} style={{
                                height: '500px'
                            }}/>
                        )}
                        <div className={'d-flex mt-2'}>
                            <button className={'btn btn-success'} type={'submit'}>
                                к следующему шагу
                            </button>
                            <button onClick={() => push('/')}
                                className={'btn btn-outline-success'} type={'button'}>
                                Закончить
                            </button>
                        </div>
                    </div>
                </div>
                <div className={'col-4'}>
                    <Timer/>
                </div>
            </div>
        </form>
    )
}
