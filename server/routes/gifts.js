import express from 'express'
import path from 'path'
import { fileURLToPath} from 'url'
import giftData from '../data/gift.js'

//Convert a file URL to a file path
//import.meta.url: a special property that contains the URL of the current module file
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename)

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(giftData)
})

router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'));
})

export default router;
