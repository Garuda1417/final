import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './App'

function Research(){
    const [count, setCount] = useState(0)
    
    return(
        <div>
            <header>
                <img src="" alt="ini logo fppi" />
                <h1>hasil penelitian</h1>
                <Link to="/">kembali beranda</Link>
            </header>

            <main>
                <h1>berikut hasil penelitian</h1>
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