import React from 'react'
import '../styles/register.scss'

const RegisterPage = () => {
  return (
    <section className='register'>
      <div className='register_content'>
        <form className='register_content_form'>
          <h1 className='register_form_title'>Register</h1>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            required
          />
          <input type='text' placeholder='Last Name' name='lastName' required />
          <input type='email' placeholder='Email' name='email' required />
          <input
            type='password'
            placeholder='Password'
            name='password'
            required
          />
          <input
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            required
          />
          <input
            type='file'
            name='profileImage'
            id='profileImage'
            accept='image/*'
            required
            style={{ display: 'none' }}
          />
          <label htmlFor='profileImage'>
            <img src='/assets/addImage.png' alt='' />
            Upload Profile Photo
          </label>
          <button type='submit'>REGISTER</button>
          <a href='/login'>Already have an account? Log in Here</a>
        </form>
      </div>
    </section>
  )
}

export default RegisterPage
