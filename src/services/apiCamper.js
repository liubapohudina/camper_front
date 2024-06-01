import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const campersFetch = async (page = 1) => {
    const {data} = await instance.get('/adverts', {
        params: {
            page,
            limit: 4,
        },
    });
    console.log(data)
    return data;
};