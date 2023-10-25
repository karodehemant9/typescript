import express = require('express');
//import express from 'express';

//require method is only available in Node environment and not on browser. TS doesn't know where we will execute this code. To let Ts know that there is a require method we use npm install -dev @types/node
//@ provides typescript translation for node packages. So that typescript gets to know what JS code we are writing

import todosRoutes from './routes/todos';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());

app.use(todosRoutes);



//@express/node does same thing, provides typescript translation for express node package

app.listen(3000);