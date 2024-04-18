import needle from 'needle';


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