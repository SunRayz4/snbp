import { Lightbulb, Users, Building, UserPlus,Trophy } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Innovative Teaching Methods",
    description: "Empowering students with knowledge, values, and skills through modern, interactive teaching techniques.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Experienced and Caring Faculty",
    description: "Experienced teachers who foster a caring environment to help students succeed academically and personally.",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Modern Infrastructure and Facilities",
    description: "State-of-the-art facilities and a modern infrastructure that create an ideal learning environment.",
  },
  {
    icon: <UserPlus className="h-10 w-10 text-primary" />,
    title: "Individualized Attention to Students",
    description: "Focusing on each student's unique needs to ensure personalized support and development.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Extracurricular Activities",
    description: "A broad range of activities including sports, arts, and cultural programs that help develop students holistically.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Why To Choose <span className="text-accent">SNBP's INTERNATIONAL</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
