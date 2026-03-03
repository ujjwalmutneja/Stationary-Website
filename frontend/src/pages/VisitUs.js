import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const VisitUs = () => {
  return (
    <div data-testid="visit-us-page" className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-outfit text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Visit <span className="text-blue-600">Our Store</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conveniently located near Arya Senior Secondary School in Jalandhar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-card border border-slate-100 h-full">
              <h2 className="font-outfit text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600">
                      Near Arya Senior Secondary School, NG Nagar<br />
                      Basti Guzan, Jalandhar<br />
                      Punjab 144002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone Numbers</h3>
                    <p className="text-slate-600">
                      <a href="tel:9855407298" className="hover:text-blue-600">9855407298</a><br />
                      <a href="https://wa.me/918264890587" className="hover:text-green-600">8264890587 (WhatsApp)</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Clock className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Store Hours</h3>
                    <p className="text-slate-600">
                      Monday - Saturday: 7:30 AM - 9:30 PM<br />
                      Sunday: 10:00 AM - 9:30 PM
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://maps.app.goo.gl/Htxo6oiN5L1u3Qft9"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="directions-button"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 font-medium w-full justify-center"
                  >
                    <Navigation size={20} />
                    Get Directions on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100 h-full">
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <iframe
                  data-testid="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.0!2d75.5762!3d31.3260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDE5JzMzLjYiTiA3NcKwMzQnMzQuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Naresh Book Depot Location"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-4">
            Landmarks for Easy Navigation
          </h2>
          <p className="text-lg mb-6 text-slate-300">
            We're easy to find! Look for these nearby landmarks:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="font-medium">🏫 Near Arya Senior Secondary School</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="font-medium">📍Board Thalla, NG Nagar Area</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="font-medium">🏘️ Basti Guzan</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisitUs;