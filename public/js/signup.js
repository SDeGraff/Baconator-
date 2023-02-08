const loginFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#name-login').value.trim();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ userName, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('User has been created');
      document.location.replace('/login');
    } else {
      alert('Failed to create User');
    }
  };

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
