import { useParams } from 'react-router-dom';

export default function PetDetails() {
  const { id } = useParams();
  return (
    <section className='space-y-4'>
      <h1 className='text-2xl font-semibold'>Pet Details #{id}</h1>
      <div className='rounded-xl border border-dashed border-slate-300 p-6 text-slate-500'>
        Pet info and a button to open the inquiry modal will go here.
      </div>
    </section>
  );
}