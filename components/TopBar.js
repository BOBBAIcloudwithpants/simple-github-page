import styles from '../styles/TopBar.module.css'
import React, { useCallback } from 'react';
import { AiOutlineGithub } from 'react-icons/ai'

export default function TopBar (props) {
  return (
    <div className={styles.bar}>
      <AiOutlineGithub className={styles.icon} />
      <div className={styles.links}>
        <a className={styles.link} href="https://github.com/pulls">Pull requests</a>
        <a className={styles.link} href="https://github.com/issues">Issues</a>
        <a className={styles.link} href="https://github.com/marketplace">Marketplace</a>
        <a className={styles.link} href="https://github.com/explore">Explore</a>
      </div>
    </div>
  )
}