import { useState, useEffect, useCallback } from 'react';
import PetList from '../components/petList'
import AddPetForm from '../components/AddPetForm'
import FilterBar from '../components/FilterBar'
import * as api from '../services/api';

export default function HomePage() {

  const [pets, setPets] = useState([]);
  const [moodFilter, setMoodFilter] = useState('');

  const fetchPets = useCallback(async () => {
    try {
      const data = moodFilter
        ? await api.filterPetsByMood(moodFilter)
        : await api.getAllPets();
      setPets(data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  }, [moodFilter]);

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  return (
    <div className="container mx-auto p-4 ">
    <h1 className="text-3xl font-bold text-center mb-6">Pet Adoption Center</h1>
    <AddPetForm onPetAdded={fetchPets} />
    <FilterBar onMoodChange={setMoodFilter} />
    <PetList pets={pets} onPetUpdated={fetchPets} />
  </div>
  )
}
