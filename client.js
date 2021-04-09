console.log('In JS');
let employees = [];

$(document).ready(onReady);
function onReady(){
    console.log('In JQ');
    $('#submit').on('click', addEmployee);
    $('#out-employees').on('click', '.delete', deleteEmployee)
}

function deleteEmployee() {
    $(this).closest('tr').remove();
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
    cost();
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
                <td>
                    <button class="delete">Delete</button>
                </td>
            </tr>
        `)
    }
}

function cost() {
    $('#monthly-costs').empty();
    let monthlyCosts = 0;
    for (let i = 0; i < employees.length; i++) {
        monthlyCosts += Number(employees[i].annualSalary)/12;  
    }
    $('#monthly-costs').append(monthlyCosts);
    if (monthlyCosts >= 20000) {
        $('#monthly-costs').addClass("red");
    }
}