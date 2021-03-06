// import Timer from "../../components/Timer";
import HeaderComponent from "../../components/HeaderComponent";
import Transition from "../../components/transition/trans";
import Row from "../../components/Row";
import SidePanel from "../../components/SideBar";
import { PlayerComponent } from "../../components/PlayerChallenge/player";
import styles from "../../styles/Leags.module.css"
import clsx from "clsx";
import {
    AddFriend,
    Brain,
    Chip,
    Drop,
    Fng,
    Label2,
    Lee,
    Proc,
    Search,
    Star,
    Trans,
    TransWhite
} from "../../components/icons";
// import BattleArena from "../../components/BattleArena";
import {useState} from "react";

export default function Leags() {
  const [panel, setPanel] = useState(true)

    const [type, setType] = useState(0);
    return (
        <div>
            <HeaderComponent chkPanel={true} panel={true}/>

            <SidePanel/>
            <div className={styles.label}> <Lee/> </div>

            <div style={{ display: 'flex', marginLeft: '13%', marginTop: '5%'}}>
                <div className={styles.panel_main} style={{ borderTopLeftRadius: 0 }}>
                    <div style={{display: 'flex'}}>
                        <div className="dropdown" style={{marginLeft: 'auto'}}>
                        </div>

                        <div className="dropdown">
                            <button className={clsx(styles['btn text-white'], styles.drp_btn)} type="button"
                                    id="dropdownMenuButton2"
                                    data-bs-toggle="dropdown" aria-expanded="false"
                                    style={{outline: 'none', direction: 'none'}}>
                                <div style={{display: 'flex'}}><p className={styles.text_drp}>Возраст </p>
                                    <div className={styles.space}/>
                                    15-16 лет
                                    <div>
                                        <Drop/>
                                    </div>
                                </div>

                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <li><a className="dropdown-item" href="#">17-18</a></li>
                                <li><a className="dropdown-item" href="#">18-19</a></li>
                            </ul>
                        </div>


                        <div className="dropdown">
                            <button className={clsx(styles['btn text-white'], styles.drp_btn)} type="button"
                                    id="dropdownMenuButton3"
                                    data-bs-toggle="dropdown" aria-expanded="false"
                                    style={{outline: 'none', direction: 'none'}}>
                                <div style={{display: 'flex'}}><p className={styles.text_drp}>Пол </p>
                                    <div className={styles.space}/>
                                    Любой
                                    <div>
                                        <Drop/>
                                    </div>
                                </div>

                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                <li><a className="dropdown-item" href="#">Мужской</a></li>
                                <li><a className="dropdown-item" href="#">Женский</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.panel_btns}>
                        <div>
                            <button onClick={() => setType(0)}
                                    className={clsx(styles['button'], type === 0 && styles['buttonActive'])}>
                                <TransWhite/> ТРАНЗИСТОРЫ
                            </button>
                            <button onClick={() => setType(1)}
                                    className={clsx(styles['button'], type === 1 && styles['buttonActive'])}>
                                <Proc/> ПРОЦЕССОРЫ
                            </button>
                            <button onClick={() => setType(2)}
                                    className={clsx(styles['button'], type === 2 && styles['buttonActive'])}>
                                <Brain/> КВАНТЫ
                            </button>
                        </div>

                        <div className={styles.text_stars} >0 - 4000  <Star/> </div>

                    </div>

                    {/*<svg width="66" height="32" viewBox="0 0 66 32" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path d="M59.2677 30.9999H2.34208C1.72734 30.9999 1.25815 30.4505 1.35442 29.8433L5.79381 1.84341C5.87082 1.35764 6.28964 1 6.78147 1H63.6617C64.2758 1 64.7448 1.54835 64.6496 2.15503L60.2556 30.1549C60.1793 30.6414 59.7601 30.9999 59.2677 30.9999Z" fill="#FFDA18" fill-opacity="0.1" stroke="#FFDA18" stroke-width="1"/>*/}
                    {/*    <path d="M29.1509 22C29.0442 22 28.9535 21.9627 28.8789 21.888C28.8042 21.8133 28.7669 21.7227 28.7669 21.616V20.8C28.7669 20.512 28.9002 20.2613 29.1669 20.048L31.6949 17.536C32.7935 16.672 33.5562 16 33.9829 15.52C34.4202 15.0293 34.6389 14.5493 34.6389 14.08C34.6389 13.5787 34.5002 13.184 34.2229 12.896C33.9562 12.608 33.5509 12.464 33.0069 12.464C32.4735 12.464 32.0522 12.624 31.7429 12.944C31.4335 13.2533 31.2415 13.6587 31.1669 14.16C31.1349 14.288 31.0762 14.384 30.9909 14.448C30.9055 14.5013 30.8095 14.528 30.7029 14.528H29.2789C29.1829 14.528 29.1029 14.496 29.0389 14.432C28.9749 14.368 28.9429 14.2933 28.9429 14.208C28.9642 13.5787 29.1349 12.992 29.4549 12.448C29.7749 11.8933 30.2389 11.4507 30.8469 11.12C31.4549 10.7787 32.1695 10.608 32.9909 10.608C33.8442 10.608 34.5642 10.7573 35.1509 11.056C35.7482 11.344 36.1962 11.744 36.4949 12.256C36.7935 12.768 36.9429 13.3493 36.9429 14C36.9429 14.7147 36.7402 15.36 36.3349 15.936C35.9402 16.512 35.3322 17.1307 34.5109 17.792L32.2389 20.096H36.7989C36.9162 20.096 37.0069 20.1333 37.0709 20.208C37.1455 20.272 37.1829 20.3627 37.1829 20.48V21.616C37.1829 21.7227 37.1455 21.8133 37.0709 21.888C37.0069 21.9627 36.9162 22 36.7989 22H29.1509Z" fill="white"/>*/}
                    {/*</svg>*/}


                    <Row img={"/av9.png"} name = {'Роман Коробкин'} role = {'Транзистор'} chips = {'13567'} stars = {'3999'}/>
                    <Row img={"/av5.png"} name = {'Дамир Коровьев'} role = {'Транзистор'} chips = {'12754'} stars = {'3786'}/>
                    <Row img={"/av6.png"} name = {'Антон Столыпин'} role = {'Транзистор'} chips = {'12346'} stars = {'3567'}/>
                    <Row img={"/av7.png"} name = {'Вадим Алексеев'} role = {'Транзистор'} chips = {'11976'} stars = {'3566'}/>
                    <Row img={"/av1.png"} name = {'Алиса Шевелева'} role = {'Транзистор'} chips = {'12632'} stars = {'3200'}/>
                    <Row img={"/av8.png"} name = {'Артур Коробкин'} role = {'Транзистор'} chips = {'10978'} stars = {'3103'}/>
                    <Row img={"/av2.png"} name = {'Мария Цветаева'} role = {'Транзистор'} chips = {'9235'} stars = {'2726'}/>
                    <Row img={"/av3.png"} name = {'Диана Коробкин'} role = {'Транзистор'} chips = {'10245'} stars = {'2654'}/>
                    <Row img={"/av10.png"} name = {'Артём Тимофеев'} role = {'Транзистор'} chips = {'8432'} stars = {'2621'}/>

                    <Row img={"/av4.png"} name = {'Света Кулагина'} role = {'Транзистор'} chips = {'199'} stars = {'381'} bg/>
                    <Transition/>
                </div>

                <div>
                    <Fng/>


                </div>
            </div>

        </div>
    )
}
