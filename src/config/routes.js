const express = require('express')


module.exports = function(server){


    // Defini rotas
    const router = express.Router()
    server.use('/api',router)

    // rotas di ciclo 

    const BillingCycle = require('../api/billingCycleShema/billingService')
    BillingCycle.register(router,'/billingCycles')
}