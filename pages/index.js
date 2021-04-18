// import styles from '../styles/Home.module.css'
import HeaderComponent from '../components/HeaderComponent/'
import SideBar from '../components/SideBar/'
import PlayerChallenge from '../components/PlayerChallenge/'

import {StartModal} from "../components/StartModal";


export default function Home() {
    return (
        <div>
            <StartModal />
            <SideBar>
                <HeaderComponent/>
                <PlayerChallenge/>
            </SideBar>


        </div>
    )
}
