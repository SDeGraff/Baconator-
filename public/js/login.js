console.log('this_sucks');
const loginFormHandler = async (event) => {
  console.log('kevinBacon');
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch( '', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    
    });
    console.log('footloose');
    if (response.ok) {
      document.location.replace('/createpost');
    } else {
      alert('Failed to log in');
    }
    console.log('tremors');
  }
};

document.querySelector('#login-form')
document.addEventListener('submit', loginFormHandler);
