import React from 'react';
import { Home, Archive, Cpu, Wifi,  Link } from 'lucide-react';

function Page() {
  return (
    <div className="container mx-auto px-6 py-10 bg-gray-100">
      <h1 className="text-4xl font-extrabold text-primary mb-12 text-center">School Infrastructure</h1>
      
      {/* Single Card */}
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-5xl mx-auto hover:shadow-2xl transition-shadow duration-300">
        <div className="space-y-8">
          
          {/* Total Campus Area Section */}
          <div className="flex items-center space-x-6 hover:bg-gray-50 p-3 rounded-xl transition-all duration-200">
            <Home className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-1xl font-semibold text-primary inline">Total Campus Area of the School:</h3>
              <p className="text-lg font-medium text-gray-700 inline ml-2">60 R</p>
            </div>
          </div>

          {/* No. and Size of the Classrooms Section */}
          <div className="flex items-center space-x-6 hover:bg-gray-50 p-3 rounded-xl transition-all duration-200">
            <Archive className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-1xl font-semibold text-primary inline">No. and Size of the Classrooms:</h3>
              <p className="text-lg font-medium text-gray-700 inline ml-2">560 Sq. Ft</p>
            </div>
          </div>

          {/* No. and Size of Laboratories Section */}
          <div className="flex items-center space-x-6 hover:bg-gray-50 p-3 rounded-xl transition-all duration-200">
            <Cpu className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-1xl font-semibold text-primary inline">No. and Size of Laboratories:</h3>
              <p className="text-lg font-medium text-gray-700 inline ml-2">860 Sq. Ft</p>
            </div>
          </div>

          {/* Internet Facility Section */}
          <div className="flex items-center space-x-6 hover:bg-gray-50 p-3 rounded-xl transition-all duration-200">
            <Wifi className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-1xl font-semibold text-primary inline">Internet Facility:</h3>
              <p className="text-lg font-medium text-gray-700 inline ml-2">YES</p>
            </div>
          </div>

          {/* No. of Girls Toilets Section */}
          <div className="flex items-center space-x-6 hover:bg-gray-50 p-3 rounded-xl transition-all duration-200">
            <Home className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-1xl font-semibold text-primary inline">No. of Girls Toilets:</h3>
              <p className="text-lg font-medium text-gray-700 inline ml-2">16</p>
            </div>
          </div>

          {/* No. of Boys Toilets Section */}
          <div className="flex items-center space-x-6 hover:bg-gray-50 p-3 rounded-xl transition-all duration-200">
            <Home className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-1xl font-semibold text-primary inline">No. of Boys Toilets:</h3>
              <p className="text-lg font-medium text-gray-700 inline ml-2">16</p>
            </div>
          </div>

          {/* YouTube Video Link Section */}
          <div className="flex items-center space-x-6 hover:bg-gray-50 p-3 rounded-xl transition-all duration-200">
            <Link className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-1xl font-semibold text-primary inline">YouTube Video Link:</h3>
              <a 
                href="https://www.youtube.com/watch?v=SNBP’s International School Manjri" 
                target="_blank" 
                className="text-lg font-medium text-blue-500 hover:underline inline ml-2"
              >
             SNBP’s International School Manjri
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Page;
