import Head from 'next/head'
import styles from '../styles/Repo.module.css'
import React, { useCallback } from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitBranch } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
export default function Repo (props) {
  console.log(props)
  return (
    <body>
      <div className={styles.Repo}>
        <div className={styles.title}><a href={props.value.html_url}>{props.value.name}</a></div>
        <div className={styles.description}>{props.value.description}</div>
        <div className={styles.details}>
          <span className={styles.language}><GoPrimitiveDot />{props.value.language}</span>
          <span className={styles.star}><AiOutlineStar />{props.value.stargazers_count}</span>
          <span className={styles.branch}><BiGitBranch />{props.value.forks_count}</span>
        </div>
      </div>
    </body>
  )
}