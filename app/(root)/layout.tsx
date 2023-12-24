import React from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <meta name="google-adsense-account" content="ca-pub-4859791566235198"></meta>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout