import { URL } from '../URL';

export const postDataAsync = (body) => {
    return fetch(URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
}