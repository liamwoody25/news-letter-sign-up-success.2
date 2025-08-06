const submitBtn = document.querySelector('.subscribe-btn');
const emailInput = document.getElementById('email-input')
const invalidMessage = document.querySelector('.error-message')
const newsSignUp = document.querySelector('.news-card')
const showsuccess = document.querySelector('.success-card')
const removeBtn = document.querySelector('.dismiss-btn')


function invalidEmail() {
  if (emailInput.value === ''){
    emailInput.style.border = '1px solid #e74c3c'
    emailInput.style.color = '#e74c3c'
    invalidMessage.style.display = 'block'
    showsuccess.style.display = 'none'
  } else {
    invalidMessage.style.display = 'none';
    invalidMessage.value = ''
  }
}

function validEmail() {
  if (emailInput.value === 'email@company.com') {
    newsSignUp.style.display = 'none'
    showsuccess.style.display = 'block'
  } else {
    showsuccess.style.display = 'none'
  }
}

submitBtn.addEventListener('click', function(){
  invalidEmail()
  validEmail()
})

removeBtn.addEventListener('click', function(){
  newsSignUp.style.display = 'block'
  showsuccess.style.display = 'none'
  emailInput.value = ''
})