const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const UsersRoutes =require('./routes/user')

const app = express();
app.use(cors()); // allow cross origin requests
app.use(bodyParser.json());//parse json requests bodies


mongoose.connect(process.env.MONGO_UTL ||"mongodb://localhost:27017/db1",
    {
         useNewUrlParser: true,
        useUnifiedTopology: true, 
    }
)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));
app.use('/users',UsersRoutes);

const PORT = process.env.PORT || 5200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
