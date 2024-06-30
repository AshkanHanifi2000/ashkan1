console.log('Script Loaded...');

function paint(color) {
  console.log(color);
  const circle = document.getElementById('circleID');
  circle.style = `background-color:${color}`;
  console.log(circle);
}

function submitButton() {
  const url ='http://localhost:8000/rect/name';
  const headers = {
    "Content-Type": "application/json",
  }

  fetch(url, {
    method: 'GET',
    headers: headers,
    // body: JSON.stringify(data), // you can just skip this if all you want is to test the API
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}