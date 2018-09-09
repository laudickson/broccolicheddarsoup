import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Comment from './models/comment';

const API_PORT = getSecret('local_api_port') || 3001;
const app = express();
const router = express.Router();

mongoose.connect(getSecret('dbUri'), { useNewUrlParser: true })
  .then(connection => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log(error.message)
  })

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/', (request, response) => {
  response.json({ message: 'Hello, World!' });
});

router.get('/comments', (request, response) => {
  Comment.find((error, comments) => {
    if (error) return response.json({ success: false, error: error });
    return response.json({ success: true, data: comments });
  });
});

router.post('/comments', (request, response) => {
  const comment = new Comment();
  const { author, text } = request.body;
  if (!author || !text) {
    return response.json({
      success: false,
      error: 'You must provide an author and comment'
    });
  }
  comment.author = author;
  comment.text = text;
  comment.save(error => {
    if (error) return response.json({ success: false, error: error });
    return response.json({ success: true });
  });
});

router.put('/comments/:commentId', (request, response) => {
  console.log(request.params);
  const { commentId } = request.params;
  if (!commentId) {
    return response.json({ success: false, error: 'No comment id provided' });
  }
  Comment.findById(commentId, (error, comment) => {
    if (error) return response.json({ success: false, error });
    const { author, text } = request.body;
    if (author) comment.author = author;
    if (text) comment.text = text;
    comment.save(error => {
      if (error) return response.json({ success: false, error });
      return response.json({ success: true });
    });
  });
});

router.delete('/comments/:commentId', (request, response) => {
  const { commentId } = request.params;
  if (!commentId) {
    return response.json({ success: false, error: 'No comment id provided' });
  }
  Comment.remove({ _id: commentId }, (error, comment) => {
    if (error) return response.json({ success: false, error });
    return response.json({ success: true });
  });
});

app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
