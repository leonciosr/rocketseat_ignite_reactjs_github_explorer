import styles from './styles.module.scss';

interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    return (
        <>
        <li>           
            <strong><a href={props.repository?.html_url} target='_blank'>{props.repository?.name}</a></strong>
            <p>{props.repository?.description}</p>
        </li>
        <hr></hr>
        </>
    );
}