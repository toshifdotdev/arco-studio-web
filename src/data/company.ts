import type { ComponentType } from 'react'
import {
  Building2,
  School,
  Hotel,
  House,
  Sofa,
} from 'lucide-react'

export const SITE_URL = 'https://arcostudio.co.in'

export const COMPANY = {
  name: 'ARCO STUDIO',
  legalName: 'ARCO STUDIO — Architecture Consultancy & Engineering Services',
  tagline: 'Transforming Spaces with Creativity and Precision',
  subtitle:
    'A dynamic and innovative architectural firm based in Dehradun, Uttarakhand, dedicated to delivering aesthetically pleasing and functional designs that meet our clients’ needs and exceed their expectations.',
  founded: 2021,
  location: 'Dehradun, Uttarakhand',
  locality: 'Nehru Colony, Dehradun',
  state: 'Uttarakhand',
  country: 'India',
  postalCode: '248001',
  teamSize: '10+',
  clients: '100+',
  address: 'B-227, Laxmi Road, Nehru Colony, Dehradun - 248001',
  phone: '+91 7409265567, +91 9870803156',
  phones: ['+917409265567', '+919870803156'],
  email: 'arcostudio622@gmail.com',
  hours: 'Mon – Sat, 10:00 AM – 6:00 PM',
  council: 'Council of Architecture (COA)',
  almaMater: 'DIT University, Dehradun',
  geo: {
    region: 'IN-UT',
    placename: 'Nehru Colony, Dehradun, Uttarakhand, India',
    latitude: 30.2988,
    longitude: 78.056,
  },
}

export const SEO_KEYWORDS = [
  'ARCO Studio',
  'ARCO Studio Dehradun',
  'ARCO Studio Uttarakhand',
  'Architects in Dehradun',
  'Best Architecture Firm in Dehradun',
  'Architects in Nehru Colony Dehradun',
  'Laxmi Road Nehru Colony Dehradun',
  'Mohammad Aneesh Architect',
  'Sudha Dabral Architect',
  'DIT University Dehradun Architects',
  'Council of Architecture',
  'COA Registered Architects Dehradun',
  'Interior Designers in Dehradun',
  'Architecture Consultancy & Engineering Services Uttarakhand',
  'Residential & Commercial Architects Dehradun',
  'arcostudio.co.in',
  'arcotudio.co.in',
]

export type Service = {
  id: string
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

export const SERVICES: Service[] = [
  {
    id: 'residential',
    title: 'Residential',
    description:
      'New dwellings, additions and alterations, and interior fit-out. Our design approach differs for every project and is governed by budget, physical and cultural context, client needs and desires, environmental considerations, and Council Development Plan requirements.',
    icon: House,
  },
  {
    id: 'commercial',
    title: 'Commercial & Retail',
    description:
      'We assess a representative range of possible development models quantitatively before progressing with a preferred approach. Thoroughly considered, well-designed buildings cost no more to build yet yield long-term benefits through increased functionality, amenity and returns.',
    icon: Building2,
  },
  {
    id: 'educational',
    title: 'Educational & Institutional',
    description:
      'Experience ranging from basic maintenance through to master planning and design of new facilities for private schools and State Government schools. Institutional spaces serve as gathering locations that create areas for living, working, socialising and learning.',
    icon: School,
  },
  {
    id: 'housing',
    title: 'Housing',
    description:
      'Housing projects that provide exceptional living experiences while being environmentally responsible — homes that are beautiful and functional and contribute positively to the urban landscape and the environment.',
    icon: Hotel,
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description:
      'Complete interior solutions for homes, cafes, restaurants, retail and hospitality spaces. We craft interiors that balance aesthetics with everyday function — thoughtfully planned layouts, materials, lighting and finishes tailored to how people live and work.',
    icon: Sofa,
  },
]

export const EXPERTISE = [
  'Residential',
  'Commercial',
  'Retail',
  'Educational',
  'Housing',
  'Institutional',
  'Interior Design',
]

export type Project = {
  id: string
  name: string
  category: string
  image: string
}

const PROJECT_NAMES: { name: string; category: string }[] = [
  { name: 'Malsi, Dehradun', category: 'Interior' },
  { name: 'Jolly Grant, Dehradun', category: 'Residential' },
  { name: 'Tibbati Colony, Sahastradhara', category: 'Residential' },
  { name: 'Sarthi Vihar, Dehradun', category: 'Residential' },
  { name: 'Hotel, Joshimath', category: 'Commercial' },
  { name: 'Resort, Sonprayag', category: 'Commercial' },
  { name: 'Sarthi Vihar, Dehradun', category: 'Residential' },  
  { name: 'Dhakuwala, Dehradun', category: 'Residential' },
  { name: 'Ekta Vihar, Dehradun', category: 'Residential' },
  { name: 'Malsi, Dehradun', category: 'Residential' },
  { name: 'Panchsheel Hotel, Kanwli Road', category: 'Commercial' },
  { name: 'Restaurant & Cafe, Rajpur Road', category: 'Interior' },
  { name: 'Commercial Complex, Raipur Road', category: 'Interior' },
  { name: 'Phulwari Resort, Sonprayag', category: 'Interior' },
  { name: 'Cafe, Canal Road', category: 'Interior' },
  { name: 'Commercial Complex, Raipur Road', category: 'Commercial' },
  { name: 'Fitness Centre, Rajpur Road', category: 'Commercial' }, // 
  { name: 'Brahmastra Cafe, Rajpur Road', category: 'Commercial' },
  { name: 'Tulip Hills, G.M.S. Road', category: 'Housing' },
  { name: 'EWS Housing Proposal, Selaqui', category: 'Housing' },
  { name: 'Govt. Degree College, Paithani, Pauri Garhwal', category: 'Institutional' },
  { name: 'Unicus Academy, Nainital', category: 'Institutional' },  // Tibetan Primary School, Sahastradhara Roa
  { name: 'ECO-STAT Building, Kuawala', category: 'Institutional' },
]

export const PROJECTS: Project[] = PROJECT_NAMES.map((p, i) => ({
  id: `p-${i + 1}`,
  name: p.name,
  category: p.category,
  image: `/projects/project-${String((i % 25) + 1).padStart(2, '0')}.jpg`,
})).sort((a, b) => {
  const rank = (p: Project) => {
    if (p.name.includes('Unicus')) return 0
    if (p.name.includes('Tulip')) return 1
    if (p.name.includes('Fitness')) return 2
    if (p.category === 'Interior') return 5
    if (p.name.includes('Govt. Degree College')) return 4
    return 3
  }
  return rank(a) - rank(b) || b.name.length - a.name.length
})

export const CATEGORIES = ['All', 'Residential', 'Commercial', 'Institutional', 'Housing', 'Interior']

export const FEATURED_PROJECTS = ['Tulip', 'Unicus', 'Fitness']
  .map((key) => PROJECTS.find((p) => p.name.includes(key)))
  .filter((p): p is Project => Boolean(p))

export type Founder = {
  name: string
  role: string
  credentials: string
  almaMater: string
  affiliation: string
  image: string
  quote: string
}

export const FOUNDERS: Founder[] = [
  {
    name: 'Mohammad Aneesh',
    role: 'Founder & Principal Architect',
    credentials: 'Council of Architecture (COA) • DIT University, Dehradun',
    almaMater: 'DIT University, Dehradun',
    affiliation: 'Council of Architecture (COA)',
    image: '/team/mohammad-aneesh.webp',
    quote:
      'Every space has a story to tell, and every design is an opportunity to transform an ordinary space into something extraordinary.',
  },
  {
    name: 'Sudha Dabral',
    role: 'Founder & Principal Architect',
    credentials: 'Council of Architecture (COA) • DIT University, Dehradun',
    almaMater: 'DIT University, Dehradun',
    affiliation: 'Council of Architecture (COA)',
    image: '/team/sudha-dabral.webp',
    quote:
      'Our vision is to create architecture that speaks through its simplicity, stands through its strength and inspires through its beauty.',
  },
]
