const editNameButton = document.getElementById('edit-name-button');
const saveNameButton = document.getElementById('save-name-button');
const cancelNameButton = document.getElementById('cancel-name-button');
const nameElement = document.getElementById('name');
const newNameElement = document.getElementById('new-name');

editNameButton.addEventListener('click', () => {
  nameElement.style.display = 'none';
  editNameButton.style.display = 'none';
  document.querySelector('.profile-email').style.display = 'none';
  document.querySelector('.edit-name').style.display = 'block';
});

saveNameButton.addEventListener('click', () => {
  const newName = newNameElement.value;
  if (newName) {
    nameElement.innerHTML = newName;
  }
  nameElement.style.display = 'block';
  editNameButton.style.display = 'block';
  document.querySelector('.profile-email').style.display = 'block';
  document.querySelector('.edit-name').style.display = 'none';
});

cancelNameButton.addEventListener('click', () => {
  nameElement.style.display = 'block';
  editNameButton.style.display = 'block';
  document.querySelector('.profile-email').style.display = 'block';
  document.querySelector('.edit-name').style.display = 'none';
});
