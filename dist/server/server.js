import express from "express";
import "cors";
import "mongoose";
const app = express();
const port = 3000;
app.listen(port, function () {
    console.log('server is running at', port);
});
//# sourceMappingURL=server.js.map