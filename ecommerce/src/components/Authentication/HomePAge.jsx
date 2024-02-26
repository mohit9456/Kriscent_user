import React from 'react'
import NavTop from '../Navigation/NavTop'
import Slider from '../HeroSection/Slider'
import ProductCard from '../ProductsCard/ProductCard'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import ContactForm from '../ContactForm/ContactForm'

const HomePAge = () => {
  return (
    <div>
      <NavTop />
      <Slider />
      <ProductCard />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default HomePAge
