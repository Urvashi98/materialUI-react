const KEYS ={
  employees: 'employees',
  employeeId: 'id' //same as initial form id name
}

export function getDepartmentList() {
  return [
    { id: "1", title: "Technology" },
    { id: "2", title: "HR" },
    { id: "3", title: "App Support" },
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

export function updateEmployee(data) {
  let employees = getEmployees();
  let recordIndex = employees.findIndex(e => e.id === data.id)
  employees[recordIndex] = {...data}; //assign newly updated values to a record
  localStorage.setItem(KEYS.employees,JSON.stringify(employees));
}

export function deleteEmployee(data) {
  let employees = getEmployees();
  console.log('all employees',typeof employees);
  let recordToDelete = employees.filter((r) => r.id === data.id);
  console.log("record to delete", recordToDelete);
   employees.splice(recordToDelete[0], 1);
  console.log("updated employees", employees.splice(recordToDelete[0], 1));
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
  
  let employees = JSON.parse(localStorage.getItem(KEYS.employees)); //convert string to Object and send it again!
  //map deptID to deptName
  let departments = getDepartmentList();
  
  return employees.map((e) => ({
    ...e,
    departmnentTitle: departments[e.deptId-1].title,
  }));
  // console.log(emp2);


}
