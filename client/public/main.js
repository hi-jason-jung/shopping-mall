const buttonElem = document.querySelector('button');

buttonElem.addEventListener('click', () => {
    const inputElem = document.querySelector('input');
    // temporary test url
    axios.get(`http://localhost:3001`, {
        params: {
          name: inputElem.value
        },
        headers: { 'content-type': 'application/json' }
      })
      .then(function (response) {
        alert(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
})