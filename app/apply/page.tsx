import React from "react";

export default function EnquiryForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl hover:shadow-xl"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Enquiry Form</h1>

        <form className="space-y-6">
          {/* Student's Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700">STUDENT’S NAME:</label>
            <input
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Enter student's name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">GENDER:</label>
              <input
                type="text"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter gender"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">D.O.B:</label>
              <input
                type="date"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              />
            </div>
          </div>

          {/* Parent Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700">FATHER NAME:</label>
            <input
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Enter father's name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">MOTHER NAME:</label>
            <input
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Enter mother's name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">FATHER’S OCCUPATION:</label>
              <input
                type="text"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter father's occupation"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">MOTHER’S OCCUPATION:</label>
              <input
                type="text"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter mother's occupation"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">FATHER’S CONTACT NUMBER:</label>
              <input
                type="tel"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter father's contact number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">MOTHER’S CONTACT NUMBER:</label>
              <input
                type="tel"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter mother's contact number"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">FATHER MAIL ID:</label>
              <input
                type="email"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter father's email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">MOTHER MAIL ID:</label>
              <input
                type="email"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter mother's email"
              />
            </div>
          </div>

          {/* School Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700">CURRENT SCHOOL NAME:</label>
            <input
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Enter current school name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">CURRENT GRADE:</label>
              <input
                type="text"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter current grade"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">BOARD:</label>
              <input
                type="text"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter board"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">GRADE APPLYING FOR:</label>
            <input
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Enter grade applying for"
            />
          </div>

          {/* Address Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700">ADDRESS:</label>
            <input
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Enter address"
            />
          </div>

          {/* Footer Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">DATE:</label>
              <input
                type="date"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">PARENT’S SIGN:</label>
              <input
                type="text"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter parent's sign"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">COUNSELLOR’S SIGN:</label>
              <input
                type="text"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                placeholder="Enter counsellor's sign"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CONTACT NO:</label>
              <input
                type="text"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md bg-gray-100"
                value="8087546107/8956351916"
                disabled
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
