document.getElementById('dataForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const linkedin = document.getElementById('linkedin-url').value;
  const specialization = document.getElementById('specialization').value;

  if (!firstName || !lastName || !linkedin) {
    document.getElementById('message').innerHTML = `Будь-ласка, заповніть обов'язкові поля.`;
    document.getElementById('message').classList.add('error');
    return;
  }

  const formData = {
    firstName,
    lastName,
    linkedin,
    specialization,
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwKlQWnIYwSYfGliDF4HBE9cuJ_gJ3hCJGLUUiqbjMKLwv3brw082zzcK6h9y3X55yw/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      document.getElementById('message').innerHTML = 'Дані успішно відправлені!';
      document.getElementById('message').classList.add('success');
    } else {
      document.getElementById('message').innerHTML = 'Помилка при відправці даних.';
      document.getElementById('message').classList.add('error');
    }
  } catch (error) {
    document.getElementById('message').innerHTML = 'Помилка при підключенні до серверу.';
    document.getElementById('message').classList.add('error');
  }
});