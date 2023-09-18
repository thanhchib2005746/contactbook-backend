const express = require("express");
const cors = require("cors");
const app = express();
const contactsRouter = require("./app/routes/contact.route");
// middleware
app.use(cors());
app.use(express.json());
// routes
app.use("/api/contacts", contactsRouter);
// run server
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application."});
});

module.exports = app;