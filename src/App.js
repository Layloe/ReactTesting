import React, { useState } from "react";
import TaskStats from "./components/TaskStats";
import InputForm from "./components/InputForm";
import TaskItem from "./components/TaskItem";

function ToDoList() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (taskName) => {
    if (taskName !== "") {
      const newTask = {
        id: Math.random(),
        taskName: taskName,
        isCompleted: false,
        timeOfDay: getTimeOfDay(new Date().toISOString())
      };
      setTaskList([...taskList, newTask]);
    }
  };

  const completeTask = (id) => {
    const updatedTasks = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = taskList.filter((task) => task.id !== id);
    setTaskList(filteredTasks);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h1 className="mb-0">Blood Pressure</h1>
            </div>
            <div className="card-body">
              <InputForm addTask={addTask} />
              <hr />
              <ul className="list-group">
                {taskList.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                    timeOfDay={getTimeOfDay}
                  />
                ))}
              </ul>
              <hr />
              <TaskStats tasks={taskList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
// const assert = require("assert");
//Installed npm i -g ts-node

/**
 * This is a series of exercises to practice composing functions.
 * The idea is, rather than doing everything in one big function,
 * we can break out the different behaviors we need into separate functions.
 */

/**
 * Task 1:
 * Write a function that gets the day of the week from a date string
 */

function getDayOfWeek(dateString) {
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const date = new Date(dateString);
  const dayOfWeekIndex = date.getUTCDay();
  return daysOfWeek[dayOfWeekIndex]
}
  // hint: you can create a Date with "new Date(dateString)"
  // hint: you can use the `getUTCDay()` method to get a number corresponding to the week day,
  // for example 0 = sunday, 1 = monday, etc
  // TODO


// assert.strictEqual(getDayOfWeek("2023-01-18T03:00:00Z"), "wednesday");
// assert.strictEqual(getDayOfWeek("2023-01-17T03:00:00Z"), "tuesday");
// assert.strictEqual(getDayOfWeek("2023-01-19T13:00:00Z"), "thursday");

function getTimeOfDay(dateString) {

    const myDate = new Date(dateString),
    hours = myDate.getUTCHours()
    if (hours < 12) {
         return "morning"
    } else if (hours < 18 ){
        return "afternoon"
    }else  {
        return "evening"
    }
  // hint: Date objects can return the hours as a number, e.g.
  // new Date("2023-01-09T19:03:04Z").getUTCHours()() => 19
  // new Date("2023-01-09T07:03:04Z").getUTCHours()() => 7
  // Try a simple categorization where before 12 is "morning", from 12-6 is "afternoon", and after 6 is "evening"
  // Don't forget -- hours will be in 24 hour time! (i.e. 17 == 5pm)
}

// assert.strictEqual(getTimeOfDay("2023-01-18T03:00:00Z"), "morning");
// assert.strictEqual(getTimeOfDay("2023-01-17T13:00:00Z"), "afternoon");
// assert.strictEqual(getTimeOfDay("2023-01-19T23:00:00Z"), "evening");

const data0 = [
    { date: "2023-01-05T01:01:01Z" },
    { date: "2023-01-05T12:03:04Z" },
    { date: "2023-01-06T13:01:01Z" },
    { date: "2023-01-06T22:03:04Z" },
    { date: "2023-01-07T01:01:01Z" },
    { date: "2023-01-07T22:03:04Z" },
    { date: "2023-01-08T01:01:01Z" },
    { date: "2023-01-08T12:03:04Z" },
    { date: "2023-01-09T11:01:01Z" },
    { date: "2023-01-09T19:03:04Z" },
  ];
  
  // this is what the data should look like after going through our "assignDayOfWeek" function
  const data1 = [
    { date: "2023-01-05T01:01:01Z", dayOfWeek: "thursday" },
    { date: "2023-01-05T12:03:04Z", dayOfWeek: "thursday" },
    { date: "2023-01-06T13:01:01Z", dayOfWeek: "friday" },
    { date: "2023-01-06T22:03:04Z", dayOfWeek: "friday" },
    { date: "2023-01-07T01:01:01Z", dayOfWeek: "saturday" },
    { date: "2023-01-07T22:03:04Z", dayOfWeek: "saturday" },
    { date: "2023-01-08T01:01:01Z", dayOfWeek: "sunday" },
    { date: "2023-01-08T12:03:04Z", dayOfWeek: "sunday" },
    { date: "2023-01-09T11:01:01Z", dayOfWeek: "monday" },
    { date: "2023-01-09T19:03:04Z", dayOfWeek: "monday" },
  ];
  
  function assignDayOfWeek(list) {

      const dateProp =  list.map((value) => ({
          // { date: "2023-01-05T01:01:01Z" }, Value is going to look like this 
      
               date: value.date,
               dayOfWeek: getDayOfWeek([value.date])
            
         }))
       
           return dateProp
  }
  
  // assert.deepStrictEqual(assignDayOfWeek(data0), data1);
  
  
  
  // this is what the data should look like after going through our "assignTimeOfDay" function
  const data2 = [
    { date: "2023-01-05T01:01:01Z", dayOfWeek: "thursday", timeOfDay: "morning" },
    { date: "2023-01-05T12:03:04Z", dayOfWeek: "thursday", timeOfDay: "afternoon" },
    { date: "2023-01-06T13:01:01Z", dayOfWeek: "friday", timeOfDay: "afternoon" },
    { date: "2023-01-06T22:03:04Z", dayOfWeek: "friday", timeOfDay: "evening" },
    { date: "2023-01-07T01:01:01Z", dayOfWeek: "saturday", timeOfDay: "morning" },
    { date: "2023-01-07T22:03:04Z", dayOfWeek: "saturday", timeOfDay: "evening" },
    { date: "2023-01-08T01:01:01Z", dayOfWeek: "sunday", timeOfDay: "morning" },
    { date: "2023-01-08T12:03:04Z", dayOfWeek: "sunday", timeOfDay: "afternoon" },
    { date: "2023-01-09T11:01:01Z", dayOfWeek: "monday", timeOfDay: "morning" },
    { date: "2023-01-09T19:03:04Z", dayOfWeek: "monday", timeOfDay: "evening" },
  ];
  
  function assignTimeOfDay(list) {
  
      const timeOf =  list.map((value) => ({
          // { date: "2023-01-05T01:01:01Z" }, Value is going to look like this 
      
               date: value.date,
               dayOfWeek: getDayOfWeek([value.date]),
               timeOfDay: getTimeOfDay([value.date])
            
         }))
       
           return timeOf
    // hint: use the "getTimeOfDay" function you already wrote
  }
  
//   assert.deepStrictEqual(assignTimeOfDay(data1), data2);
  
//   /**
//    * Task 5:
//    * Group the list elements by day.
//    * Note: you can assume that your list is already sorted chronologically
//    */
  
//   // this is what the data should look like after going through our "groupByDay" function
//   const data3 = [
//     [
//       { date: "2023-01-05T01:01:01Z", dayOfWeek: "thursday", timeOfDay: "morning" },
//       { date: "2023-01-05T12:03:04Z", dayOfWeek: "thursday", timeOfDay: "afternoon" },
//     ],
//     [
//       { date: "2023-01-06T13:01:01Z", dayOfWeek: "friday", timeOfDay: "afternoon" },
//       { date: "2023-01-06T22:03:04Z", dayOfWeek: "friday", timeOfDay: "evening" },
//     ],
//     [
//       { date: "2023-01-07T01:01:01Z", dayOfWeek: "saturday", timeOfDay: "morning" },
//       { date: "2023-01-07T22:03:04Z", dayOfWeek: "saturday", timeOfDay: "evening" },
//     ],
//     [
//       { date: "2023-01-08T01:01:01Z", dayOfWeek: "sunday", timeOfDay: "morning" },
//       { date: "2023-01-08T12:03:04Z", dayOfWeek: "sunday", timeOfDay: "afternoon" },
//     ],
//     [
//       { date: "2023-01-09T11:01:01Z", dayOfWeek: "monday", timeOfDay: "morning" },
//       { date: "2023-01-09T19:03:04Z", dayOfWeek: "monday", timeOfDay: "evening" },
//     ]
//   ];
  
//   function groupByDay(list) {
  
  
//     let groupsSplit = []
//   // Declare variable to hold the group data 
//     let group = []
//   // loop throught the array
//     for(let i = 0; i < list.length; i++){
//   // Get the current item
//       const  item = list[i]
//   // If the item matches the group add it to the group otherwise start a new group
//       if (item.dayOfWeek == group[0]?.dayOfWeek || group.length == 0) {
//   // Pushing item to to group arr
//         group.push(item)
  
      
//       }else {
//   //Push item to groupSplit arr    
//         groupsSplit.push(group)
//   //Item inside the group in this case the dayOfTheWeek group/arr
//         group = [item]
//       }
      
//     }
//     // Once a group has an item push to groupSplit arr   
//     if (group.length > 0) {
//       groupsSplit.push(group)
//     }
//     return groupsSplit
  
//   }
//     // console.log(groupByDay(data2))
    
//     // hint: use the "dayOfWeek" property to group the data
//   // console.log(groupByDay(data2))
  
//   assert.deepStrictEqual(groupByDay(data2), data3);
  
//   /**
//    * Task 5:
//    * Group by week.
//    * Assuming that your list is in chronological order (which it is),
//    * group elements by week, where Saturday is the last day of the week, and Sunday is the first day of the week.
//    */
  
//   const data4 = [
//     // week 1
//     [
//       [
//         { date: "2023-01-05T01:01:01Z", dayOfWeek: "thursday", timeOfDay: "morning" },
//         { date: "2023-01-05T12:03:04Z", dayOfWeek: "thursday", timeOfDay: "afternoon" },
//       ],
//       [
//         { date: "2023-01-06T13:01:01Z", dayOfWeek: "friday", timeOfDay: "afternoon" },
//         { date: "2023-01-06T22:03:04Z", dayOfWeek: "friday", timeOfDay: "evening" },
//       ],
//       [
//         { date: "2023-01-07T01:01:01Z", dayOfWeek: "saturday", timeOfDay: "morning" },
//         { date: "2023-01-07T22:03:04Z", dayOfWeek: "saturday", timeOfDay: "evening" },
//       ]
//     ],
//     // week 2 (because these dates come after week 1)
//     [
//       [
//         { date: "2023-01-08T01:01:01Z", dayOfWeek: "sunday", timeOfDay: "morning" },
//         { date: "2023-01-08T12:03:04Z", dayOfWeek: "sunday", timeOfDay: "afternoon" },
//       ],
//       [
//         { date: "2023-01-09T11:01:01Z", dayOfWeek: "monday", timeOfDay: "morning" },
//         { date: "2023-01-09T19:03:04Z", dayOfWeek: "monday", timeOfDay: "evening" },
//       ]
//     ],
//   ];

  
//   function groupByWeek(list: typeof data3) {
//     //First group by day then find a way to make Sunday the start of a new week. Hover over forEach
//     //Use parts of this loop but instead of it grouping to days group to week
//     // if (item.dayOfWeek == group[0]?.dayOfWeek || group.length == 0)
//     // TODO
//     const weeks = [];

//   let currentWeek = [];

//   for (let i = 0; i < list.length; i++) {
//     const currentDate = new Date(list[i][0].date); //! Make note before and after
//     //Was getting an output of a nested array with objects instead of nested arrays seperated by week arr. We console.logged (JSON.stringify(groupByWeek(data3), null, 2)) to help read the output
//     // The function was reading each separate day as an individual array, and Eric helped me zero in on the fact that I needed to access the index[0] in order to get to the date property inside the array.
//     // To locate where the error was coming from, we changed the argument inside the function to 'list: typeof data3'
//     // Once TS flagged the problem, we were able to fix it by accessing the property inside the array.
//     // Ran the assert and BOOM! it worked.
//     const dayOfWeek = currentDate.getUTCDay();

//     if (dayOfWeek === 0 && currentWeek.length > 0 ) {
//       // End of the week
//       weeks.push(currentWeek);
//       currentWeek = [];
//     }

//     currentWeek.push(list[i]);

//     if (dayOfWeek === 6 || i === list.length - 1) {
//       // Saturday or last element of the list
//       weeks.push(currentWeek);
//       currentWeek = [];
//     }
//   }
//   return weeks;
// }
//     // console.log(JSON.stringify(groupByWeek(data3), null, 2))

//   assert.deepStrictEqual(groupByWeek(data3), data4);
  
//   /**
//    * Task 6: Put it all together!
//    * Review how your data looks when passing "real" data into a function which uses all the previous functions you wrote
//    */
  
//   function organizeData(list) {
//     // const listWithDayOfWeek = assignDayOfWeek(list);
//     // const listWithTimeOfDay = assignTimeOfDay(listWithDayOfWeek);
//     // const groupedByDay = groupByDay(listWithTimeOfDay);
//     // const groupedByWeek = groupByWeek(groupedByDay);
//     // return groupedByWeek;
//     // Note: this could be re-written like this:
//     return groupByWeek(groupByDay(assignTimeOfDay(assignDayOfWeek(list))))
//   }
  
//   const realData = [
//     { id: 1, date: "2023-01-06T01:01:01Z", textinput: "test 1", numinput: 1 },
//     { id: 2, date: "2023-01-06T12:03:04Z", textinput: "test 2", numinput: 2 },
//     { id: 3, date: "2023-01-06T19:35:32Z", textinput: "test 3", numinput: 3 },
//     { id: 4, date: "2023-01-07T01:01:01Z", textinput: "test 4", numinput: 4 },
//     { id: 5, date: "2023-01-07T12:03:04Z", textinput: "test 5", numinput: 5 },
//     { id: 6, date: "2023-01-07T19:35:32Z", textinput: "test 6", numinput: 6 },
//     { id: 7, date: "2023-01-08T01:01:01Z", textinput: "test 7", numinput: 7 },
//     { id: 8, date: "2023-01-08T12:03:04Z", textinput: "test 8", numinput: 8 },
//     { id: 9, date: "2023-01-08T19:35:32Z", textinput: "test 9", numinput: 9 },
//     { id: 10, date: "2023-01-09T01:01:01Z", textinput: "test 10", numinput: 10 },
//     { id: 11, date: "2023-01-09T12:03:04Z", textinput: "test 11", numinput: 11 },
//     { id: 12, date: "2023-01-09T19:35:32Z", textinput: "test 12", numinput: 12 },
//     { id: 13, date: "2023-01-10T01:01:01Z", textinput: "test 13", numinput: 13 },
//     { id: 14, date: "2023-01-10T12:03:04Z", textinput: "test 14", numinput: 14 },
//     { id: 15, date: "2023-01-10T19:35:32Z", textinput: "test 15", numinput: 15 },
//     { id: 16, date: "2023-01-11T01:01:01Z", textinput: "test 16", numinput: 16 },
//     { id: 17, date: "2023-01-11T12:03:04Z", textinput: "test 17", numinput: 17 },
//     { id: 18, date: "2023-01-11T19:35:32Z", textinput: "test 18", numinput: 18 },
//     { id: 19, date: "2023-01-12T01:01:01Z", textinput: "test 19", numinput: 19 },
//     { id: 20, date: "2023-01-12T12:03:04Z", textinput: "test 20", numinput: 20 },
//     { id: 21, date: "2023-01-12T19:35:32Z", textinput: "test 21", numinput: 21 },
//     { id: 22, date: "2023-01-13T01:01:01Z", textinput: "test 22", numinput: 22 },
//     { id: 23, date: "2023-01-13T12:03:04Z", textinput: "test 23", numinput: 23 },
//     { id: 24, date: "2023-01-13T19:35:32Z", textinput: "test 24", numinput: 24 },
//     { id: 25, date: "2023-01-14T01:01:01Z", textinput: "test 25", numinput: 25 },
//     { id: 26, date: "2023-01-14T12:03:04Z", textinput: "test 26", numinput: 26 },
//     { id: 27, date: "2023-01-14T19:35:32Z", textinput: "test 27", numinput: 27 },
//     { id: 28, date: "2023-01-15T01:01:01Z", textinput: "test 28", numinput: 28 },
//     { id: 29, date: "2023-01-15T12:03:04Z", textinput: "test 29", numinput: 29 },
//     { id: 30, date: "2023-01-15T19:35:32Z", textinput: "test 30", numinput: 30 },
//     { id: 31, date: "2023-01-16T01:01:01Z", textinput: "test 31", numinput: 31 },
//     { id: 32, date: "2023-01-16T12:03:04Z", textinput: "test 32", numinput: 32 },
//     { id: 33, date: "2023-01-16T19:35:32Z", textinput: "test 33", numinput: 33 },
//   ];
  
//   console.log(JSON.stringify(organizeData(realData), null, 2))