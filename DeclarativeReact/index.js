/*
Create a new h1 element, provide textContent, assign class name
and append as child of div#root
*/

/*

imperative case:

h1 = document.createElement('h1');
h1.textContent = 'Hello World';
h1.className = "header"
document.getElementById('root').appendChild(h1);
*/

ReactDOM.render(
    <h1 className="header">Hello, React!</h1>,
    document.getElementById('root')
);