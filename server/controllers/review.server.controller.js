import mongoose from 'mongoose';
import Review from '../models/review.server.model';

export const getReview = (request, response) => {
  Review.find().exec((error, reviews) => {
    if(error){
      return response.json({ 'success': false, 'message': 'error' });
    }

    return response.json({ 'success': true, 'message': 'Review fetched successfully', reviews });
  });
}

export const addReview = (request, response) => {
  const newReview = new Review(request.body);
  newReview.save((error, review) => {
    if(error){
      return response.json({ 'success': false, 'message': 'get rekt bitch' });
    }

    return response.json({ 'success': true, 'message': 'Review added successfully', review });
  })
}

export const updateReview = (request, response) => {
  Review.findOneAndUpdate({ _id:request.body.id }, request.body, { new:true }, (error, review) => {
    if(error){
      return response.json({ 'success': false, 'message': 'Error', 'error':error });
    }
    console.log(review);
    return response.json({ 'success': true, 'message': 'Updated successfully', review });
  })
}

export const getReview = (request, response) => {
  Review.find({ _id:request.params.id }).exec((error, review) => {
    if(error){
      return response.json({ 'success': false, 'message': 'Error fggit'});
    }
    if(review.length){
      return response.json({'success': true, 'message': 'Todo fetched by id successfully', review });
    }
    else{
      return response.json({ 'success': false, 'mesasge': 'Review with the given id not found' });
    }
  })
}

export const deleteReview = (request, response) => {
  Review.findByIdAndRemove(request.params.id, (error, review) => {
    if(error){
      return response.json({ 'success': false, 'message': 'Herpinderpin' });
    }

    return response.json({ 'success': true, 'message': review.reviewText + ' deleted successfully'});
  })
}
