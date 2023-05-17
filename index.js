// Your code here
function createEmployeeRecord(array){
  let testEmployee = {
    firstName: array[0], 
    familyName: array[1], 
    title: array[2], 
    payPerHour: array[3],
    timeInEvents: [], 
    timeOutEvents: []

  }
//console.log(testEmployee)
return testEmployee
 } 

 function createEmployeeRecords(arrays){
  let employeeRecords = arrays
  let newArray = employeeRecords.map(createEmployeeRecord)
  return newArray
 }

 function createTimeInEvent(recordObj, dateStamp){
  let newArr = dateStamp.split(' ')
  let newEvent = {
    type: "TimeIn",
    hour: parseInt(newArr[1], 10),
    date: newArr[0]
  }
  recordObj.timeInEvents.push(newEvent)
  return recordObj
   
 }


 function createTimeOutEvent(recordObj, dateStamp){
  let newArr = dateStamp.split(' ')
  let newEvent = {
    type: "TimeOut",
    hour: parseInt(newArr[1], 10),
    date: newArr[0]
  }
  recordObj.timeOutEvents.push(newEvent)
  return recordObj
}

function hoursWorkedOnDate(employeeObj, date){
  // let timeInHours = employeeObj.timeInEvents[0].hour
  // let timeInDate = employeeObj.timeInEvents[0].date
  // let timeOutHours = employeeObj.timeOutEvents[0].hour
  // let timeOutDate = employeeObj.timeOutEvents[0].date
  let timeInHours = employeeObj.timeInEvents.find(days => days.date === date)
  let timeOutHours = employeeObj.timeOutEvents.find(days => days.date === date)
  //console.log(timeInHours)
   return (timeOutHours.hour - timeInHours.hour) / 100
  //console.log(timeInHours)
}


function wagesEarnedOnDate(employeeObj, date){
let payRate = employeeObj.payPerHour
// payRate * 
return payRate * hoursWorkedOnDate(employeeObj, date)
}


function allWagesFor(employeeObj){
  //console.log(employeeObj)
  let daysWorked = employeeObj.timeInEvents.map(timeInObj => timeInObj.date)
  //console.log(daysWorked)
  let payOwed = daysWorked.reduce((acc, date) => {
   return acc + wagesEarnedOnDate(employeeObj, date)
   
  } ,0 )
   return payOwed 
}

function calculatePayroll(employeeArr){
 //console.log('a str', employeeObj)
  //let employees = employeeObj.map(employee => employee.title)
  //console.log(employees)
  let grandTotal = employeeArr.reduce((acc, current) => {
    //console.log(current)
   return acc + allWagesFor(current)
   
  } ,0 )
   return grandTotal 
}