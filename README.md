# line-notify
line@notify from "api server node.js" to "Group line" for "Team develop"

## line@notify yourself
step by step
- step 1 : login your line account to https://notify-bot.line.me
- step 2 : in web "notify-bot" select menu go to "my-page"
- step 3 : select botom "generate Token"
- step 4 : input name bot line@notify and select end-point EX: Group line
- step 5 : submit generate Token copy Token to note.txt and close 
- step 6 : implement sample api server test shut down api and send notify by token your generate

read more : https://www.chaichon.com/nodejs/line-notify-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nodejs/

## How To Start
clone repository
```
npm install
npm start
```
use <CTRL+C> in terminal to kill process api
api server will send notify to line@notify by token 
and line@notify send notify to group line

