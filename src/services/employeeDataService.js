const KEYS ={
  employees: 'employees',
  employeeId: 'id' //same as initial form id name
}

export function getDepartmentList() {
  return [
    { id: "technology", title: "Technology" },
    { id: "hr", title: "HR" },
    { id: "appSupport", title: "App Support" },
  ];
}

export function getGenderList() {
  return [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
  ];
}

export function insertEmployee(data) {
  let employees = getEmployees();
  data.id = generateID();
  employees.push(data)
  localStorage.setItem(KEYS.employees,JSON.stringify(employees));
}

function generateID() {
  if(localStorage.getItem(KEYS.employeeId) === null){
    localStorage.setItem(KEYS.employeeId, '0')
  }
  var id = parseInt(localStorage.getItem(KEYS.employeeId))
  console.log('localStorage.getItem(KEYS.employeeId)', localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString())

  return id;
}

export function getEmployees() {
  if(localStorage.getItem(KEYS.employees) === null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]))
  
  return JSON.parse(localStorage.getItem(KEYS.employees))
}
