// 1. You are working for a state university and are tasked with writing software to determine the academic standing and honors recognition of students. The rules are:

// // Standings:
//
// - 2.0 or higher - good standing
// - less than 2.0 - academic probation
//
// Honors recognitions:
//
// - 3.40 to 3.59 - cum laude
// - 3.60 t0 3.79 - magna cum laude
// - 3.80 to 4.00 or higher - summa cum laude
//
// Given a GPA, your job is to print whether or not the student is in good standing. If the student has earned honors recognitions print those out too.
//
// For example:
//
// - A GPA of 2.5 prints "Student is in good standing".
// - A GPA of 1.9 prints "Student is on probation".
// - A GPA of 3.6 prints "Student is in good standing with magna cum laude".

function goodStandingChecker (gpa) {
  if (gpa >= 3.8) {
    return ('Student is in good standing with summa cum laude.')
  } else if (gpa >= 3.6) {
    return ('Student is in good standing with magna cum laude.')
  } else if (gpa >= 3.4) {
    return ('Student is in good standing with cum laude.')
  } else if (gpa >= 2.0) {
    return ('Student is in good standing.')
  } else {
    return ('Student is on probation.')
  }
}

goodStandingChecker(3.9)

// 2. Loop from 0 to 99 and output the numbers that are multiples of 3. Do not use conditional statements. IE: 0, 3, 6, 9, 12, etc...
for (var i = 0; i <= 99; i += 3) {
  console.log(i)
}

// 3. In programming, dates are calculated by counting the number of milliseconds since the epoch. The epoch was midnight January 1st, 1970. The number of milliseconds since the epoch is called a timestamp. The following JavaScript code will get the current timestamp:

// new Date().valueOf()
//
// This returns something like "1482247094153" which stands for "Tue Dec 20 2016 09:44:53".
//
// The new Date().valueOf() code can be treated like any other number. EG: new Date().valueOf() / 1000000 will divide the timestamp by 1,000,000.
//
// Your job is to write a loop that outputs the timestamp continuously until the timestamp is cleanly divisible by 100. In other words, the time will be printed continuously until we find a time that has milliseconds of 00.

function timeStamp () {
  for (var i = new Date().valueOf(); ; i++) {
    console.log(i)
    if ((i % 100 === 0)) {
      break
    }
  }
}

timeStamp()

// Leap years are defined as being a year that is divisible by 4, except for years which are divisible by 100 and not divisible 400.
//
// For example:
//
// * 2004 is divisible by 4, and is not divisible by 100, so it's a leap year.
// * 2000 is divisible by 4, 100 and 400, so it's a leap year.
// * 1700 is divisible by 4 and 100, but not 400, so it's not a leap year.
//
// You will output all of the leap years from the year 0 to 2020 by doing the following steps:
//
// 1. Write out pseudocode that describes the process you would need to go through to complete this requirement.
// 2. Translate the pseudocode into real JavaScript that accomplishes the requirement.

/*
pseudocode:
1. I need to creat a loop that goes from 0 to 2020.
2. Then I will create if statements for each condition of a leap year.
3. Lastly I will print out the year and if it is a leap year or not. */

for (var i = 0; i <= 2020; i++) {
  if (i % 4 === 0 && i % 100 !== 0) {
    console.log(i + ' It is a Leap Year!')
  } else if (i % 4 === 0 && i % 100 === 0 && i % 400 === 0) {
    console.log(i + ' It is a Leap Year!')
  } else {
    console.log(i + ' It is not a Leap Year.')
  }
}

// 5. A result variable has been declared for you, as well as a function named half. Call the half function with the number 100 and store the result in the result variable.

var result

function half (number) {
  return number / 2
}

var result = half(100)
console.log(result)

// 6.Define a function called difference, with two parameters, that returns the difference between two values.
// define the function here

function difference (num1, num2) {
  return num1 - num2
}

var result = difference(385, 142)
console.log(result)
