import { authEndpoint } from '../utility/constants';
import { vuePost } from '../utility/helper'

export const loginService = async (loginDetails) => {
  return new Promise((resolve, reject) => {
	setTimeout(() => resolve(true), 5000)
    //vuePost(authEndpoint, loginDetails, { emulateJSON: true }).then(data => 
    //{debugger;
    //resolve(data)}).catch(err => {
    // reject(err)
    //});
  });
}
