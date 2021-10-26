const router = require('express').Router();
const studentCtrl = require('../controllers/student.crtl');

router.get('/', studentCtrl.getStudent);

router.post('/', studentCtrl.addStudent)

router.patch('/:id', studentCtrl.editStudent)

router.delete('/:id', studentCtrl.deleteStudent)

module.exports = router;