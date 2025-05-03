const express = require('express');
const router = express.Router();

const petController = require('../controllers/petController')

// for add pet
router.post('/', petController.addPet)
// for get all pets
router.get('/', petController.getAllPets)
// for get single pet
router.get('/:id', petController.getSinglePetUsingId)
// for update pet using pet id
router.put('/:id', petController.updateSinglePetUsingId)
// for delete pet using pet id
router.delete('/:id', petController.deletePetUsingPetId)
// for adopt pet
router.patch('/:id/adopt', petController.adoptPetUsingPetId)
// for pet mood
router.get('/filter', petController.filterPetsbyMood)



module.exports = router;