// Assume that "solution.txt" is in the same directory as this JS file
const filePath = 'solution.txt';

// Use the fetch API to send a request for the file to the server
fetch(filePath)
  .then(response => {
    // Check that the file was successfully sent by the server
    if (response.ok) {
      // If the file was successfully sent, return the text of the file as a promise
      return response.text();
    } else {
      // If there was an error sending the file, throw an error
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
  })
  .then(text => {
    // Once the text of the file has been received, do something with it here
    console.log(text);
  })
  .catch(error => {
    // If there was an error fetching the file or processing the text, handle it here
    console.error(error);
  });