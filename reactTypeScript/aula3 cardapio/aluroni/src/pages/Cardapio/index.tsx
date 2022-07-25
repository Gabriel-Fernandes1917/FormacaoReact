import styles from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/Logo.svg' // transform img in one React Component
import Buscador from './Buscador';
import { useState } from 'react';
// for use the img in React you need import she be 


export default function Cardapio() {
    const [busca, setBusca] = useState("")
    return(
        <main>
            <nav className={styles.menu}>
                <Logo /> 

            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do codigo e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>
                    Cardapio
                </h3>
                <Buscador 
                busca={busca}
                setBusca={setBusca}
                />
            </section>
        </main>
    )
}