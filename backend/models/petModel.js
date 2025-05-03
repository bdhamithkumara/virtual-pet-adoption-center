let pets = [];

// this for add new pet
const addPet = async (pet) => {
    pets.push(pet)
}

// this for get all the pets
const getPet = async () => {
    return pets;
}

// this for get the single pet using pet id if that not avaiable it return null
const getSinglePetUsingId = async (id) => {
    return pets.find((p) => p.id === id) || null
}

// this for update pet details using pet id
const updatePetUsingPetId = async (id, updatePetData) => {
    const index = pets.findIndex((p) => p.id === id)
    if(index === -1){
        return false
    }
    pets[index] = updatePetData;
    return true
}

// this for delete the pet using pet id
const deletePetUsingId = async (id) => {
    const index = pets.findIndex((p) => p.id === id)
    if(index === -1){
        return false;
    }
    pets.splice(index,1);
    return true
}

module.exports = {
    addPet,getPet,getSinglePetUsingId,updatePetUsingPetId,deletePetUsingId
}