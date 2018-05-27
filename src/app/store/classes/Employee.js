
export class Employee {
  constructor(employee = {}) {
    this.employeeName = employee.Name || '';
    this.employeeId = employee.Id || null;
	this.dateOfBirth = employee.DateOfBirth || null;
	this.gender = employee.Gender || '';
    this.role = employee.Role || '';
	this.emailId = employee.EmailId || '';
	this.languagesKnown = employee.LanguagesKnown || [];
  }
}

