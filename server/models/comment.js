import mongoose from 'mongoose';

let Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  image: String,
  title: String,
  text: String
});

export default mongoose.model('Review', Schema)
