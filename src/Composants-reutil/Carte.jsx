import React from 'react';
import '../Composants/Assets/Css/styles.css'


const Carte = ({ title, paragraph, iconClass }) => {
  return (
    <div className="card border border-0 bg-white shadow rounded-0 p-3">
        <div className="row">
            <div className="gauche col-3">
                <i className={iconClass} id='gaucheI'></i>
            </div>
            <div className="droite col-9">
                <h5 className='fw-semibold text-primary'>{title}</h5>
                <p>{paragraph}</p>
            </div>
        </div>
    </div>
  );
};

export default Carte;
