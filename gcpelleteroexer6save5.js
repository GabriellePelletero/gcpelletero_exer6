import needle from 'needle';

needle.post('http://localhost:3000/saveStudent', {
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

needle.post('http://localhost:3000/saveStudent', {
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


needle.post('http://localhost:3000/saveStudent', {
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

needle.post('http://localhost:3000/saveStudent', {
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

needle.post('http://localhost:3000/saveStudent', {
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

