import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TransportFeePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16 transition-all duration-500 ease-in-out transform hover:scale-105">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Transport Fee Structure</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Detailed transport fee structure for the academic year 2025-26
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary transition-all">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/admission" className="text-gray-500 hover:text-primary transition-all">Admission</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">Transport Fee</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-primary">Navigation</h3>
            <ul className="space-y-2">
              <li className="border-l-4 border-primary pl-3 text-primary font-medium">
                <Link href="/transport-fees-structure">Transport Fee</Link>
              </li>
              <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-all">
                <Link href="/admission/fee-structure">Fee Structure</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-primary">Transport Fees 2025-26</h2>
          <p className="text-gray-700 mb-4">Dear Parents,</p>
          <p className="text-gray-700 mb-6">
            Greetings! Kindly note that the school will operate buses on all routes. The transport fee details are as follows:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="py-3 px-6 border-b">Distance</th>
                  <th className="py-3 px-6 border-b">1st Instalment (6 months)</th>
                </tr>
              </thead>
              <tbody>
                {["0 To 02 KM", "02 To 04 KM", "04 To 06 KM", "06 To 08 KM", "08 To 10 KM"].map((distance, index) => (
                  <tr key={index} className="transition-all duration-300 hover:bg-gray-50">
                    <td className="py-3 px-6 border-b">{distance}</td>
                    <td className="py-3 px-6 border-b">₹{[9100, 12600, 13500, 15900, 17700][index]}/-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 transition-all duration-300 hover:bg-blue-100">
            <p className="text-blue-700 font-medium">
              For further queries, please visit the school office or contact us at:
            </p>
            <p className="text-blue-700 mt-2">📞 9834946742 / 8446996992</p>
            <p className="text-blue-700">⏰ 9.00 a.m. to 4.00 p.m. (Monday to Saturday)</p>
          </div>

          <div className="mt-6">
            <Link href="/">
              <Button variant="outline" className="flex items-center transition-all duration-300 hover:bg-gray-200">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
