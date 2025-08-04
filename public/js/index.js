const submitBtn = document.querySelector('.subscribe-btn');
const emailInput = document.querySelector('#email-input')
const invalidMessage = document.querySelector('.error-message')
const newsContainer = document.querySelector('.news-card.active')
const showsuccess = document.querySelector('.success-card.hide')


function invalidEmail() {
  if (emailInput.value === 'example.user123@email.com'){
    emailInput.style.border = '1px solid #e74c3c'
    emailInput.style.color = '#e74c3c'
    invalidMessage.style.display = 'block'
    newsContainer.classList.add('active')
  } else {
    invalidMessage.style.display = 'none'
    showsuccess.classList.remove('hide')
  }
}

function validEmail() {
  if (emailInput.value === 'email@company.com') {
    showsuccess.classList.add('active')
  } else {
    newsContainer.classList.remove('hide')
  }
}

submitBtn.addEventListener('click', function(){
  invalidEmail()
  validEmail()
})