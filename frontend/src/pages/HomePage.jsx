import { useState, useEffect, useCallback } from 'react';
import PetList from '../components/petList'
import AddPetForm from '../components/AddPetForm'
import FilterBar from '../components/FilterBar'
import * as api from '../services/api';
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function HomePage() {

  const [pets, setPets] = useState([]);
  const [moodFilter, setMoodFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Pet Adoption Center</h1>

      <div className='flex justify-between'>
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#27272a] text-white px-4 py-2 rounded hover:bg-[#94a3b8] flex justify-center items-center"
          >
            Add New Pet <FaPlus className=' ml-2'/>
          </button>
        </div>
        <div>
          <FilterBar onMoodChange={setMoodFilter} />
        </div>
      </div>


      <PetList pets={pets} onPetUpdated={fetchPets} />

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex justify-end mt-4">
          </div>

          <div className="bg-white lg:p-6 p-2 rounded-lg shadow-lg lg:w-1/2 w-full relative">
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="cursor-pointer"
              >
                <IoCloseSharp size={20} />
              </button>
            </div>
            <div className="mt-4">
              <AddPetForm
                onPetAdded={() => {
                  fetchPets();
                  setShowModal(false);
                }}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
