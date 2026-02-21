// const features = [
//   {
//     title: "Easy Transaction Management",
//     description:
//       "Add, edit, and delete income or expenses effortlessly with a clean interface.",
//   },
//   {
//     title: "Real-Time Balance Tracking",
//     description:
//       "Instantly see your updated balance whenever you add a transaction.",
//   },
//   {
//     title: "Secure Authentication",
//     description:
//       "User authentication ensures your financial data stays protected.",
//   },
//   {
//     title: "Responsive Design",
//     description:
//       "Optimized for desktop, tablet, and mobile devices.",
//   },
//   {
//     title: "Organized Dashboard",
//     description:
//       "Clear and structured layout for better financial visibility.",
//   },
//   {
//     title: "Modern UI Experience",
//     description:
//       "Built with modern technologies for a smooth and fast experience.",
//   },
// ];

// const Features = () => {
//   return (
//     <section className="bg-[#0f1c2e] py-20">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Section Title */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-bold text-white">
//             Powerful Features
//           </h2>
//           <p className="text-gray-400 mt-4">
//             Designed to make expense tracking simple, secure, and efficient.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-[#13243a] border border-white/10 p-8 rounded-2xl 
//                          hover:scale-105 hover:border-blue-500/40 
//                          transition duration-300 shadow-lg"
//             >
//               <h3 className="text-xl font-semibold text-white mb-4">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;
const features = [
  {
    title: "Easy Transaction Management",
    description: "Add, edit, and delete income or expenses effortlessly with a clean interface.",
  },
  {
    title: "Real-Time Balance Tracking",
    description: "Instantly see your updated balance whenever you add a transaction.",
  },
  {
    title: "Secure Authentication",
    description: "User authentication ensures your financial data stays protected.",
  },
  {
    title: "Responsive Design",
    description: "Optimized for desktop, tablet, and mobile devices.",
  },
  {
    title: "Organized Dashboard",
    description: "Clear and structured layout for better financial visibility.",
  },
  {
    title: "Modern UI Experience",
    description: "Built with modern technologies for a smooth and fast experience.",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2>Powerful Features</h2>
          <p>Designed to make expense tracking simple, secure, and efficient.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
