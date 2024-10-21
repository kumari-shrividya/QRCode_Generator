const express=require('express')
const QrCode=require('qrcode')
const app=express()
const port=3000

//create qrcode generate routes

app.get('/qrcode',(req,res)=>{

    //define url that would convert to qrcode
    const url='https://example.com'

    // convert url to qr image representation
    QrCode.toDataURL(url,(err,QrCodeUrl)=>{

        if(err){
            res.staue(500).send('Internal server error')
        }
        else{
            res.send(
                `<!DOCTYPE html>
                <html>
                <head>
                <title>
                 QR Code generator
                </title>
                </head>
                <body>
                <h2>QR code </h2>
                <img src=${QrCodeUrl} alt='QR code'/>
                <p>scan QR code to visit the site</p>
                </body>
                </html>`
            )
        }
    })

   
})

app.listen(port,()=>{
    console.log('server is running')
})