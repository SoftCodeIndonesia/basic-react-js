import axios from "axios"
import apiConfig from '../apiConfig'

const baseURL = "http://localhost:3004";

const GET = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${baseURL}/${path}`)
            .then(response => {
                resolve(response.data)
            }, (err) => {
                reject(err)
            })
    })

    return promise
}

const POST = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${baseURL}/${path}`, data).then(response => {
            resolve(response)
        }, (err) => {
            reject(err)
        })
    })

    return promise;

}

const PUT = (path, data, params) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${baseURL}/${path}/${params}`, data).then(response => {
            resolve(response)
        }, (err) => {
            reject(err)
        })
    })

    return promise;
}

const DELETE = (path, params) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${baseURL}/${path}/${params}`).then(response => {
            resolve(response)
        }, (err) => {
            reject(err)
        })
    })

    return promise;
}

const deletePosts = (params) => DELETE(`${apiConfig.fetchPost}`, params);
const putPosts = (data, params) => PUT(`${apiConfig.fetchPost}`, data, params);
const post = (data) => POST(`${apiConfig.fetchPost}`, data);
const getPost = () => GET(`${apiConfig.fetchPost}?_sort=id&_order=desc`);

const API = {
    getPost,
    post,
    putPosts,
    deletePosts
}

export default API