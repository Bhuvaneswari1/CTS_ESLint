const views = {
    home:
    `<h1>Home</h1>
    <p>Welcome to the Home Page!`,
    about:
    `
    <h1>About</h1>
    <p>This is about page. Learn more about us here.</p>
    `
}

function navigate(view){
    const container = document.getElementById('view-container');
    container.innerHTML = views[view] //views[home]
}

window.onload = () => navigate('home')