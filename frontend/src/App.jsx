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
        <nav>
          <a href="Research">hasil penelitian</a>
          <a href="#Beranda">Beranda</a>
          <a href="#Tentang Kami">tentang kami</a>
          <a href="#Anggota">Anggota</a>
        </nav>
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
        <div>
          <p>
            Forum Penalaran dan Penelitian Ilmiah adalah sebuah wadah pengembangan intelektual yang bertujuan untuk menumbuhkan budaya berpikir kritis, analitis, dan ilmiah di kalangan mahasiswa. Forum ini menjadi sarana bagi mahasiswa
            untuk mengasah kemampuan dalam merancang, melakukan, serta mempresentasikan penelitian melalui berbagai kegiatan seperti diskusi ilmiah, pelatihan metodologi riset, workshop penulisan karya ilmiah, dan pendampingan proposal penelitian.
            Selain itu, forum ini mendorong anggotanya untuk berpartisipasi aktif dalam kegiatan akademik seperti lomba karya tulis ilmiah, seminar, dan publikasi jurnal mahasiswa. Dengan lingkungan yang kolaboratif dan terbuka, Forum Penalaran dan Penelitian Ilmiah 
            berkomitmen membentuk sumber daya manusia yang kreatif, inovatif, serta mampu memberikan kontribusi nyata melalui karya ilmiah yang berkualitas.
          </p>
          <div>
            <img src="/public/1adccd81d2227df65500220ef49fac75.jpg" alt="" />
            <img src="/public/00b7563f8c0c397b9511f0d17e0e32cc.jpg" alt="" />
            <img src="/public/1c6f215f32e428e741af4e4535ecd5fb.jpg" alt="" />
            <img src="/public/1ebda8a4437c206a2ba0af73a82d1cd9.jpg" alt="" />
            <video>
              <source src=''/>
            </video>
          </div>
          <div>
            <video width="600" controls>
              <source src='/wwd.mp3juice.blog - Honkai Star Rail -Robin「Hope Is the Thing With Feathers」Cover 崩壞：星穹鐵道2.0「希望有羽毛和翅膀」翻唱 (720p).mp4' type='video/mp4'/>
            </video>
          </div>
        </div>
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