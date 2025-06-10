//Fetch Albums - Display the first 10 title

fetch('https://jsonplaceholder.typicode.com/albums')
.then(res=>res.json())
//.then(album => album.map(a => console.log(a.title)))
.then(album => album.slice(0,10).map(a=>console.log(a.title)))