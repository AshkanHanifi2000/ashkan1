//const axios = require('axios');

function paint(color) {
  console.log(color);
  const circle = document.getElementById('circleID');
  circle.style = `background-color:${color}`;
  console.log(circle);
}
function log(msg) {
  alert(msg)
}

function call_api_axios_token(){
  // If there are two parameters: id and category
  let c = document.getElementById("cname").value;
  console.log('call with token')
  const url ='http://localhost:8000/circle/name_token?' + new URLSearchParams({name:c ,});

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTU2MjkzNjcsInN1YiI6IjEwIn0.mRoA2od2tDJqKBb4LizMnSoZ77dCXorP7kN45FsRdFY'
  // You can add parameters directly to the URL
  //`https://api.example.com/data?id=${id}&category=${category}`
  axios.get(url, { 
    headers: {
      'Authorization': 'Bearer ' + token
    } 
  })
    .then(response => {
      
      console.log(response.data);
      console.log(response.data['message']);
      document.getElementById("cname").value= response.data['message'];
    })
    .catch(error => {
      console.error(error);
    });
}

function call_api_axios(){
  // If there are two parameters: id and category
  let c = document.getElementById("cname").value;
  console.log(c)
  const url ='http://localhost:8000/circle/name?' + new URLSearchParams({name:c ,});

  // You can add parameters directly to the URL
  //`https://api.example.com/data?id=${id}&category=${category}`
  axios.get(url)
    .then(response => {
      
      console.log(response.data);
      console.log(response.data['message']);
      document.getElementById("cname").value= response.data['message'];
    })
    .catch(error => {
      console.error(error);
    });
}


function call_rect() {
  const url ='http://localhost:8000/rect/name';
  const headers = { "Content-Type": "application/json", }
  fetch(url, {
    method: 'GET',
    headers: headers,
        })
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON
        } else { throw new Error('API request failed'); }
      })
      .then(data => {
        let inputF = document.getElementById("rect");
        inputF.setAttribute('value', data['message']);
        console.log(data); 
      })
      .catch(error => {  console.error(error); // Example: Logging the error to the console
      });
      console.log('این عبارت بعد از اتمام فراخوانی تابع نمایش مستطیل نمایش داده میشود.')
}

function call_circle() {
  let c = document.getElementById("circle").value;
  console.log(c)
  const url ='http://localhost:8000/circle/area?' + new URLSearchParams({r:c ,});
  const headers = {
    "Content-Type": "application/json",
  }
  fetch(url, {
    method: 'GET',
    headers: headers,
        })
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON
        } else {
          throw new Error('API request failed');
        }
      })
      .then(data => {
        let area = document.getElementById("area");
        area.setAttribute('value', data['message']);
        console.log(data); 
      })
      .catch(error => {
        // Handle any errors here
        console.error(error); // Example: Logging the error to the console
      });
      
}

function call_circle_name() {
  let c = document.getElementById("cname").value;
  console.log(c)
  const url ='http://localhost:8000/circle/name?' + new URLSearchParams({name:c ,});
  const headers = {
    "Content-Type": "application/json",
  }
  fetch(url, {
    method: 'GET',
    headers: headers,
        })
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON
        } else {
          throw new Error('API request failed');
        }
      })
      .then(data => {
        let area = document.getElementById("cname");
        area.setAttribute('value', data['message']);
        console.log(data); 
      })
      .catch(error => {
        // Handle any errors here
        console.error(error); // Example: Logging the error to the console
      });
      
}


function call_rect_area() {
  const url ='http://localhost:8000/rect/area?';
  const headers = { "Content-type": "application/json; charset=UTF-8" }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        w: parseInt(document.getElementById("rect_w").value),
        h: parseInt(document.getElementById("rect_h").value),
        name: document.getElementById("rect_name").value
        }),
    headers: headers,
        })
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON
        } else {
          throw new Error('API request failed');
        }
      })
      .then(data => {
        let area = document.getElementById("rect_area");
        area.setAttribute('value', data['message']['w']);
        console.log(data); 
      })
      .catch(error => {
        // Handle any errors here
        console.error(error); // Example: Logging the error to the console
      });
      
}

async function call_rect_async() {
  const url ='http://localhost:8000/rect/name';
  const headers = {
    "Content-Type": "application/json",
  }
  await fetch(url, {
    method: 'GET',
    headers: headers,
        })
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON
        } else {
          throw new Error('API request failed');
        }
      })
      .then(data => {
        // Process the response data here
        console.log(data['message']); // Example: Logging the data to the console
      })
      .catch(error => {
        // Handle any errors here
        console.error(error); // Example: Logging the error to the console
      });
}