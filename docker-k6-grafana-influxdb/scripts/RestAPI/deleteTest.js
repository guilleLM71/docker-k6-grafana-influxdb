import http from 'k6/http'
import { check, sleep } from 'k6';
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { BASE_URL, TODO_PATH } from '../Utils/const.js';

const index = [ 1, 2, 3, 4]

// Smoke Test
export let options = {
  stages: [
    { duration: "5s", target: 2 },
  ]
};

export default function(){
  const randomIndex = randomItem(index);

  const response =  http.del(
    `${BASE_URL + TODO_PATH}/${randomIndex}`,
    { headers: { Accepts: "application/json" } }
  )
  
  check (response, { "Delete is correct": (r) => r.status === 200 });
  sleep(.300);
}