import express from 'express'
/*
import path from 'path'
import { fileURLToPath} from 'url'
*/
import GiftsController from '../controllers/gifts.js'
import giftData from '../data/gift.js'

//Convert a file URL to a file path
//import.meta.url: a special property that contains the URL of the current module file
//const __filename = fileURLToPath(import.meta.url);

//const __dirname = path.dirname(__filename)

const router = express.Router();

router.get('/', GiftsController.getGifts);

//router.get('/:giftId', (req, res) => {
    //res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'));
router.get('/:giftId', GiftsController.getGiftById);
//})

//POST
router.post('/', GiftsController.createGift);

//DELETE
router.delete('/:id', GiftsController.deleteGift);

//PATCH
router.patch('/:id', GiftsController.updateGift);

export default router;
