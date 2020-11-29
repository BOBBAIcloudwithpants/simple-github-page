import Head from 'next/head'
import styles from '../styles/UserInfo.module.css'
import React, { useCallback } from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitBranch } from 'react-icons/bi'
import { BsDot, BsPeople } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { RiBuildingLine } from 'react-icons/ri'
import { GrLocation } from 'react-icons/gr'
export default function UserInfo (props) {


  return (
    <div className={styles.userinfo}>
      <div className={styles.avatar}>
        <img src={props.value.avatar_url} />
      </div>
      <div className={styles.briefinfo}>
        <div className={styles.name}>{props.value.name}</div>
        <div className={styles.login}>{props.value.login}</div>
        <button className={styles.edit}>Edit profile</button>
        <div className={styles.details}>
          <span className={styles.follower}><BsPeople /> follower {props.value.followers}</span>
          <span className={styles.following}><BsDot /> following {props.value.following}</span>
          <span className={styles.star}><BsDot /><AiOutlineStar />{props.value.stars}</span>
        </div>
        <div className={styles.others}>
          <div className={styles.company}><RiBuildingLine /> {props.value.company}</div>
          <div className={styles.location}><GrLocation /> {props.value.location}</div>
        </div>
        <hr className={styles.division} />


      </div>

    </div>
  )

}