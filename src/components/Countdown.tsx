import { useContext } from "react";
import { FcApproval } from "react-icons/fc";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountDown,
    startCountDown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>
            {minuteLeft}
          </span>
          <span>
            {minuteRight}
          </span>
        </div>
        <span>:</span>
        <div>
          <span>
            {secondLeft}
          </span>
          <span>
            {secondRight}
          </span>
        </div>
      </div>

      { hasFinished ? (
        <button type="button" className={styles.countDownButton} disabled>
          Ciclo encerrado
          <FcApproval size={25} />
        </button>
      ) : (
          <>
            { isActive ? (
              <button type="button" className={`${styles.countDownButton} ${styles.countDownButtonActive}`} onClick={resetCountDown}>
                Abandonar ciclo
              </button>
            ) : (
                <button type="button" className={styles.countDownButton} onClick={startCountDown}>
                  Iniciar um ciclo
                </button>
              )}
          </>
        )}
    </div>
  );
}