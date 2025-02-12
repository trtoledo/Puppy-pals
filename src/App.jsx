import {useState} from 'react';
import {puppyList} from './data.js';
import styles from './App.module.css';
import './App.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featuredPup, setFeatPupId] = useState(null);

  return (
    <div className={styles['appContainer']}>
      <div className={styles['puppy-list']}>
        <h1>Puppy Pals</h1>
        <h2>Click on a puppy to see more info</h2>
        {puppies.map((puppy) => (
          <p
            onClick={() => setFeatPupId(puppy)}
            key={puppy.id}
            className={styles['puppy']}
          >
            {puppy.name}
          </p>
        ))}
      </div>
      {featuredPup && (
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
      )}
    </div>
  );
}

export default App;