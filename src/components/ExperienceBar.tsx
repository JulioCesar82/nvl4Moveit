import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeBoxContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <samp>0 xp</samp>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <samp>{experienceToNextLevel} xp</samp>
    </header>
  );
}