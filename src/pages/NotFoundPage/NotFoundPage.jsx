import styles from './notFoundPage.module.css';
import Container from 'shared/components/Container';

function NotFoundPage() {
    return (
        <main>
            <Container>
                <h2 className={styles.p}>Not Found Page</h2>
            </Container>
        </main>
    )
 }
export default NotFoundPage;