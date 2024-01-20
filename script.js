import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '30m', target: 667 }, // 667 запросов в секунду для 30 минут (20000 запросов)
    ],
};

export default function () {
    const min = 10000;
    const max = 20000;
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
    const url = `http://your-api-url/byid/${randomId}`;
    const authToken = 'your_auth_token_here'; // Замените на ваш реальный auth_token
    const headers = {
        'auth_token': authToken,
    };
    http.get(url, { headers: headers });
    sleep(1);
}
