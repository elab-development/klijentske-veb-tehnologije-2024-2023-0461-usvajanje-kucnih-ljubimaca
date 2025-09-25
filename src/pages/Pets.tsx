import { PETS } from '../data/pets';
import PetCard from '../components/pets/PetCard';

export default function Pets() {
  return (
    <section className='space-y-6'>
      <header className='flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end'>
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>Pets</h1>
          <p className='text-slate-600'>
            Browse all pets currently in our demo database.
          </p>
        </div>
      </header>

      <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {PETS.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </section>
  );
}