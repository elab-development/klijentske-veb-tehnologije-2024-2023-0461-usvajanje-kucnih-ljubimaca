export default function Contact() {
  return (
    <section className='space-y-4'>
      <h1 className='text-2xl font-semibold'>Contact</h1>
      <form className='grid gap-3 max-w-lg'>
        <input
          className='rounded-lg border border-slate-300 px-3 py-2'
          placeholder='Name'
        />
        <input
          className='rounded-lg border border-slate-300 px-3 py-2'
          placeholder='Email'
        />
        <textarea
          className='rounded-lg border border-slate-300 px-3 py-2'
          placeholder='Message'
          rows={4}
        />
        <button
          type='button'
          className='inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700'
        >
          Send
        </button>
      </form>
    </section>
  );
}