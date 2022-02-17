const app = require("./index")
const http = require("http")

const server = http.createServer(app)

const port = 8001

server.listen(port, () => {
    console.log("listening on port: ", port)
})

//we are running the server separately from the app so when we test, we just test the app and the server should just run
//the test should no longer hang meaning its still listening, its open and doesnt stop