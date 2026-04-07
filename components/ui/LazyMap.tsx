'use client'

import { useEffect, useRef, useState } from 'react'

export default function LazyMap() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    if (mapRef.current) observer.observe(mapRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={mapRef}>
      {mapLoaded ? (
        <iframe
          src="https://maps.google.com/maps?q=Trenkova+ulica+74,+Split,+Croatia&output=embed&z=16"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '12px', display: 'block' }}
          title="Studio Amage lokacija na Google mapi"
        />
      ) : (
        <div style={{ height: '400px', borderRadius: '12px', background: '#f4ece4' }} />
      )}
    </div>
  )
}
