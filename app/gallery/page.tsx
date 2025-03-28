

// // import Link from 'next/link'; // Link component to navigate to category pages
// // import Image from 'next/image'; // For optimized images

// // // Categories data
// // const categories = [
// //   {
// //     title: "Pre Primary Photo",
// //     imageUrl:
// //       "https://images.pexels.com/photos/8422209/pexels-photo-8422209.jpeg?auto=compress&cs=tinysrgb&w=600",
// //   },
// //   {
// //     title: "Primary and Secondary Photo",
// //     imageUrl:
// //       "https://images.pexels.com/photos/8465501/pexels-photo-8465501.jpeg?auto=compress&cs=tinysrgb&w=600",
// //   },
// //   {
// //     title: "Independence Day",
// //     imageUrl:
// //       "https://varthana.com/school/wp-content/uploads/2024/08/B1062-School.jpg",
// //   },
// //   {
// //     title: "Rainy Day",
// //     imageUrl:
// //       "https://img.freepik.com/free-photo/young-child-enjoying-childhood-happiness-by-playing-puddle-water-after-rain_23-2151470096.jpg?ga=GA1.1.500025587.1734678899&semt=ais_hybrid",
// //   },
// //   {
// //     title: "Summer Camp",
// //     imageUrl:
// //       "https://thethaiger.com/wp-content/uploads/2023/03/Panyaden-International-School-Chiang-Mai.jpeg",
// //   },
// //   {
// //     title: "Ganesh Chaturti Celebration",
// //     imageUrl:
// //       "https://images.pexels.com/photos/30215577/pexels-photo-30215577/free-photo-of-vibrant-ganesh-idol-decorated-for-ganesh-chaturthi.jpeg?auto=compress&cs=tinysrgb&w=600",
// //   },
// //   {
// //     title: "Yoga Day",
// //     imageUrl:
// //       "https://www.freepsdking.com/wp-content/uploads/2021/06/International-Yoga-Day-Poster-5-1024x1024.jpg",
// //   },
// //   {
// //     title: "Grand Parents Celebration",
// //     imageUrl:
// //       "https://img.freepik.com/premium-photo/poster-grandparents-grandparents-holding-hands_960782-209583.jpg?ga=GA1.1.500025587.1734678899&semt=ais_hybrid",
// //   },
// // ];

// // export default function GalleryOverview() {
// //   return (
// //     <div className="min-h-screen bg-gray-50 py-10">
// //       <div className="container mx-auto px-4">
// //         <h1 className="text-4xl font-bold text-center text-primary mb-12">Photo Categories</h1>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
// //           {categories.map((category, index) => (
// //             <Link
// //               key={index}
// //               href={`/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
// //             >
// //               <div className="relative h-48 rounded-lg overflow-hidden group">
// //                 <Image
// //                   src={category.imageUrl}
// //                   alt={category.title}
// //                   layout="fill"
// //                   objectFit="cover"
// //                   className="rounded-lg group-hover:scale-105 transition-transform duration-300"
// //                 />
// //                 <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-all duration-300">
// //                   <p className="text-white text-xl font-bold">{category.title}</p>
// //                 </div>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import Link from "next/link";
// import Image from "next/image";

// const categories = [
//   { title: "Pre Primary Photo", folder: "pre-primary-photo", imageUrl: "/images/pre-primary-photo/image1.jpg" },
//   { title: "Primary and Secondary Photo", folder: "primary-and-secondary-photo", imageUrl: "/images/primary-and-secondary-photo/image1.jpg" },
//   { title: "Independence Day", folder: "independence-day", imageUrl: "https://varthana.com/school/wp-content/uploads/2024/08/B1062-School.jpg" },
//   { title: "Rainy Day", folder: "rainy-day", imageUrl: "/images/rainy-day/image1.jpg" },
//   { title: "Summer Camp", folder: "summer-camp", imageUrl: "/images/summer-camp/image1.jpg" },
//   { title: "Ganesh Chaturti", folder: "ganesh-chaturti", imageUrl: "/images/ganesh-chaturti/image1.jpg" },
//   { title: "Yoga Day", folder: "yoga-day", imageUrl: "/images/yoga-day/image1.jpg" },
//   { title: "Grand Parents Celebration", folder: "grand-parents-celebration", imageUrl: "/images/grand-parents-celebration/image1.jpg" },
// ];

// export default function GalleryOverview() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-10">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center text-primary mb-12">Photo Categories</h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {categories.map((category, index) => (
//             <Link key={index} href={`/images/${category.folder}`}>
//               <div className="relative h-48 rounded-lg overflow-hidden group">
//                 <Image src={category.imageUrl} alt={category.title} layout="fill" objectFit="cover" className="rounded-lg group-hover:scale-105 transition-transform duration-300" />
//                 <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-all duration-300">
//                   <p className="text-white text-xl font-bold">{category.title}</p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const categories = [
//   { name: "independence-day", cover: "https://varthana.com/school/wp-content/uploads/2024/08/B1062-School.jpg" },
//   { name: "republic-day", cover: "https://img.freepik.com/free-photo/young-child-enjoying-childhood-happiness-by-playing-puddle-water-after-rain_23-2151470096.jpg?ga=GA1.1.500025587.1734678899&semt=ais_hybrid" },
// ];

// const independenceDayImages = [
//   "/images/independence-day/1.jpg",
//   "/images/independence-day/2.jpg",
//   "/images/independence-day/3.jpg",
//   "/images/independence-day/4.jpg",
//   "/images/independence-day/5.jpg",
//   "/images/independence-day/6.jpg",
//   "/images/independence-day/7.jpg",
//   "/images/independence-day/8.jpg",
//   "/images/independence-day/9.jpg",
//   "/images/independence-day/10.jpg",
//   "/images/independence-day/11.jpg",
//   "/images/independence-day/12.jpg",
//   "/images/independence-day/13.jpg",
//   "/images/independence-day/14.jpg",
//   "/images/independence-day/15.jpg",
//   "/images/independence-day/16.jpg",
//   "/images/independence-day/17.jpg",
//   "/images/independence-day/18.jpg",
//   "/images/independence-day/19.jpg",
//   "/images/independence-day/20.jpg",
// ]; // Add more images if available

// const RepublicDayImage = [
//   "/images/republic-day/1.jpg",
//   "/images/republic-day/2.jpg",
//   "/images/republic-day/3.jpg",
//   "/images/republic-day/4.jpg",
//   "/images/republic-day/5.jpg",
//   "/images/republic-day/6.jpg",
//   "/images/republic-day/7.jpg",
//   "/images/republic-day/8.jpg",
//   "/images/republic-day/9.jpg",
//   "/images/republic-day/10.jpg",

// ]

// export default function GalleryHome() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center text-primary mb-12">Gallery</h1>

//         {/* Show categories if no category is selected */}
//         {!selectedCategory ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             {categories.map((category) => (
//               <div
//                 key={category.name}
//                 className="cursor-pointer relative h-60 w-full rounded-lg overflow-hidden shadow-lg"
//                 onClick={() => setSelectedCategory(category.name)}
//               >
//                 <Image
//                   src={category.cover}
//                   alt={`${category.name} cover`}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-3 text-xl font-semibold capitalize">
//                   {category.name.replace("-", " ")}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Show images of "Independence Day" if selected
//           <div>
//             <button
//               className="mb-5 px-4 py-2 bg-blue-600 text-white rounded-lg"
//               onClick={() => setSelectedCategory(null)}
//             >
//               ⬅ Back to Categories
//             </button>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {independenceDayImages.map((img, index) => (
//                 <div key={index} className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
//                   <Image
//                     src={img}
//                     alt={`Independence Day ${index + 1}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";

// Define categories with cover images
const categories = [
  { name: "independence-day", cover: "https://varthana.com/school/wp-content/uploads/2024/08/B1062-School.jpg" },
  { name: "republic-day", cover: "https://img.freepik.com/premium-vector/republic-day-poster-26th-january-republic-day-post-republic-day-banner_958128-1670.jpg?w=826" },
  { name: "annual-day", cover: "https://img.freepik.com/free-vector/summertime-party-background_1048-910.jpg?t=st=1742984414~exp=1742988014~hmac=6aad9a4c705d031a08fa38c88f3702c936048984030d3c15389ceadafa47b269&w=1060" },
  { name: "environment-day", cover: "https://img.freepik.com/free-vector/world-environment-day-paper-style-background_23-2149394152.jpg?ga=GA1.1.657836346.1742984400&semt=ais_hybrid" },
  { name: "science-exhibition", cover: "https://img.freepik.com/premium-photo/international-day-education-portrayal-science-fair-with-students-presenting-innovation_950002-484072.jpg?ga=GA1.1.657836346.1742984400&semt=ais_hybrid" },
  { name: "marathi-day", cover: "https://images.news18.com/ibnlive/uploads/2024/02/marathi-language-day-2024-2024-02-353b7015e2fa383ca764276b734b68e6-scaled.jpg?impolicy=website&width=0&height=0" },
  { name: "dandiya-celebration", cover: "https://media.gettyimages.com/id/1735043259/photo/a-happy-young-couple-performing-dandiya-raas-on-a-black-background-during-navratri.jpg?s=612x612&w=0&k=20&c=aoz9GVautHh8QH5vNj6PXVaMwoBdgj7RDsBBQFfWZic=" },
  { name: "rakhi-celebration", cover: "https://img.freepik.com/premium-vector/vector-illustration-brother-sister-happy-raksha-bandhan-celebration-card_632231-40.jpg?ga=GA1.1.657836346.1742984400&semt=ais_hybrid" },

  { name: "smart-classrooms", cover: "https://img.freepik.com/free-photo/woman-with-flask-looking-kids-class_259150-60250.jpg?ga=GA1.1.657836346.1742984400&semt=ais_hybrid" },
];

// Define images for each category
const categoryImages: Record<string, string[]> = {
  "independence-day": Array.from({ length: 10 }, (_, i) => `/images/independence-day/${i + 1}.jpg`),
  "republic-day": Array.from({ length: 10 }, (_, i) => `/images/republic-day/${i + 1}.jpg`),
  "annual-day": Array.from({ length: 10 }, (_, i) => `/images/annual-day/${i + 1}.jpg`),
  "marathi-day": Array.from({ length: 4 }, (_, i) => `/images/marathi-day/${i + 1}.jpg`),
  "science-exhibition": Array.from({ length: 10 }, (_, i) => `/images/science-exhibition/${i + 1}.jpg`),
  "children-day": Array.from({ length: 10 }, (_, i) => `/images/children-day/${i + 1}.jpg`),
  "dandiya-celebration": Array.from({ length: 9 }, (_, i) => `/images/dandiya-celebration/${i + 1}.jpg`),
  "constitutional-day": Array.from({ length: 10 }, (_, i) => `/images/constitutional-day/${i + 1}.jpg`),
  "environment-day": Array.from({ length: 6 }, (_, i) => `/images/environment-day/${i + 1}.jpg`),
  "smart-classrooms": Array.from({ length: 8 }, (_, i) => `/images/smart-classrooms/${i + 1}.jpg`),
  "rakhi-celebration": Array.from({ length: 5}, (_, i) => `/images/rakhi-celebration/${i + 1}.jpg`),
};

export default function GalleryHome() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">Gallery</h1>

        {/* Show categories if none is selected */}
        {!selectedCategory ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="cursor-pointer relative h-60 w-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => setSelectedCategory(category.name)}
              >
                <Image
                  src={category.cover}
                  alt={`${category.name} cover`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-3 text-xl font-semibold capitalize">
                  {category.name.replace("-", " ")}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Show images for the selected category
          <div>
            <button
              className="mb-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setSelectedCategory(null)}
            >
              ⬅ Back to Categories
            </button>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categoryImages[selectedCategory]?.map((img, index) => (
                <div
                  key={index}
                  className="relative w-full h-48 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={img}
                    alt={`${selectedCategory} ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
