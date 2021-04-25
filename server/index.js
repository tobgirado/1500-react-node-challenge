const express = require('express')
const app = express()
const port = 3001

app.get('/iecho', (req, res) => {    
    try {
        let text = req.query["text"];
        if(text==="")
            throw Error()
        let modifiedText = text.split('').reverse().join('');
        let isPalindrome = text.toLowerCase() === modifiedText.toLowerCase();
        res.status(200).json({ "text": modifiedText, "isPalindrome": isPalindrome });
    } catch (err) {
        res.status(400).json({ "error": "no text" });
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})