import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About SNBP</h3>
            <p className="text-gray-300 mb-4">
              SNBP INTERNATIONAL School is committed to providing quality education that nurtures excellence, builds
              character, and inspires future leaders.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-300 hover:text-secondary transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admission" className="text-gray-300 hover:text-secondary transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-gray-300 hover:text-secondary transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-secondary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
  <li className="flex items-start">
    <MapPin className="h-5 w-5 mr-2 mt-0.5 text-secondary flex-shrink-0" />
    <span className="text-gray-300">
      126/2A Manjri-Keshav Nagar Road, Near Shivkrushshn,
      Mangal Karyalay, Manjri, Pune - 36.
    </span>
  </li>
  <li className="flex items-center">
    <Phone className="h-5 w-5 mr-2 text-secondary flex-shrink-0" />
    <span className="text-gray-300">+91 98765 43210</span>
  </li>
  <li className="flex items-center">
    <Mail className="h-5 w-5 mr-2 text-secondary flex-shrink-0" />
    <span className="text-gray-300">snbpskeshavnagar@gmail.com</span>
  </li>
</ul>

          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">School Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 8:00 AM - 3:30 PM</li>
              <li>Saturday: 8:00 AM - 12:30 PM</li>
              <li>Sunday: Closed</li>
              <li className="pt-2 font-medium">Office Hours</li>
              <li>Monday - Saturday: 9:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-300">
          <p>© {new Date().getFullYear()} SNBP INTERNATIONAL School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

