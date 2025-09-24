export default function Pets() {
  return (
    <section className='space-y-4'>
      <h1 className='text-2xl font-semibold'>Pets</h1>
      <div className='grid gap-4'>
        <input
          type='text'
          placeholder='Search pets...'
          className='w-full max-w-md rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500'
        />
        <div className='rounded-xl border border-dashed border-slate-300 p-6 text-slate-500'>
          In-memory pets list will appear here…
        </div>
      </div>
    </section>
  );
}