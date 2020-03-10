export class HttpService {
    get(url) {
        return fetch(url);

    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
                })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });

    }
}