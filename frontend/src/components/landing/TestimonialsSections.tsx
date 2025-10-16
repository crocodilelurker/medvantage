import React from 'react'

const TestimonialsSections = () => {
  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-background'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-primary mb-4'>
            Our Patients Love Us
          </h2>

          <div className='flex items-center justify-center gap-2 mb-4 '>
            <span className='tetx-2xl font-bold text-foreground'>
              4.8
            </span>
            <div className='flex text-yellow-500'>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className='text-muted-foreground'>
              52K+ Reviews
            </span>
          </div>
        </div>

        {/* testimonalgrids */}
      </div>
    </section>
  )
}

export default TestimonialsSections