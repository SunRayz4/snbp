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
            
              <div className="flex flex-col md:flex-center gap-6 items-start mb-5">
               
                <div className="md:w-5/3" style={{margin:'auto',marginTop:'30px',}}>
                  <h2 className="text-2xl md:text-2xl font-semibold mb-10 text-primary " style={{marginLeft:'340px'}} >
                   Curriculum
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                  The curriculum from Nursery to Class IX is designed to enable students to prepare for either of the examinations from class X onwards.
                  </p>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                  The prime consideration of the school is to maintain a positive learning environment in which pupils can learn, develop and progress. Learning is encouraged by providing a broad and balanced curriculum. This enables children to develop their potential to the maximum. English is the medium of instruction. All efforts are made to ensure that every child converses in English in the campus.
                  </p>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                  A thematic approach is followed in the Pre-Primary and Junior sections. Evaluation is a continuous process. Grades are awarded and reports are sent to parents once a term ends, so are the answer sheets. A homework period provides for revision and remedial help.
                  </p>
                 
                  <p className="text-gray-700 mb-4 leading-relaxed">
                  SNBP’s is an inclusive school. There is a special educator who takes care of the special needs of children. Regular field trips and expeditions help children develop a sense of what is real and inspire discovery.
                  </p>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                  The school works closely with the Centre for Environment Education to sensitize students to environmental concerns. They are trained to care for and protect the environment. Students regularly participate in clean and green campaigns.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                  We have a responsive and exciting CBSE curriculum that caters to all learning needs and promotes the use of inquiry learning, inspiring growth in the mindset. We strive to have authentic learning experiences and allow our learners to make connections with their prior knowledge, cultural identity, and learning styles.
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
