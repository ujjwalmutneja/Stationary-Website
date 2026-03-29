// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Gift } from 'lucide-react';
// import { BookOpen, Palette, Briefcase, Award, Phone, MapPin, ArrowRight } from 'lucide-react';

// const Home = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 40 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const floatingCards = [
//     {
//       icon: BookOpen,
//       title: 'PSEB Books',
//       subtitle: 'Complete Textbooks & Guides',
//       color: 'from-blue-500 to-blue-700',
//       bgColor: 'bg-blue-600',
//       link: '/pseb-books',
//     },
//     {
//       icon: Palette,
//       title: 'Art Supplies',
//       subtitle: 'Creative Corner',
//       color: 'from-orange-500 to-orange-700',
//       bgColor: 'bg-orange-600',
//       link: '/projects',
//     },
//     {
//       icon: Briefcase,
//       title: 'Projects',
//       subtitle: 'School Work',
//       color: 'from-green-500 to-green-700',
//       bgColor: 'bg-green-600',
//       link: '/projects',
//     },
//       {
//       icon: Briefcase,
//       title: 'Creative Gifts For Children',
//       subtitle: 'Unique School & Birthday Gifts',
//       color: 'from-purple-500 to-purple-700',
//       bgColor: 'bg-purple-600',
//       link: '/creative-gifts',
//     },
//   ];

//   const products = [
//     {
//       title: 'PSEB Books',
//       description: 'Complete range of Punjab Board textbooks, guides, and reference materials',
//       image: 'https://images.unsplash.com/photo-1633707392225-d883c8cd3e99?crop=entropy&cs=srgb&fm=jpg&q=85',
//       icon: BookOpen,
//       color: 'text-blue-600',
//       items: ['Subject Books', 'Guides & Solutions', 'Guess Papers', 'Lab Manuals'],
//     },
//     {
//       title: 'Art Supplies',
//       description: 'Premium quality art materials for creative expression and school projects',
//       image: 'https://images.unsplash.com/photo-1768066760498-d0e552612aba?crop=entropy&cs=srgb&fm=jpg&q=85',
//       icon: Palette,
//       color: 'text-orange-600',
//       items: ['Paint & Brushes', 'Canvas & Paper', 'Craft Materials', 'Art Kits'],
//     },
//     {
//       title: 'Projects',
//       description: 'Expert help with school projects, models, and practical assignments',
//       image: 'https://images.unsplash.com/photo-1711560217836-f42ac4a11a4f?crop=entropy&cs=srgb&fm=jpg&q=85',
//       icon: Briefcase,
//       color: 'text-green-600',
//       items: ['Holiday Homework', 'Project Models', 'Chart Work', 'Practical Files'],
//     },
// {
//   title: 'Creative Gifts for Kids',
//   description: 'Fun, educational and birthday gift items specially curated for children',
//   image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=srgb&fm=jpg&q=85',
//   icon: Gift,
//   color: 'text-pink-600',
//   items: [
//     'Birthday Gift Packs',
//     'Educational Toys',
//     'Return Gift Combos',
//     'School Prize Items'
//   ],
// }
//   ];

//   return (
//     <div data-testid="home-page">
//       <section
//         data-testid="hero-section"
//         className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
//       >
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage:
//               'url(https://images.unsplash.com/photo-1632132142617-d56d8727c303?crop=entropy&cs=srgb&fm=jpg&q=85)',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="absolute inset-0 bg-slate-900/70" />
//         </div>

//         <div className="relative z-10 container mx-auto px-4 py-20">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//             <motion.div
//               className="flex-1 text-white"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <motion.div
//                 className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/30 to-yellow-500/30 backdrop-blur-sm border border-white/20"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 <Award className="text-yellow-400" size={20} />
//                 <span className="text-sm font-medium">#1 Trusted in Jalandhar</span>
//               </motion.div>

//               <h1 className="font-outfit text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//                 Where Learning{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
//                   Meets Creativity
//                 </span>
//               </h1>

//               <p className="text-lg md:text-xl text-slate-200 mb-4 max-w-2xl">
//                 Your one-stop destination for{' '}
//                 <span className="text-blue-400 font-semibold">PSEB books</span>, school essentials,
//                 project work & creative gifts in Jalandhar.
//               </p>

//               <p className="text-secondary font-outfit text-lg mb-8">
//                 Complete School Solutions • Quality Products • Affordable Prices
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <a
//                   href="tel:9855407298"
//                   data-testid="hero-call-button"
//                   className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 font-medium"
//                 >
//                   <Phone size={20} />
//                   Call Now
//                 </a>
//                 <a
//                   href="https://wa.me/918264890587"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   data-testid="hero-whatsapp-button"
//                   className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full hover:bg-white/30 transition-all hover:scale-105 active:scale-95 font-medium"
//                 >
//                   WhatsApp
//                 </a>
//                 <a
//                   href="https://maps.app.goo.gl/Htxo6oiN5L1u3Qft9"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   data-testid="hero-directions-button"
//                   className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full hover:bg-white/30 transition-all hover:scale-105 active:scale-95 font-medium"
//                 >
//                   <MapPin size={20} />
//                   Get Directions
//                 </a>
//               </div>
//             </motion.div>

//             <motion.div
//               className="flex-1 relative h-[500px] hidden md:block"
//               variants={staggerContainer}
//               initial="initial"
//               animate="animate"
//             >
//               {floatingCards.map((card, index) => {
//                 const Icon = card.icon;
//                 return (
//                   <motion.div
//                     key={card.title}
//                     variants={fadeInUp}
//                     whileHover={{ y: -10, scale: 1.05 }}
//                     className="absolute"
//                     style={{
//                       top: `${index * 120 + 50}px`,
//                       right: `${index % 2 === 0 ? 0 : 80}px`,
//                     }}
//                   >
//                     <Link
//                       to={card.link}
//                       data-testid={`floating-card-${card.title.toLowerCase().replace(' ', '-')}`}
//                       className={`block w-64 p-6 rounded-2xl ${card.bgColor} text-white shadow-2xl backdrop-blur-md border border-white/20 hover:shadow-glow transition-all`}
//                     >
//                       <Icon size={40} className="mb-3" />
//                       <h3 className="font-outfit text-2xl font-bold">{card.title}</h3>
//                       <p className="text-sm opacity-90">{card.subtitle}</p>
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </div>

//           <motion.div
//             className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//           >
//             <div className="text-white text-center">
//               <p className="text-sm mb-2">Scroll to explore</p>
//               <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex items-start justify-center p-2">
//                 <motion.div
//                   className="w-1.5 h-1.5 bg-white rounded-full"
//                   animate={{ y: [0, 12, 0] }}
//                   transition={{ repeat: Infinity, duration: 1.5 }}
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section data-testid="products-section" className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="font-outfit text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//               Our Product Range
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               From textbooks to art supplies, we have everything students need
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             {products.map((product, index) => {
//               const Icon = product.icon;
//               return (
//                 <motion.div
//                   key={product.title}
//                   variants={fadeInUp}
//                   data-testid={`product-card-${product.title.toLowerCase().replace(' ', '-')}`}
//                   className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-all duration-300 border border-slate-100"
//                   whileHover={{ y: -8 }}
//                 >
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                     <div className="absolute bottom-4 left-4">
//                       <div className={`p-3 bg-white rounded-full ${product.color}`}>
//                         <Icon size={32} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-2">
//                       {product.title}
//                     </h3>
//                     <p className="text-slate-600 mb-4">{product.description}</p>
//                     <ul className="space-y-2">
//                       {product.items.map((item, i) => (
//                         <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
//                           <ArrowRight size={16} className={product.color} />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       <section data-testid="about-section" className="py-20 bg-slate-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="font-outfit text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                 Why Choose Us?
//               </h2>
//               <p className="text-lg text-slate-600 mb-6">
//                 For over years, Naresh Book Depot has been Jalandhar's trusted partner for quality
//                 educational materials and school supplies.
//               </p>
//               <div className="space-y-4">
//                 {[
//                   'Complete PSEB book collection (All Classes & Subjects)',
//                   'Expert guidance for school projects',
//                   'Quality art supplies and stationery',
//                   'Affordable prices for all students',
//                   'Convenient location near Government School',
//                 ].map((feature, i) => (
//                   <div key={i} className="flex items-start gap-3">
//                     <div className="p-1 bg-blue-100 rounded-full mt-1">
//                       <Award size={16} className="text-blue-600" />
//                     </div>
//                     <p className="text-slate-700">{feature}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="relative"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1771512420296-f439ac705a39?crop=entropy&cs=srgb&fm=jpg&q=85"
//                 alt="Store interior"
//                 className="rounded-2xl shadow-2xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


//////////////bbbbbbbbb

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Gift } from 'lucide-react';
// import { BookOpen, Palette, Briefcase, Award, Phone, MapPin, ArrowRight } from 'lucide-react';

// const Home = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 40 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const floatingCards = [
//     {
//       icon: BookOpen,
//       title: 'PSEB Books',
//       subtitle: 'Complete Textbooks & Guides',
//       color: 'from-blue-500 to-blue-700',
//       bgColor: 'bg-blue-600',
//       link: '/pseb-books',
//     },
//     {
//       icon: Palette,
//       title: 'Art Supplies',
//       subtitle: 'Creative Corner',
//       color: 'from-orange-500 to-orange-700',
//       bgColor: 'bg-orange-600',
//       link: '/projects',
//     },
//     {
//       icon: Briefcase,
//       title: 'Projects',
//       subtitle: 'School Work',
//       color: 'from-green-500 to-green-700',
//       bgColor: 'bg-green-600',
//       link: '/projects',
//     },
//       {
//       icon: Briefcase,
//       title: 'Creative Gifts For Children',
//       subtitle: 'Unique School & Birthday Gifts',
//       color: 'from-purple-500 to-purple-700',
//       bgColor: 'bg-purple-600',
//       link: '/creative-gifts',
//     },
//   ];

//   const products = [
//     {
//       title: 'PSEB Books',
//       description: 'Complete range of Punjab Board textbooks, guides, and reference materials',
//       image: 'https://images.unsplash.com/photo-1633707392225-d883c8cd3e99?crop=entropy&cs=srgb&fm=jpg&q=85',
//       icon: BookOpen,
//       color: 'text-blue-600',
//       items: ['Subject Books', 'Guides & Solutions', 'Guess Papers', 'Lab Manuals'],
//     },
//     {
//       title: 'Art Supplies',
//       description: 'Premium quality art materials for creative expression and school projects',
//       image: 'https://images.unsplash.com/photo-1768066760498-d0e552612aba?crop=entropy&cs=srgb&fm=jpg&q=85',
//       icon: Palette,
//       color: 'text-orange-600',
//       items: ['Paint & Brushes', 'Canvas & Paper', 'Craft Materials', 'Art Kits'],
//     },
//     {
//       title: 'Projects',
//       description: 'Expert help with school projects, models, and practical assignments',
//       image: 'https://images.unsplash.com/photo-1711560217836-f42ac4a11a4f?crop=entropy&cs=srgb&fm=jpg&q=85',
//       icon: Briefcase,
//       color: 'text-green-600',
//       items: ['Holiday Homework', 'Project Models', 'Chart Work', 'Practical Files'],
//     },
// {
//   title: 'Creative Gifts for Kids',
//   description: 'Fun, educational and birthday gift items specially curated for children',
//   image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=srgb&fm=jpg&q=85',
//   icon: Gift,
//   color: 'text-pink-600',
//   items: [
//     'Birthday Gift Packs',
//     'Educational Toys',
//     'Return Gift Combos',
//     'School Prize Items'
//   ],
// }
//   ];

//   return (
//     <div data-testid="home-page">
//       <section
//         data-testid="hero-section"
//         className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
//       >
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage:
//               'url(https://images.unsplash.com/photo-1632132142617-d56d8727c303?crop=entropy&cs=srgb&fm=jpg&q=85)',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="absolute inset-0 bg-slate-900/70" />
//         </div>

//         <div className="relative z-10 container mx-auto px-4 py-20">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//             <motion.div
//               className="flex-1 text-white"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <motion.div
//                 className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/30 to-yellow-500/30 backdrop-blur-sm border border-white/20"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 <Award className="text-yellow-400" size={20} />
//                 <span className="text-sm font-medium">#1 Trusted in Jalandhar</span>
//               </motion.div>

//               <h1 className="font-outfit text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//                 Where Learning{' '}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
//                   Meets Creativity
//                 </span>
//               </h1>

//               <p className="text-lg md:text-xl text-slate-200 mb-4 max-w-2xl">
//                 Your one-stop destination for{' '}
//                 <span className="text-blue-400 font-semibold">PSEB books</span>, school essentials,
//                 project work & creative gifts in Jalandhar.
//               </p>

//               <p className="text-secondary font-outfit text-lg mb-8">
//                 Complete School Solutions • Quality Products • Affordable Prices
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <a
//                   href="tel:9855407298"
//                   data-testid="hero-call-button"
//                   className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 font-medium"
//                 >
//                   <Phone size={20} />
//                   Call Now
//                 </a>
//                 <a
//                   href="https://wa.me/918264890587"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   data-testid="hero-whatsapp-button"
//                   className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full hover:bg-white/30 transition-all hover:scale-105 active:scale-95 font-medium"
//                 >
//                   WhatsApp
//                 </a>
//                 <a
//                   href="https://maps.app.goo.gl/Htxo6oiN5L1u3Qft9"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   data-testid="hero-directions-button"
//                   className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full hover:bg-white/30 transition-all hover:scale-105 active:scale-95 font-medium"
//                 >
//                   <MapPin size={20} />
//                   Get Directions
//                 </a>
//               </div>
//             </motion.div>

//             <motion.div
//               className="flex-1 relative h-[500px] hidden md:block"
//               variants={staggerContainer}
//               initial="initial"
//               animate="animate"
//             >
//               {floatingCards.map((card, index) => {
//                 const Icon = card.icon;
//                 return (
//                   <motion.div
//                     key={card.title}
//                     variants={fadeInUp}
//                     whileHover={{ y: -10, scale: 1.05 }}
//                     className="absolute"
//                     style={{
//                       top: `${index * 120 + 50}px`,
//                       right: `${index % 2 === 0 ? 0 : 80}px`,
//                     }}
//                   >
//                     <Link
//                       to={card.link}
//                       data-testid={`floating-card-${card.title.toLowerCase().replace(' ', '-')}`}
//                       className={`block w-64 p-6 rounded-2xl ${card.bgColor} text-white shadow-2xl backdrop-blur-md border border-white/20 hover:shadow-glow transition-all`}
//                     >
//                       <Icon size={40} className="mb-3" />
//                       <h3 className="font-outfit text-2xl font-bold">{card.title}</h3>
//                       <p className="text-sm opacity-90">{card.subtitle}</p>
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </div>

//           <motion.div
//             className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//           >
//             <div className="text-white text-center">
//               <p className="text-sm mb-2">Scroll to explore</p>
//               <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex items-start justify-center p-2">
//                 <motion.div
//                   className="w-1.5 h-1.5 bg-white rounded-full"
//                   animate={{ y: [0, 12, 0] }}
//                   transition={{ repeat: Infinity, duration: 1.5 }}
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section data-testid="products-section" className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="font-outfit text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//               Our Product Range
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               From textbooks to art supplies, we have everything students need
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             {products.map((product, index) => {
//               const Icon = product.icon;
//               return (
//                 <motion.div
//                   key={product.title}
//                   variants={fadeInUp}
//                   data-testid={`product-card-${product.title.toLowerCase().replace(' ', '-')}`}
//                   className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-all duration-300 border border-slate-100"
//                   whileHover={{ y: -8 }}
//                 >
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                     <div className="absolute bottom-4 left-4">
//                       <div className={`p-3 bg-white rounded-full ${product.color}`}>
//                         <Icon size={32} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-2">
//                       {product.title}
//                     </h3>
//                     <p className="text-slate-600 mb-4">{product.description}</p>
//                     <ul className="space-y-2">
//                       {product.items.map((item, i) => (
//                         <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
//                           <ArrowRight size={16} className={product.color} />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       <section data-testid="about-section" className="py-20 bg-slate-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="font-outfit text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                 Why Choose Us?
//               </h2>
//               <p className="text-lg text-slate-600 mb-6">
//                 For over years, Naresh Book Depot has been Jalandhar's trusted partner for quality
//                 educational materials and school supplies.
//               </p>
//               <div className="space-y-4">
//                 {[
//                   'Complete PSEB book collection (All Classes & Subjects)',
//                   'Expert guidance for school projects',
//                   'Quality art supplies and stationery',
//                   'Affordable prices for all students',
//                   'Convenient location near Government School',
//                 ].map((feature, i) => (
//                   <div key={i} className="flex items-start gap-3">
//                     <div className="p-1 bg-blue-100 rounded-full mt-1">
//                       <Award size={16} className="text-blue-600" />
//                     </div>
//                     <p className="text-slate-700">{feature}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="relative"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1771512420296-f439ac705a39?crop=entropy&cs=srgb&fm=jpg&q=85"
//                 alt="Store interior"
//                 className="rounded-2xl shadow-2xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

////ccccccc
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gift, BookOpen, Palette, Briefcase, Award, Phone, MapPin, ArrowRight } from 'lucide-react';

const Home = () => {

  /* ================= ANNOUNCEMENT STATE ================= */
  const [announcement, setAnnouncement] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  /* ================= FETCH ANNOUNCEMENT ================= */
 useEffect(() => {
  const fetchAnnouncement = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/announcement/active`);
      const data = await res.json();

      if (!data) return;

      

      setAnnouncement(data);

      const today = new Date().toDateString();
      const lastSeenDate = localStorage.getItem("announcementLastSeen");

      // Agar aaj already dekha hai → show mat karo
      if (lastSeenDate === today) return;

      setShowModal(true);

    } catch (err) {
      console.error("Announcement fetch error:", err);
    }
  };

  fetchAnnouncement();
}, []);

  /* ================= COUNTDOWN TIMER ================= */
  useEffect(() => {
    if (!announcement?.expiryDate) return;

    const interval = setInterval(() => {
      const now = new Date();
      const expiry = new Date(announcement.expiryDate);
      const diff = expiry - now;

      if (diff <= 0) {
        clearInterval(interval);
        setShowModal(false);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m left`);
    }, 1000);

    return () => clearInterval(interval);
  }, [announcement]);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const floatingCards = [
    {
      icon: BookOpen,
      title: 'PSEB Books',
      subtitle: 'Complete Textbooks & Guides',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-600',
      link: '/pseb-books',
    },
    {
      icon: Palette,
      title: 'Art Supplies',
      subtitle: 'Creative Corner',
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-600',
      link: '/projects',
    },
    {
      icon: Briefcase,
      title: 'Projects',
      subtitle: 'School Work',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-600',
      link: '/projects',
    },
      {
      icon: Briefcase,
      title: 'Creative Gifts For Children',
      subtitle: 'Unique School & Birthday Gifts',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-600',
      link: '/creative-gifts',
    },
  ];


  
  const products = [
    {
        title: 'PSEB & CBSE Books',
        description: 'Complete range of PSEB books, guides, and reference materials, along with CBSE essentials for 9th and 10th classes',
      image: 'https://images.unsplash.com/photo-1633707392225-d883c8cd3e99?crop=entropy&cs=srgb&fm=jpg&q=85',
      icon: BookOpen,
      color: 'text-blue-600',
       link: '/pseb-books', 
      items: ['Subject Books', 'Guides & Solutions', 'Guess Papers', 'Lab Manuals'],
    },
    {
      title: 'Art Supplies',
      description: 'Premium quality art materials for creative expression and school projects',
      image: 'https://images.unsplash.com/photo-1768066760498-d0e552612aba?crop=entropy&cs=srgb&fm=jpg&q=85',
      icon: Palette,
      color: 'text-orange-600',
        link: '/projects',
      items: ['Paint & Brushes', 'Canvas & Paper', 'Craft Materials', 'Art Kits'],
    },
    {
      title: 'Projects',
      description: 'Expert help with school projects, models, and practical assignments',
      image: 'https://images.unsplash.com/photo-1711560217836-f42ac4a11a4f?crop=entropy&cs=srgb&fm=jpg&q=85',
      icon: Briefcase,
      color: 'text-green-600',
        link: '/projects',
      items: ['Holiday Homework', 'Project Models', 'Chart Work', 'Practical Files'],
    },
{
  title: 'Creative Gifts for Kids',
  description: 'Fun, educational and birthday gift items specially curated for children',
  image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=srgb&fm=jpg&q=85',
  icon: Gift,
  color: 'text-pink-600',
  link: '/creative-gifts',
  items: [
    'Birthday Gift Packs',
    'Educational Toys',
    'Return Gift Combos',
    'School Prize Items'
  ],
}
  ];

  return (
    <div data-testid="home-page">

      {/* ================= ANNOUNCEMENT MODAL ================= */}
      {showModal && announcement && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-8 max-w-lg w-[90%] relative shadow-2xl"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-center mb-4">
              {announcement.title}
            </h2>

          {announcement.message.split('\\n').map((line, i) => (
  <p
    key={i}
    className="text-gray-600 text-center text-[15px] leading-7 mb-2"
  >
    {line}
  </p>
))}

            {timeLeft && (
              <div className="text-center text-red-500 font-semibold mb-6">
                ⏳ {timeLeft}
              </div>
            )}

            <button
            onClick={() => {
  const today = new Date().toDateString();
  localStorage.setItem("announcementLastSeen", today);
  setShowModal(false);
}}
              className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
            >
              Okay
            </button>
          </motion.div>
        </div>
      )}

      {/* ================= HERO SECTION ================= */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1632132142617-d56d8727c303?crop=entropy&cs=srgb&fm=jpg&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="flex-1 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500/30 to-yellow-500/30 backdrop-blur-sm border border-white/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Award className="text-yellow-400" size={20} />
                <span className="text-sm font-medium">#1 Trusted in Jalandhar</span>
              </motion.div>

              <h1 className="font-outfit text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                Where Learning{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
                  Meets Creativity
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-200 mb-4 max-w-2xl">
                Your one-stop destination for{' '}
                <span className="text-blue-400 font-semibold">PSEB books</span>, school essentials,
                 project work & creative gifts in Jalandhar.
              </p>

                  <p className="text-secondary font-outfit text-lg mb-8">
 
                Complete School Solutions • Quality Products • Affordable Prices
 
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:9855407298"
                  data-testid="hero-call-button"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 font-medium"
                >
                  <Phone size={20} />
                  Call Now
                </a>

    
                <a
                  href="https://wa.me/918264890587"
 
                  target="_blank"
 
                  rel="noopener noreferrer"
 
                  data-testid="hero-whatsapp-button"
 
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full hover:bg-white/30 transition-all hover:scale-105 active:scale-95 font-medium"
 
                >
 
                  WhatsApp
 
                </a>

                <a
                  href="https://maps.app.goo.gl/Htxo6oiN5L1u3Qft9"
                  target="_blank"
                  rel="noopener noreferrer"
                   data-testid="hero-directions-button"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full hover:bg-white/30 transition-all hover:scale-105 active:scale-95 font-medium"
                >
                  <MapPin size={20} />
                  Get Directions
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 relative h-[500px] hidden md:block"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
                         {floatingCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    variants={fadeInUp}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="absolute"
                    style={{
                      top: `${index * 120 + 50}px`,
                      right: `${index % 2 === 0 ? 0 : 80}px`,
                    }}
                  >
                    <Link
                      to={card.link}
                      data-testid={`floating-card-${card.title.toLowerCase().replace(' ', '-')}`}
                      className={`block w-64 p-6 rounded-2xl ${card.bgColor} text-white shadow-2xl backdrop-blur-md border border-white/20 hover:shadow-glow transition-all`}
                    >
                      <Icon size={40} className="mb-3" />
                      <h3 className="font-outfit text-2xl font-bold">{card.title}</h3>
                      <p className="text-sm opacity-90">{card.subtitle}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="text-white text-center">
              <p className="text-sm mb-2">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex items-start justify-center p-2">
                <motion.div
                  className="w-1.5 h-1.5 bg-white rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
          <section data-testid="products-section" className="py-20 bg-white">
       <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From textbooks to art supplies, we have everything students need
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                 <Link to={product.link} key={product.title}>
                <motion.div
                  key={product.title}
                  variants={fadeInUp}
                  data-testid={`product-card-${product.title.toLowerCase().replace(' ', '-')}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-all duration-300 border border-slate-100"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className={`p-3 bg-white rounded-full ${product.color}`}>
                        <Icon size={32} />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{product.description}</p>
                    <ul className="space-y-2">
                      {product.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <ArrowRight size={16} className={product.color} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section data-testid="about-section" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-outfit text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                For over years, Naresh Book Depot has been Jalandhar's trusted partner for quality
                educational materials and school supplies.
              </p>
              <div className="space-y-4">
                {[
                  'Complete PSEB book collection (All Classes & Subjects)',
                  'Expert guidance for school projects',
                  'Quality art supplies and stationery',
                  'Affordable prices for all students',
                  'Convenient location near Government School',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-1 bg-blue-100 rounded-full mt-1">
                      <Award size={16} className="text-blue-600" />
                    </div>
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1771512420296-f439ac705a39?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Store interior"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;