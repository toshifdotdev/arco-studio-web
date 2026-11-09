import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageTitle from './components/PageTitle'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-accent">404</p>
      <h1 className="mt-4 font-serif text-4xl text-brand-50 md:text-5xl">Page Not Found</h1>
      <p className="mt-4 max-w-md text-brand-300">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-widest text-brand-900 transition hover:bg-accentDark"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTitle />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
