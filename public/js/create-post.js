const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="title"]').value;
    const message = document.querySelector('textarea[name="content"]').value;

    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        message,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/');
  };
  
  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
