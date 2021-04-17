// import Timer from "../../components/Timer";
import HeaderComponent from "../../components/HeaderComponent";
// import SidePanel from "../../components/Panel";
import style from '../../styles/Battle.module.scss'
import clsx from "clsx";
import Timer from "../../components/Timer";


export default function Battle() {
    return (
        <div>
            <HeaderComponent/>
            <div className={'d-flex bg-l-bg mx-5 rounded row '}>
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
                        <div className={style.count}>
                            Классификатор
                        </div>
                        <div className={'text-white'}>
                            Дано целое число N. Определите, к какой категории оно относится:
                            <br/>
                            <br/>
                            "DIGIT", если это однозначное неотрицательное целое число;<br/>
                            "NUM", если это двузначное целое положительное число; <br/>
                            "OTHER", если оно не относится к первым двум категориям. <br/>
                        </div>
                        <div className={style.count}>
                            Входные данные
                        </div>
                        <div className={'text-white'}>
                            Во входном потоке в единственной строке записано целое число N (−10≤N≤10)
                        </div>
                        <div className={style.count}>
                            Пример
                        </div>
                        <div className={'text-white'}>
                            <table className="table-block-bg table-bordered border-main-b table text-white">
                                <thead className={'rounded'}>
                                <tr>
                                    <th scope="col">Входные данные</th>
                                    <th scope="col">Выходные данные</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>6</td>
                                    <td>ENUM</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>DIGIT</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>DIGIT</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div id={'code_r'} style={{
                            height: '500px'
                        }}/>
                    </div>
                </div>
                <Timer />
            </div>
        </div>
    )
}
