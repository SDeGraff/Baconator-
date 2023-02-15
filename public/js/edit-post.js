const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post/`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      message,
      id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/homepage');
};

const deleteClickHandler = async function() {
    await fetch(`/api/post/`,{
      method: 'DELETE',
      body: JSON.stringify({
        id
    }),
});
    document.location.replace('/homepage');
  };

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);

document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
