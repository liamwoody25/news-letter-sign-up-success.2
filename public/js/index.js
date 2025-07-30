const submitBtn = document.querySelector('.subscribe-btn');
const emailInput = document.querySelector('#email-input')
const invalidMessage = document.querySelector('.error-message')


function invalidEmail() {
  if (emailInput.value === ''){
    emailInput.style.border = '1px solid #e74c3c'
    emailInput.style.color = '#e74c3c'
    invalidMessage.style.display = 'block'
  } else {
    invalidMessage.style.display = 'none'
  }
}

submitBtn.addEventListener('click', function(){
  invalidEmail()
  
})