import {environment} from '../../environments/environment';

const {API: baseURL} = environment;

export const urls = {
  user: `${baseURL}/users`,
  posts: `${baseURL}/posts`,
  comments: `${baseURL}/comments`,
}
