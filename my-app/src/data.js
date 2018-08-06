
export const fetchRandomData = async () => {
    return fetch(` https://cnodejs.org/api/v1/topics`,{ mode: "cors"}).then(data=>data.json());
}

window.fetchRandomData = fetchRandomData;