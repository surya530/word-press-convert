import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/homePage';
import ContactUsPage from './pages/ContactUsPage';
import DevServicesPage from './pages/DevServicesPage';
import AdditionalPage from './pages/AdditionalPage';
import BlogPage from './pages/BlogPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import TypesettingPage from './pages/TypesettingPage';
import AboutUsPage from './pages/AboutUsPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function HomePage() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16 text-center">
//       <h1 className="text-4xl font-bold text-[#0d2b4e] mb-4">Welcome to DocAlign</h1>
//       <p className="text-gray-500 text-lg">Professional document typesetting and formatting services.</p>
//     </div>
//   )
// }

const router = createBrowserRouter([
  {
    path : '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/contact-us', element: <ContactUsPage /> },
      { path: '/devservices', element: <DevServicesPage /> },
      { path: '/additional', element: <AdditionalPage /> },
      { path: '/blog-2', element: <BlogPage /> },
      { path: '/how-docalign-works', element: <HowItWorksPage /> },
      { path: '/pricing', element: <PricingPage /> },
      { path: '/case-studies-2', element: <CaseStudiesPage /> },
      { path: '/typesetting/', element: <TypesettingPage /> },
      { path: '/about-us/', element: <AboutUsPage /> },
    ],

  },
],
  {
      basename: "/word-press-convert",
  }
)

export default function App() {
  return <RouterProvider router={router} />
}
