import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrincipalDeskPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Principal's Desk</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Leading our academic community with vision and dedication
          </p>
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
            <span className="text-primary font-medium">Principal's Desk</span>
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
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/director-desk">Director Desk</Link>
                </li>
                <li className="border-l-4 border-primary pl-3 text-primary font-medium">
                  <Link href="/about/principal-desk">Principal Desk</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/vision-mission">Vision & Mission</Link>
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
                <div className="relative h-64 w-full md:w-1/3 rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Principal" fill className="object-cover" />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Message from the Principal</h2>
                  <p className="text-gray-700 mb-4">
                    <span className="text-xl font-semibold text-primary">Dear Students and Parents,</span>
                  </p>
                  <p className="text-gray-700 mb-4">
                    "Education is a continual process, it’s like a bicycle… If you don’t pedal you don’t go forward."
                  </p>
                  <p className="text-gray-700 mb-4">
                    S.N.B.P.’s International School, Manjiri, is an amalgamation of competent teachers, adequate infrastructure, and efficient administration. We at S.N.B.P. affirm that education begins at birth and continues through life. Our complete focus is to provide a supportive environment for our children, helping them continue learning and developing into well-rounded individuals.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We believe in giving our students strong values along with a set of wings that will carry them far and wide, preparing them to face the challenges of the rapidly changing world.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We emphasize literacy and numeracy while nurturing creativity and critical thinking. Through a student-centered approach, we aim to develop our students into excellent and well-balanced scholars.
                  </p>
                  <p className="text-gray-700 mb-4">
                    As I walk down the hallways of the school every day, I hear the chatter of eager minds, the shouts of excitement from victorious athletes, the thump of dancers’ feet, and the harmonious sounds of voices. These moments inspire and motivate me to provide access to quality programs that encourage critical thinking and problem-solving.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Beyond academics, we focus on the holistic development of students, including dance, theatre, music, and sports. We aim to nurture both the mental and physical abilities of our students.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our team of committed and talented staff works tirelessly to ignite a passion for learning in our students, fostering a love for life itself.
                  </p>
                  <p className="text-gray-700 mb-6">
                    We welcome you to be a part of this exciting journey and celebrate the joys of education with us.
                  </p>
                  <div className="text-gray-800">
                    <p className="font-semibold">Sincerely,</p>
                    <p className="font-bold text-primary mt-2">Mrs. Sandhya Pandey</p>
                    <p>Principal, SNBP’s International School Manjri</p>
                  </div>
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
      </div>
    </main>
  )
}
