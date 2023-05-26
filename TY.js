const purchaseForm = document.querySelector('#purchase-form');


purchaseForm.addEventListener('submit', function(e) {

  e.preventDefault();

  const nameInput = document.querySelector('#name');
  const nameValue = nameInput.value;

  const thankYouMessage = ` ${nameValue}, благодарим за поръчката!`;
  alert(thankYouMessage);
 
  purchaseForm.reset();
});
