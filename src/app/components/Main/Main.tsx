import React from 'react'
import TextImageSection from '../TextImageSection/TextImageSection'
import Note from '../Note/Note'
import Entry from '../Entry/Entry'

function Main() {
  return (
    <div className='grid gap-y-20 px-5 sm:px-10'>
        {/* Introduction text and image section */}
        <TextImageSection />
        
        {/* Note section */}
        <Note />

        {/* Academic entry section */}
        <Entry />
    </div>
  )
}

export default Main