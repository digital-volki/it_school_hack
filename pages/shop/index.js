import HeaderComponent from "../../components/HeaderComponent";
import Card from "../../components/Card";
import styles from '../../styles/Shop.module.css'

export default function Shop() {
    function Alrt(){
        alert("Скоро новая партия, не пропусти! :)");
    }
    return (
        <div>
            <HeaderComponent/>
            <div className={styles.sort}>
                Сортировка по цене
            </div>
            <div className="d-flex flex-wrap">
                <Card img ={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img ={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img ={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img ={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img ={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img ={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img ={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
                <Card img ={"/MerchSweatshot.png"} name={'свитшот унисекс белый'} price={'15000'}/>
            </div>

            <button className="btn text-white" onClick={Alrt} style={{background: 'linear-gradient(98.01deg, #89D542 0%, #87CE58 50.1%, #97EA51 101.26%)',
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


            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>


        </div>
    )
}
