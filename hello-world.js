const http = require("http")
const fs = require("fs")
const generatePassword = require("generate-password")
const emailSender = require("nodemailer")
const PORT = 3000

// QUESTION ONE SOLUTION
console.log("HELLO WORLD")


// QUESTION TWO
const server = http.createServer((req, res)=>{
    res.setHeader( "Content-Type", "text/html")
    res.write("<h1>Hello Node</h1>")
    res.end()
})

// // QUESTION THREE (i)
fs.writeFile("./welcome.txt", "Hello Node", ()=>{
    console.log("File welcome.txt has been created...")
})

// QUESTION THREE(ii)
fs.readFile("hello.txt", (err, data)=>{
    if(data){
        console.log(`${data.toString()}`)
    }else{
        console.log(err)
    }
})

//QUESTION FOUR
const Pw = generatePassword.generate({length: 20, numbers: true, symbols: true})
console.log(Pw)


//QUESTION FIVE
const sender = emailSender.createTransport(
    {
        service: "gmail",
        auth:{
            user: "myCredentials",
            pass: "myCredentials"
        },
        tls: {
            rejectUnauthorized: false
          }
    }
)
const sendTo = {
    from: "uduma.kingsley75@gamil.com",
    to: "uduma.kingsley75@gamil.com",
    subject:"Sending Email Using nodeJs",
    text: "Learing how to send Email using Node, hope you are fine bros"
}

sender.sendMail( sendTo, (err, info)=>{
    if(info){
        console.log(`Email sent ${info.response}`)
    }else{
        console.log(err)
    }
})


server.listen(PORT, ()=>{ console.log(`listening one port ${PORT}`)})

