import uniq from 'lodash/uniq';
export class User {
  constructor(user = {}) {
    this.username = user.username || '';
    this.userId = user.userId || '';
    this.role = user.role || '';
    this.designation = user.designation || '';
  }
}

