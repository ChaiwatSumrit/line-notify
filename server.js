const express = require('express')
const app = express()

//test api is work
app.get('/', (req, res) => {
    res.send('Hi!')
})

const server = app.listen(3000, () => {
    //token cs_BC
    var token = "Xswf7uOXsbHGHwcPOZXcpUJUyWyU3xA7Z3dkTp36gsr";
    //res notify to group line
    var eventNotify = {
        message: "[Test]💪API Server Online"
    }
    lineNotify(token, eventNotify);
    console.log('Server:3000 ready')
})


// seting process event

// SIGTERM จะมีการส่งออกมาเมื่อ Node.js ของเรานั้นตายหรือไม่สามารถทำงานได้
// SIGINT จะมีการส่งออกออกมาตอนที่เราหยุดการทำงานของ Server จาก terminal ด้วย CTRL+C

process.on('SIGINT', () => {
    server.close(() => {
        //token cs_BC
        var token = "Xswf7uOXsbHGHwcPOZXcpUJUyWyU3xA7Z3dkTp36gsr";
        //res notify to group line
        var eventNotify = {
            message: "[Test]💥API Server Shutting Down!!! ",
            //pack sticker https://devdocs.line.me/files/sticker_list.pdf
            stickerPackageId: 1,
            stickerId: 403
        }
        lineNotify(token, eventNotify);
        console.log('Process terminated')
    })
})

process.on('SIGTERM', () => {
    server.close(() => {
        //token cs_BC
        var token = "Xswf7uOXsbHGHwcPOZXcpUJUyWyU3xA7Z3dkTp36gsr";
        //res notify to group line
        var eventNotify = {
            message: "[Test]💥API Server Shutting Down!!! ",
            //pack sticker https://devdocs.line.me/files/sticker_list.pdf
            stickerPackageId: 1,
            stickerId: 403
        }
        lineNotify(token, eventNotify);
        console.log('Process terminated')
    })
})

//line notify event
function lineNotify(token, eventNotify) {
    //LINE@NOTIFY
    console.log('Line notify to Team develop');
    var request = require('request');

    //set http request to line@notify 
    //line@notify validate token add send event to group line
    request({
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': 'Bearer RmgbwNGiNZ8nu8y2Y6dMPujBRdsrTQWIZkkQ1LIuRGh'
        },
        auth: {
            'bearer': token
        },
        form: eventNotify
    }, (err, httpResponse, body) => {     //send http request to line@notify 
        if (err) {
            console.log(err);
        } else {
            // res.json({
            //     httpResponse: httpResponse,
            //     body: body
            // });
        }
    });
}