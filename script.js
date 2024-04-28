const button = document.querySelector('.group2');

button.addEventListener('click', () => {
  window.location.href = 'https://discord.com/channels/1232626121766342778/1232626122479370284';
});

const group2Button = document.querySelector('.group2');

group2Button.addEventListener('click', () => {
  window.location.href = 'https://discord.com/channels/1232626121766342778/1232626122479370284';
});

const submitButton = document.querySelector('.form input[type="submit"]');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  alert('Your form has been submitted!');
});