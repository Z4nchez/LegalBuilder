import 'dotenv/config';
import { get } from 'env-var';


export const envs = {
  //API
  API_PORT: get('API_PORT').default(3000).asPortNumber(),
  API_URL: get('API_URL').default("http://localhost").asString(),
 }