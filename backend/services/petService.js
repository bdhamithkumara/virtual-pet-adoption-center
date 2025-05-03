const {v4 : uuidv4} = require('uuid')
const petModel = require('../models/petModel')
const {calculateMood} = require('../utils/moodLogic')

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
    return pet 
}

const getAllPets = async () => {
    return await petModel.getPets()
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

    await petModel.updatePetUsingPetId(id,updatedPet)
    return updatedPet 
}

const deletePetUsingid = async (id) => {
   return await petModel.deletePetUsingId(id)
}

const adoptPet = async (id) => {

    const petFind = await petModel.getSinglePetUsingId(id)

    if (!petFind) return null;

    if(petFind.adopted) return {error : 'pet already adopted'};

    const updatedPet = {
        ...petFind,
        adopted: true,
        adoption_date: new Date().toISOString(),
    }

    await petModel.updatePetUsingPetId(id,updatedPet)
    return updatedPet
}

const moodFilter = async (mood) => {
    const pet = await petModel.getPets();
    return pet
        .map((petsHere) => ({...petsHere, mood : calculateMood(petsHere.created_at)})
        .filter((pet) => pet.mood.toLoweCase() === mood.toLoweCase()))
}

module.exports = {
    createPet, 
    getAllPets,
    getSinglePetUsingId,
    updatePetUsingPetId,
    deletePetUsingid,
    adoptPet,
    moodFilter
} ;