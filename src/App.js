import styles from './App.module.css';
import Rate from './rates/rate';

const rates = [
  { name: "Безлимитный 300", price: "300 руб/мес", speed: "до 10 Мбит/сек", text: "Объем включенного трафика не ограничен" },
  { name: "Безлимитный 450", price: "450 руб/мес", speed: "до 50 Мбит/сек", text: "Объем включенного трафика не ограничен" },
  { name: "Безлимитный 550", price: "550 руб/мес", speed: "до 100 Мбит/сек", text: "Объем включенного трафика не ограничен", isSelected: true },
  { name: "Безлимитный 1000", price: "1000 руб/мес", speed: "до 200 Мбит/сек", text: "Объем включенного трафика не ограничен" }
]


function App() {
  return (
    <div className={styles.App}>
      {
        rates.map((rate) =>
          <Rate name={rate.name} price={rate.price} speed={rate.speed} text={rate.text} isSelected={rate.isSelected} />
        )
      }
    </div>
  );
}

export default App;
