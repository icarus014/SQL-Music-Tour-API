// DEPENDENCIES
const bands = require('express').Router()
const db = require('../models')
const band = require('../models/band')
const { Band } = db 

// Create
// create bands
bands.post('/', async(req,res)=>{
    try{
        const newBand = await Band.create(req.body)
        req.status(200).json({
            data: newBand,
            message:'New Band Created'
        })

    } catch(e){
        res.status(500).json(e)
    }
})

// UPDATE
// UPDATE A BAND
bands.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Band.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBands} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE(one band)
// DELETE A BAND
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Band.destroy({
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBands} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



// DEPENDENCIES 
const { Op } = require('sequelize')

// ! Read
//find all bands
bands.get('/', async (req, res)=> {
    try{
        const foundBands = await Band.findAll({
            where: {band_id:req.params.id}
        })
        res.status(200).json(foundBands)
    } catch(e){
        res.status(500).json(e)
    }
})

   
// FIND ALL BANDS
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            order: [ [ 'available_start_time', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})



// Find one Band
bands.get('/:id', async (req,res)=>{
    try{
        const foundBand  =await Band.findOne()
        res.status(200).json(foundBand)
    } catch(e){
        res.status(500).json(e)
    }
})





// EXPORT
module.exports = bands
