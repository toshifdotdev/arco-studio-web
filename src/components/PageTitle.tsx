import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL, SEO_KEYWORDS } from '../data/company'

type RouteMeta = {
  title: string
  description: string
}

const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: 'ARCO STUDIO — Architects & Interior Designers in Nehru Colony, Dehradun, Uttarakhand',
    description:
      'ARCO STUDIO is a premier Architecture Consultancy & Interior Design firm at Laxmi Road, Nehru Colony, Dehradun, Uttarakhand. Founded in 2021 by DIT University alumni & Council of Architecture (COA) architects Mohammad Aneesh and Sudha Dabral.',
  },
  '/about': {
    title: 'About Us & Founders (Mohammad Aneesh & Sudha Dabral) — ARCO STUDIO Dehradun',
    description:
      'Learn about ARCO STUDIO in Nehru Colony, Dehradun, Uttarakhand. Led by founders Mohammad Aneesh and Sudha Dabral (DIT University alumni, Council of Architecture), our 10+ professionals have served 100+ clients across Uttarakhand.',
  },
  '/services': {
    title: 'Architectural & Interior Design Services in Dehradun, Uttarakhand — ARCO STUDIO',
    description:
      'Explore ARCO STUDIO services in Dehradun and Uttarakhand: Residential Architecture, Commercial & Retail Design, Educational & Institutional Planning, Housing Development, and Turnkey Interior Design compliant with Council of Architecture standards.',
  },
  '/projects': {
    title: 'Architecture & Interior Design Portfolio in Dehradun & Uttarakhand — ARCO STUDIO',
    description:
      'Browse 200+ architectural and interior design projects by ARCO STUDIO across Dehradun (Nehru Colony, Malsi, Rajpur Road, Sahastradhara, GMS Road), Nainital, Pauri Garhwal, Sonprayag, and Joshimath, Uttarakhand.',
  },
  '/contact': {
    title: 'Contact ARCO STUDIO — B-227 Laxmi Road, Nehru Colony, Dehradun, Uttarakhand',
    description:
      'Visit or contact ARCO STUDIO at B-227, Laxmi Road, Nehru Colony, Dehradun - 248001, Uttarakhand. Call +91 7409265567 / +91 9870803156 or email arcostudio622@gmail.com to consult with architects Mohammad Aneesh & Sudha Dabral.',
  },
}

function setMetaTag(selector: string, attribute: string, content: string) {
  const el = document.querySelector(selector)
  if (el) {
    el.setAttribute(attribute, content)
  }
}

export default function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? ROUTE_META['/']
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`

    document.title = meta.title
    setMetaTag('meta[name="description"]', 'content', meta.description)
    setMetaTag('meta[name="keywords"]', 'content', SEO_KEYWORDS.join(', '))
    setMetaTag('meta[property="og:title"]', 'content', meta.title)
    setMetaTag('meta[property="og:description"]', 'content', meta.description)
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl)
    setMetaTag('meta[name="twitter:title"]', 'content', meta.title)
    setMetaTag('meta[name="twitter:description"]', 'content', meta.description)
    setMetaTag('link[rel="canonical"]', 'href', canonicalUrl)
  }, [pathname])

  return null
}