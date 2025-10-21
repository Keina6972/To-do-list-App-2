import React from 'react'

function App() { 

  const task = [
    {
    name: 'Tugas pak naldo',
    desc: 'intinya kerjain tugasnya',
    date: '22 Oktober 2025',
    time: '12:00 PM',
  },
  {
    tittle: 'Tugas bu maya',
    description: 'kerjakan menggunakan notion',
    date: '21 Oktober 2025',
    time: '12:00 PM',
  },
  {
    tittle: 'Selesaiin Ilustrasi',
    description: 'tinggal sisa dikit buat agensi',
    date: '26 Oktober 2025',
    time: '12:00 PM',
  },
  {
    tittle: 'Tanyain tugas dan materi ke jara',
    description: 'nanyain soal tugas bina usaha',
    date: '21 Oktober 2025',
    time: '12:00 PM',
  },
];

  return (
    <div className='flex justify-center w-full min-h-screen bg-green-300 text-white'>
      <header className='absolute top-0 text-xl p-5 bg-amber-800 w-full text-center rounded-lg'>
        To-Do list App
      </header>

      <main className='pt-36 w-3/4'>
        {/* User Prompt*/}
        <div className='flex justify-center'>
          <input className='bg-slate-700 p-4 rounded-2xl w-3/4 shadow-md' placeholder='type your..'>
          </input>
          <button className='pl-2 h-12 pt-2'>
            <img src='/logo192.png' alt="enter" className='w-full h-full'/>
          </button>
        </div>

        {/* Spacing */}
        <div className='p-6'/>

        {/* To-Do List */}
        <div className='flex justify-center'>
          <div className='w-[85%] flex flex-col gap-y-4'>
            <p className='font-semibold text-xl'>Your To-do List </p>
            <hr/>

            { /* Card 1 */}
            <div className='bg-slate-700 p-4 rounded-2xl shadow-lg flex flex-col'>
              <p className='font-semibold text-2xl'>
                Crossing The road
              </p>
              <p className='font-mono pt-4'>
                {card1Tittle}
              </p>
            </div>
            { /* Card 2 */}
            <div className='bg-slate-700 p-4 rounded-2xl shadow-lg flex flex-col'>
              <p className='font-semibold text-2xl'>
                Crossing The road
              </p>
              <p className='font-mono pt-4'>
                Why did the chicken cross the road?<br />
                Date: 30 Febuari 2025,<br />
                Time: 11.00 PM<br />
                Status: Active
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
