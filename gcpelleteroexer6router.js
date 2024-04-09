//routes
//is where the endpoints of the web application are defined

import express from 'express';
const router = express.Router();
import studentController from './gcpelleteroexer6controller.js';

router.post('/save-student', studentController.saveStudent);
router.post('/update', studentController.updateStudent);
router.post('/remove-user', studentController.removeUser);
router.post('/remove-all-user', studentController.removeAllUsers);
router.get('/user', studentController.getUser);
router.get('/members', studentController.getMembers);

module.exports = router;