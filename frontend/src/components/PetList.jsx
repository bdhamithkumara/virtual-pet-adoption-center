import PetCard from './petCard';
import { motion, AnimatePresence } from 'framer-motion';

function PetList({ pets, onPetUpdated}) {
  return (
    <AnimatePresence>
  {pets.map((pet) => (
    <motion.div
      key={pet.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <PetCard
        key={pet.id}
        pet={pet}
        onPetUpdated={onPetUpdated}
      />
    </motion.div>
  ))}
</AnimatePresence>
  )
}

export default PetList