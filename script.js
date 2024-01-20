import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '30m', target: 667 }, // 667 запросов в секунду для 30 минут (20000 запросов)
    ],
};

export default function () {
    const min = 1111119;
    const max = 13333319;
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
    const url = `http://apigw.service.test-consul/accounts/by-id/${randomId}`;
    http.get(url);
    sleep(1);
}
