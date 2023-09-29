const router = require('express').Router();

const { bookRegister,bookGet,bookUpdate,bookRemove } = require('../../controller/book-router');

router.post('/book/register',bookRegister);
router.get('/book/get',bookGet);
router.put('/book/update/:id',bookUpdate);
router.delete('/book/remove/:id',bookRemove);


module.exports = router;