import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import bb from 'express-busboy';
import SourceMapSupport from 'source-map-support';

import reviewRoutes from './routes/review.server.route';

const app = express();

bb.extend(app);

app.use(function(request, response, next){
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;

SourceMapSupport.install();

app.use('/api', reviewRoutes);

app.get('/', (request, response) => {
  return response.end('API is alive!!!!!');
});

app.use((request, response, next) => {
  response.status(404).send('you have hit a page that does not quite exist here yet, my friend.');
});

app.listen(port, () => {
  console.log('App Server Listening at ${port}');
});
