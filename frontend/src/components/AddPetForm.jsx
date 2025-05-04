import { useState } from 'react';
import * as api from '../services/api';

function AddPetForm({onPetAdded}) {
    const [formData, setFormData] = useState({
        name: '',
        species: '',
        age: '',
        personality: '',
      });
    
      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await api.addPet({ ...formData, age: parseInt(formData.age) });
          setFormData({ name: '', species: '', age: '', personality: '' });
          onPetAdded();
        } catch (error) {
          console.error('Error adding pet:', error);
        }
      };
    
      return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Add a New Pet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-2 border rounded"
              placeholder="Name"
              required
            />
            <input
              type="text"
              name="species"
              value={formData.species}
              onChange={handleInputChange}
              className="p-2 border rounded"
              placeholder="Species"
              required
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="p-2 border rounded"
              placeholder="Age"
              required
            />
            <input
              type="text"
              name="personality"
              value={formData.personality}
              onChange={handleInputChange}
              className="p-2 border rounded"
              placeholder="Personality"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-[#84cc16] text-white px-4 py-2 rounded hover:bg-[#365314]"
          >
            Add Pet 
          </button>
        </form>
      );
}

export default AddPetForm