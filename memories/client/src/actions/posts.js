import * as api from '../api';
import {FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes'

// Action creators.. functions that return actions
export const getPosts = () => async (dispatch) => {
    try {
        // below we are getting response from API
        const { data } = await api.fetchPosts();
        // good to have these action types set as constants by capitalizing them
        dispatch({type:FETCH_ALL, payload:data})
    } catch (error) {
        console.log(error.message)
    }
    // const action = {type:'FETCH_ALL', payload:[]}
    // return action 
    // dispatch(action)
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post)

        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        // TIP: dont do error.message, just error! because you will lose the message
        // console.log(error.message);
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        // no need to assign variable to the await below since we are not interested with the response
        await api.deletePost(id)

        dispatch({type: DELETE, payload: id});
    } catch (error) {
        // TIP: dont do error.message, just error! because you will lose the message
        // console.log(error.message);
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id)

        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}