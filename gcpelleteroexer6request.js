import needle from 'needle';

//post request to save student 1
needle.post('http://localhost:3000/save-student', {
    stdnum:"2001",
    fname:"Mary Jane",
    lname:"Watson",
    age: "23",
}, (err,res) => {
    if (err) {
        console.error('ERROR', err);
    } else {
        console.log(res.body);
    }
});

//post request to save student 2
needle.post('http://localhost:3000/save-student', {
    stdnum:"2002",
    fname:"Lenard",
    lname:"Mazo",
    age: "22",
}, (err,res) => {
    if (err) {
        console.error('ERROR', err);
    } else {
        console.log(res.body);
    }
});

//post request to save student 3
needle.post('http://localhost:3000/save-student', {
    stdnum:"2003",
    fname:"Steve",
    lname:"Rogers",
    age: "21",
}, (err,res) => {
    if (err) {
        console.error('ERROR', err);
    } else {
        console.log(res.body);
    }
});

//post request to save student 4
needle.post('http://localhost:3000/save-student', {
    stdnum:"2000",
    fname:"Kyle",
    lname:"Ford",
    age: "24",
}, (err,res) => {
    if (err) {
        console.error('ERROR', err);
    } else {
        console.log(res.body);
    }
});

//post request to save student 5
needle.post('http://localhost:3000/save-student', {
    stdnum:"2002",
    fname:"Grace",
    lname:"Adams",
    age: "22",
}, (err,res) => {
    if (err) {
        console.error('ERROR', err);
    } else {
        console.log(res.body);
    }
});

//post request to update students information
needle.post('http://localhost:3000/update', {
    fname:"Mary Jane",
    lname: "Parker",
},(err, res) => {
    if(err) {
        console.error('ERROR', err);
    } else {
        console.log(res.body);
    }
});

//post request to remove a user by student number
// needle.post('http://localhost:3000/remove-user', {
//     stdnum:"2003",
// },(err, res) => {
//     if(err) {
//         console.error('ERROR', err);
//     } else {
//         console.log(res.body);
//     }
// });

//post request to remove all user 
// needle.post('http://localhost:3000/remove-all-user', (err,res) => {
//     if(err) {
//         console.error('ERROR', err);
//     } else {
//         console.log(res.body);
//     }
// });

//get request to retrieve a user by student number
needle.get('http://localhost:3000/user?stdnum="8051495845"', (err,res) => {
    if(err) {
        console.error('ERROR', err);
    } else {
        console.log(res.body);
    }
});

//get request to retrieve all members
needle.get('http://localhost:3000/members ', (err,res) => {
    if(err) {
        console.error('ERROR', err);
    } else {
        console.log(res.body);
    }
});