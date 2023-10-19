import React from 'react';
import '../Composants/Assets/Css/styles.css'

const Drop = ({ title, items }) => {
  return (
    <div className="card offset-sm-3 col-sm-6 mb-3 rounded-0 border-0 shadow-sm">
      <div className="dropdown ps-2 pt-2 d-flex justify-content-between">
        <div className='text-primary titr m-1'>
          {title}
        </div>
        <button className="btn dropdown-toggle margin-5 text-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          
        </button>
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <a className="dropdown-item" href={item.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drop;

