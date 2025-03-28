import React from "react";
import { School, User, Users, FileText, Clipboard, HelpCircle } from "lucide-react";

function Page() {
  return (
    <div className="container mx-auto px-1 py-12 bg-gray-30">
      <h1 className="text-3xl font-bold text-primary mb-12 text-center">Staff & Teacher Information</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Principal Section */}
        <div className="bg-white p-5 rounded-xl shadow-lg ">
          <div className="flex items-center mb-8">
            <User className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-1xl font-semibold text-primary">Principal</h3>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-700">1</p>
          </div>
        </div>

        {/* Total Number of Teachers Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-6">
            <Users className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-1xl font-semibold text-primary">Total No of Teachers</h3>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-700">32</p>
          </div>
        </div>

        {/* PGT Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg ">
          <div className="flex items-center mb-6">
            <FileText className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-1xl font-semibold text-primary">PGT</h3>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-700">17</p>
          </div>
        </div>

        {/* TGT Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg ">
          <div className="flex items-center mb-6">
            <Clipboard className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-1xl font-semibold text-primary">TGT</h3>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-700">03</p>
          </div>
        </div>

        {/* PRT Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg ">
          <div className="flex items-center mb-6">
            <HelpCircle className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-xl font-semibold text-primary">PRT</h3>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-700">9</p>
          </div>
        </div>

        {/* Teacher-Student Ratio Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg ">
          <div className="flex items-center mb-6">
            <Users className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-2xl font-semibold text-primary">Teacher-Student Ratio</h3>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-700">35:1</p>
          </div>
        </div>

        {/* Special Educator Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg ">
          <div className="flex items-center mb-6">
            <Users className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-2xl font-semibold text-primary">Details of Special Educator</h3>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-700">None</p>
          </div>
        </div>

        {/* Counselor and Wellness Teacher Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg ">
          <div className="flex items-center mb-6">
            <HelpCircle className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-2xl font-semibold text-primary">Details of Counselor and Wellness Teacher</h3>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-700">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
