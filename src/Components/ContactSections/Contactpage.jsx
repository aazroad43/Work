import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919526211252" 

    const message = `📬 *New Enquiry*

👤 *Name:* ${formData.firstName} ${formData.lastName}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}

💬 *Message:*
${formData.message}

🕐 Sent via Website Contact Form`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0e0e0d] text-white">
      {" "}
      <div className="relative h-[40vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        {" "}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80&fit=crop"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        ```
        <div className="relative z-10 text-center px-5">
          <p className="font-['Montserrat'] text-[12px] tracking-[0.4em] uppercase text-white/70 mb-4">
            VISIT OUR STUDIO
          </p>

          <h1 className="font-['Barlow'] text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Let's Create
            <br />
            Together
          </h1>

          <p className="mt-6 text-lg font-['Montserrat'] text-white/80 max-md mx-auto">
            Reach out to discuss your dream project
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-5 lg:px-16 py-20">
        <div className="mb-10 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="font-['Barlow'] text-4xl font-semibold mb-3">
              Get In Touch
            </h2>

            <p className="text-white/70 font-['Montserrat']">
              Our team will respond within 24 hours
            </p>
          </div>

          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:border-white outline-none transition-colors font-['Montserrat']"
                  placeholder="First Name *"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:border-white outline-none transition-colors font-['Montserrat']"
                  placeholder="Last Name *"
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:border-white outline-none transition-colors font-['Montserrat']"
                placeholder="Email Address *"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 pb-4 text-lg focus:border-white outline-none transition-colors font-['Montserrat']"
                placeholder="Phone Number *"
              />
            </div>

            <div>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
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

        <div>
          <h3 className="font-['Montserrat'] text-sm tracking-[0.2em] uppercase text-white/50 mb-6 text-center">
            OUR LOCATION
          </h3>

          <div>
            <iframe
              src="https://maps.google.com/maps?q=Chenguvetty%20Kottakkal%20Malappuram%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-2xl"
            />

            <p className="mt-3 text-center text-white">
              Chenguvetty, Kottakkal, Malappuram
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;