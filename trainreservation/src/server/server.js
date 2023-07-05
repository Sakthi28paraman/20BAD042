const express = require('express');
const axios = require('axios');
const app = express()
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/train/getall',async(req,res)=>{
    const detail =
        {
            "companyName": "Train Central",
            "clientID": "15caa13e-ad2f-435d-89c7-2b36956b0196",
            "clientSecret": "DnRKcTqZThaTJmRV",
            "ownerName": "Sakthi Parameswaran",
            "ownerEmail": "sakthiparameswaran0128@gmail.com",
            "rollNo": "20bad42"
        };
    try{
        const authRes = await axios.post('http://104.211.219.98/train/auth',detail)
        const accessToken =authRes.data.access_token;
        console.log(authRes);

        const trainRes = await axios.get('http://104.211.219.98/train/trains',{
            headers: {
              'Authorization': `Bearer ${accessToken}` 
            }})
            const trainDetails = trainRes.data;
            res.setHeader('Content-Type', 'application/json'); 
            res.json(trainDetails);
            console.log(trainDetails);
        }
        catch(err){
        console.log(err);
        res.status(500).json({error:"Error Occured"});
    }
});

app.listen(port,()=>{
    console.log(`Server is listening to the port ${port}`);
})


