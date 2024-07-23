import React from 'react'
import KeyFeatures from './KeyFeatures/KeyFeatures'
import HowHelp from './HowHelp/HowHelp'
import HeroSection from './HeroSection/HeroSection'

const Homepage = () => {
    return (
        <section className='w-full'>
            <HeroSection />
            <HowHelp />
            <KeyFeatures />
        </section>
    )
}

export default Homepage