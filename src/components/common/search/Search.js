import React from 'react'
import styles from './Search.module.scss';
function Search() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Bạn muốn tìm phim gì?' />
      <button>Tìm kiếm</button>
    </div>
  )
}

export default Search