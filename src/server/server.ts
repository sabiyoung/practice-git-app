import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 3000

app.listen(port, function() {
console.log('server is running at', port)
})