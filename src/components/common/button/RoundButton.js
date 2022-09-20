import React from 'react'
import styles from './Button.module.scss'

function RoundButton(props) {
    const {content, color,bc, width} = props
  return (
    <>
        <button className={styles.RoundButton} style={{color:color,backgroundColor:bc,minWidth:`${width}px`}}>
            {content}
        </button>
    </>
  )
}

export default RoundButton