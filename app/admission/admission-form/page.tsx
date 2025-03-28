import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ClipboardList, Calendar, FileCheck, CreditCard } from "lucide-react"

export default function AdmissionProcessPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Admission Form</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Your guide to joining the SNBP INTERNATIONAL School family
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
            <Link href="/admission" className="text-gray-500 hover:text-primary">
              Admission
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">Admission Form</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-primary">Admission</h3>
              <ul className="space-y-2">
                <li className="border-l-4 border-primary pl-3 text-primary font-medium">
                  <Link href="/admission/process">Admission Form</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/admission/fee-structure">Fee Structure</Link>
                </li>
              </ul>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">Ready to Apply?</h4>
                <p className="text-sm text-gray-600 mb-4">Download the application form or apply online.</p>
                <Button className="w-full mb-2">Apply Online</Button>
                <Button variant="outline" className="w-full">
                  Download Form
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-primary">Admission Enquiry Form</h2>

              {/* <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Students at SNBP School"
                  fill
                  className="object-cover"
                />
              </div> */}

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Child's Name */}
                  <div className="flex flex-col">
                    <label htmlFor="child-name" className="font-semibold text-gray-700">Child's Name *</label>
                    <input
                      type="text"
                      id="child-name"
                      name="child-name"
                      required
                      className="mt-2 p-3 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div className="flex flex-col">
                    <label htmlFor="dob" className="font-semibold text-gray-700">DOB *</label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      required
                      className="mt-2 p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Gender */}
                  <div className="flex flex-col">
                    <label htmlFor="gender" className="font-semibold text-gray-700">Gender *</label>
                    <select
                      id="gender"
                      name="gender"
                      required
                      className="mt-2 p-3 border border-gray-300 rounded-md"
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Current Standard */}
                  <div className="flex flex-col">
                    <label htmlFor="current-std" className="font-semibold text-gray-700">Current Standard *</label>
                    <select
                      id="current-std"
                      name="current-std"
                      required
                      className="mt-2 p-3 border border-gray-300 rounded-md"
                    >
                      <option value="">Select</option>
                      <option value="playgroup">Playgroup</option>
                      <option value="nursery">Nursery</option>
                      <option value="junior-kg">Junior KG</option>
                      <option value="senior-kg">Senior KG</option>
                      <option value="1">Std I</option>
                      <option value="2">Std II</option>
                      <option value="3">Std III</option>
                      <option value="4">Std IV</option>
                      <option value="5">Std V</option>
                      <option value="6">Std VI</option>
                      <option value="7">Std VII</option>
                      <option value="8">Std VIII</option>
                      <option value="9">Std IX</option>
                      <option value="10">Std X</option>
                      <option value="11">Std XI</option>
                      <option value="12">Std XII</option>
                      <option value="bba">BBA</option>
                      <option value="bca">BCA</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Father's Name */}
                  <div className="flex flex-col">
                    <label htmlFor="father-name" className="font-semibold text-gray-700">Father's Name *</label>
                    <input
                      type="text"
                      id="father-name"
                      name="father-name"
                      required
                      className="mt-2 p-3 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Mother's Name */}
                  <div className="flex flex-col">
                    <label htmlFor="mother-name" className="font-semibold text-gray-700">Mother's Name *</label>
                    <input
                      type="text"
                      id="mother-name"
                      name="mother-name"
                      required
                      className="mt-2 p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email ID */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-semibold text-gray-700">Email ID</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-2 p-3 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="font-semibold text-gray-700">Phone No.</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="mt-2 p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  {/* Location */}
                  <label htmlFor="location" className="font-semibold text-gray-700">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="mt-2 p-3 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* How did you hear about us */}
                  <div className="flex flex-col">
                    <label htmlFor="source" className="font-semibold text-gray-700">How did you hear about us</label>
                    <input
                      type="text"
                      id="source"
                      name="source"
                      className="mt-2 p-3 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Aadhaar Number */}
                  <div className="flex flex-col">
                    <label htmlFor="aadhaar" className="font-semibold text-gray-700">Aadhaar Number</label>
                    <input
                      type="text"
                      id="aadhaar"
                      name="aadhaar"
                      className="mt-2 p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Button type="submit" className="w-full">Submit Enquiry</Button>
                </div>
              </form>
            </div>

            <div className="mt-6">
              <Link href="/admission">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Admission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
