import HeaderComponent from "../../components/HeaderComponent";
import SidePanel from "../../components/SideBar";
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



        </div>
    )
}
