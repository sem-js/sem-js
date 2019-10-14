import React from 'react'

export default function SponsorForm() {
  const handleSubmit = event => {
    event.preventDefault()
    const companyName = event.target.companyName.value
    const contactName = event.target.contactName.value
    const contactEmail = event.target.contactEmail.value
    const notes = event.target.notes.value
    // send these values somewhere
  }
  return (
    <form className='sponsor-form' onSubmit={handleSubmit}>
      <label htmlFor='companyName'>Company Name</label>
      <input name='companyName' type='text'/>
      <label htmlFor='contactName'>Contact Name</label>
      <input name='contactName' type='text'/>
      <label htmlFor='contactEmail'>Contact Email</label>
      <input name='contactEmail' type='email'/>
      <label htmlFor='notes'>Notes?</label>
      <textarea name='notes' placeholder='Additional notes?'/>
      <button type='submit' className='form-submit'>Submit</button>
    </form>
  )
}
