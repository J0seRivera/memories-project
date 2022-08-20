import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles.js'

const Posts = () => {
  const post = useSelector((state) => state.posts)
  const classes = useStyles()

  console.log(post)
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  )
}

export default Posts