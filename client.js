console.log('In JS');
let employees = [];

$(document).ready(onReady);
function onReady(){
    console.log('In JQ');
    $('#submit').on('click', addEmployee);
}

function addEmployee() {
    console.log('In addEmployee');
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
    };
    employees.push(employee);
    appendEmployee();
   clearInputFields();
   console.log(employees);
}

function clearInputFields(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function appendEmployee() {
    $('#out-employees').empty();

    for (let person of employees) {
        $('#out-employees').append(`
        <tr>
                <td>${person.firstName}</td>
                <td>${person.lastName}</td>
                <td>${person.idNumber}</td>
                <td>${person.jobTitle}</td>
                <td>${person.annualSalary}</td>
            </tr>
        `)
    }
}