fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.json())
.then(data =>{
    document.getElementById("title").innerText = data.title
    document.getElementById("body").innerText = data.body

})