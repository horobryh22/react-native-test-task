import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserType} from '../../api/types/UserType';
import {PostType} from '../../api/types/PostType';
import {api} from '../../api/api';
import {setIsUserLogged} from '../../store/auth/auth';

export const getPosts = createAsyncThunk<PostType [], number, { rejectValue: string }>('root/getPosts', async (userId, {
    rejectWithValue,
}) => {
    try {
        const {data} = await api.getPosts(userId);

        return data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});

export const getUsers = createAsyncThunk<UserType [], void, { rejectValue: string }>('root/getUsers', async (_, {
    rejectWithValue,
    dispatch
}) => {
    try {
        const {data} = await api.getUsers();

        data.forEach(user => {
            dispatch(getPosts(user.id));
        })

        return data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});

export type ArticleType = {
    name: string;
    company: string;
    title: string;
    body: string;
}

export type RootStateType = {
    users: UserType []
    posts: PostType []
    articles: ArticleType []
    status: string
}

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        users: [],
        posts: [],
        articles: [],
        status: 'idle'
    } as RootStateType,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.articles = state.users.map(user => {
                    return {
                        body: '',
                        company: user.company.name,
                        title: '',
                        name: user.name
                    }
                })
                state.status = 'idle';
            })
            .addCase(getUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts.push(action.payload[0]);

                if (state.posts.length === 10) {
                    state.articles = state.articles.map((article, i) => {
                        return {
                            body: state.posts[i].body,
                            title: state.posts[i].title,
                            name: state.users[i].name,
                            company: state.users[i].company.name
                        }
                    })
                }

                state.status = 'idle';
            })
            .addCase(getPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(setIsUserLogged, (state, action: PayloadAction<Boolean>) => {
                if (!action.payload) {
                    state.posts = [];
                    state.articles = [];
                    state.users = [];
                }
            })
    }
})

export const root = rootSlice.reducer;