// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(error);
    return error;
  } else {
    console.log(desc);
    return desc;
  }
});
