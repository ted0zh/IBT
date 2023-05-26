const reviewForm = document.querySelector('#review-form');

const reviewsList = document.querySelector('#reviews-list');

reviewForm.addEventListener('submit', function(e) {
  
  e.preventDefault();

  const commentInput = document.querySelector('#comment');
  const commentValue = commentInput.value;

  const newReview = document.createElement('li');
  newReview.textContent = commentValue;

  reviewsList.prepend(newReview);

  reviewForm.reset();
});
