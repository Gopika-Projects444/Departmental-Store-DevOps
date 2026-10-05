const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/api/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Rice",
            price: 60,
            category: "Grocery"
        },
        {
            id: 2,
            name: "Milk",
            price: 30,
            category: "Dairy"
        },
        {
            id: 3,
            name: "Shampoo",
            price: 120,
            category: "Personal Care"
        }
    ]);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Departmental Store running on port ${PORT}`);
});