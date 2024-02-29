import React, { useState } from 'react'
import '../styles/register.scss'

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === 'profileImage' ? files[0] : value,
    })
  }

  return (
    <section className='register'>
      <div className='register_content'>
        <form className='register_content_form'>
          <h1 className='register_form_title'>Register</h1>
          <input
            onChange={handleChange}
            type='text'
            placeholder='First Name'
            name='firstName'
            required
            value={formData.firstName}
          />
          <input
            onChange={handleChange}
            type='text'
            value={formData.lastName}
            placeholder='Last Name'
            name='lastName'
            required
          />
          <input
            onChange={handleChange}
            type='email'
            placeholder='Email'
            value={formData.email}
            name='email'
            required
          />
          <input
            onChange={handleChange}
            type='password'
            placeholder='Password'
            name='password'
            value={formData.password}
            required
          />
          <input
            onChange={handleChange}
            type='password'
            value={formData.confirmPassword}
            placeholder='Confirm Password'
            name='confirmPassword'
            required
          />
          <input
            onChange={handleChange}
            type='file'
            value={formData.profileImage}
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

          {/* if image is submitted, show image */}
          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt='profile image'
              style={{ maxWidth: '80px' }}
            />
          )}
          <button type='submit'>REGISTER</button>
          <a href='/login'>Already have an account? Log in Here</a>
        </form>
      </div>
    </section>
  )
}

export default RegisterPage
