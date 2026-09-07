import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const videoTestimonials = [
  {
    id: 1,
    name: "Aziz Mughal",
    role: "CEO at DESK WORK SOLUTION",
    thumbnail: "/assets/dws.jpg",
    video: "/assets/dverifvideo.mp4",
    logo: "DWS"
  },
  {
    id: 2,
    name: "Hamza Ali",
    role: "Operations Lead",
    thumbnail: "/assets/dws.jpg",
    video: "/assets/dverifvideo.mp4",
    logo: "HA"
  },
  {
    id: 3,
    name: "Sara Ahmed",
    role: "People Operations",
    thumbnail: "/assets/dws.jpg",
    video: "/assets/dverifvideo.mp4",
    logo: "SA"
  },
  {
    id: 4,
    name: "John Smith",
    role: "HR Director",
    thumbnail: "/assets/dws.jpg",
    video: "/assets/dverifvideo.mp4",
    logo: "JS"
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Marketing Manager",
    thumbnail: "/assets/dws.jpg",
    video: "/assets/dverifvideo.mp4",
    logo: "ED"
  },
  {
    id: 6,
    name: "Michael Brown",
    role: "CTO",
    thumbnail: "/assets/dws.jpg",
    video: "/assets/dverifvideo.mp4",
    logo: "MB"
  }
];

export function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Calculate total slides based on cards per view
  const totalSlides = Math.ceil(videoTestimonials.length / cardsPerView);

  // Auto-rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 10000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (direction: "next" | "prev") => {
    setActiveIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % totalSlides;
      } else {
        return (prev - 1 + totalSlides) % totalSlides;
      }
    });
  };

  const handlePlay = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsPlaying(true);
  };

  const closeVideo = () => {
    setIsPlaying(false);
    setCurrentVideo(null);
  };

  // Get current set of cards to display
  const getCurrentCards = () => {
    const startIndex = activeIndex * cardsPerView;
    const endIndex = startIndex + cardsPerView;
    return videoTestimonials.slice(startIndex, endIndex);
  };

  return (
    <section className="enterprise-light py-12 lg:py-16">
      <div className="container-page">
        <div className="section-frame px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          {/* Header with navigation buttons */}
          <div className="flex items-center justify-between mb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Trusted By Leaders,
                <br />
                <span className="bg-gradient-to-r from-primary to-[color:var(--primary-glow)] bg-clip-text text-transparent">
                  Proven By Results
                </span>
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleNavigation("prev")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous video"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleNavigation("next")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Next video"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Video cards carousel */}
          <div className="relative">
            <div className="flex gap-4 items-start justify-center">
              {getCurrentCards().map((testimonial, index) => {
                // Determine alignment pattern based on current slide index
                const isEvenSlide = activeIndex % 2 === 0;
                const isCenterCard = index === 1;
                
                // For even slides: center card higher, sides lower
                // For odd slides: center card lower, sides higher
                const marginTop = isEvenSlide 
                  ? (isCenterCard ? 'mt-0' : 'mt-8')  // even slide: center up, sides down
                  : (isCenterCard ? 'mt-8' : 'mt-0'); // odd slide: center down, sides up
                
                return (
                  <div
                    key={testimonial.id}
                    className={`relative shrink-0 w-64 sm:w-72 group cursor-pointer transition-all duration-500 ${marginTop}`}
                    onClick={() => handlePlay(testimonial.video)}
                  >
                  {/* Video thumbnail card */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-card border border-border">
                    {/* Thumbnail image */}
                    <img
                      src={testimonial.thumbnail}
                      alt={testimonial.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Logo watermark */}
                    <div className="absolute top-3 left-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-primary shadow-sm">
                        {testimonial.logo}
                      </div>
                    </div>

                    {/* Play button overlay */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-6 w-6 text-primary fill-primary ml-1" />
                      </div>
                    </div>

                    {/* Name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-white/80">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    activeIndex === index ? "w-7 bg-primary" : "w-2.5 bg-primary/25 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeIndex === index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {isPlaying && currentVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeVideo}
        >
          <div className="relative w-full max-w-4xl p-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideo}
              className="absolute -top-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
              aria-label="Close video"
            >
              ×
            </button>
            <video
              src={currentVideo}
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}