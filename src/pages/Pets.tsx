import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';

import type { Category } from '../domain/pets';
import { PETS } from '../data/pets';
import PetCard from '../components/pets/PetCard';

const CATEGORY_OPTIONS: Array<{ label: string; value: Category | 'all' }> = [
  { label: 'All categories', value: 'all' },
  { label: 'Dogs', value: 'dog' },
  { label: 'Cats', value: 'cat' },
  { label: 'Rabbits', value: 'rabbit' },
  { label: 'Birds', value: 'bird' },
];

export default function Pets() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQ = searchParams.get('q') ?? '';
  const initialCategory =
    (searchParams.get('category') as Category | 'all') ?? 'all';

  const [query, setQuery] = useState(initialQ);
  const [category, setCategory] = useState<Category | 'all'>(initialCategory);

  useEffect(() => {
    const next = new URLSearchParams();
    if (query) next.set('q', query);
    if (category !== 'all') next.set('category', category);
    setSearchParams(next, { replace: true });
  }, [query, category, setSearchParams]);

  const filtered = PETS.filter((p) =>
    category === 'all' ? true : p.category === category
  ).filter((p) => p.matchesQuery(query));

  return (
    <section className='space-y-6'>
      <header className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>Pets</h1>
          <p className='text-slate-600'>
            Browse all pets currently in our demo database.
          </p>
          <p className='mt-1 text-sm text-slate-500'>
            Showing <span className='font-medium'>{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'pet' : 'pets'}
          </p>
        </div>

        <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
          <div className='relative sm:w-80'>
            <label htmlFor='pet-search' className='sr-only'>
              Search pets
            </label>
            <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400' />
            <input
              id='pet-search'
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search by name, breed, location…'
              className='w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100'
            />
          </div>

          <div>
            <label htmlFor='pet-category' className='sr-only'>
              Filter by category
            </label>
            <select
              id='pet-category'
              value={category}
              onChange={(e) => setCategory(e.target.value as Category | 'all')}
              className='w-full rounded-xl border border-slate-300 bg-white py-2.5 px-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 sm:w-48'
            >
              {CATEGORY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {filtered.length === 0 ? (
        <div className='rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-600'>
          No pets match your search. Try a different keyword or category.
        </div>
      ) : (
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {filtered.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      )}
    </section>
  );
}