import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function DirectorDeskPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Director's Desk</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Guiding our institution towards excellence</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/about" className="text-gray-500 hover:text-primary">
              About
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">Director's Desk</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-primary">About Us</h3>
              <ul className="space-y-2">
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/history">Our History</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/president-desk">President Desk</Link>
                </li>
                <li className="border-l-4 border-primary pl-3 text-primary font-medium">
                  <Link href="/about/director-desk">Director Desk</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/principal-desk">Principal Desk</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/vision-mission">Vision & Mission</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/leadership">Leadership</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/faculty">Faculty</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/achievements">Achievements</Link>
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                <div className="relative h-68 w-full md:w-1/3 rounded-lg overflow-hidden flex justify-center items-center ">
                                  {/* Centered Image */}
                                  <Image
                                    src="http://snbpschool.co.in/WebsitePages/images/faculty/Prabhakarbhosale.jpg"
                                    alt="Director"
                                    width={300}
                                    height={400}
                                    style={{marginTop:'10px'}}
                                    className="object-cover rounded-lg"
                                  />
                                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Message from the Director</h2>
                  <p className="text-gray-700 mb-4">
                    <span className="text-xl font-semibold text-primary">Dear Students and Parents,</span>
                  </p>
                  <p className="text-gray-700 mb-4">
                    SNBP’S International School is a dream come true for me. It provides an environment in which every student discovers and realizes his inborn potential. We create self-awareness among children and help in capacity building. We are concerned about the overall health and well-being of learners encompassing their mental, physical, emotional, and spiritual dimensions.
                  </p>

                  <p className="text-gray-700 mb-4">
                    In the firm belief that ‘good education is the high road to personal and national progress’, the school aims at drawing out what is best in the child, through appropriate learning experiences and opportunities, a desire to learn not just in the classroom, but all the time making it an ongoing process through life.
                  </p>

                  <p className="text-gray-700 mb-4">
                    The school has already established itself as the fastest-growing school in Manjri. The challenging task of nurturing tender budding minds in the school is being looked after with poise, grace, and commitment by dedicated teachers. The team of SNBP itself firmly believes that with patience & perseverance, any goal can be accomplished.
                  </p>

                  <p className="text-gray-700 mb-4">
                    I trust that the parents, along with the team of SNBP’S International School, will help the children grow as self-respecting and courageous torchbearers of our nation.
                  </p>
                </div>
              </div>

              <div className="text-gray-800">
                <p className="font-semibold">With warm regards,</p>
                <p className="font-bold text-primary mt-2">Dr. Prabhakar Bhosale</p>
                <p>Director, SNBP INTERNATIONAL School</p>
              </div>
            </div>

            <div className="mt-6">
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
