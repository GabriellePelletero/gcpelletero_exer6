import needle from 'needle';

needle.post('http://localhost:3000/remove-user', {
    stdnum:"2003",
},(err, res) => {
    if(err) {
        console.error('ERROR', err);
    } else {
        console.log(res.body);
    }
});