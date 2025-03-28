import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About SNBP's INTERNATIONAL School</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Nurturing Excellence, Building Character, Inspiring Future Leaders
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
            <span className="text-primary font-medium">About</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us Overview */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-primary">Welcome to SNBPs INTERNATIONAL School</h2>

              <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="SNBP School Campus"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-700 mb-4">
                SNBP INTERNATIONAL School is a premier educational institution committed to providing a holistic
                education that nurtures excellence, builds character, and inspires future leaders. Since our
                establishment in 1995, we have been dedicated to creating a learning environment that fosters academic
                achievement, personal growth, and social responsibility.
              </p>

              <p className="text-gray-700 mb-4">
                Our comprehensive approach to education combines rigorous academics with character development, ensuring
                that our students emerge as confident, compassionate, and capable individuals ready to face the
                challenges of an ever-changing world.
              </p>

              <p className="text-gray-700 mb-4">
                At SNBP, we believe that education is not merely about acquiring knowledge but about developing the
                skills, values, and attitudes necessary for success in all aspects of life. Our dedicated faculty,
                state-of-the-art facilities, and innovative teaching methodologies create an environment where students
                can discover their potential, pursue their passions, and achieve their dreams.
              </p>

              <p className="text-gray-700">
                We invite you to explore our website and learn more about what makes SNBP INTERNATIONAL School a leader
                in education. Whether you are a prospective parent, a current student, or an alumnus, we hope you will
                find our community welcoming and our commitment to excellence inspiring.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">About Us</h3>
              <ul className="space-y-3">
                <li className="border-b border-gray-100 pb-3">
                  <Link
                    href="/about/history"
                    className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    Our History
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
                <li className="border-b border-gray-100 pb-3">
                  <Link
                    href="/about/president-desk"
                    className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    President Desk
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
                <li className="border-b border-gray-100 pb-3">
                  <Link
                    href="/about/director-desk"
                    className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    Director Desk
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
                <li className="border-b border-gray-100 pb-3">
                  <Link
                    href="/about/principal-desk"
                    className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    Principal Desk
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
                <li className="border-b border-gray-100 pb-3">
                  <Link
                    href="/about/vision-mission"
                    className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    Vision & Mission
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
                <li className="border-b border-gray-100 pb-3">
                  <Link
                    href="/about/leadership"
                    className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    Leadership
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
                <li className="border-b border-gray-100 pb-3">
                  <Link
                    href="/about/faculty"
                    className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    Faculty
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/achievements"
                    className="flex justify-between items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    Achievements
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
              </ul>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">Interested in Admission?</h4>
                <p className="text-sm text-gray-600 mb-4">Learn more about our admission process and fee structure.</p>
                <Link href="/admission/process">
                  <Button className="w-full">Admission Information</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

