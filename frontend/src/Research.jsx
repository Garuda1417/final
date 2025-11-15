import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Research.css'
import './App'

function Research(){
    const [count, setCount] = useState(0)
    
    return(
        <div className='Research'>
            <header>
                <img src="/WhatsApp Image 2025-11-14 at 9.22.37 PM.jpeg" alt="ini logo fppi" />
                <h1>hasil penelitian</h1>
                <Link to="/">kembali beranda</Link>
            </header>

            <main>
                <h1>berikut hasil penelitian</h1>

                <div>
                </div>
            </main>

            <footer>
                <p>contact us</p>
                <p>email</p>
                <p>nomer hp</p>
            </footer>
        </div>
    )
}
export default Research;