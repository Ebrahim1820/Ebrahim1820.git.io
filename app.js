const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page !')
    }
    if(req.url === '/about'){
        res.end('Welcome to about page')
    }
    if(req.url==='/error'){
        res.end(`
        <h1> Oops! something goes wrong </h1>
    
        <p> We can't seem to find the page you are looking for</p>
        <a href="/" text-color: blue> Home page </a>
        `
       )
    }
   
})

server.listen(5000)