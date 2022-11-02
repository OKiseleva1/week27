import styles from './Rate.module.css';



function Rate(props) {
    return (

        <div className={props.isSelected ? styles.selected : ""}>
            <div className={styles.cardName}>{props.name}</div>
            <div className={styles.cardPrice}>{props.price}</div>
            <div className={styles.cardSpeed}>{props.speed}</div>
            <div className={styles.cardText}>{props.text}</div>
        </div >
    );
}


export default Rate;
