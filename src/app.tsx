import { Footer } from './components/footer';
import { Header } from './components/header';
import { RepositoryList } from './components/repository/list';
import './styles/global.scss';

export function App() {
    return (
        <>
        <Header/>
        <RepositoryList/>
        <Footer/>
        </>
    )
    
}