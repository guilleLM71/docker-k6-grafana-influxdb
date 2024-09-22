import { check, sleep } from 'k6';
import http from 'k6/http';
import { BASE_URL, TODO_PATH } from '../Utils/const.js';

// Smoke Test
export let options = {
  stages: [
    { duration: "5s", target: 2 },
  ]
};

export default function () {
  const response = http.get(
    `${BASE_URL}/health`,
    { headers: {Accepts: "application/json"} }
  );

  check(
    response,
    { "Status Code Health Check is 200" : (response) => response.status === 200}
    );
    
  sleep(.300)
}