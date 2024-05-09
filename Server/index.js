const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.port || 9000
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config()


// middleware


const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions))
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.heo4og4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`





const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {
    try {

        const jobsCollection = client.db('freelance-marketplace').collection("jobs")
        const bidCollection = client.db('freelance-marketplace').collection("bids")


        // get all job data
        app.get("/jobs", async (req, res) => {
            const cursor = jobsCollection.find()
            const result = await cursor.toArray()
            console.log(result)
            res.send(result)
        })



        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {


    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("Server is running")
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
