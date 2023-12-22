import express from 'express';
import favorateModel from './favorateModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get favorate details
router.get('/', asyncHandler(async (req, res) => {
    const movie = await favorateModel.find()
    // console.log(req.query, 'res', all)
    // const movie = await favorateModel.findByUserName(req.query.username)
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));
// Update a user
router.put('/:username', async (req, res) => {
    if (req.body.username) delete req.body.username;
    console.log(req.params, req.body.favorite)
    const result = await favorateModel.replaceOne({
        username: req.params.username,
    }, {username: req.params.username,favorate:req.body.favorite});
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'Favorate Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update Favorate' });
    }
});
export default router;