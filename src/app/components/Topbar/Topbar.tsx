"use client"
import Link from 'next/link'
import React from 'react'

function Topbar() {
  return (
    <div>
      <Link href="/">
        <p className='text-[#191919] text-[2.5rem] text-center py-5'>STUDY<strong>table</strong></p>
      </Link>
    </div>
  )
}

export default Topbar