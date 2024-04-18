import needle from 'needle';


needle.post('http://localhost:3000/remove-all-user', {},(err,res) => {
    if(err) {
        console.error('ERROR', err);
    } else {
        console.log(res.body);
    }
});

