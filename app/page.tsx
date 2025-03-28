import Navbar from "@/components/navbar";
import AdmissionMarquee from "@/components/marquee";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, GraduationCap, Award, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <AdmissionMarquee />
      <HeroSection />
      <FeaturesSection />

      {/* Key Educational Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Our Key <span className="text-accent">Educational Features</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Smart Classes Feature */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://newsroom.gy/wp-content/uploads/2021/04/PC-5-1536x1024.jpg"
                  alt="Smart Classes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Smart Classes</h3>
                <p className="text-gray-600 mb-4">
                  A modern way of learning with digital tools and interactive lessons in classrooms.
                </p>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Sports Feature */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://ville.chateauguay.qc.ca/wp-content/uploads/2020/10/image-from-rawpixel-id-378432-jpeg-scaled.jpg"
                  alt="Sports"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sports</h3>
                <p className="text-gray-600 mb-4">
                  Explore various sports activities that promote physical and mental growth.
                </p>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Library Feature */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://img.atlasobscura.com/84tF_0nhxuJ_rwA2DqXDL_eS8c-oLueq1wRGe-sqe1g/rs:fill:12000:12000/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy9kZWRhNTRiNGNm/NzAyMGY5MjdfMzc2/MTUyNjI4XzI0OWUz/NjMwYzBfYi5qcGc.jpg"
                  alt="Library"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Library</h3>
                <p className="text-gray-600 mb-4">
                  A space filled with knowledge, offering books and resources for every subject.
                </p>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-4xl font-bold mb-2">2000+</h3>
              <p className="text-gray-300">Students</p>
            </div>
            <div>
              <Award className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p className="text-gray-300">Years of Excellence</p>
            </div>
            <div>
              <Clock className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-gray-300">Placement Rate</p>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-4xl font-bold mb-2">150+</h3>
              <p className="text-gray-300">Expert Faculty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Parent <span className="text-accent">Reviews</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="https://media.istockphoto.com/id/2155547723/photo/closeup-shot-of-beautiful-young-woman-happily-laughing.webp?a=1&b=1&s=612x612&w=0&k=20&c=yX7G4r_MpYGiLTg0S8v0EyiSRaf_gdFLwAmDnh2m-Ug=" alt="Parent" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-sm text-gray-500">Parent of Grade VII Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "SNBP International School has provided my child with an excellent learning environment. The teachers
                are dedicated and the facilities are top-notch."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2xlJTIwcGVyc29ufGVufDB8fDB8fHww" alt="Parent" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Rajesh Patel</h4>
                  <p className="text-sm text-gray-500">Parent of Grade VI Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The holistic approach to education at SNBP has helped my daughter develop not just academically, but
                also in sports and arts. We couldn't be happier with our choice."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="https://up.yimg.com/ib/th?id=OIP.jbsyE19SOxhmrIf7XDs2cQHaE8&pid=Api&rs=1&c=1&qlt=95&w=177&h=118" alt="Parent" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Anita Desai</h4>
                  <p className="text-sm text-gray-500">Parent of Grade X Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The individual attention given to each student is remarkable. My son has flourished academically and
                gained confidence since joining SNBP International School."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join SNBP INTERNATIONAL School?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards providing your child with a world-class education. Limited seats available for
            the academic year 2025-26.
          </p>
          
          {/* Apply Now Button */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admission/admission-form">
              <Button 
                variant="outline"
                className="border-white text-accent hover:bg-white/10 font-semibold py-3 px-8 text-lg"
              >
                Apply Now
              </Button>
            </Link>

            <Button
              variant="outline"
              className="border-white text-accent hover:bg-white/10 font-semibold py-3 px-8 text-lg"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
