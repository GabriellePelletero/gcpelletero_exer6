import needle from 'needle';

needle.get('http://localhost:3000/members ', (err,res) => {
    if(err) {
        console.error('ERROR', err);
    } else {
        console.log(res.body);
    }
});