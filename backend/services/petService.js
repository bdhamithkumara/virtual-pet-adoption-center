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
    return await petModel.getPets()
}

const getSinglePetUsingId = async (id) => {
    const pet = await petModel.getSinglePetUsingId(id)
    return pet;
}

const updatePetUsingPetId = async (id) => {

    const petFind = await petModel.getSinglePetUsingId(id)

    if (!petFind) return null;

    const updatedPet = {
        ...petFind,
        adopted : true,
        adoption_date : new Date().toISOString()
    }

    const pet = await petModel.updatePetUsingPetId(id,updatedPet)
    return pet;
}

const deletePetUsingid = async (id) => {
   return await petModel.deletePetUsingId(id)
}

const adoptPet = async (id) => {

    const petFind = await petModel.getSinglePetUsingId(id)

    if (!petFind) return null;

    if(pet.adopted) return {error : 'pet already adopted'};
    
    const updatedPet = {
        ...petFind,
        
    }

    const pet = await petModel.updatePetUsingPetId(id,updatedPet)
    return pet;
}


module.exports = {
    createPet, 
    getAllPets,
    getSinglePetUsingId,
    updatePetUsingPetId,
    deletePetUsingid
} ;