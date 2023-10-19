import React from 'react'
import UserProfile from '../Composants-reutil/UserProfile'

const Teams = () => {
  return (
    <div className='container'>
      <h3 className='fw-semibold text-center py-4'>Didn't find an answer</h3>
      <p className='text-center text-secondary mb-5'>Our teamis just an email away and readyto answer your questions</p>
      <div className='py-sm_5 d-flex justify-content-center flex-wrap mx-sm-5 px-sm-5'>
        <UserProfile
          name="Mbaye Seck"
          role="Support"
        />
        <UserProfile
          name="Mbaye Seck"
          role="Support"
        />
        <UserProfile
          name="Mbaye Seck"
          role="Support"
        />
        <UserProfile
          name="Mbaye Seck"
          role="Support"
        />
        <UserProfile
          name="Mbaye Seck"
          role="Support"
        />
        <UserProfile
          name="Mbaye Seck"
          role="Support"
        />
        <UserProfile
          name="Mbaye Seck"
          role="Support"
        />
      </div>
      <div className='d-flex justify-content-center py-4'>
        <button type="button" class="btn btn-primary rounded-0 px-4 py-2">Contact Us</button>
      </div>
    </div>
  )
}

export default Teams
