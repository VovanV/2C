import express from 'express';
import canonize from './canonize';
import cors from 'cors'

const __DEV__ = true;

function validation(inputValue){

    if (!inputValue) {
        return false;
    }

    const result = canonize(inputValue);

    return result;
}
const app = express();
app.use(cors());
app. get('/', (req, res) => {
    try {
        const result = validation(req.query.username)
        if (result) res.send(String(result))
        else res.send('Invalid fullname')
    }
    catch(e) {
        res.send('Invalid fullname')
    }
})
app.listen(3000, function () {
    console.log('Example app listening on port 3000');
})

