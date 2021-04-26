const express = require('express')
const app = express()
const port = 3001

const isPalindrome = function(original, reversed) {
    let or = original;
    let re = reversed;
    or = or.normalize('NFKD').replace(/[^\w]/g, '').replace(/[^0-9a-zA-Z:,]+/g, '').toLowerCase();
    re = re.normalize('NFKD').replace(/[^\w]/g, '').replace(/[^0-9a-zA-Z:,]+/g, '').toLowerCase();
    return or === re;
}

app.get('/iecho', (req, res) => {
    try {
        console.log(req);
        let text = req.query["text"];
        if (text === "")
            throw Error()
        let modifiedText = text.split('').reverse().join('');
        let palindrome = isPalindrome(text, modifiedText);
        res.status(200).json({ "text": modifiedText, "isPalindrome": palindrome });
    } catch (err) {
        res.status(400).json({ "error": "no text" });
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})