const submitBtn = document.querySelector('.subscribe-btn');
const emailInput = document.querySelector('#email-input')
const invalidMessage = document.querySelector('.error-message')
const newsSignUp = document.querySelector('.news-card')
const showsuccess = document.querySelector('.success-card.hide')
const removeBtn = document.querySelector('.dismiss-btn')


function invalidEmail() {
  if (emailInput.value === 'example.user123@email.com'){
    emailInput.style.border = '1px solid #e74c3c'
    emailInput.style.color = '#e74c3c'
    invalidMessage.style.display = 'block'
    showsuccess.style.display = 'none'
  } else {
    invalidMessage.style.display = 'none';
  }
}

function validEmail() {
  if (emailInput.value === 'email@company.com') {
    newsSignUp.style.display = 'none'
    showsuccess.style.display = 'block'
  } else {
  }
}

submitBtn.addEventListener('click', function(){
  invalidEmail()
  validEmail()
})

removeBtn.addEventListener('click', function(){
  
})