export default function HeroSection() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source
          src="https://videos.pexels.com/video-files/8813222/8813222-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to <span className="text-secondary">SNBP's INTERNATIONAL</span> School
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mb-8">
          Nurturing Excellence, Building Character, Inspiring Future Leaders
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-md transition-colors">
            Explore Programs
          </button>
          <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-6 rounded-md transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}

