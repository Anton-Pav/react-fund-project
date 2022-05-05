import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPages = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const res = await PostService.getById(id)
        setPost(res.data)
    })
    const [fetchComments, isLoadingComments, commentsErr] = useFetching(async (id) => {
        const res = await PostService.getCommentsById(id)
        setComments(res.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1>Вы открыли пост с ID: {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id} {post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isLoading
                ? <Loader/>
                : <div>
                    {comments.map(c =>
                        <div key={c.id} style={{marginTop: 15}}>
                            <h5>{c.email}</h5>
                            <div>{c.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPages;