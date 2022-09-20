import React from 'react'
import styles from './Card.module.scss';

function CardHorizontal() {
  return (
    <div>
      <div className={styles.containerHorizontal}>
        <div className={styles.pointImg}>
          <div className={styles.point}>9.1</div>
          <img src="https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/62e66c30ce5ffa0822d1ca4d_poster-big-mouth.png" alt="" />
        </div>
        <div className={styles.content}>
          <h3>Big Mouth (2022)</h3>
          <img className={styles.star} src="https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default CardHorizontal