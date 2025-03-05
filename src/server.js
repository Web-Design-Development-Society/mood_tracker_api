import express from "express";

var app = express();

// Add code to create sessions

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://127.0.0.1:${PORT}`);
// });