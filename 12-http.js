const http = require('http')
const env = require('./env')

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.write('Welcome to our homepage')
        res.end()
    }
    if(req.url == '/about'){
        res.end('This is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page that you are looking for</p>
        <a href="/">back</a>
    `)
})

server.listen(env.PORT, ()=>{
    console.log(`Server runing on port: ${env.PORT}`);
})