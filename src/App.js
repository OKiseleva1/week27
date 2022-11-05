import styles from './App.module.css';
import Rate from './rates/rate';
import { useState } from 'react';


function App() {

  const [isSelect, setIsSelect] = useState(0);
  return (
    <div className={styles.App}>
      <Rate price="300" speed="до 10 Мбит/сек" color="1" isSelect={isSelect === "1"} onSetSelect={setIsSelect} />
      <Rate price="450" speed="до 50 Мбит/сек" color="2" isSelect={isSelect === "2"} onSetSelect={setIsSelect} />
      <Rate price="550" speed="до 100 Мбит/сек" color="3" isSelect={isSelect === "3"} onSetSelect={setIsSelect} />
      <Rate price="1000" speed="до 200 Мбит/сек" color="4" isSelect={isSelect === "4"} onSetSelect={setIsSelect} />
    </div>
  );
}

export default App;
