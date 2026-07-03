import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HiOutlineDocumentText, HiOutlineCodeBracketSquare, HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import weka from '../images/weka-1.jpg'
import client1 from '../images/client.png'
import client2 from '../images/client2.png'
import client3 from '../images/client3.png'
import client4 from '../images/client4.png'
import client5 from '../images/client5.png'
import client6 from '../images/client6.png'
import client7 from '../images/client7.png'
import client8 from '../images/client8.png'
import client9 from '../images/client9.png'

const clientLogos = [weka, client1, client2, client3, client4, client5, client6, client7, client8, client9]

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous"
      className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-400 shadow hover:text-[#1a6b78] transition-colors"
    >
      <HiChevronLeft className="w-5 h-5" />
    </button>
  )
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next"
      className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-400 shadow hover:text-[#1a6b78] transition-colors"
    >
      <HiChevronRight className="w-5 h-5" />
    </button>
  )
}

const clientSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
}

const testimonials = [
  {
    quote:
      "They have a team with very good IT professionals that brings in well-structured and clean, error-free programming approach. With their software solutions we save approximately half of production time along with cost and energy. There is no other company that gives us this much performance.",
    name: 'H. Hohenester',
    role: 'Managing Director, Schwaneberger Verlag',
  },
  {
    quote:
      "With our editing system 'jadis', we have to rely on a powerful and reliable program that runs on Unix servers and quickly computes new variants. Without DocAlign, our editing system will not function. It is the best option in digital production.",
    name: 'Managing Director, Zweitwerk',
    role: '',
  },
  {
    quote:
      'We started in 2000 with databases and XML. There is Unified data management which is a critical factor for streamlined and high quality workflows and all the publishing houses should adopt it in the long run. With DocAlign, we feel that we are in good hands.',
    name: 'Dr. W. Andreae',
    role: '',
  },
]

function TestimonialPrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous testimonial"
      className="absolute left-0 top-[38%] sm:top-[42%] z-20 -translate-y-1/2 text-gray-300 hover:text-[#1a6b78] transition-colors"
    >
      <HiChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
    </button>
  )
}

function TestimonialNextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next testimonial"
      className="absolute right-0 top-[38%] sm:top-[42%] z-20 -translate-y-1/2 text-gray-300 hover:text-[#1a6b78] transition-colors"
    >
      <HiChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
    </button>
  )
}

const testimonialSliderSettings = {
  centerMode: true,
  centerPadding: '18%',
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: true,
  prevArrow: <TestimonialPrevArrow />,
  nextArrow: <TestimonialNextArrow />,
  responsive: [{ breakpoint: 768, settings: { centerPadding: '0px' } }],
}

const formats = ['Print PDF', 'Online PDF', 'Device-specific PDF', 'HTML5', 'eBook (EPUB, AZW, mobi, Screen PDF)']

const featureCards = [
  {
    icon: <HiOutlineDocumentText className="w-7 h-7" />,
    title: 'Prepress and Premedia Formatting',
    body: (
      <>
        <p className="text-gray-600 leading-relaxed">
          We offer{' '}
          <a href="#" className="text-[#c2255c] font-medium hover:underline">
            text conversion services
          </a>{' '}
          for books, articles, trade journals, and catalogs.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">Your files can simultaneously be converted into:</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {formats.map((format) => (
            <span
              key={format}
              className="inline-flex items-center rounded-full bg-[#0d2b4e]/5 px-3 py-1 text-xs sm:text-sm font-semibold text-[#0d2b4e]"
            >
              {format}
            </span>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed mt-4">
          Because many steps are fully automated and based on geometrical measures, we can offer high precision
          typesetting for very{' '}
          <a href="#" className="text-[#c2255c] font-medium hover:underline">
            reasonable prices
          </a>
          .
        </p>
      </>
    ),
  },
  {
    icon: <HiOutlineCodeBracketSquare className="w-7 h-7" />,
    title: 'Custom Software Solutions',
    body: (
      <>
        <p className="text-gray-600 leading-relaxed">
          High-value custom solutions to give your company better performance, scalable solutions, and a happier,
          more efficient production team.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4 bg-gray-50 rounded-lg p-4">
          Our developers, designers, and product team will help you plan your digitization, production, and
          optimization using open standards — so that you can evolve and grow trusting the solutions in place are
          durable and efficient.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          <a href="#" className="text-[#c2255c] font-medium hover:underline">
            Our experience
          </a>{' '}
          spans over decades and in many areas of software development and operations.
        </p>
      </>
    ),
  },
]

export default function HomePage() {
  return (
    <div className="">
      <div className="text-center mb-10 sm:mb-16 mt-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d2b4e] mb-4">Welcome to DocAlign</h1>
        <p className="text-gray-500 text-base sm:text-lg">Professional document typesetting and formatting services.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="group rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 px-6 sm:px-12 lg:px-24 py-16 sm:py-20"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#1a6b78]/10 text-[#1a6b78] mb-5 group-hover:bg-[#1a6b78] group-hover:text-white transition-colors duration-300">
              {card.icon}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a6b78] mb-4 leading-tight">{card.title}</h2>
            {card.body}
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 py-16 sm:py-20 mt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#0d2b4e] mb-3">Our Customers</h2>
          <p className="text-center text-gray-500 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
            We have long-standing partnerships with many well-established publishers in Germany and beyond.
          </p>

          <div className="relative px-8 sm:px-10">
            <Slider {...clientSliderSettings}>
              {clientLogos.map((logo, index) => (
                <div key={index} className="px-2 sm:px-3">
                  <div className="flex h-24 sm:h-28 items-center justify-center rounded-lg bg-white shadow-sm px-6">
                    <img
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      className="max-h-12 sm:max-h-14 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="relative">
            <Slider {...testimonialSliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 sm:px-4">
                  <div className="relative">
                    <div className="relative z-10 rounded-lg bg-[#5b9bd5] px-6 sm:px-10 py-8 sm:py-10 text-center">
                      <p className="text-white italic text-sm sm:text-base leading-relaxed">"{testimonial.quote}"</p>
                    </div>
                    <div className="absolute left-1/2 top-full h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#5b9bd5]" />
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
                    {testimonial.role && (
                      <p className="text-[#1a6b78] italic mt-1">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

    </div>
  )
}
