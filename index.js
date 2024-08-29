const express = require('express');
require('dotenv').config();

const app = express();
const router =  require('./router');
const errorHandler = require('./errorHandler'); 
app.use(express.json());

app.use('/api',router)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));