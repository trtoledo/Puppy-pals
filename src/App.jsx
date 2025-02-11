import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {puppyList} from './data.js'
import styles from './App.module.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(puppyList)
  const [puppies, setPuppies] = useState(puppyList)

  return (
    <div className={styles['appContainer']}>
      <div className={styles['puppy-list']}>
        <h1>Puppy Pals</h1>
        <h2>Click on a puppy to see more info</h2>
        {puppies.map((puppy) => (
          <p
            onClick={() => setFeatPupId(puppy.id)}
            key={puppy.id}
            className={styles['puppy']}
          >
            {puppy.name}
          </p>
        ))}
      </div > {featPupId && (
        <div className={styles['featured']}>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>
              <span>Age: {featuredPup.age}</span>
            </li>
            <li>
              <span>Email: {featuredPup.email}</span>
            </li>
          </ul>
        </div>
      )}</div>


  );
}

export default App
