import {environment} from '../../environments/environment';

const {API} = environment;

export const urls = {
  user: `${API}/users`,
  posts: `${API}/posts`,
  comments: `${API}/comments`,
}
