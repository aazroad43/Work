import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0e0e0d] text-white">
      
      {/* Banner / Hero Section */}
      <div className="relative h-[40vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80&fit=crop" 
          alt="Contact Banner" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-5">
          <p className="font-['Montserrat'] text-[12px] tracking-[0.4em] uppercase text-white/70 mb-4">
            VISIT OUR STUDIO
          </p>
          <h1 className="font-['Barlow'] sans-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Let's Create<br />Together
          </h1>
          <p className="mt-6 text-lg font-['Montserrat']  text-white/80 max-w-md mx-auto">
            Reach out to discuss your dream project
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 lg:px-16 py-20">
        
        {/* Form Section */}
        <div className="mb-10 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="font-['Barlow'] text-4xl font-semibold mb-3">Get In Touch</h2>
            <p className="text-white/70 font-['Montserrat']">Our team will respond within 24 hours</p>
          </div>

          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:border-white outline-none transition-colors font-['Montserrat']"
                  placeholder="First Name *"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:border-white outline-none transition-colors font-['Montserrat']"
                  placeholder="Last Name *"
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:border-white outline-none transition-colors font-['Montserrat']"
                placeholder="Email Address *"
              />
            </div>

            <div>
              <input
                type="tel"
                className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:border-white outline-none transition-colors font-['Montserrat']"
                placeholder="Phone Number *"
              />
            </div>

            <div>
              <textarea
                rows="5"
                className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:border-white outline-none transition-colors resize-none font-['Montserrat']"
                placeholder="Message *"
              />
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-white text-black px-14 py-4 rounded-full font-['Montserrat'] text-sm tracking-widest uppercase hover:bg-white/90 transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div>
          <h3 className="font-['Montserrat'] text-sm tracking-[0.2em] uppercase text-white/50 mb-6 text-center">
            OUR LOCATION
          </h3>
          
          <div className="bg-white/5 p-2 rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0000000000005!2d76.2675!3d10.850000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a5b5b5b5b5%3A0x1234567890abcdef!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1690000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>

          <div className="mt-8 text-center text-white/60 text-sm">
            <p className="font-medium text-white">Thuis Builders</p>
            <p>Kochi / Calicut, Kerala, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;