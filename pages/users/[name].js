import React, { useState, useEffect } from 'react';
import Repo from '../../components/Repo'
import HttpService from '../../services/http'
import { useRouter } from 'next/router'
import UserInfo from '../../components/UserInfo'
import TopBar from '../../components/TopBar'

const divStyle = {
  display: 'flex',
  alignItems: 'center'
}
const repostyle = {
  position: 'absolute',
  top: '13%',
  left: '40%'
}

export default function Profile () {
  // 仓库信息
  const [repos, setRepos] = useState({ data: [] });

  // 用户信息
  const [user, setUser] = useState({ data: {} })


  const [loading, setLoading] = useState(true);
  const router = useRouter()
  const { name } = router.query
  console.log(router)
  console.log("用户名: ", name)

  useEffect(async () => {
    setLoading(true)
    let { name } = router.query
    if (name == undefined) {
      name = "bobbaicloudwithpants";
    }
    const getRepo = async () => {
      const result = await HttpService.get(`https://api.github.com/users/${name}/repos`)
      setRepos(result.data)
    }

    const getUser = async () => {
      const result = await HttpService.get(`https://api.github.com/users/${name}`)
      const starred = await HttpService.get(`https://api.github.com/users/${name}/starred`)
      const user = {
        ...result.data,
        stars: starred.data.length
      }
      setUser(user)
      setLoading(false)
    }
    getRepo()
    getUser()
  }, [router])
  if (loading == true) {
    return <p>Loading ...</p>
  } else {
    console.log(repos)
    return (

      <tbody>
        <div><TopBar /></div>
        <div style={divStyle}>
          <UserInfo value={user} />
          <div style={repostyle}>
            {repos.map(function (repo, i) {
              if (i % 2 == 0) {
                if (i < repos.length - 1) {
                  return <div style={divStyle}><Repo value={repos[i]} /><Repo value={repos[i + 1]} /></div>
                } else {
                  return <Repo value={repo} />
                }
              }
            })}
          </div>
        </div>

      </tbody>
    )
  }
}