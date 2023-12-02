function init() {

    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('author').innerHTML = data.author;
        document.getElementById('content').innerHTML = data.content;
      console.log(`${data.content} —${data.author}`)
    })
    .catch(error => {
      console.log(error)
    })
}

init();
function copy () {
      // Get the text field
  var copyText = document.getElementById("content");

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.innerHTML);

  // Alert the copied text
  alert("Copied the text: " + copyText.innerHTML);
}

