import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res => {
            setLoading(false);
            setError('')
            setPost(res.data);
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError('Something went wrong')
        })
    }, [])
  return (
    <div>
        {loading ? 'Loading...': post.title}
        {error ? error : null}
    </div>
  )
}

export default DataFetchingOne