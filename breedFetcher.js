const request = require('request');
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

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(`Could not fetch info: ${error}`, null);
      return;
    }
    
    const data = JSON.parse(body);

    if (data && data[0]) {
      callback(null, (data[0].description));
    } else {
      callback('Breed not found', null);
    }
  });
};

module.exports = { fetchBreedDescription };