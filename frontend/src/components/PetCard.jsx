import { useState, useCallback } from 'react';
import { FaPaw, FaEdit, FaTrash } from 'react-icons/fa';
import * as api from '../services/api';
import { getMoodColor } from '../utils/helper';
import JSConfetti from 'js-confetti';


function PetCard({ pet, onPetUpdated }) {

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: pet.name,
        species: pet.species,
        age: pet.age,
        personality: pet.personality,
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = useCallback(async () => {
        try {
            await api.updatePet(pet.id, formData);
            setIsEditing(false);
            onPetUpdated();
        } catch (error) {
            console.error('Error updating pet:', error);
        }
    }, [pet.id, formData, onPetUpdated]);

    const handleAdopt = useCallback(async () => {
        try {
            await api.adoptPet(pet.id);
            const confetti = new JSConfetti();
            confetti.addConfetti();
            onPetUpdated();
        } catch (error) {
            console.error('Error adopting pet:', error);
        }
    }, [pet.id, onPetUpdated]);

    const handleDelete = useCallback(async () => {
        if (window.confirm('Are you sure you want to delete this pet?')) {
            try {
                await api.deletePet(pet.id);
                onPetUpdated();
            } catch (error) {
                console.error('Error deleting pet:', error);
            }
        }
    }, [pet.id, onPetUpdated]);

    return (
        <div
            className={`bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 animate-fade-in ${pet.adopted ? 'opacity-75' : ''
                }`}
        >
            {isEditing ? (
                <div className="space-y-2">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="species"
                        value={formData.species}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Species"
                    />
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Age"
                    />
                    <input
                        type="text"
                        name="personality"
                        value={formData.personality}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Personality"
                    />
                    <div className="flex space-x-2">
                        <button
                            onClick={handleUpdate}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="text-xl font-semibold">{pet.name}</h2>
                    <p><strong>Species:</strong> {pet.species}</p>
                    <p><strong>Age:</strong> {pet.age}</p>
                    <p><strong>Personality:</strong> {pet.personality}</p>
                    <p>
                        <strong>Mood:</strong>{' '}
                        <span className={`text-${getMoodColor(pet.mood)}-600`}>{pet.mood}</span>
                    </p>
                    <p>
                        <strong>Status:</strong>{' '}
                        {pet.adopted ? 'Adopted' : 'Available'}
                    </p>
                    <div className="flex space-x-2 mt-4">
                        {!pet.adopted && (
                            <button
                                onClick={handleAdopt}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
                            >
                                <FaPaw className="mr-2" /> Adopt
                            </button>
                        )}
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 flex items-center"
                        >
                            <FaEdit className="mr-2" /> Edit
                        </button>
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center"
                        >
                            <FaTrash className="mr-2" /> Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default PetCard