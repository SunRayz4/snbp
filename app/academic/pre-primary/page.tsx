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
                <h4 className="font-semibold text-primary mb-2">Have a question?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Contact our admissions office for more information about our school.
                </p>
                <Button className="w-full">Contact Us</Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-lg shadow-md ">
            <div className="relative h-68 w-full md:w-4/3 rounded-lg overflow-hidden flex justify-center items-center " style={{margin:'auto'}}>
                  {/* Centered Image */}
                  <Image
                    src="https://www.ustimesnow.com/wp-content/uploads/2023/06/PP08.jpg" // Replace with the path to your image
                    alt="Pre-Primary Education"
                    width={600}
                    height={400}
                    className="mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
                    style={{height:'300px'}}
                  />
                </div>
              <div className="flex flex-col md:flex-center gap-6 items-start mb-5">
               
                <div className="md:w-5/3" style={{margin:'auto',marginTop:'30px',}}>
                  <h2 className="text-2xl md:text-2xl font-semibold mb-10 text-primary " style={{marginLeft:'200px'}} >
                    Pre-Primary Education at Our School
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our pre-primary program is designed to lay a strong foundation for young learners, nurturing their curiosity and love for learning. We focus on developing essential skills that are crucial for their future growth, including cognitive, social, emotional, and physical development.
                  </p>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our approach incorporates play-based learning, hands-on activities, and engaging storytelling to capture children's imaginations and help them explore the world around them. Through fun and interactive experiences, children develop important skills like communication, teamwork, and problem-solving.
                  </p>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    At this stage, we prioritize fostering creativity and independence while ensuring that children enjoy the process of learning. By integrating different learning methods, such as visual aids, music, and games, we create a vibrant and dynamic environment where each child can thrive and build the confidence needed for the next stage of their educational journey.
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
