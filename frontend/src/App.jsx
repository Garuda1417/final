import React from 'react'
import ReactDom from 'react-dom/client'
import { useState } from 'react'
import Fppilogo from '/WhatsApp Image 2025-11-14 at 9.22.37 PM.jpeg'
import './App.css'
import './Research'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <header>
        <img src="/public/WhatsApp Image 2025-11-14 at 9.22.37 PM.jpeg" alt="ini logo fppi" />
        <h1>selamat datang di web FPPI</h1>
        <a href="Research">hasil penelitian</a>
        <a href="#Beranda">Beranda</a>
        <a href="#Tentang Kami">tentang kami</a>
        <a href="#Anggota">Anggota</a>
      </header>

      <main id='Beranda'>
        <div>
          <h1> beranda </h1>
        </div>
        <div>
          <h3>
            FPPI adalah organisasi yang berada pada kampus ITD Adisutjipto yeng berfokus pada 
            penelitian dan penalaran ilmiah 
          </h3>
        </div>
      </main>

      <main id='Tentang Kami'>
        <h1>tentang kami</h1>
      </main>

      <main id='Anggota'>
        <h1>anggota</h1>
        <div>
          <div>
            <h3>KETUA</h3>
            <div>
              <h4>nama ketua</h4>
              <img src="" alt="" />
            </div>
          </div>
          <div>
            <h3>WAKiL</h3>
            <div>
              <h4>nama wakil ketua</h4>
              <img src="" alt="" />
            </div>
          </div>
          <div>
            <h3>DIVISI 1</h3>
            <div>
            </div>
          </div>
          <div>
            <h3>DIVISI 2</h3>
            <div>

            </div>
          </div>
          <div>
            <h3>DIVISI 3</h3>
            <div>
            </div>
          </div>
          <div>
            <h3>DIVISI 4</h3>
            <div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>contact us</p>
        <p>email</p>
        <p>nomer</p>
      </footer>
    </div>
  )
}

export default App
