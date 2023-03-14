// Write your solution in this file!
const employee = {
    name: 'Megan',
    streetAddress: '401 Toorak Road',
}

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    const newEmployee = {...employeeObj, [key]: value}
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value
    return employee
}

function deleteFromEmployeeByKey(employeeObj, key) {
    const deletedKey = {employeeObj}
    return deletedKey
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
    delete employeeObj[key]
    return employee
}
