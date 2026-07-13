import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/homePage';
import ContactUsPage from './pages/ContactUsPage';
import DevServicesPage from './pages/DevServicesPage';
import AdditionalPage from './pages/AdditionalPage';
import BlogPage from './pages/BlogPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import LooseLeafCaseStudyPage from './pages/LooseLeafCaseStudyPage';
import StampCatalogueCaseStudyPage from './pages/StampCatalogueCaseStudyPage';
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
      {
        path: '/2024/08/23/a-client-success-story-loose-leaf-system-company-improving-typesetting-efficiency-for-loose-leaf-systems-with-docalign/',
        element: <LooseLeafCaseStudyPage />,
      },
      {
        path: '/de/2024/08/28/b/',
        element: <LooseLeafCaseStudyPage />,
      },
      {
        path: '/2024/07/22/transforming-stamp-catalogue-creation-with-docalign/',
        element: <StampCatalogueCaseStudyPage />,
      },
      { path: '/typesetting', element: <TypesettingPage /> },
      { path: '/about-us/', element: <AboutUsPage /> },
    ],

  },
],
  {
      basename: "/word-press-convert",
  }
)



export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </>
  )
}
