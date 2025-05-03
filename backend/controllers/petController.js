const petService = require('../services/petService')

const addPet = async (req,res) => {
    const {name,species,age,personality} = req.body

    if(!name || !species || !age || !personality){
        return res.status(400).json({error : 'Missing required data'})
    }

    if(typeof age !== 'number' || age < 0){
        return res.status(400).json({error : 'Age must be valid value'})
    }

    try {
        const pet = await petService.createPet({name,species,age,personality})
        res.status(201).json(pet)
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

module.exports = {addPet};