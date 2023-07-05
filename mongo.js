// use Zenclass

// use users



db.users.insertMany([{
    "userId": "1",
    "userName" : "Pradeepa",
    "userMail" : "pradee@gmail.com",
    "mentorId" : "1"
},
{
    "userId": "2",
    "userName" : "Bharathi",
    "userMail" : "bharathi@gmail.com",
    "mentorId" : "1"
},
{
    "userId": "1",
    "userName" : "Dharshini",
    "userMail" : "dhajju@gmail.com",
    "mentorId" : "2"
},
{
    "userId": "1",
    "userName" : "Srinithi",
    "userMail" : "sri@gmail.com",
    "mentorId" : "2"
},
{
    "userId": "1",
    "userName" : "Nivedhaa",
    "userMail" : "nive@gmail.com",
    "mentorId" : "3"
},
])

////////////////////////////CODEKATA///////////////////////////////////



db.codeKata.insertMany([{
    "userId" :"1",
    "completion" : "50%"
},
{
    "userId" :"2",
    "completion" : "66%"
},
{
    "userId" :"3",
    "completion" : "45%"
},
{
    "userId" :"4",
    "completion" : "83%"
},
{
    "userId" :"1",
    "completion" : "50%"
}]
)

//////////////////////////////////////attendance///////////////////////////////////



db.attendance.insertMany([{
    
    "userId" :"1",
    "TopicId" : " 1",
    "attended" : "True"

},
{
    "userid": "2",
    "topicid": "2",
    "attended": "true",
},
{
    "userid": "3",
    "topicid": "3",
    "attended": "false",
},
{
    "userid": "4",
    "topicid": "4",
    "attended": "false",
},
{
    "userid": "5",
    "topicid": "5",
    "attended": "false",
},
]
)

////////////////////////////TOPICS//////////////////////////////////


db.topics.insertMany([{
    topicid: 1,
    topic: "html",
    topic_date: "4-oct-2020",
},
{
    topicid: 2,
    topic: "css",
    topic_date: "10-oct-2020",
},
{
    topicid: 3,
    topic: "Javascript",
    topic_date: "15-oct-2020",
},
{
    topicid: 4,
    topic: "React",
    topic_date: "20-oct-2020",
},
{
    topicid: 5,
    topic: "NodeJs",
    topic_date: "25-oct-2020",
},
]);

//////////////////////////////////////Tasks/////////////////////////////
db.tasks.insertMany([{
    taskid: 1,
    topicid: 1,
    userid: 1,
    task: "html task",
    due_date: new Date("4-oct-2020"),
    submitted: true,
},
{
    taskid: 2,
    topicid: 2,
    userid: 2,
    task: "css task",
    due_date: new Date("10-oct-2020"),
    submitted: true,
},
{
    taskid: 3,
    topicid: 3,
    userid: 3,
    task: "Javascript task",
    due_date: new Date("15-oct-2020"),
    submitted: false,
},
{
    taskid: 4,
    topicid: 4,
    userid: 4,
    task: "React task",
    due_date: new Date("20-oct-2020"),
    submitted: false,
},
{
    taskid: 5,
    topicid: 5,
    userid: 5,
    task: "Node task",
    due_date: new Date("25-oct-2020"),
    submitted: false,
},
]);;

/////////////////////mentors/////////////////////////////
db.mentors.insertMany([{
    "mentorid": "1",
    "mentorname": "Monica",
    "mentor_email": "monica@gmail.com",
},
{
    "mentorid": 2,
    "mentorname": "Ross",
    "mentor_email": "ross@gmail.com",
},
{
    "mentorid": 3,
    'mentorname': "Chandler",
    "mentor_email": "chandler@gmail.com",
},
{
    'mentorid': 4,
    "mentorname": "Joey",
    "mentor_email": "joey@gmail.com",
},
{
    'mentorid': 5,
    'mentorname': "Rachel",
    "mentor_email": "rachel@gmail.com",
},
]);

/////////////////////////////Company Drivers//////////////////////////////////////


db.comapnydrives.insertMany([{
    "userid": "1",
    "drive_date": new Date("10-oct-2020"),
    "company": "Google",
},
{
    "userid": "1",
    "drive_date": new Date("15-oct-2020"),
    "company": "Amazon",
},
{
    "userid": "2",
    "drive_date": new Date("20-oct-2020"),
    "company": "SAP labs",
},
{
    "userid": "3",
    "drive_date": new Date("25-oct-2020"),
    "company": "Mac App studio",
},
{
    "userid": 4,
    "drive_date": new Date("27-oct-2020"),
    "company": "Freshworks",
},
])