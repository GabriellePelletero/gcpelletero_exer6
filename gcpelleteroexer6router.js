//routes
//is where the endpoints of the web application are defined


import{saveStudent,updateStudent,removeUser,removeAllUsers,user,members} from './gcpelleteroexer6controller.js';

const router = (app) => {
    app.post('/save-student',saveStudent);
    app.post('/update', updateStudent);
    app.post('/remove-user', removeUser);
    app.post('/remove-all-user', removeAllUsers);
    app.get('/user', user);
    app.get('/members', members); 
}

export default router;