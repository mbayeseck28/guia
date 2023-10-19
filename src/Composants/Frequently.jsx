import React from 'react'
import Drop from '../Composants-reutil/Drop'

const Frequently = () => {
    const dropdownItems = [
        { label: 'Action', link: '#test' },
        { label: 'Another action', link: '#test' },
        { label: 'Something else here', link: '#test' }
      ];
  return (
    <div className='container'>
      <h3 className='fw-semibold text-center'>Frequently asked questions</h3>
      <div className="my-5">
      <div>
        <Drop title="Do you want customer support?" items={dropdownItems} />
        <Drop title="Do you want customer support" items={dropdownItems} />
        <Drop title="Do you want customer support" items={dropdownItems} />
        <Drop title="Do you want customer support" items={dropdownItems} />
        <Drop title="Do you want customer support" items={dropdownItems} />
        <Drop title="Do you want customer support" items={dropdownItems} />
        <Drop title="Do you want customer support" items={dropdownItems} />
    </div>
      </div>

    </div>
  )
}

export default Frequently
