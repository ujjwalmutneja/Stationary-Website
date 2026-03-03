import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Sparkles, PenTool, Palette, Scissors, Gift, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projectServices = [
    {
      icon: Lightbulb,
      title: 'Holiday Homework',
      description: 'Expert guidance and materials for holiday assignments',
      color: 'yellow',
      items: ['Subject assignments', 'Creative projects', 'Research work', 'Presentation support'],
    },
    {
      icon: Sparkles,
      title: 'Project Models',
      description: 'Ready-made and custom project models',
      color: 'blue',
      items: ['Science models', 'Working models', 'Display boards', 'Solar system models'],
    },
    {
      icon: PenTool,
      title: 'Chart Work',
      description: 'Professional chart making services',
      color: 'purple',
      items: ['Subject charts', 'Infographics', 'Poster making', 'Educational charts'],
    },
    {
      icon: Scissors,
      title: 'Craft Projects',
      description: 'Creative craft materials and guidance',
      color: 'pink',
      items: ['Art & craft supplies', 'DIY kits', 'Decoration items', 'Handmade projects'],
    },
    {
      icon: Palette,
      title: 'Art Supplies',
      description: 'Premium quality art materials',
      color: 'orange',
      items: ['Paints & brushes', 'Canvas & paper', 'Drawing tools', 'Art kits'],
    },
    {
      icon: Gift,
      title: 'Return Gifts',
      description: 'Unique gifts for school events',
      color: 'green',
      items: ['Birthday gifts', 'Educational toys', 'Stationery sets', 'Creative kits'],
    },
  ];

  return (
    <div data-testid="projects-page" className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-outfit text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Project & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Creative Support</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From school projects to creative gifts, we provide everything you need to excel
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {projectServices.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              yellow: 'text-yellow-600 bg-yellow-100',
              blue: 'text-blue-600 bg-blue-100',
              purple: 'text-purple-600 bg-purple-100',
              pink: 'text-pink-600 bg-pink-100',
              orange: 'text-orange-600 bg-orange-100',
              green: 'text-green-600 bg-green-100',
            };

            return (
              <motion.div
                key={service.title}
                data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-floating transition-all border border-slate-100 group"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className={`inline-flex p-4 rounded-2xl ${colorClasses[service.color]} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} />
                </div>
                <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle size={16} className="mt-0.5 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="bg-slate-50 rounded-2xl p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              School Essentials
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Everything students need for daily school life
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Notebooks', icon: '📓' },
                { name: 'Registers', icon: '📔' },
                { name: 'Exam Pads', icon: '📄' },
                { name: 'Geometry Kits', icon: '📐' },
                { name: 'Pencils & Pens', icon: '✏️' },
                { name: 'Erasers & Sharpeners', icon: '🔧' },
                { name: 'School Bags', icon: '🎒' },
                { name: 'Water Bottles', icon: '💧' },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  data-testid={`essential-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <p className="text-sm font-medium text-slate-700">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-4">
            Need Custom Project Help?
          </h2>
          <p className="text-lg mb-6 text-purple-100">
            We specialize in custom assignments and creative projects
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:9855407298"
              data-testid="cta-call-button"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-all hover:scale-105 active:scale-95"
            >
              Call: 9855407298
            </a>
            <a
              href="https://wa.me/918264890587?text=I%20need%20help%20with%20school%20project"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-whatsapp-button"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-all hover:scale-105 active:scale-95"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;