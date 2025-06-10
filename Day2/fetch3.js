//Fetch Comments for a Post
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
.then(res=>res.json())
.then(comment=>comment.forEach(c=>console.log(c.email)))