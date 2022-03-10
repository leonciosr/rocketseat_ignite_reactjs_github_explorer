import styles from './styles.module.scss';

export function Header (){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/assets/images/rocketseat.svg" alt="Rocketseat"/>
                <img src="/assets/images/react-js.svg" alt="React.js"/>
                <img src="/assets/images/ignite.svg" alt="Ignite"/>
            </div>
        </header>
    )
}