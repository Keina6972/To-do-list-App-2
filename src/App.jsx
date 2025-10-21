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
      title: 'Tugas bu maya',
      description: 'kerjakan menggunakan notion',
      date: '21 Oktober 2025',
      time: '12:00 PM',
    },
    {
      title: 'Selesaiin Ilustrasi',
      description: 'tinggal sisa dikit buat agensi',
      date: '26 Oktober 2025',
      time: '12:00 PM',
    },
    {
      title: 'Tanyain tugas dan materi ke jara',
      description: 'nanyain soal tugas bina usaha',
      date: '21 Oktober 2025',
      time: '12:00 PM',
    },
  ];

  const taskList = [];
  for (let i = 0; i < task.length; i++) {
    const current = task[i];
    taskList.push(
      <div
        key={i}
        className="bg-[#A6A68A] text-[#4F4A2F] p-5 rounded-2xl shadow-md w-[47%] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <h2 className="font-semibold text-lg mb-1">
          {current.name || current.title}
        </h2>
        <p className="text-sm mb-3 text-[#4F4A2F]/80">
          {current.desc || current.description}
        </p>
        <p className="text-sm">
          📅 {current.date}
          <br />
          🕐 {current.time}
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full min-h-screen bg-[#E5DBB7] text-[#4F4A2F]">
      <header className="absolute top-0 text-xl p-5 bg-[#A6A68A] w-full text-center rounded-b-2xl shadow-md">
        To-Do List App 🌿
      </header>

      <main className="pt-36 w-3/4">
        {/* Input Bar */}
        <div className="flex justify-center items-center">
          <input
            className="bg-[#D9D4B4] p-4 rounded-2xl w-3/4 shadow-md placeholder-[#6C6542]/60 focus:outline-none"
            placeholder="Type your task..."
          />
          <button className="pl-2 h-12 pt-2">
            <img
              src="/enter.png"
              alt="enter"
              className="w-full h-full bg-[#D9D4B4] rounded-2xl shadow-md placeholder-[#6C6542]/60 focus:outline-none"
            />
          </button>
        </div>

        {/* Spacing */}
        <div className="p-6" />

        {/* To-Do List */}
        <div className="flex justify-center">
          <div className="w-[80%] flex flex-wrap justify-between gap-y-6 gap-x-4">
            <p className="font-semibold text-xl w-full mb-2">
              Your To-do List
            </p>
            <hr className="w-full border-[#A6A68A]/60 mb-4" />
            {taskList}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
