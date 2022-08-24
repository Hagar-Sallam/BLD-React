import styles from './Rate.module.css'
export default function Rate({ rate, reviewers }) {
    return (
        <div className={styles.rate}>
            <p className={styles.hah}>
                {rate}
            </p>
            <i className={`fa fa-star ${styles.checked}` }></i>
            <i className={`fa fa-star ${styles.checked}` }></i>
            <i className={`fa fa-star ${styles.checked}` }></i>
            <i className={`fa fa-star ${styles.checked}` }></i>
            <i className={`fa fa-star-half-full ${styles.notchecked}` }></i>
            <h5>
                {reviewers}
            </h5>
        </div>

    );
}