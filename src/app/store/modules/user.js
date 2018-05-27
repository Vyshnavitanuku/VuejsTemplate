import { validateUser } from '../actions/user-details'
import {User} from '../classes/user'

const state = {
  user : new User()
}
const mutations = {
  SET_WORKING_USER(state, userData) {
    state.user = new User({ username: 'test1', userId: 101, role: 'admin', designation: 'manager' });
  }
}
export default {
  state,
  mutations,
  actions: {
    validateUser
  }
}
