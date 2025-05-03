const {v4 : uuidv4} = require('uuid')
const petModel = require('../models/petModel')

//mood,adopted,adoption_date
const createPet = async ({name,species,age,personality}) => {
    const pet = {
        id : uuidv4(),
        name,
        species,
        age,
        personality,
        mood : 'Happy',
        adopted : false,
        adoption_date : null,
        created_at : new Date().toISOString()
    }
    await petModel.addPet(pet)
    return pet; 
}

const getAllPets = async () => {
    return await petModel.getPet()
}

module.exports = {
    createPet, 
    getAllPets
} ;