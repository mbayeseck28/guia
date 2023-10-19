import React from 'react'
import '../Composants/Assets/Css/styles.css'

const Footer = () => {
  return (
    <div className="bg-white py-5 mt-5">
        <div className='container py-5'>
            <div className="row"> 
                <div className="d-flex flex-column align-items-center ">
                    <div className="list bg-succes p-0">
                        <ul className=' me-4'>
                            <li className=''><h5><a className='text-secondary fw-semibold' href="#test">Home</a></h5></li>
                            <li><h5><a className='text-secondary fw-semibold' href="#test">Changelog </a></h5></li>
                            <li><h5><a className='text-secondary fw-semibold' href="#test">Contact </a></h5></li>
                        </ul>
                    </div>
                    <div className="icons mb-3">
                        <a href="#test"><i class="fa fa-twitter text-secondary"></i></a>
                        <a href="#test"><i class="fa fa-facebook text-secondary"></i></a>
                        <a href="#test"><i class="fa fa-instagram text-secondary"></i></a>
                        <a href="#test"><i class="fa fa-pinterest text-secondary"></i></a>
                    </div>
                    <div>
                        <p className='text-secondary'>Made by a Driffer in Antigua Guatemala</p>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Footer
