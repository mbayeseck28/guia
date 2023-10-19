import React from 'react'
import './Assets/Css/Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <nav class="navbar navbar-expand-md px-5">
            <div class="container">
                <a class="navbar-brand text-uppercase fw-semibold text-white" href="#test">
                Guia
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#test">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white opacity-75" href="#test">Category</a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link text-white opacity-75" href="#test">Article</a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link text-white opacity-75" href="#test">Changelog</a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link text-white opacity-75" href="#test">Dropdown</a>
                    </li>
                    <li class="nav-item ">
                        <button type="button" class="btn btn-outline-light rounded-0 px-4">Contact</button>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <div className="ask px-5">
                <h3 className='text-center text-white  my-4'>How can we help you?</h3>
                <form>
                    <div class="mb-3">
                        <input type="text" class="form-control rounded-0 py-2 opacity-50" placeholder='Search for answers'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Header
