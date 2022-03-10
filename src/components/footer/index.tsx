import styles from './styles.module.scss';

export function Footer (){
    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <span>Ignite - Todos os direitos reservados</span>
                <div>
                    <span>Rocketseat 2022</span>
                </div>
            </div>
        </footer>
    )
}