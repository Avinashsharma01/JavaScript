fetch('https://cat-fact.herokuapp.com/facts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    console.log("Hello World")
    // Process the data further as needed
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
