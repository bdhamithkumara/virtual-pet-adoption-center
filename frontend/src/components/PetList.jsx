import PetCard from './PetCard';
import { motion, AnimatePresence } from 'framer-motion';

function PetList({ pets, onPetUpdated}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <AnimatePresence>
    {pets.map((pet) => (
      <motion.div
        key={pet.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <PetCard pet={pet} onPetUpdated={onPetUpdated} />
      </motion.div>
    ))}
  </AnimatePresence>
</div>
  )
}

export default PetList