import PetCard from './petCard';

function PetList({ pets, onPetUpdated}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {pets.map((pet) => (
      <PetCard key={pet.id} pet={pet} onPetUpdated={onPetUpdated} />
    ))}
  </div>
  )
}

export default PetList