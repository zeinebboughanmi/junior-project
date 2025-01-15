const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 3001
const db=require('./database/index')
const adminRouter=require('./Routes/admin.route')
const categorieRouter=require('./Routes/categorie.route')
const productRouter=require('./Routes/product.route')
app.use(express.json())
app.use(cors())


app.use("/api/admin",adminRouter)
app.use("/api/categorie",categorieRouter)
app.use("/api/product",productRouter)
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });