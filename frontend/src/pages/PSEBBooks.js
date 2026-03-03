// import React from 'react';
// import { motion } from 'framer-motion';
// import { BookOpen, FileText, ClipboardCheck, Beaker, CheckCircle } from 'lucide-react';

// const PSEBBooks = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 40 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   };

//   const categories = [
//     {
//       icon: BookOpen,
//       title: 'Subject Books',
//       description: 'Complete textbook collection for all PSEB subjects',
//       items: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Punjabi', 'Social Studies', 'Computer Science'],
//       color: 'blue',
//     },
//     {
//       icon: FileText,
//       title: 'Guides & Solutions',
//       description: 'Comprehensive study guides and solution books',
//       items: ['Subject-wise guides', 'Chapter summaries', 'Solved examples', 'Practice questions'],
//       color: 'purple',
//     },
//     {
//       icon: ClipboardCheck,
//       title: 'Guess Papers',
//       description: 'Latest exam pattern guess papers',
//       items: ['Previous year papers', 'Sample papers', 'Model test papers', 'Important questions'],
//       color: 'orange',
//     },
//     {
//       icon: Beaker,
//       title: 'Lab Manuals & Practical Files',
//       description: 'Complete practical work support',
//       items: ['Lab manuals', 'Practical files', 'Diagrams', 'Experiment records'],
//       color: 'green',
//     },
//   ];

//   const classes = [
//     { class: '9th Class', subjects: 8, icon: '📚' },
//     { class: '10th Class', subjects: 8, icon: '📖' },
//     { class: '11th Class', subjects: 12, icon: '📕' },
//     { class: '12th Class', subjects: 12, icon: '📗' },
//   ];

//   return (
//     <div data-testid="pseb-books-page" className="pt-28 pb-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="font-outfit text-5xl md:text-6xl font-bold text-slate-900 mb-4">
//             PSEB Books <span className="text-blue-600">(Class 9-12)</span>
//           </h1>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Complete collection of Punjab School Education Board textbooks, guides, and study materials
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           {classes.map((item, index) => (
//             <motion.div
//               key={item.class}
//               data-testid={`class-card-${item.class.replace(' ', '-').toLowerCase()}`}
//               className="bg-white rounded-2xl p-6 shadow-card hover:shadow-floating transition-all text-center border border-slate-100"
//               whileHover={{ y: -5, scale: 1.02 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <div className="text-5xl mb-3">{item.icon}</div>
//               <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">{item.class}</h3>
//               <p className="text-slate-600 text-sm">{item.subjects} subjects available</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           {categories.map((category, index) => {
//             const Icon = category.icon;
//             const colorClasses = {
//               blue: 'text-blue-600 bg-blue-100',
//               purple: 'text-purple-600 bg-purple-100',
//               orange: 'text-orange-600 bg-orange-100',
//               green: 'text-green-600 bg-green-100',
//             };

//             return (
//               <motion.div
//                 key={category.title}
//                 data-testid={`category-card-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
//                 className="bg-white rounded-2xl p-8 shadow-card hover:shadow-floating transition-all border border-slate-100 group"
//                 whileHover={{ y: -5 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 + index * 0.1 }}
//               >
//                 <div className={`inline-flex p-4 rounded-2xl ${colorClasses[category.color]} mb-4`}>
//                   <Icon size={32} />
//                 </div>
//                 <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-2">
//                   {category.title}
//                 </h3>
//                 <p className="text-slate-600 mb-4">{category.description}</p>
//                 <ul className="space-y-2">
//                   {category.items.map((item, i) => (
//                     <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
//                       <CheckCircle size={16} className={`mt-0.5 ${category.color === 'blue' ? 'text-blue-600' : category.color === 'purple' ? 'text-purple-600' : category.color === 'orange' ? 'text-orange-600' : 'text-green-600'}`} />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         <motion.div
//           className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-4">
//             Need Help Finding the Right Book?
//           </h2>
//           <p className="text-lg mb-6 text-blue-100">
//             Visit our store or call us for personalized assistance
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <a
//               href="tel:9855407298"
//               data-testid="cta-call-button"
//               className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-all hover:scale-105 active:scale-95"
//             >
//               Call: 9855407298
//             </a>
//             <a
//               href="https://wa.me/918264890587?text=I%20need%20help%20with%20PSEB%20books"
//               target="_blank"
//               rel="noopener noreferrer"
//               data-testid="cta-whatsapp-button"
//               className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-all hover:scale-105 active:scale-95"
//             >
//               WhatsApp Us
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default PSEBBooks;


//BBB
// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   BookOpen,
//   FileText,
//   ClipboardCheck,
//   Beaker,
//   CheckCircle,
//   GraduationCap
// } from 'lucide-react';

// const PSEBBooks = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 40 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   };

//   const categories = [
//     {
//       icon: BookOpen,
//       title: 'Subject Books',
//       description: 'Complete textbook collection for all boards',
//       items: [
//         'PSEB All Classes',
//         'CBSE 9th & 10th',
//         'All Main Subjects',
//         'Latest Editions'
//       ],
//       color: 'blue',
//     },
//     {
//       icon: FileText,
//       title: 'Guides & Solutions',
//       description: 'Comprehensive study guides & solved examples',
//       items: [
//         'Subject-wise guides',
//         'Chapter summaries',
//         'Solved numericals',
//         'Practice questions'
//       ],
//       color: 'purple',
//     },
//     {
//       icon: ClipboardCheck,
//       title: 'Guess Papers',
//       description: 'Latest exam pattern papers',
//       items: [
//         'Previous year papers',
//         'Model test papers',
//         'Important questions',
//         'Board pattern format'
//       ],
//       color: 'orange',
//     },
//     {
//       icon: Beaker,
//       title: 'Lab Manuals & Practical Files',
//       description: 'Complete practical work support',
//       items: [
//         'Lab manuals',
//         'Practical files',
//         'Diagrams',
//         'Experiment records'
//       ],
//       color: 'green',
//     },
//   ];

//   const boards = [
//     {
//       title: 'PSEB Books',
//       subtitle: 'All Classes Available',
//       description: 'From Nursery to 12th – All Subjects Available',
//       badge: 'Punjab Board',
//       color: 'from-blue-500 to-indigo-600',
//     },
//     {
//       title: 'CBSE 9th Class',
//       subtitle: 'Latest Edition',
//       description: 'Complete 9th class textbooks & guides',
//       badge: 'CBSE',
//       color: 'from-green-500 to-emerald-600',
//     },
//     {
//       title: 'CBSE 10th Class',
//       subtitle: 'Board Preparation',
//       description: 'Textbooks, sample papers & solutions',
//       badge: 'CBSE',
//       color: 'from-purple-500 to-violet-600',
//     },
//   ];

//   return (
//     <div className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
//       <div className="container mx-auto px-4">

//         {/* Heading */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="font-outfit text-5xl md:text-6xl font-bold text-slate-900 mb-4">
//             School Board Books Collection
//           </h1>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Complete range of PSEB (All Classes) and CBSE (9th & 10th)
//             textbooks, guides & study materials
//           </p>
//         </motion.div>

//         {/* Board Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//           {boards.map((board, index) => (
//             <motion.div
//               key={board.title}
//               className="rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
//               style={{
//                 background: `linear-gradient(to right, var(--tw-gradient-stops))`
//               }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className={`absolute inset-0 bg-gradient-to-r ${board.color} opacity-90`} />
//               <div className="relative z-10">
//                 <span className="text-sm bg-white/20 px-4 py-1 rounded-full">
//                   {board.badge}
//                 </span>
//                 <h3 className="text-2xl font-bold mt-4">{board.title}</h3>
//                 <p className="mt-2 text-white/90">{board.subtitle}</p>
//                 <p className="mt-4 text-white/80 text-sm">{board.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Categories */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
//           {categories.map((category, index) => {
//             const Icon = category.icon;

//             const colorClasses = {
//               blue: 'text-blue-600 bg-blue-100',
//               purple: 'text-purple-600 bg-purple-100',
//               orange: 'text-orange-600 bg-orange-100',
//               green: 'text-green-600 bg-green-100',
//             };

//             return (
//               <motion.div
//                 key={category.title}
//                 className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all"
//                 whileHover={{ y: -8 }}
//               >
//                 <div className={`inline-flex p-4 rounded-2xl ${colorClasses[category.color]} mb-4`}>
//                   <Icon size={32} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-2">
//                   {category.title}
//                 </h3>
//                 <p className="text-slate-600 mb-4">{category.description}</p>
//                 <ul className="space-y-2">
//                   {category.items.map((item, i) => (
//                     <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
//                       <CheckCircle size={16} className="text-green-500 mt-0.5" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <motion.div
//           className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <GraduationCap size={48} className="mx-auto mb-4" />
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Need Help Finding the Right Book?
//           </h2>
//           <p className="text-lg mb-6 text-blue-100">
//             Visit our store or call us for personalized assistance
//           </p>

//           <div className="flex flex-wrap gap-4 justify-center">
//             <a
//               href="tel:9855407298"
//               className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-all hover:scale-105"
//             >
//               Call: 9855407298
//             </a>

//             <a
//               href="https://wa.me/918264890587"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-all hover:scale-105"
//             >
//               WhatsApp Us
//             </a>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default PSEBBooks;


//////////ccc

// import React from "react";
// import { motion } from "framer-motion";

// const boards = [
//   {
//     tag: "PSEB",
//     title: "PSEB Books",
//     subtitle: "All Classes Available",
//     desc: "Complete Punjab Board textbooks from Nursery to 12th",
//     badge: "All Subjects Available",
//     gradient: "from-blue-400 via-indigo-500 to-purple-500",
//     emoji: "📚",
//   },
//   {
//     tag: "CBSE",
//     title: "CBSE 9th Class",
//     subtitle: "Latest Edition",
//     desc: "Complete 9th class CBSE textbooks & guides",
//     badge: "All Main Subjects",
//     gradient: "from-green-400 via-emerald-500 to-teal-500",
//     emoji: "📗",
//   },
//   {
//     tag: "CBSE",
//     title: "CBSE 10th Class",
//     subtitle: "Board Preparation",
//     desc: "CBSE 10th textbooks, sample papers & solutions",
//     badge: "All Main Subjects",
//     gradient: "from-purple-400 via-pink-500 to-violet-500",
//     emoji: "📘",
//   },
// ];

// const PSEBBooks = () => {
//   return (
//     <div className="relative overflow-hidden pt-28 pb-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">

//       {/* Soft Glow Background Blobs */}
//       <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-blue-300 opacity-30 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-300 opacity-30 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 relative z-10">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
//             School Board Books Collection
//           </h1>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Complete range of PSEB (All Classes) and CBSE (9th & 10th)
//             textbooks, guides & study materials
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

//           {boards.map((board, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -18, scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="relative rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl p-10 overflow-hidden border border-white/40"
//             >

//               {/* Floating Sparkles */}
//               <div className="absolute top-4 right-6 text-yellow-400 text-xl opacity-70">
//                 ✨
//               </div>

//               {/* Board Tag */}
//               <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-1 rounded-full text-sm font-semibold shadow">
//                 {board.tag}
//               </div>

//               {/* Content */}
//               <div className="relative z-10 mt-10 text-center">

//                 <h3 className="text-3xl font-bold text-slate-800 mb-3">
//                   {board.title}
//                 </h3>

//                 <span
//                   className={`inline-block bg-gradient-to-r ${board.gradient} text-white px-5 py-1 rounded-full text-sm font-medium mb-4`}
//                 >
//                   {board.subtitle}
//                 </span>

//                 <p className="text-slate-600 text-sm mb-10">
//                   {board.desc}
//                 </p>

//                 {/* Illustration Area */}
//                 <div className="relative flex justify-center items-center h-36">
//                   <div className="absolute w-40 h-20 bg-gradient-to-r from-blue-200 to-purple-200 blur-2xl opacity-50 rounded-full" />
//                   <div className="relative w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center text-5xl">
//                     {board.emoji}
//                   </div>
//                 </div>

//                 {/* Bottom Badge */}
//                 <div className="mt-8">
//                   <span className="px-6 py-2 bg-white shadow-md rounded-full text-slate-700 text-sm font-medium">
//                     {board.badge}
//                   </span>
//                 </div>

//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default PSEBBooks;

/////////dddddd
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   BookOpen,
//   FileText,
//   ClipboardCheck,
//   Beaker,
//   CheckCircle,
// } from "lucide-react";

// const boards = [
//   {
//     tag: "PSEB",
//     title: "PSEB Books",
//     subtitle: "All Classes Available",
//     desc: "Complete Punjab Board textbooks from Nursery to 12th",
//     badge: "All Subjects Available",
//     gradient: "from-blue-400 via-indigo-500 to-purple-500",
//     emoji: "📚",
//   },
//   {
//     tag: "CBSE",
//     title: "CBSE 9th Class",
//     subtitle: "Latest Edition",
//     desc: "Complete 9th class CBSE textbooks & guides",
//     badge: "All Main Subjects",
//     gradient: "from-green-400 via-emerald-500 to-teal-500",
//     emoji: "📗",
//   },
//   {
//     tag: "CBSE",
//     title: "CBSE 10th Class",
//     subtitle: "Board Preparation",
//     desc: "CBSE 10th textbooks, sample papers & solutions",
//     badge: "All Main Subjects",
//     gradient: "from-purple-400 via-pink-500 to-violet-500",
//     emoji: "📘",
//   },
// ];

// const categories = [
//   {
//     icon: BookOpen,
//     title: "Subject Books",
//     description: "Complete textbook collection for all PSEB subjects",
//     items: [
//       "Mathematics",
//       "Physics",
//       "Chemistry",
//       "Biology",
//       "English",
//       "Punjabi",
//       "Social Studies",
//       "Computer Science",
//     ],
//     glow: "bg-blue-300/30",
//     iconBg: "bg-blue-100 text-blue-600",
//   },
//   {
//     icon: FileText,
//     title: "Guides & Solutions",
//     description: "Comprehensive study guides and solution books",
//     items: [
//       "Subject-wise guides",
//       "Chapter summaries",
//       "Solved examples",
//       "Practice questions",
//     ],
//     glow: "bg-purple-300/30",
//     iconBg: "bg-purple-100 text-purple-600",
//   },
//   {
//     icon: ClipboardCheck,
//     title: "Guess Papers",
//     description: "Latest exam pattern guess papers",
//     items: [
//       "Previous year papers",
//       "Sample papers",
//       "Model test papers",
//       "Important questions",
//     ],
//     glow: "bg-orange-300/30",
//     iconBg: "bg-orange-100 text-orange-600",
//   },
//   {
//     icon: Beaker,
//     title: "Lab Manuals & Practical Files",
//     description: "Complete practical work support",
//     items: [
//       "Lab manuals",
//       "Practical files",
//       "Diagrams",
//       "Experiment records",
//     ],
//     glow: "bg-green-300/30",
//     iconBg: "bg-green-100 text-green-600",
//   },
// ];

// const PSEBBooks = () => {
//   return (
//     <div className="relative overflow-hidden pt-28 pb-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">

//       {/* Background Blobs */}
//       <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-blue-300 opacity-30 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-300 opacity-30 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 relative z-10">

//         {/* ===== Creative Board Section ===== */}
//         <div className="text-center mb-20">
//           <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
//             School Board Books Collection
//           </h1>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Complete range of PSEB (All Classes) and CBSE (9th & 10th)
//             textbooks, guides & study materials
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-28">
//           {boards.map((board, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -18, scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="relative rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl p-10 overflow-hidden border border-white/40"
//             >
//               <div className="absolute top-6 left-6 bg-white/80 px-4 py-1 rounded-full text-sm font-semibold shadow">
//                 {board.tag}
//               </div>

//               <div className="mt-10 text-center">
//                 <h3 className="text-3xl font-bold text-slate-800 mb-3">
//                   {board.title}
//                 </h3>

//                 <span
//                   className={`inline-block bg-gradient-to-r ${board.gradient} text-white px-5 py-1 rounded-full text-sm font-medium mb-4`}
//                 >
//                   {board.subtitle}
//                 </span>

//                 <p className="text-slate-600 text-sm mb-10">{board.desc}</p>

//                 <div className="flex justify-center mb-8">
//                   <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center text-5xl">
//                     {board.emoji}
//                   </div>
//                 </div>

//                 <span className="px-6 py-2 bg-white shadow-md rounded-full text-slate-700 text-sm font-medium">
//                   {board.badge}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ===== Upgraded Categories Section ===== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
//           {categories.map((category, index) => {
//             const Icon = category.icon;

//             return (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -10 }}
//                 className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white/40 overflow-hidden"
//               >
//                 <div className={`absolute inset-0 ${category.glow} blur-2xl opacity-40`} />

//                 <div className="relative z-10">
//                   <div className={`inline-flex p-4 rounded-2xl ${category.iconBg} mb-6`}>
//                     <Icon size={32} />
//                   </div>

//                   <h3 className="text-2xl font-bold text-slate-800 mb-3">
//                     {category.title}
//                   </h3>

//                   <p className="text-slate-600 mb-6">
//                     {category.description}
//                   </p>

//                   <ul className="space-y-3">
//                     {category.items.map((item, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start gap-3 text-sm text-slate-700"
//                       >
//                         <CheckCircle
//                           size={18}
//                           className="text-green-500 mt-0.5"
//                         />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* ===== CTA ===== */}
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Need Help Finding the Right Book?
//           </h2>
//           <p className="text-lg mb-6 text-blue-100">
//             Visit our store or call us for personalized assistance
//           </p>

//           <div className="flex flex-wrap gap-4 justify-center">
//             <a
//               href="tel:9855407298"
//               className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-all hover:scale-105"
//             >
//               Call: 9855407298
//             </a>

//             <a
//               href="https://wa.me/918264890587"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-all hover:scale-105"
//             >
//               WhatsApp Us
//             </a>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default PSEBBooks;

///eeeeeeeeeeeee
import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  ClipboardCheck,
  Beaker,
  CheckCircle,
} from "lucide-react";

const boards = [
  {
    tag: "PSEB",
    title: "PSEB Books",
    subtitle: "All Classes Available",
    desc: "Complete Punjab Board Textbooks from Class 1 to 12",
    badge: "All Subjects Available",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
    emoji: "📚",
  },
  {
    tag: "CBSE",
    title: "CBSE 9th Class",
    subtitle: "Latest Edition",
    desc: "Complete 9th class CBSE textbooks & guides",
    badge: "All Main Subjects",
    gradient: "from-green-400 via-emerald-500 to-teal-500",
    emoji: "📗",
  },
  {
    tag: "CBSE",
    title: "CBSE 10th Class",
    subtitle: "Board Preparation",
    desc: "CBSE 10th textbooks, sample papers & solutions",
    badge: "All Main Subjects",
    gradient: "from-purple-400 via-pink-500 to-violet-500",
    emoji: "📘",
  },
];

const categories = [
  {
    icon: BookOpen,
    title: "Subject Books",
    description: "Complete textbook collection for all PSEB subjects",
    items: [
      "Mathematics",
      "Science",
      "English",
      "Hindi",
      "Political Science",
      "Punjabi",
      "Social Studies",
      "Computer Science",
    ],
    glow: "bg-blue-300/30",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    icon: FileText,
    title: "Guides & Solutions",
    description: "Comprehensive study guides and solution books",
    items: [
      "Subject-wise guides",
      "Chapter summaries",
      "Solved examples",
      "Practice questions",
    ],
    glow: "bg-purple-300/30",
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    icon: ClipboardCheck,
    title: "Guess Papers",
    description: "Latest exam pattern guess papers",
    items: [
      "Previous year papers",
      "Sample papers",
      "Model test papers",
      "Important questions",
    ],
    glow: "bg-purple-300/30",
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    icon: Beaker,
    title: "Lab Manuals & Practical Files",
    description: "Complete practical work support",
    items: [
      "Lab manuals",
      "Practical files",
      "Diagrams",
      "Experiment records",
    ],
    glow: "bg-green-300/30",
    iconBg: "bg-green-100 text-green-600",
  },
];

const PSEBBooks = () => {
  return (
    <div className="relative overflow-hidden pt-28 pb-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">

      {/* Background Soft Blobs */}
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-blue-300 opacity-30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-300 opacity-30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            School Board Books Collection
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Complete range of PSEB (All Classes) and CBSE (9th & 10th)
            textbooks, guides & study materials
          </p>
        </div>

        {/* ===== Creative Board Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-28">
          {boards.map((board, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -20, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="relative rounded-[32px] bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-12 overflow-hidden border border-white/50"
            >
              {/* Bottom watercolor glow */}
              <div className={`absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-r ${board.gradient} opacity-20 blur-3xl`} />

              {/* Sparkles */}
              <div className="absolute top-6 right-8 text-yellow-400 text-xl opacity-60">✨</div>
              <div className="absolute top-20 left-10 text-blue-400 text-sm opacity-50">✦</div>

              {/* Tag */}
              <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-md px-5 py-1.5 rounded-full text-xs font-semibold shadow-md">
                {board.tag}
              </div>

              <div className="relative z-10 mt-12 text-center">
                <h3 className="text-3xl font-extrabold text-slate-800 mb-4">
                  {board.title}
                </h3>

                <span
                  className={`inline-block bg-gradient-to-r ${board.gradient} text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg`}
                >
                  {board.subtitle}
                </span>

                <p className="text-slate-600 text-sm leading-relaxed mb-12 px-4">
                  {board.desc}
                </p>

                <div className="relative flex justify-center mb-10">
                  <div className="absolute w-40 h-20 bg-gradient-to-r from-blue-200 to-purple-200 opacity-30 blur-2xl rounded-full" />
                  <div className="relative w-28 h-28 bg-white rounded-3xl shadow-xl flex items-center justify-center text-6xl">
                    {board.emoji}
                  </div>
                </div>

                <span className="px-8 py-3 bg-white/90 backdrop-blur-md shadow-md rounded-full text-slate-700 text-sm font-medium">
                  {board.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== Categories Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white/40 overflow-hidden"
              >
                <div className={`absolute inset-0 ${category.glow} blur-2xl opacity-40`} />

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl ${category.iconBg} mb-6`}>
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {category.title}
                  </h3>

                  <p className="text-slate-600 mb-6">
                    {category.description}
                  </p>

                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle size={18} className="text-green-500 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===== CTA ===== */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Finding the Right Book?
          </h2>
          <p className="text-lg mb-6 text-blue-100">
            Visit our store or call us for personalized assistance
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:9855407298"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-all hover:scale-105"
            >
              Call: 9855407298
            </a>

            <a
              href="https://wa.me/918264890587"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-all hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PSEBBooks;