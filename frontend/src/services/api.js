import axios from "axios";

const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}/pets`;

export const addPet = async (pet) => {
    const response = await axios.post(BACKEND_URL,pet)
    return response.data
}

export const getAllPets = async () => {
    const response = await axios.get(BACKEND_URL)
    return response.data
}

export const filterPetsUsingMood = async (mood) => {
    const response = await axios.get(`${BACKEND_URL}/filter?mood=${mood}`)
    return response.data
}

export const getSinglePetUsingId = async (id) => {
    const response = await axios.get(`${BACKEND_URL}/${id}`)
    return response.data
}

export const updateSinglePetUsingPetId = async (id,pet) => {
    const response = await axios.put(`${BACKEND_URL}/${id}`,pet)
    return response.data
}

export const deletePetUisngPetId = async (id) => {
    const response = await axios.delete(`${BACKEND_URL}/${id}`)
    return response.data
}

export const adoptPetUsingPetId = async (id) => {
    const response = await axios.patch(`${BACKEND_URL}/${id}/adopt`)
    return response.data
}

