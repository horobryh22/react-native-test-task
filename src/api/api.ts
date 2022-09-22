import axios from 'axios';
import {UserType} from '../api/types/UserType';
import {PostType} from '../api/types/PostType';
import {PhotoType} from '../api/types/PhotoType';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
    getUsers: () => {
        return instance.get<UserType[]>('/users');
    },
    getPosts: (userId: number) => {
        return instance.get<PostType[]>('/posts', {
            params: {
                userId
            }
        })
    },
    getPhotos: () => {
        return instance.get<PhotoType[]>('/photos')
    }
}