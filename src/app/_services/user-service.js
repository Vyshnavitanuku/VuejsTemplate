import { authEndpoint } from '../utility/constants';
import { vuePost } from '../utility/helper'

export const loginService = async (loginDetails) => {
  return new Promise((resolve, reject) => {
    vuePost(authEndpoint, loginDetails, { emulateJSON: true }).then(data => resolve(data)).catch(err => {
      reject(err)
    });
  });
}
