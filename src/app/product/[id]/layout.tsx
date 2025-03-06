import React from 'react'

export default function ProductLayout({children}:{children : React.ReactNode}) {
  return (
    <div>
        {children}
        <h1>Featured products</h1>
    </div>
  )
}
