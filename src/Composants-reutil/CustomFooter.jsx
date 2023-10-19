import React from 'react';

const CustomFooter = ({ links, icons, madeByText }) => {
    return (
    
        <div className="bg-white py-5 mt-5">
            <div className="row">
              <div className="col-ms-4 d-flex flex-column align-items-center">
                <div className="list">
                  <ul className='bg-primary'>
                    {links.map((link, index) => (
                      <li key={index}>
                        <p><a className='text-secondary' href={link.href}>{link.text}</a></p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="icons mb-3">
                  {icons.map((icon, index) => (
                    <a key={index} href={icon.href}><i className={`fa ${icon.iconClass} text-secondary`}></i></a>
                  ))}
                </div>
                <div>
                  <p className='text-secondary'>{madeByText}</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default CustomFooter;