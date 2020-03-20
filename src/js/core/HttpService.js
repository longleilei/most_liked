export class HttpService {
    async get(url) {

        let response = await fetch(url);
        let data = response.json();
        return data;
     /*    return new Promise((resolve, reject) => {
            fetch(url) 
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));;
        }); */
    }

    async getWithParams(url, params){
        let response = await fetch(url, {
            headers:{
                'x-access-token': localStorage.getItem(token)
            },  
        }, 
         data = response.json()); 
            return data;
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