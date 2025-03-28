import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-primary">Academic</h3>
              <ul className="space-y-2">
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/academic/primary">Primary</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/academic/pre-primary">Pre-Primary</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/academic/secondary">Secondary</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/academic/sr-secondary">Sr-Secondary</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/academic/curriculum">Curriculum</Link>
                </li>
              </ul>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">
                  Have a question?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Contact our admissions office for more information about our
                  school.
                </p>
                <Button className="w-full">Contact Us</Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-lg shadow-md ">
              <div
                className="relative h-68 w-full md:w-4/3 rounded-lg overflow-hidden flex justify-center items-center "
                style={{ margin: "auto" }}
              >
                {/* Centered Image */}
                <Image
                  src="https://i.ytimg.com/vi/SrXOwLiWWz0/maxresdefault.jpg" // Replace with the path to your image
                  alt="Pre-Primary Education"
                  width={600}
                  height={400}
                  className="mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
                  style={{ height: "300px" }}
                />
              </div>
              <div className="flex flex-col md:flex-center gap-6 items-start mb-5">
                <div
                  className="md:w-5/3"
                  style={{ margin: "auto", marginTop: "30px" }}
                >
                  <h2
                    className="text-2xl md:text-2xl font-semibold mb-10 text-primary "
                    style={{ marginLeft: "200px" }}
                  >
                    Primary Education at Our School
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    At SNBP, we are committed to nurturing young minds by
                    fostering creativity, innovation, and a strong sense of
                    cultural identity. Our approach integrates modern
                    educational methodologies with traditional values, ensuring
                    a well-rounded learning experience for every child.
                  </p>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We emphasize experiential learning through interactive
                    activities such as storytelling, dramatization, and visual
                    engagement. Our curriculum leverages audio-visual aids,
                    multimedia tools, and structured play to enhance
                    comprehension and retention, creating an engaging and
                    enriching environment.
                  </p>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Research suggests that early childhood education plays a
                    crucial role in cognitive development. At SNBP, we provide a
                    stimulating and supportive atmosphere where children can
                    explore, learn, and grow into confident, well-rounded
                    individuals. With a focus on holistic education, we ensure
                    that every student receives the best foundation for future
                    success.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Link href="/about">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
