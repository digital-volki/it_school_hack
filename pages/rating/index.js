import HeaderComponent from "../../components/HeaderComponent";
import Transition from "../../components/transition/trans";
import Row from "../../components/Row";
import SidePanel from "../../components/SideBar";
import { PlayerComponent } from "../../components/PlayerChallenge/player";
import styles from "../../styles/Rating.module.css"
import clsx from "clsx";
import {
    ActPl,
    AddFriend,
    Brain,
    Chip,
    Drop,
    Fng,
    Label2, Label3,
    Lee,
    Proc,
    Search,
    Star,
    Trans,
    TransWhite
} from "../../components/icons";
// import BattleArena from "../../components/BattleArena";
import {useState} from "react";

export default function Rating() {
    const [type, setType] = useState(0);
    return (
        <div>
            <HeaderComponent chkPanel={true}/>

            <SidePanel/>
            <div className={styles.label}> <Label3/> </div>

            <div style={{ display: 'flex', marginLeft: '13%', marginTop: '5%'}}>
                <div className={styles.panel_main} style={{ borderTopLeftRadius: 0 }}>
                    <div style={{display: 'flex'}}>
                        <div className="dropdown" style={{marginLeft: 'auto'}}>
                        </div>

                        <div className="dropdown" style={{marginLeft: 'auto'}}>
                            <button className={clsx(styles['btn text-white'], styles.drp_btn)} type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false"
                                    style={{outline: 'none', direction: 'none'}}>
                                <div style={{display: 'flex'}}><p className={styles.text_drp}>Лига </p>
                                    <div className={styles.space}/>
                                    транзисторов
                                    <div>
                                        <Drop/>
                                    </div>
                                </div>

                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Процессоров</a></li>
                                <li><a className="dropdown-item" href="#">Кванты</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <button className={clsx(styles['btn text-white'], styles.drp_btn)} type="button"
                                    id="dropdownMenuButton3"
                                    data-bs-toggle="dropdown" aria-expanded="false"
                                    style={{outline: 'none', direction: 'none'}}>
                                <div style={{display: 'flex'}}><p className={styles.text_drp}>Сортировать по</p>
                                    <div className={styles.space}/>
                                     чипам
                                    <div>
                                        <Drop/>
                                    </div>
                                </div>

                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                <li><a className="dropdown-item" href="#">рейтингу</a></li>
                            </ul>
                        </div>
                    </div>

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
                    <ActPl/>


                </div>
            </div>

        </div>
    )
}
