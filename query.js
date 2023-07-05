// Find all the topics and tasks which are thought in the month of October
db.topics.aggregate([{
    $lookup: {
        from: "tasks",
        localField: "topicid",
        foreignField: "topicid",
        as: "taskinfo",
    },
},
{
    $match: {
        $and: [
                
                    { topic_date: { $gt: new Date("30-sep-2020"),$lt: new Date("1-nov-2020")  } },
                    { "taskinfo.due_date": { $gt: new Date("30-sep-2020"),$lt: new Date("1-nov-2020") } },
                     
        ],
    },
},
]);





//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
   
    db.comapnydrives.find({drive_date:{ $gt: new Date("15-oct-2020"), $lt: new Date("31-oct-2020")}})


///Find all the company drives and students who are appeared for the placement.
db.topics.aggregate([{
    $lookup: {
        from: "companydrives",
        localField: "userid",
        foreignField: "userid" ,
        as: "userinfo",
    },
},
{
    $project:{
        _id:1.0,
        "userinfo.name": 1.0,
        "company": 1.0,
        "drive_date": 1.0,
        "userinfo.email": 1.0,
        "userinfo.userid": 1.0, 
    }

}])

/*Find the number of problems solved by the user in codekata*/

db.codekata.aggregate([{
    $lookup: {
        from: "users",
        localField: "userid",
        foreignField: "userid",
        as: "userinfo",
    },
},
{
    $project: {
        _id: 0,
        userid: 1,
        problems: 1,
        "userinfo.name": 1,
    },
},
]);

/*Find all the mentors with who has the mentee's count more than 15*/

db.users.aggregate([{
    $lookup: {
        from: "mentors",
        localField: "mentorid",
        foreignField: "mentorid",
        as: "mentorInfo",
    },
},
{
    $group: {
        _id: {
            mentorid: "$mentorInfo.mentorid",
            mentorname: "$mentorInfo.mentorname",
        },
        mentee_count: { $sum: 1 },
    },
},
{ $match: { mentee_count: { $gt: 15 } } },
]);

/*Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020*/
db.attendance.aggregate([{
    $lookup: {
        from: "topics",
        localField: "topicid",
        foreignField: "topicid",
        as: "topics",
    },
},
{
    $lookup: {
        from: "tasks",
        localField: "topicid",
        foreignField: "topicid",
        as: "tasks",
    },
},
{ $match: { $and: [{ attended: false }, { "tasks.submitted": false }] } },
{
    $match: {
        $and:[
                
                    { "topics.topic_date": { $gte: new Date("15-oct-2020") ,$lte: new Date("31-oct-2020")}  },
                    { "tasks.due_date": { $gte: new Date("15-oct-2020"),$lte: new Date("31-oct-2020")  } },
          
        ],
            
    },   
},
{
    $count: "No_of_students_absent",
},
]);