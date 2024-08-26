const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()


// import controller
const PraktikumController = require (`./controller/PraktikumControllers`)
const controller = require (`./controller/controller-S1`)
const controllerS2 = require (`./controller/controller-S2`)
const controllerS3 = require (`./controller/controller-S3`)
const controllerS4 = require (`./controller/controller-S4`)


// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())


// import routes
const praktikum = require (`./routes/PraktikumRoute`)
const S1 = require (`./routes/route-S1`)
const S2 = require (`./routes/route-S2`)
const S3 = require (`./routes/route-S3`)
const S4 = require (`./routes/reoute-S4`)

// implementasi routes
app.use(`./basic_nodejs`, praktikum)
app.use(`./basic_nodejs`, S1)
app.use(`./basic_nodejs`, S2)
app.use(`./basic_nodejs`, S3)
app.use(`./basic_nodejs`, S4)


// test
app.get("/test", PraktikumController.test)
app.get("/profil/:name/:age", PraktikumController.profil)
app.post("/bujurSangkar", PraktikumController.bujurSangkar)

// S1
app.post("/kubus", controller.kubus)
app.post("/balok", controller.balok)
app.post("/tabung", controller.tabung)
app.post("/bola", controller.bola)

// S2
app.get("/celcius/:celcius", controllerS2.celcius)
app.get("/reamur/:reamur", controllerS2.reamur)
app.get("/fahrenheit/:fahrenheit", controllerS2.fahrenheit)
app.get("/kelvin/:kelvin", controllerS2.kelvin)

// S3
app.get("/desimal/:bDesimal", controllerS3.desimal)
app.get("/biner/:bBiner", controllerS3.biner)
app.get("/octal/:bOktal", controllerS3.octal)
app.get("/hexa/:bHexa", controllerS3.hexa)

// S4
app.post("/bmi", controllerS4.bmi)


app.listen(4000, () => {
    console.log("Server run on port 4000");
})