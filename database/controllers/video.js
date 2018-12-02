import mongoose from 'mongoose';
import Video from '../models/video';

const { ObjectId } = mongoose.Types;
// ObjectId

const getVideoById = id => new Promise((resolve, reject) => {
  Video.findById({ _id: ObjectId(id) }, (err, response) => {
    if (err) return reject(err);
    return resolve(response);
  });
});

export default getVideoById;
