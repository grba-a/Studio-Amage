export default function VideoSection() {
  return (
    <section style={{ backgroundColor: '#f4ece4', padding: '60px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0' }}>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src="https://player.vimeo.com/video/1172647016?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
            style={{
              position: 'absolute',
              top:      0,
              left:     0,
              width:    '100%',
              height:   '100%',
              border:   'none',
            }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Studio Amage - promo"
          />
        </div>
      </div>
    </section>
  )
}
