exports.bmi = (req,res) => {
    let tb = Number (req.body.tb)
    let bb = Number (req.body.bb)

    let tbAkhir = tb / 100
    let bmi = bb / (tbAkhir * tbAkhir)
    let Des = "Normal"

    if (bmi <= 18.6){
        Des = "Your BMI is underweight"
    }
    else if (bmi <= 24.9){
        Des = "Your BMI is normal"
    }
    else {
        Des = "Your BMI is overweight"
    }

    let response = {
        tinggiBadan : tb,
        beratBadan : bb,
        BMI : bmi,
        Keterangan : Des
    }
    return res.json(response)
}