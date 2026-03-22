import type { Metadata } from 'next'
import HeroSlider      from '@/components/sections/HeroSlider'
import VideoSection    from '@/components/sections/VideoSection'
import SalonPreview    from '@/components/sections/SalonPreview'
import BioSection      from '@/components/sections/BioSection'
import LocationSection from '@/components/sections/LocationSection'
import ReviewsSection  from '@/components/sections/ReviewsSection'
import FAQSection      from '@/components/sections/FAQSection'
import ContactForm     from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Studio Amage',
  description: 'Studio Amage — profesionalni frizerski salon u Splitu. Rezerviraj termin online.',
}

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <VideoSection />
      <SalonPreview />
      <BioSection />
      <LocationSection />
      <ReviewsSection />
      <FAQSection />
      <ContactForm />
    </main>
  )
}
