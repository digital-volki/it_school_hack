import HeaderComponent from "../../components/HeaderComponent";
import SidePanel from "../../components/SideBar";
import Card from "../../components/Card";
import styles from '../../styles/Shop.module.css'
import clsx from "clsx";
import {Drop} from "../../components/icons";

export default function Shop() {
    function Alrt() {
        alert("Скоро новая партия, не пропусти! :)");
    }

    return (
        <div>
            <HeaderComponent/>
            <SidePanel/>

            <div className={styles.sort}>
                <div className="dropdown">
                    <button className={clsx(styles['btn text-white'], styles.drp_btn)} type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false"
                            style={{outline: 'none', direction: 'none'}}>
                        <div style={{display: 'flex'}}><p className={styles.text_drp}>Тип </p>
                            <div className={styles.space}/>
                            одежда
                            <div>
                                <Drop/>
                            </div>
                        </div>

                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">кружки</a></li>
                        <li><a className="dropdown-item" href="#">техника</a></li>
                        <li><a className="dropdown-item" href="#">концелярия</a></li>
                        <li><a className="dropdown-item" href="#">холодильники</a></li>
                    </ul>
                </div>

                <div className="dropdown">
                    <button className={clsx(styles['btn text-white'], styles.drp_btn)} type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown" aria-expanded="false"
                            style={{outline: 'none', direction: 'none'}}>
                        <div style={{display: 'flex'}}><p className={styles.text_drp}>Сортировка по </p>
                            <div className={styles.space}/>
                            популярности
                            <div>
                                <Drop/>
                            </div>
                        </div>

                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        <li><a className="dropdown-item" href="#">цене</a></li>
                        <li><a className="dropdown-item" href="#">реливантность</a></li>
                    </ul>
                </div>
            </div>

            <div className="d-flex flex-wrap" style={{marginLeft: '16%'}}>
                <Card img={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
            </div>

            <button className="btn text-white" onClick={Alrt} style={{
                background: 'linear-gradient(98.01deg, #89D542 0%, #87CE58 50.1%, #97EA51 101.26%)',
                borderRadius: '6px',
                width: '309px',
                height: '61px',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '18px',
                lineSeight: '25px',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginLeft: '36%',
                marginRight: '36%'
            }}>
                Показать больше
            </button>


        </div>
    )
}
