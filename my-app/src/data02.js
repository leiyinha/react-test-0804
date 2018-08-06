export const fetchRandomData02 = async (id) => {
    return fetch(`https://cnodejs.org/api/v1/topic/${id}`,{ mode: "cors"}).then(data=>data.json());
}

window.fetchRandomData02 = fetchRandomData02;