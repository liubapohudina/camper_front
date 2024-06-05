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
    return data;
};

export const filtercampersFetch = async ({ location, form, details, transmission }) => {
    if (transmission === false) {
        transmission = null;
    }
    const { data } = await instance.get('/adverts', {
        params: {
            location,
            form: form,
            transmission: transmission
        },
    });

    if (details.length > 0) {
        const filteredData = data.filter((item) => {
            return details.every((detail) => {
                return item.details[detail] > 0;
            });
        });
        return filteredData;
    }

    return data;
};