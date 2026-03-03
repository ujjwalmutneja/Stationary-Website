// import React from "react";
// import { motion } from "framer-motion";
// import { Gift, Star } from "lucide-react";

// const sections = [
//   {
//     title: "Educational Toys",
//     description:
//       "Fun and brain-boosting toys that help children learn while playing. Perfect for birthdays and school rewards.",
//     image:
//       "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Birthday Return Gifts",
//     description:
//       "Affordable and attractive return gift combos for birthday parties and school functions.",
//     image:
//       "https://images.unsplash.com/photo-1608889175481-3d5b99a4c1df?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Creative Art Kits",
//     description:
//       "Complete art kits for kids including colors, brushes, and craft supplies.",
//     image:
//       "https://images.unsplash.com/photo-1581090700227-4c4f50a4d6a1?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// const CreativeGifts = () => {
//   return (
//     <div className="pt-24">

//       {/* Hero Banner */}
//       <section className="relative h-[80vh] flex items-center justify-center text-white">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url(https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=1600&q=80)",
//           }}
//         />
//         <div className="absolute inset-0 bg-black/60" />

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center px-4"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             Creative Gifts for Kids 🎁
//           </h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto">
//             Unique, educational & fun gift collection available at Naresh Book Depot.
//           </p>
//         </motion.div>
//       </section>

//       {/* Alternating Sections */}
//       {sections.map((section, index) => (
//         <section
//           key={index}
//           className={`py-20 ${
//             index % 2 === 0 ? "bg-white" : "bg-slate-50"
//           }`}
//         >
//           <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            
//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className={index % 2 !== 0 ? "md:order-2" : ""}
//             >
//               <img
//                 src={section.image}
//                 alt={section.title}
//                 className="rounded-3xl shadow-2xl"
//               />
//             </motion.div>

//             {/* Text */}
//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl font-bold mb-6">
//                 {section.title}
//               </h2>
//               <p className="text-slate-600 text-lg mb-6">
//                 {section.description}
//               </p>

//               <a
//                 href="https://wa.me/918264890587"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
//               >
//                 <Gift size={18} />
//                 Inquire Now
//               </a>
//             </motion.div>
//           </div>
//         </section>
//       ))}

//       {/* Bottom Highlight Section */}
//       <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="container mx-auto px-4"
//         >
//           <Star size={40} className="mx-auto mb-4" />
//           <h2 className="text-4xl font-bold mb-4">
//             Bulk Orders Available
//           </h2>
//           <p className="mb-6">
//             Special pricing for school functions, birthday parties & prize distribution.
//           </p>

//           <a
//             href="tel:9855407298"
//             className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
//           >
//             Call Now
//           </a>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default CreativeGifts;
////bbbbbbbbb
// import React from "react";
// import { motion } from "framer-motion";
// import { Gift } from "lucide-react";

// const gifts = [
//   {
//     title: "Educational Toys",
//     description:
//       "Learning toys that build creativity, focus and logical thinking skills.",
//     image:
//       "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80",
//   },
//   {
//     title: "Birthday Return Gift Packs",
//     description:
//       "Affordable and attractive return gift sets for birthday parties and school functions.",
//     image:
//       "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1600&q=80",
//   },
//   {
//     title: "Creative Art & Craft Kits",
//     description:
//       "Complete art kits including colors, brushes, craft materials and activity sets.",
//     image:
//       "https://images.unsplash.com/photo-1581090700227-4c4f50a4d6a1?auto=format&fit=crop&w=1600&q=80",
//   },
// ];

// const CreativeGifts = () => {
//   return (
//     <div className="pt-24 bg-white">

//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex items-center justify-center text-white">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url(https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=1600&q=80)",
//           }}
//         />
//         <div className="absolute inset-0 bg-black/60" />

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="relative z-10 text-center px-4"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             Creative Gifts Collection
//           </h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto">
//             Unique, educational and celebration-ready gift items available at Naresh Book Depot.
//           </p>
//         </motion.div>
//       </section>

//       {/* Showcase Sections */}
//       {gifts.map((gift, index) => (
//         <section
//           key={index}
//           className="py-24 border-b border-slate-100"
//         >
//           <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className={index % 2 !== 0 ? "md:order-2" : ""}
//             >
//               <img
//                 src={gift.image}
//                 alt={gift.title}
//                 className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
//               />
//             </motion.div>

//             {/* Text */}
//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="inline-flex items-center gap-2 mb-4 text-pink-600 font-semibold">
//                 <Gift size={18} />
//                 Kids Special
//               </div>

//               <h2 className="text-4xl font-bold mb-6">
//                 {gift.title}
//               </h2>

//               <p className="text-slate-600 text-lg mb-8">
//                 {gift.description}
//               </p>

//               <a
//                 href="https://wa.me/918264890587"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-slate-800 transition"
//               >
//                 Inquire on WhatsApp
//               </a>
//             </motion.div>

//           </div>
//         </section>
//       ))}

//       {/* Final CTA */}
//       <section className="py-24 bg-slate-900 text-white text-center">
//         <h2 className="text-4xl font-bold mb-6">
//           Bulk Gift Orders Available
//         </h2>
//         <p className="text-slate-300 mb-8">
//           Special pricing for schools, birthday parties and prize distributions.
//         </p>

//         <a
//           href="tel:9855407298"
//           className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
//         >
//           Call Now
//         </a>
//       </section>

//     </div>
//   );
// };

// export default CreativeGifts;
//////////////cccc
// import React from "react";
// import { motion } from "framer-motion";

// const toys = [
//   {
//     title: "Toy Guitar 🎸",
//     image:
//       "https://images.unsplash.com/photo-1601758064224-8b3b8d5c3f74?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Doctor Play Set 🩺",
//     image:
//       "https://images.unsplash.com/photo-1581091012184-5c9f0f1c33b0?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Creative Art Kits 🎨",
//     image:
//       "https://images.unsplash.com/photo-1581090700227-4c4f50a4d6a1?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Piggy Banks 🐷",
//     image:
//       "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Car Racing Set 🚗",
//     image:
//       "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const CreativeGifts = () => {
//   return (
//     <div className="pt-24 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 min-h-screen">

//       {/* Hero */}
//       <section className="text-center py-20 px-4">
//         <motion.h1
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-bold mb-6"
//         >
//           🎉 Kids Fun Zone
//         </motion.h1>

//         <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
//           Explore exciting toys, learning kits and fun gifts available at Naresh Book Depot!
//         </p>
//       </section>

//       {/* Toys Grid */}
//       <section className="container mx-auto px-6 pb-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

//           {toys.map((toy, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.05, rotate: 1 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-3xl shadow-xl overflow-hidden group relative"
//             >
//               {/* Image */}
//               <div className="h-64 overflow-hidden">
//                 <img
//                   src={toy.image}
//                   alt={toy.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                 />
//               </div>

//               {/* Colorful Bottom */}
//               <div className="p-6 text-center bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
//                 <h3 className="text-2xl font-bold">
//                   {toy.title}
//                 </h3>
//               </div>

//               {/* Floating Button */}
//               <a
//                 href="https://wa.me/918264890587"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-yellow-400 transition"
//               >
//                 Ask Price
//               </a>

//             </motion.div>
//           ))}

//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="text-center py-16 bg-purple-600 text-white">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           🎂 Birthday Return Gifts Available
//         </h2>
//         <p className="mb-6">
//           Special bulk pricing for birthday parties & school prize distribution.
//         </p>

//         <a
//           href="tel:9855407298"
//           className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
//         >
//           Call Now
//         </a>
//       </section>

//     </div>
//   );
// };

// export default CreativeGifts;

// import React from "react";
// import { motion } from "framer-motion";

// const toys = [
//   {
//     title: "Toy Guitar 🎸",
//     image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     title: "Doctor Play Set 🩺",
//     image: "https://images.unsplash.com/photo-1600114973938-ecf9f0f3d47d?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     title: "Creative Art Kits 🎨",
//     image: "https://images.unsplash.com/photo-1581090700227-4c4f50a4d6a1?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     title: "Piggy Banks 🐷",
//     image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     title: "Car Racing Sets 🚗",
//     image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=80",
//   },
// ];

// const CreativeGifts = () => {
//   return (
//     <div className="pt-24 min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50 relative overflow-hidden">

//       {/* Soft Color Blobs */}
//       <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 top-10 left-10" />
//       <div className="absolute w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-30 bottom-10 right-10" />

//       {/* Hero */}
//       <section className="text-center py-20 px-4 relative z-10">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-bold mb-6"
//         >
//           🎉 Kids Fun Collection
//         </motion.h1>

//         <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
//           Exciting toys, creative kits and birthday gift items available at Naresh Book Depot.
//         </p>
//       </section>

//       {/* Toys Showcase */}
//       <section className="container mx-auto px-6 pb-24 relative z-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

//           {toys.map((toy, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ y: -10 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition duration-300 group-hover:rotate-1 group-hover:scale-105">

//                 <div className="h-72 overflow-hidden">
//                   <img
//                     src={toy.image}
//                     alt={toy.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                   />
//                 </div>

//                 <div className="p-6 text-center">
//                   <h3 className="text-2xl font-bold mb-4">
//                     {toy.title}
//                   </h3>

//                   <a
//                     href="https://wa.me/918264890587"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
//                   >
//                     Ask on WhatsApp
//                   </a>
//                 </div>

//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="text-center py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
//         <h2 className="text-4xl font-bold mb-4">
//           🎂 Birthday Return Gifts Available
//         </h2>
//         <p className="mb-6">
//           Special pricing for school functions and birthday parties.
//         </p>

//         <a
//           href="tel:9855407298"
//           className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
//         >
//           Call Now
//         </a>
//       </section>

//     </div>
//   );
// };

// export default CreativeGifts;




//final 1

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const kidsProducts = [
//   {
//     title: "Mini Rock Star Guitar",
//     price: "₹899",
//     image: "/images/guitar.jpg",
//     badge: "Popular",
//   },
//   {
//     title: "Doctor Play Set",
//     price: "₹449",
//     image: "/images/doctor.jpg",
//     badge: "New",
//   },
//   {
//     title: "Mega Art & Colour Kit",
//     price: "₹649",
//     image: "/images/artkit.jpg",
//   },
//   {
//     title: "Racing Car Gift Set",
//     price: "₹349",
//     image: "/images/car.jpg",
//   },
// ];

// const teenProducts = [
//   {
//     title: "Electric Guitar Starter Kit",
//     price: "₹3,799",
//     image: "/images/electric.jpg",
//     badge: "Hot",
//   },
//   {
//     title: "Pro Sketch Illustration Set",
//     price: "₹1,299",
//     image: "/images/sketch.jpg",
//   },
//   {
//     title: "Science Experiment Lab Kit",
//     price: "₹999",
//     image: "/images/science.jpg",
//   },
//   {
//     title: "Teen Birthday Mega Gift Box",
//     price: "₹1,499",
//     image: "/images/teenbox.jpg",
//   },
// ];

// export default function CreativeGifts() {
//   const [active, setActive] = useState("kids");

//   const products = active === "kids" ? kidsProducts : teenProducts;

//   return (
//     <div className="bg-[#0d1b2a] text-white py-24 px-6">

//       {/* Section Heading */}
//       <div className="max-w-6xl mx-auto text-center mb-14">
//         <p className="text-yellow-400 uppercase tracking-widest text-xs mb-2">
//           Naresh Book Depot
//         </p>

//         <h1 className="text-5xl md:text-6xl font-bold">
//           🎁 Creative <span className="text-yellow-400">Gifts & Toys</span>
//         </h1>

//         <p className="text-gray-400 mt-4 text-lg">
//           Special collections for kids and teens — perfect for birthdays, rewards & surprises.
//         </p>
//       </div>

//       {/* Toggle Buttons */}
//       <div className="flex justify-center gap-6 mb-16">
//         <button
//           onClick={() => setActive("kids")}
//           className={`px-8 py-3 rounded-full font-semibold transition ${
//             active === "kids"
//               ? "bg-yellow-400 text-black shadow-lg"
//               : "bg-[#162a42] text-gray-300 border border-white/10"
//           }`}
//         >
//           👶 Kids (3–10)
//         </button>

//         <button
//           onClick={() => setActive("teens")}
//           className={`px-8 py-3 rounded-full font-semibold transition ${
//             active === "teens"
//               ? "bg-yellow-400 text-black shadow-lg"
//               : "bg-[#162a42] text-gray-300 border border-white/10"
//           }`}
//         >
//           🧑‍🎓 Teens (11–16)
//         </button>
//       </div>

//       {/* Product Grid */}
//       <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

//         {products.map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ y: -8 }}
//             className="bg-[#162a42] rounded-2xl overflow-hidden shadow-xl border border-white/5"
//           >

//             {/* Image */}
//             <div className="relative h-64">

//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover brightness-90 contrast-110 saturate-110"
//               />

//               {/* Camera blur edge overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

//               {/* Badge */}
//               {item.badge && (
//                 <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
//                   {item.badge}
//                 </div>
//               )}
//             </div>

//             {/* Content */}
//             <div className="p-5">
//               <h3 className="font-semibold text-lg mb-3">
//                 {item.title}
//               </h3>

//               <div className="flex justify-between items-center">
//                 <span className="text-yellow-400 font-bold text-lg">
//                   {item.price}
//                 </span>

//                 <a
//                   href="https://wa.me/918264890587"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition"
//                 >
//                   Ask
//                 </a>
//               </div>
//             </div>

//           </motion.div>
//         ))}

//       </div>

//       {/* Promo Banner */}
//       <div className="max-w-6xl mx-auto mt-20 bg-gradient-to-r from-indigo-900 to-blue-900 p-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">

//         <div>
//           <h2 className="text-3xl font-bold mb-2">
//             🎂 Birthday Return Gift Packs Available
//           </h2>
//           <p className="text-gray-300">
//             Bulk pricing available for schools & birthday parties.
//           </p>
//         </div>

//         <a
//           href="tel:9855407298"
//           className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
//         >
//           Call Now
//         </a>

//       </div>

//     </div>
//   );
// }

// import { useState } from "react";

// const products = [
//   {
//     id: 1, emoji: "🎸", label: "Music Toys", name: "Mini Rock Star Toy Guitar",
//     age: "Age 4+", price: "₹899", oldPrice: null, badge: "Most Popular", badgeColor: "#f5a623", badgeText: "#0d1b2a",
//     bg: "linear-gradient(145deg,#0e2244,#1a3d7a)", category: "kids", size: "big"
//   },
//   {
//     id: 2, emoji: "🩺", label: "Role Play", name: "Doctor Play Set",
//     age: "Age 3+", price: "₹449", oldPrice: "₹599", badge: "New", badgeColor: "#2f9e44", badgeText: "#fff",
//     bg: "linear-gradient(145deg,#0e3322,#1a7a4a)", category: "kids", size: "normal"
//   },
//   {
//     id: 3, emoji: "🚗", label: "Cars & Vehicles", name: "Racing Cars Gift Set",
//     age: "Age 3+", price: "₹349", oldPrice: "₹499", badge: "Sale", badgeColor: "#e03131", badgeText: "#fff",
//     bg: "linear-gradient(145deg,#2a1000,#7a3000)", category: "kids", size: "normal"
//   },
//   {
//     id: 4, emoji: "🎨", label: "Art & Craft", name: "Mega Art Colour Kit",
//     age: "Age 4+", price: "₹649", oldPrice: null, badge: "🔥 Hot", badgeColor: "#e8580a", badgeText: "#fff",
//     bg: "linear-gradient(145deg,#1a0e44,#3a1a7a)", category: "kids", size: "normal"
//   },
//   {
//     id: 5, emoji: "🧩", label: "Puzzles", name: "Animal Puzzle Set",
//     age: "Age 3+", price: "₹299", oldPrice: null, badge: null, badgeColor: null, badgeText: null,
//     bg: "linear-gradient(145deg,#001a2a,#006080)", category: "kids", size: "normal"
//   },
//   {
//     id: 6, emoji: "🎁", label: "Birthday Gift", name: "Kids Birthday Surprise Combo",
//     age: "Age 3–8", price: "₹799", oldPrice: null, badge: "Gift", badgeColor: "#7048e8", badgeText: "#fff",
//     bg: "linear-gradient(145deg,#2a0022,#7a0060)", category: "gift", size: "tall"
//   },
//   {
//     id: 7, emoji: "🔬", label: "Science · Youth", name: "Science Experiment Lab Kit",
//     age: "Age 10+", price: "₹999", oldPrice: "₹1,499", badge: "New", badgeColor: "#2f9e44", badgeText: "#fff",
//     bg: "linear-gradient(145deg,#1a1a00,#5a5a00)", category: "youth", size: "normal"
//   },
//   {
//     id: 8, emoji: "✏️", label: "Art & Design", name: "Pro Sketch & Drawing Set",
//     age: "Age 8+", price: "₹549", oldPrice: null, badge: "Best Seller", badgeColor: "#f5a623", badgeText: "#0d1b2a",
//     bg: "linear-gradient(145deg,#0e2244,#1a3d7a)", category: "youth", size: "normal"
//   },
//   {
//     id: 9, emoji: "🍳", label: "Role Play", name: "Mini Kitchen Play Set",
//     age: "Age 3+", price: "₹499", oldPrice: null, badge: null, badgeColor: null, badgeText: null,
//     bg: "linear-gradient(145deg,#0e3322,#1a7a4a)", category: "kids", size: "normal"
//   },
//   {
//     id: 10, emoji: "🏗️", label: "Building Toys", name: "Colourful Building Blocks",
//     age: "Age 4+", price: "₹399", oldPrice: null, badge: "🔥", badgeColor: "#e8580a", badgeText: "#fff",
//     bg: "linear-gradient(145deg,#2a1000,#7a3000)", category: "kids", size: "normal"
//   },
//   {
//     id: 11, emoji: "🎸", label: "Music · Youth", name: "Electric Guitar Starter Kit",
//     age: "Age 12+", price: "₹3,799", oldPrice: "₹5,999", badge: "🔥 Hot", badgeColor: "#e8580a", badgeText: "#fff",
//     bg: "linear-gradient(145deg,#0e2244,#1a3d7a)", category: "youth", size: "normal"
//   },
//   {
//     id: 12, emoji: "🎹", label: "Music · Keyboard", name: "Mini Electronic Keyboard",
//     age: "Age 10+", price: "₹2,199", oldPrice: null, badge: null, badgeColor: null, badgeText: null,
//     bg: "linear-gradient(145deg,#2a0022,#7a0060)", category: "youth", size: "normal"
//   },
//   {
//     id: 13, emoji: "🎁", label: "Teen Gift Combo", name: "Teen Birthday Mega Gift Box",
//     age: "Age 13–16", price: "₹1,499", oldPrice: "₹1,999", badge: "Sale", badgeColor: "#e03131", badgeText: "#fff",
//     bg: "linear-gradient(145deg,#1a0e44,#3a1a7a)", category: "gift", size: "normal"
//   },
//   {
//     id: 14, emoji: "🎀", label: "Gift Combo", name: "Return Gift Pack (Set of 10)",
//     age: "All Ages", price: "₹599", oldPrice: null, badge: "Popular", badgeColor: "#7048e8", badgeText: "#fff",
//     bg: "linear-gradient(145deg,#001a2a,#006080)", category: "gift", size: "normal"
//   },
//   {
//     id: 15, emoji: "🎊", label: "Party Favours", name: "Birthday Return Gift Hamper",
//     age: "Age 3–10", price: "₹899", oldPrice: null, badge: "New", badgeColor: "#2f9e44", badgeText: "#fff",
//     bg: "linear-gradient(145deg,#1a1a00,#5a5a00)", category: "gift", size: "normal"
//   },
// ];

// const filters = [
//   { key: "all",   label: "🎯 All Products" },
//   { key: "kids",  label: "🧸 Kids (3–10)" },
//   { key: "youth", label: "🎸 Youth (11–16)" },
//   { key: "gift",  label: "🎁 Gift Combos" },
// ];

// export default function CreativeGifts() {
//   const [active, setActive] = useState("all");

//   const visible = active === "all" ? products : products.filter(p => p.category === active);

//   /* Split into rows for bento feel: first card is featured big */
//   const [featured, ...rest] = visible;

//   return (
//     <div style={{ fontFamily: "'Poppins', sans-serif", background: "#112240", color: "#fff", minHeight: "100vh" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Poppins:wght@400;500;600;700;800&display=swap');

//         * { box-sizing: border-box; }

//         .gifts-wrap { max-width: 1280px; margin: 0 auto; padding: 64px 40px 80px; }

//         /* ── HERO BAND ── */
//         .hero-band {
//           background: linear-gradient(135deg, #0d1b2a 0%, #1a3a6b 60%, #0d1b2a 100%);
//           padding: 56px 40px 52px;
//           position: relative; overflow: hidden;
//         }
//         .hero-band::before {
//           content: '';
//           position: absolute; inset: 0;
//           background: radial-gradient(ellipse at 75% 50%, rgba(245,166,35,0.08) 0%, transparent 65%);
//         }
//         .hero-band-inner { max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 32px; position: relative; z-index: 2; flex-wrap: wrap; }
//         .hero-eyebrow { font-size: 0.7rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #f5a623; margin-bottom: 10px; }
//         .hero-title { font-family: 'Syne', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; line-height: 1.1; margin-bottom: 10px; }
//         .hero-title em { font-style: normal; color: #f5a623; }
//         .hero-sub { color: rgba(255,255,255,0.5); font-size: 0.9rem; line-height: 1.7; max-width: 460px; }
//         .hero-chips { display: flex; gap: 10px; margin-top: 24px; flex-wrap: wrap; }
//         .hero-chip { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 10px 16px; display: flex; align-items: center; gap: 10px; }
//         .hero-chip-icon { font-size: 1.4rem; }
//         .hero-chip strong { display: block; font-size: 0.82rem; font-weight: 700; }
//         .hero-chip span { font-size: 0.68rem; color: rgba(255,255,255,0.5); }

//         /* ── FILTER BAR ── */
//         .filter-bar { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 40px; }
//         .fpill {
//           padding: 9px 22px; border-radius: 50px;
//           border: 1.5px solid rgba(255,255,255,0.1);
//           background: transparent; color: rgba(255,255,255,0.55);
//           font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 0.8rem;
//           cursor: pointer; transition: all 0.22s;
//         }
//         .fpill:hover { border-color: #f5a623; color: #f5a623; }
//         .fpill.on { background: #f5a623; color: #0d1b2a; border-color: #f5a623; }

//         /* ── BENTO GRID ── */
//         .bento {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           grid-auto-rows: 280px;
//           gap: 16px;
//           margin-bottom: 20px;
//         }
//         .cell-big  { grid-column: span 2; grid-row: span 2; }
//         .cell-tall { grid-column: span 1; grid-row: span 2; }
//         .cell-wide { grid-column: span 2; grid-row: span 1; }
//         .cell-norm { grid-column: span 1; grid-row: span 1; }

//         /* ── PRODUCT CARD ── */
//         .pcard {
//           border-radius: 20px; overflow: hidden;
//           position: relative; cursor: pointer;
//           border: 1px solid rgba(255,255,255,0.08);
//           transition: transform 0.32s cubic-bezier(.22,.68,0,1.2), border-color 0.25s, box-shadow 0.28s;
//           display: flex; flex-direction: column;
//         }
//         .pcard:hover {
//           transform: translateY(-7px) scale(1.015);
//           border-color: rgba(245,166,35,0.45);
//           box-shadow: 0 22px 52px rgba(0,0,0,0.4);
//         }

//         /* photo / emoji area */
//         .pcard-photo {
//           flex: 1; position: relative; overflow: hidden;
//           display: flex; align-items: center; justify-content: center; min-height: 0;
//         }
//         .pcard-photo img {
//           width: 100%; height: 100%; object-fit: cover;
//           filter: brightness(0.88) saturate(1.2) contrast(1.05);
//           transition: transform 0.45s ease;
//         }
//         .pcard:hover .pcard-photo img { transform: scale(1.09); }

//         /* vignette overlay */
//         .pcard-photo::after {
//           content: ''; position: absolute; inset: 0;
//           background: radial-gradient(ellipse at center, transparent 38%, rgba(8,18,32,0.6) 100%);
//           pointer-events: none; z-index: 1;
//         }
//         /* bottom text gradient */
//         .pcard-photo::before {
//           content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 70%;
//           background: linear-gradient(to top, rgba(8,18,32,0.97) 0%, rgba(8,18,32,0.3) 60%, transparent 100%);
//           z-index: 1; pointer-events: none;
//         }

//         .emoji-big   { font-size: 5rem; z-index: 0; filter: drop-shadow(0 8px 24px rgba(0,0,0,0.35)); }
//         .cell-big .emoji-big  { font-size: 7.5rem; }
//         .cell-tall .emoji-big { font-size: 6rem; }

//         /* overlay text */
//         .pcard-info {
//           position: absolute; bottom: 0; left: 0; right: 0;
//           padding: 14px 16px 16px; z-index: 2;
//         }
//         .pcard-cat { font-size: 0.62rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #f5a623; margin-bottom: 3px; }
//         .pcard-name { font-weight: 700; font-size: 0.9rem; line-height: 1.25; margin-bottom: 7px; }
//         .cell-big .pcard-name  { font-size: 1.2rem; }
//         .cell-tall .pcard-name { font-size: 1rem; }
//         .pcard-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
//         .pcard-price { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 800; }
//         .cell-big .pcard-price { font-size: 1.3rem; }
//         .old-price { font-size: 0.7rem; font-family: 'Poppins', sans-serif; font-weight: 400; color: rgba(255,255,255,0.4); text-decoration: line-through; margin-right: 4px; }
//         .age-tag {
//           position: absolute; top: 12px; right: 12px; z-index: 3;
//           background: rgba(0,0,0,0.5); backdrop-filter: blur(6px);
//           border: 1px solid rgba(255,255,255,0.15);
//           padding: 3px 10px; border-radius: 50px;
//           font-size: 0.6rem; font-weight: 700; color: rgba(255,255,255,0.85);
//         }
//         .badge {
//           position: absolute; top: 12px; left: 12px; z-index: 3;
//           padding: 4px 11px; border-radius: 50px;
//           font-size: 0.62rem; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;
//         }

//         /* ── PROMO CONTACT BANNER ── */
//         .promo-banner {
//           background: linear-gradient(135deg, #1c3270 0%, #2a4aa0 100%);
//           border: 1px solid rgba(59,91,219,0.3);
//           border-radius: 20px;
//           padding: 32px 40px;
//           display: flex; align-items: center; justify-content: space-between;
//           gap: 24px; flex-wrap: wrap;
//           position: relative; overflow: hidden;
//           margin: 24px 0 48px;
//         }
//         .promo-banner::before {
//           content: '🎁 🎀 🎊 🎈 🎉';
//           position: absolute; right: 360px; top: 50%; transform: translateY(-50%);
//           font-size: 1.5rem; letter-spacing: 14px; opacity: 0.15; pointer-events: none;
//         }
//         .promo-text h3 { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; margin-bottom: 5px; }
//         .promo-text h3 span { color: #f5a623; }
//         .promo-text p { color: rgba(255,255,255,0.55); font-size: 0.83rem; line-height: 1.6; max-width: 420px; }
//         .promo-actions { display: flex; gap: 10px; flex-shrink: 0; flex-wrap: wrap; }
//         .pbtn-gold {
//           background: #f5a623; color: #0d1b2a; border: none;
//           padding: 12px 26px; border-radius: 10px;
//           font-family: 'Poppins', sans-serif; font-weight: 800; font-size: 0.85rem; cursor: pointer;
//           transition: transform 0.2s, box-shadow 0.2s;
//           box-shadow: 0 4px 16px rgba(245,166,35,0.3);
//         }
//         .pbtn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(245,166,35,0.45); }
//         .pbtn-outline {
//           background: transparent; color: #fff;
//           border: 1.5px solid rgba(255,255,255,0.2);
//           padding: 12px 26px; border-radius: 10px;
//           font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 0.85rem; cursor: pointer;
//           transition: border-color 0.2s, color 0.2s;
//         }
//         .pbtn-outline:hover { border-color: #f5a623; color: #f5a623; }

//         /* ── SECTION DIVIDER ── */
//         .sec-div {
//           display: flex; align-items: center; gap: 16px; margin: 52px 0 36px;
//         }
//         .sec-div::before, .sec-div::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.08); }
//         .sec-div-inner { display: flex; align-items: center; gap: 10px; white-space: nowrap; }
//         .sec-div-inner h2 { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; }
//         .sec-div-inner h2 span { color: #f5a623; }

//         /* ── UNIFORM GRID (Youth) ── */
//         .uniform-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 16px;
//         }
//         .uniform-grid .pcard { height: 280px; }

//         /* ── EMPTY STATE ── */
//         .empty { text-align: center; padding: 80px 20px; color: rgba(255,255,255,0.3); }
//         .empty-icon { font-size: 4rem; margin-bottom: 16px; }
//         .empty h3 { font-size: 1.2rem; font-weight: 700; }

//         @media(max-width: 1024px) {
//           .bento { grid-template-columns: repeat(3, 1fr); }
//           .cell-big { grid-column: span 3; grid-row: span 1; }
//           .cell-tall { grid-column: span 1; grid-row: span 2; }
//           .uniform-grid { grid-template-columns: repeat(3, 1fr); }
//         }
//         @media(max-width: 700px) {
//           .bento { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 220px; }
//           .cell-big,.cell-tall,.cell-wide { grid-column: span 2; grid-row: span 1; }
//           .uniform-grid { grid-template-columns: repeat(2, 1fr); }
//           .gifts-wrap { padding: 40px 20px 60px; }
//           .hero-band { padding: 40px 20px; }
//         }
//       `}</style>

//       {/* ── HERO BAND ── */}
//       <div className="hero-band">
//         <div className="hero-band-inner">
//           <div>
//             <div className="hero-eyebrow">🎁 Special Section · Naresh Book Depot</div>
//             <h1 className="hero-title">Kids & <em>Gifts</em><br/>Zone</h1>
//             <p className="hero-sub">Toys, creative kits & unique birthday gifts for every child in Jalandhar — from little ones to teenagers.</p>
//           </div>
//           <div className="hero-chips">
//             {[
//               { icon: "🎸", label: "Toy Guitars", sub: "Music & fun" },
//               { icon: "🩺", label: "Doctor Sets", sub: "Role play kits" },
//               { icon: "🎨", label: "Art Kits",    sub: "Creative corner" },
//               { icon: "🎁", label: "Gift Combos", sub: "Return & birthday" },
//             ].map(c => (
//               <div className="hero-chip" key={c.label}>
//                 <div className="hero-chip-icon">{c.icon}</div>
//                 <div><strong>{c.label}</strong><span>{c.sub}</span></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN CONTENT ── */}
//       <div className="gifts-wrap">

//         {/* Filter bar */}
//         <div className="filter-bar">
//           {filters.map(f => (
//             <button
//               key={f.key}
//               className={`fpill${active === f.key ? " on" : ""}`}
//               onClick={() => setActive(f.key)}
//             >{f.label}</button>
//           ))}
//         </div>

//         {visible.length === 0 && (
//           <div className="empty">
//             <div className="empty-icon">🎁</div>
//             <h3>No products in this category yet</h3>
//           </div>
//         )}

//         {/* ── BENTO GRID (Kids + All) ── */}
//         {(active === "all" || active === "kids" || active === "gift") && (() => {
//           const kidGift = products.filter(p =>
//             active === "all" ? p.category !== "youth" :
//             active === "gift" ? p.category === "gift" :
//             p.category === "kids"
//           );

//           if (kidGift.length === 0) return null;

//           // assign cell classes — first is big, sixth is tall
//           const getCellClass = (i, total) => {
//             if (i === 0) return "cell-big";
//             if (i === 5 && total > 6) return "cell-tall";
//             return "cell-norm";
//           };

//           return (
//             <>
//               <div className="bento">
//                 {kidGift.map((p, i) => (
//                   <ProductCard
//                     key={p.id}
//                     p={p}
//                     cellClass={getCellClass(i, kidGift.length)}
//                   />
//                 ))}
//               </div>

//               {/* Contact / Return gifts banner */}
//               <div className="promo-banner">
//                 <div className="promo-text">
//                   <h3>🎀 Looking for <span>Return Gifts?</span></h3>
//                   <p>
//                     Planning a birthday party? We have special return gift packs, hampers & combo sets for all budgets.
//                     Contact us to order in bulk — we'll help you pick the perfect gifts for every child!
//                   </p>
//                 </div>
//                 <div className="promo-actions">
//                   <button className="pbtn-gold">📞 Call Us Now</button>
//                   <button className="pbtn-outline">💬 WhatsApp</button>
//                 </div>
//               </div>
//             </>
//           );
//         })()}

//         {/* ── YOUTH SECTION ── */}
//         {(active === "all" || active === "youth") && (() => {
//           const youthProds = products.filter(p => p.category === "youth");
//           if (youthProds.length === 0) return null;
//           return (
//             <>
//               {active === "all" && (
//                 <div className="sec-div">
//                   <div className="sec-div-inner">
//                     <span style={{ fontSize: "1.2rem" }}>🎸</span>
//                     <h2>Youth <span>Zone</span></h2>
//                     <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Ages 11–16</span>
//                   </div>
//                 </div>
//               )}
//               <div className="uniform-grid">
//                 {youthProds.map(p => (
//                   <ProductCard key={p.id} p={p} cellClass="cell-norm" />
//                 ))}
//               </div>

//               {/* Special gifts contact banner */}
//               <div className="promo-banner" style={{ marginTop: 24, background: "linear-gradient(135deg,#2d1460,#4a1a8c)", borderColor: "rgba(112,72,232,0.3)" }}>
//                 <div className="promo-text">
//                   <h3>🎸 Special <span>Birthday Gifts</span> for Teenagers</h3>
//                   <p>
//                     Looking for a unique gift for a teen? Music kits, art sets, science experiments & more — we can curate a personalised gift box just for them. Visit us or contact us today!
//                   </p>
//                 </div>
//                 <div className="promo-actions">
//                   <button className="pbtn-gold">📍 Visit Our Store</button>
//                   <button className="pbtn-outline">💬 WhatsApp</button>
//                 </div>
//               </div>
//             </>
//           );
//         })()}

//       </div>
//     </div>
//   );
// }

// /* ── PRODUCT CARD COMPONENT ── */
// function ProductCard({ p, cellClass }) {
//   return (
//     <div className={`pcard ${cellClass}`} style={{ background: p.bg }}>
//       <div className="pcard-photo">
//         {/* OWNER: Replace emoji with <img src="your-photo.jpg" alt={p.name} /> */}
//         <span className="emoji-big">{p.emoji}</span>
//       </div>

//       {p.badge && (
//         <span
//           className="badge"
//           style={{ background: p.badgeColor, color: p.badgeText }}
//         >{p.badge}</span>
//       )}
//       <span className="age-tag">{p.age}</span>

//       <div className="pcard-info">
//         <div className="pcard-cat">{p.label}</div>
//         <div className="pcard-name">{p.name}</div>
//         <div className="pcard-row">
//           <div className="pcard-price">
//             {p.oldPrice && <span className="old-price">{p.oldPrice}</span>}
//             {p.price}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";

// const products = [
//   {
//     id: 1,
//     label: "Music Toys",
//     name: "Mini Rock Star Toy Guitar",
//     age: "Age 4+",
//     price: "₹899",
//     oldPrice: null,
//     badge: "Most Popular",
//     badgeColor: "#f5a623",
//     badgeText: "#0d1b2a",
//     bg: "linear-gradient(145deg,#0e2244,#1a3d7a)",
//     category: "kids",
//   },
//   {
//     id: 2,
//     label: "Role Play",
//     name: "Doctor Play Set",
//     age: "Age 3+",
//     price: "₹449",
//     oldPrice: "₹599",
//     badge: "New",
//     badgeColor: "#2f9e44",
//     badgeText: "#fff",
//     bg: "linear-gradient(145deg,#0e3322,#1a7a4a)",
//     category: "kids",
//   },
//   {
//     id: 3,
//     label: "Cars & Vehicles",
//     name: "Racing Cars Gift Set",
//     age: "Age 3+",
//     price: "₹349",
//     oldPrice: "₹499",
//     badge: "Sale",
//     badgeColor: "#e03131",
//     badgeText: "#fff",
//     bg: "linear-gradient(145deg,#2a1000,#7a3000)",
//     category: "kids",
//   },
//   {
//     id: 4,
//     label: "Art & Craft",
//     name: "Mega Art Colour Kit",
//     age: "Age 4+",
//     price: "₹649",
//     oldPrice: null,
//     badge: "Hot",
//     badgeColor: "#e8580a",
//     badgeText: "#fff",
//     bg: "linear-gradient(145deg,#1a0e44,#3a1a7a)",
//     category: "kids",
//   },
//   {
//     id: 5,
//     label: "Birthday Gift",
//     name: "Kids Birthday Surprise Combo",
//     age: "Age 3–8",
//     price: "₹799",
//     oldPrice: null,
//     badge: "Gift",
//     badgeColor: "#7048e8",
//     badgeText: "#fff",
//     bg: "linear-gradient(145deg,#2a0022,#7a0060)",
//     category: "gift",
//   },
//   {
//     id: 6,
//     label: "Science · Youth",
//     name: "Science Experiment Lab Kit",
//     age: "Age 10+",
//     price: "₹999",
//     oldPrice: "₹1,499",
//     badge: "New",
//     badgeColor: "#2f9e44",
//     badgeText: "#fff",
//     bg: "linear-gradient(145deg,#1a1a00,#5a5a00)",
//     category: "youth",
//   },
//   {
//     id: 7,
//     label: "Music · Youth",
//     name: "Electric Guitar Starter Kit",
//     age: "Age 12+",
//     price: "₹3,799",
//     oldPrice: "₹5,999",
//     badge: "Hot",
//     badgeColor: "#e8580a",
//     badgeText: "#fff",
//     bg: "linear-gradient(145deg,#0e2244,#1a3d7a)",
//     category: "youth",
//   },
// ];

// const filters = [
//   { key: "all", label: "🎯 All Products" },
//   { key: "kids", label: "🧸 Kids (3–10)" },
//   { key: "youth", label: "🎸 Youth (11–16)" },
//   { key: "gift", label: "🎁 Gift Combos" },
// ];

// export default function CreativeGifts() {
//   const [active, setActive] = useState("all");

//   const visible =
//     active === "all"
//       ? products
//       : products.filter((p) => p.category === active);

//   return (
//     <div className="bg-[#112240] text-white min-h-screen pt-32">

//       <style>{`
//         .wrap {
//           max-width: 1300px;
//           margin: 0 auto;
//           padding: 60px 40px 100px;
//         }

//         /* HERO */
//         .hero {
//           background: linear-gradient(135deg,#0d1b2a,#1a3a6b);
//           padding: 110px 60px 90px;
//           border-radius: 32px;
//           margin-bottom: 70px;
//           position: relative;
//           overflow: hidden;
//         }

//         .hero::after {
//           content:'';
//           position:absolute;
//           right:-150px;
//           top:-150px;
//           width:450px;
//           height:450px;
//           background: radial-gradient(circle, rgba(245,166,35,.12), transparent 70%);
//         }

//         .hero h1 {
//           font-size: clamp(2.8rem,5vw,4rem);
//           font-weight: 800;
//           line-height: 1.1;
//           margin-bottom: 20px;
//         }

//         .hero span { color:#f5a623; }

//         .hero p {
//           font-size: 1.1rem;
//           color: rgba(255,255,255,.6);
//           max-width: 650px;
//           line-height: 1.7;
//         }

//         .hero-boxes {
//           display:flex;
//           gap:20px;
//           margin-top:45px;
//           flex-wrap:wrap;
//         }

//         .hero-box {
//           padding:20px 30px;
//           border-radius:18px;
//           min-width:200px;
//           box-shadow:0 15px 40px rgba(0,0,0,.3);
//           font-weight:600;
//         }

//         /* FILTER */
//         .filter-bar {
//           display:flex;
//           gap:12px;
//           flex-wrap:wrap;
//           margin-bottom:45px;
//         }

//         .pill {
//           padding:10px 24px;
//           border-radius:50px;
//           border:1.5px solid rgba(255,255,255,.15);
//           background:transparent;
//           color:rgba(255,255,255,.6);
//           font-weight:600;
//           cursor:pointer;
//           transition:.2s;
//         }

//         .pill:hover { border-color:#f5a623; color:#f5a623; }

//         .pill.active {
//           background:#f5a623;
//           color:#0d1b2a;
//           border-color:#f5a623;
//         }

//         /* GRID */
//         .grid {
//           display:grid;
//           grid-template-columns:repeat(4,1fr);
//           gap:20px;
//         }

//         .card {
//           border-radius:22px;
//           overflow:hidden;
//           position:relative;
//           border:1px solid rgba(255,255,255,.08);
//           transition:.3s;
//           display:flex;
//           flex-direction:column;
//         }

//         .card:hover {
//           transform:translateY(-8px);
//           box-shadow:0 25px 60px rgba(0,0,0,.4);
//         }

//         .photo {
//           height:220px;
//           position:relative;
//           overflow:hidden;
//         }

//         .photo img {
//           width:100%;
//           height:100%;
//           object-fit:cover;
//           filter:brightness(.9) contrast(1.05) saturate(1.15);
//           transition:.4s;
//         }

//         .card:hover img { transform:scale(1.08); }

//         .photo::after {
//           content:'';
//           position:absolute;
//           inset:0;
//           background: radial-gradient(ellipse at center, transparent 40%, rgba(8,18,32,.7) 100%);
//         }

//         .info {
//           padding:18px;
//         }

//         .cat {
//           font-size:.7rem;
//           letter-spacing:2px;
//           text-transform:uppercase;
//           color:#f5a623;
//           margin-bottom:6px;
//         }

//         .name {
//           font-weight:700;
//           margin-bottom:10px;
//         }

//         .price {
//           font-weight:800;
//           font-size:1rem;
//         }

//         .old {
//           text-decoration:line-through;
//           font-size:.8rem;
//           margin-right:6px;
//           color:rgba(255,255,255,.4);
//         }

//         .badge {
//           position:absolute;
//           top:12px;
//           left:12px;
//           padding:5px 14px;
//           border-radius:50px;
//           font-size:.7rem;
//           font-weight:700;
//         }

//         .age {
//           position:absolute;
//           top:12px;
//           right:12px;
//           background:rgba(0,0,0,.6);
//           padding:5px 12px;
//           border-radius:50px;
//           font-size:.7rem;
//         }

//         @media(max-width:1100px){
//           .grid{grid-template-columns:repeat(2,1fr);}
//         }
//       `}</style>

//       <div className="wrap">

//         {/* HERO */}
//         <div className="hero">
//           <p style={{letterSpacing:"3px",fontSize:"12px",color:"#f5a623",fontWeight:"700"}}>
//             🎁 SPECIAL SECTION · NARESH BOOK DEPOT
//           </p>

//           <h1>
//             Kids & <span>Gifts</span> Zone
//           </h1>

//           <p>
//             Toys, creative kits & unique birthday gifts for every child in Jalandhar —
//             from little ones to teenagers.
//           </p>

//           <div className="hero-boxes">
//             <div className="hero-box" style={{background:"#3b5bdb"}}>🎸 Toy Guitars</div>
//             <div className="hero-box" style={{background:"#f76707"}}>🩺 Doctor Sets</div>
//             <div className="hero-box" style={{background:"#2f9e44"}}>🎨 Art Kits</div>
//             <div className="hero-box" style={{background:"#7048e8"}}>🎁 Gift Combos</div>
//           </div>
//         </div>

//         {/* FILTER */}
//         <div className="filter-bar">
//           {filters.map((f) => (
//             <button
//               key={f.key}
//               className={`pill ${active === f.key ? "active" : ""}`}
//               onClick={() => setActive(f.key)}
//             >
//               {f.label}
//             </button>
//           ))}
//         </div>

//         {/* PRODUCTS */}
//         <div className="grid">
//           {visible.map((p) => (
//             <div className="card" key={p.id} style={{ background: p.bg }}>
//               <div className="photo">
//                 {/* KEEP YOUR IMAGES HERE */}
//                 <img src={`/images/${p.id}.jpg`} alt={p.name} />
//               </div>

//               {p.badge && (
//                 <span
//                   className="badge"
//                   style={{ background: p.badgeColor, color: p.badgeText }}
//                 >
//                   {p.badge}
//                 </span>
//               )}

//               <span className="age">{p.age}</span>

//               <div className="info">
//                 <div className="cat">{p.label}</div>
//                 <div className="name">{p.name}</div>
//                 <div className="price">
//                   {p.oldPrice && <span className="old">{p.oldPrice}</span>}
//                   {p.price}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }


// import { useState } from "react";

// const products = [
//   {
//     id: 1,
//     emoji: "🎸",
//     label: "Music Toys",
//     name: "Mini Rock Star Toy Guitar",
//     age: "Age 4+",
//     price: "₹899",
//     oldPrice: null,
//     badge: "Most Popular",
//     badgeColor: "#f5a623",
//     badgeText: "#0d1b2a",
//     bg: "linear-gradient(145deg,#0e2244,#1a3d7a)",
//     category: "kids",
//   },
//   {
//     id: 2,
//     emoji: "🩺",
//     label: "Role Play",
//     name: "Doctor Play Set",
//     age: "Age 3+",
//     price: "₹449",
//     oldPrice: "₹599",
//     badge: "New",
//     badgeColor: "#2f9e44",
//     badgeText: "#fff",
//     bg: "linear-gradient(145deg,#0e3322,#1a7a4a)",
//     category: "kids",
//   },
//   {
//     id: 3,
//     emoji: "🚗",
//     label: "Cars & Vehicles",
//     name: "Racing Cars Gift Set",
//     age: "Age 3+",
//     price: "₹349",
//     oldPrice: "₹499",
//     badge: "Sale",
//     badgeColor: "#e03131",
//     badgeText: "#fff",
//     bg: "linear-gradient(145deg,#2a1000,#7a3000)",
//     category: "kids",
//   },
//   {
//     id: 4,
//     emoji: "🎨",
//     label: "Art & Craft",
//     name: "Mega Art Colour Kit",
//     age: "Age 4+",
//     price: "₹649",
//     oldPrice: null,
//     badge: "Hot",
//     badgeColor: "#e8580a",
//     badgeText: "#fff",
//     bg: "linear-gradient(145deg,#1a0e44,#3a1a7a)",
//     category: "kids",
//   },
//   {
//     id: 5,
//     emoji: "🎁",
//     label: "Birthday Gift",
//     name: "Kids Birthday Surprise Combo",
//     age: "Age 3–8",
//     price: "₹799",
//     oldPrice: null,
//     badge: "Gift",
//     badgeColor: "#7048e8",
//     badgeText: "#fff",
//     bg: "linear-gradient(145deg,#2a0022,#7a0060)",
//     category: "gift",
//   },
//   {
//     id: 6,
//     emoji: "🔬",
//     label: "Science · Youth",
//     name: "Science Experiment Lab Kit",
//     age: "Age 10+",
//     price: "₹999",
//     oldPrice: "₹1,499",
//     badge: "New",
//     badgeColor: "#2f9e44",
//     badgeText: "#fff",
//     bg: "linear-gradient(145deg,#1a1a00,#5a5a00)",
//     category: "youth",
//   },
//   {
//     id: 7,
//     emoji: "🎸",
//     label: "Music · Youth",
//     name: "Electric Guitar Starter Kit",
//     age: "Age 12+",
//     price: "₹3,799",
//     oldPrice: "₹5,999",
//     badge: "Hot",
//     badgeColor: "#e8580a",
//     badgeText: "#fff",
//     bg: "linear-gradient(145deg,#0e2244,#1a3d7a)",
//     category: "youth",
//   },
// ];

// const filters = [
//   { key: "all", label: "🎯 All Products" },
//   { key: "kids", label: "🧸 Kids (3–10)" },
//   { key: "youth", label: "🎸 Youth (11–16)" },
//   { key: "gift", label: "🎁 Gift Combos" },
// ];

// export default function CreativeGifts() {
//   const [active, setActive] = useState("all");

//   const visible =
//     active === "all"
//       ? products
//       : products.filter((p) => p.category === active);

//   return (
//     <div style={{ background: "#112240", color: "#fff", minHeight: "100vh", paddingTop: "130px" }}>

//       <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "60px 40px 100px" }}>

//         {/* BIG HERO */}
//         <div
//           style={{
//             background: "linear-gradient(135deg,#0d1b2a,#1a3a6b)",
//             padding: "110px 60px 90px",
//             borderRadius: "32px",
//             marginBottom: "70px",
//             position: "relative",
//           }}
//         >
//           <p style={{ letterSpacing: "3px", fontSize: "12px", color: "#f5a623", fontWeight: "700" }}>
//             🎁 SPECIAL SECTION · NARESH BOOK DEPOT
//           </p>

//           <h1 style={{ fontSize: "clamp(2.8rem,5vw,4rem)", fontWeight: "800", margin: "20px 0" }}>
//             Kids & <span style={{ color: "#f5a623" }}>Gifts</span> Zone
//           </h1>

//           <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,.6)", maxWidth: "650px" }}>
//             Toys, creative kits & unique birthday gifts for every child in Jalandhar —
//             from little ones to teenagers.
//           </p>

//           <div style={{ display: "flex", gap: "20px", marginTop: "45px", flexWrap: "wrap" }}>
//             <div style={{ background: "#3b5bdb", padding: "20px 30px", borderRadius: "18px" }}>🎸 Toy Guitars</div>
//             <div style={{ background: "#f76707", padding: "20px 30px", borderRadius: "18px" }}>🩺 Doctor Sets</div>
//             <div style={{ background: "#2f9e44", padding: "20px 30px", borderRadius: "18px" }}>🎨 Art Kits</div>
//             <div style={{ background: "#7048e8", padding: "20px 30px", borderRadius: "18px" }}>🎁 Gift Combos</div>
//           </div>
//         </div>

//         {/* FILTERS */}
//         <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "45px" }}>
//           {filters.map((f) => (
//             <button
//               key={f.key}
//               onClick={() => setActive(f.key)}
//               style={{
//                 padding: "10px 24px",
//                 borderRadius: "50px",
//                 border: "1.5px solid rgba(255,255,255,.15)",
//                 background: active === f.key ? "#f5a623" : "transparent",
//                 color: active === f.key ? "#0d1b2a" : "rgba(255,255,255,.6)",
//                 fontWeight: "600",
//                 cursor: "pointer",
//               }}
//             >
//               {f.label}
//             </button>
//           ))}
//         </div>

//         {/* PRODUCT GRID */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
//           gap: "20px"
//         }}>
//           {visible.map((p) => (
//             <div
//               key={p.id}
//               style={{
//                 borderRadius: "22px",
//                 overflow: "hidden",
//                 position: "relative",
//                 background: p.bg,
//                 padding: "25px",
//                 minHeight: "220px",
//               }}
//             >
//               {/* EMOJI DISPLAY */}
//               <div style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
//                 {p.emoji}
//               </div>

//               {p.badge && (
//                 <span style={{
//                   position: "absolute",
//                   top: "12px",
//                   left: "12px",
//                   background: p.badgeColor,
//                   color: p.badgeText,
//                   padding: "5px 14px",
//                   borderRadius: "50px",
//                   fontSize: ".7rem",
//                   fontWeight: "700"
//                 }}>
//                   {p.badge}
//                 </span>
//               )}

//               <div style={{ fontSize: ".7rem", letterSpacing: "2px", color: "#f5a623", marginBottom: "6px" }}>
//                 {p.label}
//               </div>

//               <div style={{ fontWeight: "700", marginBottom: "10px" }}>
//                 {p.name}
//               </div>

//               <div style={{ fontWeight: "800" }}>
//                 {p.oldPrice && (
//                   <span style={{ textDecoration: "line-through", marginRight: "6px", color: "rgba(255,255,255,.4)" }}>
//                     {p.oldPrice}
//                   </span>
//                 )}
//                 {p.price}
//               </div>

//               <div style={{
//                 position: "absolute",
//                 top: "12px",
//                 right: "12px",
//                 background: "rgba(0,0,0,.5)",
//                 padding: "5px 12px",
//                 borderRadius: "50px",
//                 fontSize: ".7rem"
//               }}>
//                 {p.age}
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

////eeeeeeeeeeeee
// import { useState, useEffect } from "react";

// export default function CreativeGifts() {
//   const [products, setProducts] = useState([]);
//   const [active, setActive] = useState("all");

//   useEffect(() => {
//     fetch("http://localhost:8000/api/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error(err));
//   }, []);

//   const visible =
//     active === "all"
//       ? products
//       : products.filter((p) => p.category === active);

//   const featured = products.slice(0, 4); // banner ke liye first 4

//   return (
//     <div
//       style={{
//         background: "#112240",
//         color: "#fff",
//         minHeight: "100vh",
//         paddingTop: "130px",
//       }}
//     >
//       <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "60px 40px 100px" }}>

//         {/* HERO SECTION */}
//         <div
//           style={{
//             background: "linear-gradient(135deg,#0d1b2a,#1a3a6b)",
//             padding: "100px 60px",
//             borderRadius: "32px",
//             marginBottom: "80px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             gap: "40px",
//             flexWrap: "wrap",
//           }}
//         >
//           {/* LEFT TEXT */}
//           <div style={{ maxWidth: "600px" }}>
//             <p
//               style={{
//                 letterSpacing: "3px",
//                 fontSize: "12px",
//                 color: "#f5a623",
//                 fontWeight: "700",
//               }}
//             >
//               🎁 SPECIAL SECTION · NARESH BOOK DEPOT
//             </p>

//             <h1
//               style={{
//                 fontSize: "clamp(2.8rem,5vw,4rem)",
//                 fontWeight: "800",
//                 margin: "20px 0",
//               }}
//             >
//               Kids & <span style={{ color: "#f5a623" }}>Gifts</span> Zone
//             </h1>

//             <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,.7)" }}>
//               Toys, creative kits & unique birthday gifts for every child in
//               Jalandhar.
//             </p>
//           </div>

//           {/* RIGHT FEATURED PRODUCTS */}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(2, 140px)",
//               gap: "15px",
//             }}
//           >
//             {featured.map((item) => (
//               <div
//                 key={item.id}
//                 style={{
//                   background: "rgba(255,255,255,0.05)",
//                   borderRadius: "18px",
//                   padding: "10px",
//                   backdropFilter: "blur(10px)",
//                   border: "1px solid rgba(255,255,255,0.08)",
//                   textAlign: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     height: "90px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <img
//                     src={item.imageUrl}
//                     alt={item.name}
//                     style={{
//                       maxHeight: "100%",
//                       maxWidth: "100%",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </div>
//                 <div
//                   style={{
//                     fontSize: ".75rem",
//                     marginTop: "6px",
//                     fontWeight: "600",
//                   }}
//                 >
//                   {item.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* FILTERS */}
//         <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "45px" }}>
//           {["all", "kids", "youth", "gift"].map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActive(cat)}
//               style={{
//                 padding: "10px 24px",
//                 borderRadius: "50px",
//                 border: "1.5px solid rgba(255,255,255,.15)",
//                 background: active === cat ? "#f5a623" : "transparent",
//                 color: active === cat ? "#0d1b2a" : "rgba(255,255,255,.6)",
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 textTransform: "capitalize",
//               }}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* PRODUCT GRID */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
//             gap: "25px",
//           }}
//         >
//           {visible.map((p) => (
//             <div
//               key={p.id}
//               style={{
//                 borderRadius: "22px",
//                 overflow: "hidden",
//                 background: p.bg || "#1a3a6b",
//                 boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
//                 transition: "0.3s",
//               }}
//             >
//               {/* IMAGE FIXED */}
//               <div
//                 style={{
//                   height: "240px",
//                   background: "#fff",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   padding: "15px",
//                 }}
//               >
//                 <img
//                   src={p.imageUrl}
//                   alt={p.name}
//                   style={{
//                     maxHeight: "100%",
//                     maxWidth: "100%",
//                     objectFit: "contain",
//                   }}
//                 />
//               </div>

//               {/* CONTENT */}
//               <div style={{ padding: "20px" }}>
//                 <div
//                   style={{
//                     fontSize: ".7rem",
//                     letterSpacing: "2px",
//                     color: "#f5a623",
//                     marginBottom: "6px",
//                   }}
//                 >
//                   {p.label}
//                 </div>

//                 <div style={{ fontWeight: "700", marginBottom: "10px" }}>
//                   {p.name}
//                 </div>

//                 <div style={{ fontWeight: "800" }}>
//                   {p.oldPrice && (
//                     <span
//                       style={{
//                         textDecoration: "line-through",
//                         marginRight: "6px",
//                         color: "rgba(255,255,255,.4)",
//                       }}
//                     >
//                       {p.oldPrice}
//                     </span>
//                   )}
//                   {p.price}
//                 </div>

//                 <div style={{ marginTop: "6px", fontSize: ".8rem", opacity: ".7" }}>
//                   {p.age}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }
///////////ffffffffff
import { useState, useEffect } from "react";

/* ─────────────────────────────────────────
   CATEGORY CONFIG
───────────────────────────────────────── */
const CAT_CONFIG = {
  kids:  { label: "🧸 Kids",  accent: "#FF3CAC", light: "rgba(255,60,172,.15)"  },
  youth: { label: "⚡ Youth", accent: "#00E5FF", light: "rgba(0,229,255,.15)"   },
  gift:  { label: "🎁 Gift",  accent: "#FFD600", light: "rgba(255,214,0,.15)"   },
};
const DEFAULT_CAT = { label: "✨ Item", accent: "#a78bfa", light: "rgba(167,139,250,.15)" };

const TABS = [
  { key: "all",   emoji: "🌟", label: "All"   },
  { key: "kids",  emoji: "🧸", label: "Kids"  },
  { key: "youth", emoji: "⚡", label: "Youth" },
  { key: "gift",  emoji: "🎁", label: "Gift"  },
];

/* ─────────────────────────────────────────
   FLOATING SHAPE
───────────────────────────────────────── */
function FloatShape({ style }) {
  return (
    <div style={{
      position: "absolute", borderRadius: "50%", opacity: .15,
      animation: "kgzFloat var(--dur,8s) var(--delay,0s) ease-in-out infinite",
      pointerEvents: "none",
      ...style,
    }} />
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function KidsGiftsZone() {
  const [products, setProducts] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [filter,   setFilter]   = useState("all");
  const [zoom,     setZoom]     = useState(null);
  // FIX: keyed by unique product identifier (id or index), never share state
  const [wished, setWished] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/products`)
      .then(r => r.json())
      .then(data => { setProducts(data); setLoading(false); })
      .catch(err => { console.error("Products fetch error:", err); setLoading(false); });
  }, []);

  const visible   = filter === "all" ? products : products.filter(p => p.category === filter);
  const spotlight = products.slice(0, 4);
  const getCat    = (cat) => CAT_CONFIG[cat] || DEFAULT_CAT;

  // FIX: use a truly unique key — fallback to index only if id missing
  const wishKey = (p, i) => (p.id != null ? String(p.id) : `idx_${i}`);

  const toggleWish = (key, e) => {
    e.stopPropagation();
    setWished(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const onCardEnter = e => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 26px 65px rgba(0,0,0,.6)";
    const img = e.currentTarget.querySelector(".kgz-card-img");
    if (img) img.style.transform = "scale(1.07)";
  };
  const onCardLeave = e => {
    e.currentTarget.style.transform = "";
    e.currentTarget.style.boxShadow = "";
    const img = e.currentTarget.querySelector(".kgz-card-img");
    if (img) img.style.transform = "";
  };
  const onSpotEnter = e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,.5)"; };
  const onSpotLeave = e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');

        @keyframes kgzFloat {
          0%,100%{ transform:translateY(0) rotate(0deg); }
          33%     { transform:translateY(-20px) rotate(12deg); }
          66%     { transform:translateY(10px) rotate(-8deg); }
        }
        @keyframes kgzZoomIn {
          from{ opacity:0; transform:scale(.82); }
          to  { opacity:1; transform:scale(1); }
        }
        @keyframes kgzFadeUp {
          from{ opacity:0; transform:translateY(22px); }
          to  { opacity:1; transform:translateY(0); }
        }
        @keyframes kgzCardIn {
          from{ opacity:0; transform:translateY(28px) scale(.95); }
          to  { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes kgzBounce {
          0%,100%{ transform:translateY(0); }
          50%    { transform:translateY(-10px); }
        }
        @keyframes kgzPulse { from{opacity:.7} to{opacity:1} }

        .kgz-page     { font-family:'Nunito',sans-serif; }
        .kgz-fred     { font-family:'Fredoka One',cursive !important; }
        .kgz-fadein   { animation: kgzFadeUp .65s ease both; }
        .kgz-fadein-1 { animation: kgzFadeUp .65s .1s ease both; }
        .kgz-fadein-2 { animation: kgzFadeUp .65s .2s ease both; }
        .kgz-fadein-3 { animation: kgzFadeUp .65s .3s ease both; }
        .kgz-card-anim{ animation: kgzCardIn .5s ease both; }
        .kgz-pulse-bg { animation: kgzPulse 6s ease-in-out infinite alternate; }
        .kgz-bounce   { animation: kgzBounce 2s ease infinite; }

        /* ── RESPONSIVE PRODUCT GRID: 5 → 4 → 3 → 2 cols ── */
        .kgz-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }
        @media (max-width: 1199px) { .kgz-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 899px)  { .kgz-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 599px)  { .kgz-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } }

        /* ── HERO ── */
        .kgz-hero {
          position: relative;
          padding: 50px 6% 46px;
          display: flex;
          align-items: center;
          gap: 32px;
          overflow: hidden;
        }
        /* LEFT: takes remaining space after fixed right column */
        .kgz-hero-left {
          position: relative; z-index: 2;
          flex: 1 1 0; min-width: 0;
        }
        /* RIGHT: fixed 340px snug 2x2 grid */
        .kgz-spot-grid {
          position: relative; z-index: 2;
          flex: 0 0 340px; width: 340px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        @media (max-width: 1024px) {
          .kgz-spot-grid { flex: 0 0 280px; width: 280px; }
        }
        /* MOBILE: hide spotlight, show only text+tabs full width */
        @media (max-width: 768px) {
          .kgz-hero { padding: 36px 5% 30px; gap: 0; }
          .kgz-hero-left { width: 100%; flex: none; }
          .kgz-spot-grid { display: none; }
        }

        /* ── BANNER ── */
        .kgz-banner {
          margin: 10px 6% 36px;
          border-radius: 22px;
          background: linear-gradient(135deg,#1a0533 0%,#0d1a33 50%,#001a1a 100%);
          border: 1.5px solid rgba(255,255,255,.07);
          padding: 24px 32px;
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
          overflow: hidden;
        }
        .kgz-banner-text {
          position:relative; z-index:1;
          flex: 1 1 auto; min-width: 0;
          /* push text closer to emoji, away from button */
          padding-right: 20px;
        }
        .kgz-banner-cta { position:relative; z-index:1; flex-shrink:0; }
        @media (max-width: 640px) {
          .kgz-banner { flex-wrap:wrap; padding:20px 18px; gap:12px; }
          .kgz-banner-text { padding-right: 0; }
          .kgz-banner-cta { width:100%; }
          .kgz-banner-cta button { width:100%; justify-content: center; display: flex; align-items: center; }
        }

        /* card image area */
        .kgz-card-img-wrap {
          height: 170px;
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          padding: 12px;
          position: relative; overflow: hidden;
        }
        @media (max-width: 599px) {
          .kgz-card-img-wrap { height: 130px; padding: 8px; }
        }
      `}</style>

      <div className="kgz-page" style={{
        background: "#0D0D1A", minHeight: "100vh",
        paddingTop: "90px",   /* ← adjust to match your navbar height */
        paddingBottom: "80px",
        color: "#fff", overflowX: "hidden",
      }}>

        {/* ══════════════════════
            HERO
        ══════════════════════ */}
        <section className="kgz-hero">
          <div className="kgz-pulse-bg" style={{
            position:"absolute", inset:0, pointerEvents:"none",
            background:`
              radial-gradient(ellipse 55% 60% at 80% 50%, rgba(123,47,255,.28) 0%, transparent 70%),
              radial-gradient(ellipse 45% 55% at 15% 40%, rgba(255,60,172,.2) 0%, transparent 65%),
              radial-gradient(ellipse 35% 45% at 50% 95%, rgba(0,229,255,.15) 0%, transparent 60%)
            `,
          }} />
          <FloatShape style={{ width:80, height:80, background:"#FFD600", top:"8%",  left:"2%",  "--dur":"8s",  "--delay":"-1s"  }} />
          <FloatShape style={{ width:50, height:50, background:"#FF3CAC", top:"72%", left:"6%",  "--dur":"11s", "--delay":"-4s", borderRadius:"30% 70% 70% 30%/30% 30% 70% 70%" }} />
          <FloatShape style={{ width:65, height:65, background:"#00E5FF", top:"14%", left:"44%", "--dur":"9s",  "--delay":"-2s"  }} />
          <FloatShape style={{ width:90, height:90, background:"#7B2FFF", top:"5%",  left:"88%", "--dur":"12s", "--delay":"-6s"  }} />
          <FloatShape style={{ width:42, height:42, background:"#00E676", top:"62%", left:"92%", "--dur":"10s", "--delay":"-5s", borderRadius:4 }} />

          {/* LEFT */}
          <div className="kgz-hero-left kgz-fadein">
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"rgba(255,214,0,.12)", border:"1.5px solid rgba(255,214,0,.35)",
              borderRadius:50, padding:"6px 16px", fontSize:11, fontWeight:800,
              letterSpacing:".12em", color:"#FFD600", textTransform:"uppercase", marginBottom:18,
            }}>
              <span style={{fontSize:15}}>🎁</span> Special Section · Naresh Book Depot
            </div>

            <h1 className="kgz-fred kgz-fadein-1" style={{
              fontSize:"clamp(38px,5.5vw,68px)", fontWeight:900, lineHeight:1.08, color:"#fff", margin:0,
            }}>
              Kids &amp; <span style={{color:"#FFD600"}}>Gifts</span><br />
              <span style={{color:"#FF3CAC"}}>Zone</span> 🚀
            </h1>

            <p className="kgz-fadein-2" style={{
              marginTop:16, color:"rgba(255,255,255,.55)", fontSize:15, lineHeight:1.65,
            }}>
              Toys, creative kits &amp; unique birthday gifts for every child in Jalandhar.{" "}
              <strong style={{color:"#00E5FF"}}>100+ products</strong> ready for you!
            </p>

            <div className="kgz-fadein-3" style={{ marginTop:28, display:"flex", gap:10, flexWrap:"wrap" }}>
              {TABS.map(t => {
                const active = filter === t.key;
                const cfg = t.key === "all"
                  ? { accent:"#FFD600", textDark:true }
                  : { accent:getCat(t.key).accent, textDark: t.key==="youth"||t.key==="all" };
                return (
                  <button key={t.key} onClick={() => setFilter(t.key)}
                    style={{
                      padding:"10px 22px", borderRadius:50, fontSize:15,
                      fontFamily:"'Fredoka One',cursive", cursor:"pointer",
                      border:`2px solid ${active ? cfg.accent : "rgba(255,255,255,.2)"}`,
                      background: active ? cfg.accent : "rgba(255,255,255,.07)",
                      color: active ? (cfg.textDark ? "#000":"#fff") : "rgba(255,255,255,.75)",
                      transition:"all .22s",
                    }}
                    onMouseEnter={e => { if(!active){e.currentTarget.style.background="rgba(255,255,255,.14)";e.currentTarget.style.color="#fff";}}}
                    onMouseLeave={e => { if(!active){e.currentTarget.style.background="rgba(255,255,255,.07)";e.currentTarget.style.color="rgba(255,255,255,.75)";}}}
                  >
                    {t.emoji} {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SPOTLIGHT 2×2 */}
          <div className="kgz-spot-grid kgz-fadein-2">
            {spotlight.map((p, i) => {
              const cfg = getCat(p.category);
              return (
                <div key={p.id != null ? p.id : `sp_${i}`}
                  style={{
                    borderRadius:18, overflow:"hidden",
                    background:"#161628", border:"1.5px solid rgba(255,255,255,.08)",
                    cursor:"pointer", transition:"transform .3s, box-shadow .3s",
                  }}
                  onClick={() => setZoom(p)}
                  onMouseEnter={onSpotEnter}
                  onMouseLeave={onSpotLeave}
                >
                  <div style={{ height:3, background:`linear-gradient(to right,${cfg.accent},transparent)` }} />
                  <div style={{
                    height:90, background:"#fff",
                    display:"flex", alignItems:"center", justifyContent:"center", padding:8,
                  }}>
                    <img src={p.imageUrl} alt={p.name}
                      style={{ maxHeight:"100%", maxWidth:"100%", objectFit:"contain" }} />
                  </div>
                  <div style={{ padding:"10px 12px", fontSize:12, fontWeight:800, color:"#fff" }}>
                    {p.name}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════
            BANNER  (FIXED)
        ══════════════════════ */}
        <div className="kgz-banner">
          {/* glow bg */}
          <div style={{
            position:"absolute", inset:0, pointerEvents:"none",
            background:`
              radial-gradient(ellipse 40% 80% at 0% 50%,rgba(123,47,255,.28),transparent),
              radial-gradient(ellipse 30% 60% at 100% 50%,rgba(255,60,172,.18),transparent)
            `,
          }} />

          {/* emoji – tightly sized, no spreading */}
          <div className="kgz-bounce" style={{
            fontSize:46, lineHeight:1, zIndex:1, flexShrink:0, width:52, textAlign:"center",
          }}>🎉</div>

          {/* text block – stretches to fill middle */}
          <div className="kgz-banner-text">
            <h3 className="kgz-fred" style={{fontSize:21, color:"#fff", margin:"0 0 5px"}}>
              Birthday Gift? We've Got You!
            </h3>
            <p style={{fontSize:14, color:"rgba(255,255,255,.52)", margin:0, lineHeight:1.55}}>
              Get <strong style={{color:"#FFD600"}}>FREE gift wrapping</strong> on orders above ₹499.{" "}
              <span style={{color:"#00E5FF"}}>Surprise your little one with the perfect gift today!</span>
            </p>
          </div>

          {/* CTA */}
          <div className="kgz-banner-cta">
            <button className="kgz-fred"
              style={{
                background:"linear-gradient(135deg,#FF3CAC,#7B2FFF)",
                color:"#fff", border:"none", borderRadius:50,
                padding:"13px 28px", fontSize:15, cursor:"pointer", whiteSpace:"nowrap",
                transition:"transform .25s, box-shadow .25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform="scale(1.05)"; e.currentTarget.style.boxShadow="0 10px 30px rgba(255,60,172,.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}
            >
              Shop Birthday Gifts →
            </button>
          </div>
        </div>

        {/* ══════════════════════
            PRODUCTS GRID (FIXED)
        ══════════════════════ */}
        <section style={{ padding:"0 6%" }}>
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:26 }}>
            <h2 className="kgz-fred" style={{ fontSize:24, fontWeight:900, whiteSpace:"nowrap", margin:0 }}>
              🔥 Trending Now
            </h2>
            <div style={{
              flex:1, height:2,
              background:"linear-gradient(to right,rgba(255,255,255,.15),transparent)", borderRadius:2,
            }} />
            <div style={{
              background:"rgba(255,214,0,.15)", border:"1px solid rgba(255,214,0,.3)",
              borderRadius:50, padding:"4px 14px", fontSize:12, fontWeight:800, color:"#FFD600",
            }}>{visible.length} products</div>
          </div>

          {loading && (
            <div style={{ padding:"80px 0", textAlign:"center", color:"rgba(255,255,255,.4)", fontSize:16 }}>
              Loading products…
            </div>
          )}
          {!loading && visible.length === 0 && (
            <div style={{ padding:"80px 0", textAlign:"center", color:"rgba(255,255,255,.4)", fontSize:16 }}>
              No products found in this category.
            </div>
          )}

          {!loading && (
            <div className="kgz-grid">
              {visible.map((p, i) => {
                const cfg = getCat(p.category);
                const wk  = wishKey(p, i);   // ← unique per card
                const isW = !!wished[wk];

                return (
                  <div key={p.id != null ? p.id : `card_${i}`}
                    className="kgz-card-anim"
                    style={{
                      background:"#161628", borderRadius:20,
                      border:"1.5px solid rgba(255,255,255,.07)",
                      overflow:"hidden", cursor:"pointer",
                      transition:"transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s",
                      animationDelay:`${i * 0.055}s`,
                    }}
                    onClick={() => setZoom(p)}
                    onMouseEnter={onCardEnter}
                    onMouseLeave={onCardLeave}
                  >
                    {/* image area */}
                    <div className="kgz-card-img-wrap">
                      <div style={{
                        position:"absolute", top:0, left:0, right:0, height:4, zIndex:2,
                        background:`linear-gradient(to right,${cfg.accent},transparent)`,
                      }} />

                      <img className="kgz-card-img" src={p.imageUrl} alt={p.name}
                        style={{ maxHeight:"100%", maxWidth:"100%", objectFit:"contain", transition:"transform .5s" }} />

                      {p.ageRange && (
                        <div style={{
                          position:"absolute", top:9, right:9,
                          background:"rgba(0,0,0,.65)", backdropFilter:"blur(6px)",
                          borderRadius:50, padding:"3px 9px", fontSize:10, fontWeight:800,
                          color:"#fff", border:"1px solid rgba(255,255,255,.15)", zIndex:3,
                        }}>{p.ageRange}</div>
                      )}

                      {/* FIX: wishlist uses wk (unique per card), NOT p.id */}
                      <button
                        style={{
                          position:"absolute", top:9, left:9, width:30, height:30,
                          background: isW ? "rgba(255,60,172,.5)" : "rgba(0,0,0,.6)",
                          backdropFilter:"blur(6px)", borderRadius:"50%", border:"none",
                          cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
                          fontSize:14, color: isW ? "#FF3CAC":"#fff", zIndex:3,
                          transition:"transform .2s, background .2s",
                        }}
                        onClick={e => toggleWish(wk, e)}
                        onMouseEnter={e => e.currentTarget.style.transform="scale(1.25)"}
                        onMouseLeave={e => e.currentTarget.style.transform=""}
                      >
                        {isW ? "♥" : "♡"}
                      </button>
                    </div>

                    {/* card body */}
                    <div style={{ padding:"12px 13px" }}>
                      <div style={{
                        fontSize:10, fontWeight:800, textTransform:"uppercase",
                        letterSpacing:".1em", marginBottom:5, color:cfg.accent,
                      }}>
                        {p.label || cfg.label}
                      </div>
                      <div style={{
                        fontSize:14, fontWeight:800, color:"#fff", lineHeight:1.25, marginBottom:6,
                        overflow:"hidden", display:"-webkit-box",
                        WebkitLineClamp:2, WebkitBoxOrient:"vertical",
                      }}>
                        {p.name}
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:7 }}>
                        <span style={{ fontSize:17, fontWeight:900, color:"#FFD600" }}>{p.price}</span>
                        {p.oldPrice && (
                          <span style={{ fontSize:11, fontWeight:600, color:"rgba(255,255,255,.32)", textDecoration:"line-through" }}>
                            {p.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ══════════════════════
            ZOOM MODAL
        ══════════════════════ */}
        {zoom && (
          <div onClick={() => setZoom(null)} style={{
            position:"fixed", inset:0,
            background:"rgba(0,0,0,.88)", backdropFilter:"blur(10px)",
            zIndex:9999, display:"flex", alignItems:"center", justifyContent:"center", padding:20,
          }}>
            <div onClick={e => e.stopPropagation()} style={{
              background:"#161628", borderRadius:24, overflow:"hidden",
              border:"1.5px solid rgba(255,255,255,.12)", maxWidth:720, width:"100%",
              boxShadow:"0 40px 100px rgba(0,0,0,.8)",
              animation:"kgzZoomIn .25s cubic-bezier(.34,1.56,.64,1) both",
            }}>
              <img src={zoom.imageUrl} alt={zoom.name}
                style={{ width:"100%", maxHeight:"68vh", objectFit:"contain", display:"block", background:"#fff", padding:20 }} />
              <div style={{ padding:"16px 20px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div>
                  <div className="kgz-fred" style={{ fontSize:18, color:"#fff", marginBottom:4 }}>{zoom.name}</div>
                  <div style={{ fontSize:20, fontWeight:900, color:"#FFD600" }}>{zoom.price}</div>
                </div>
                <button onClick={() => setZoom(null)}
                  style={{
                    background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.2)",
                    borderRadius:50, padding:"8px 20px", color:"#fff", cursor:"pointer",
                    fontSize:13, fontWeight:700, transition:"background .2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,.2)"}
                  onMouseLeave={e => e.currentTarget.style.background="rgba(255,255,255,.1)"}
                >✕ Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}