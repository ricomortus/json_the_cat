const request = require('request');
const breed = process.argv[2].toString();

// request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
//   const data = JSON.parse(body)[0];
//   if (!error && data !== undefined) {
//     console.log(data.description);
//   } else if (error) {
//     console.log('Error message: ', error);
//   } else {
//     console.log('Breed not found.');
//   }
// });

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  //Check for request error
  if (error) {
    console.log('Error message: ', error);
    return;
  }

  // Parse JSON. If JSON is not valid, log error
  let data;
  try {
    data = JSON.parse(body);
  } catch (e) {
    console.log("Error parsing JSON:", e);
    return;
  }

  //Check if the data exists and had content, then log it the description.
  if (data && data[0]) {
    console.log(data[0].description);
  } else {
    console.log('Breed not found');
  }
});