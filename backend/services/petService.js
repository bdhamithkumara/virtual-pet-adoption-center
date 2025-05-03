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

const getSinglePetUsingId = async (id) => {
    const pet = await petModel.getSinglePetUsingId(id)
    return pet;
}

const updatePetUsingPetId = async (id ,{name,species,age,personality}) => {

    const petFind = await petModel.getSinglePetUsingId(id)

    if (!petFind) return null;

    const updatedPet = {
        ...petFind,
        name,
        species,
        age,
        personality
    }

    const pet = await petModel.updatePetUsingPetId(id,updatedPet)
    return pet;
}


module.exports = {
    createPet, 
    getAllPets,
    getSinglePetUsingId,
    updatePetUsingPetId
} ;