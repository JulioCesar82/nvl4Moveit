import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeBoxContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/kayzarosa.png" alt="Kayza Rosa"/>

      <div>
        <strong>
          Kayza Rosa
        </strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}