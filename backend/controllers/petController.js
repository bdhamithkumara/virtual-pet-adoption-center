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
        const create_pet = await petService.createPet({name,species,age,personality})
        res.status(201).json(create_pet)
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}


const getAllPets = async (req,res) => {

    try {
        const get_all_pets = await petService.getAllPets()
        res.status(201).json(get_all_pets)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getSinglePetUsingId = async(req,res) => {
    try {
        const pet = await petService.getSinglePetUsingId(req.params.id)
        if(!pet){
            return res.status(404).json({error : "pet not found"})
        }
        res.json(pet)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updateSinglePetUsingId = async(req, res) =>{

    const {name,species,age,personality} = req.body

    if(!name || !species || !age || !personality){
        return res.status(400).json({error : 'Missing required data'})
    }

    if(typeof age !== 'number' || age < 0){
        return res.status(400).json({error : 'Age must be valid value'})
    }

    try {
        const pet = await petService.updatePetUsingPetId(req.params.id, {name,species,age,personality})
        if(!pet){
            return res.status(404).json({ error: 'Pet not found for update' });
        }
        res.json(pet)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const deletePetUsingPetId = async(req,res) => {
    try {
        const pet = await petService.deletePetUsingid(req.params.id)
        if(!pet){
            return res.status(404).json({error : "pet not found"})
        }
        res.json({ message: 'Pet deleted successfully' });
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const adoptPetUsingPetId = async(req,res) => {
    try {
        const pet = await petService.deletePetUsingid(req.params.id)
        if(!pet){
            return res.status(404).json({error : "pet not found"})
        }
        if(pet.error){
            return res.status(400).json({error : pet.error});
        }
        res.json({ message: 'pet adopted successfully'});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {addPet,getAllPets,getSinglePetUsingId,updateSinglePetUsingId,deletePetUsingPetId,adoptPetUsingPetId};