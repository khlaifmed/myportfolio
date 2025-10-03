import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Khlaif Mohamed — Data Engineer & AI Cloud Engineer',
  description: 'Portfolio of Khlaif Mohamed, Data Engineer and AI Cloud Engineer. Explore projects, experience, and get in touch.',
  keywords: [
    'AI Architect',
    'Full-Stack Engineer', 
    'Machine Learning Engineer',
    'Python Developer',
    'React Developer',
    'Next.js Developer',
    'Django',
    'AWS',
    'Freelancer',
    'INPT',
    'Morocco',
    'Rabat',
    'Portfolio',
    'Software Engineer'
  ],
  authors: [{ name: 'Khlaif Mohamed', url: 'https://example.com' }],
  creator: 'Khlaif Mohamed',
  publisher: 'Khlaif Mohamed',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: 'https://reda-elhadfi.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'Khlaif Mohamed Portfolio',
    title: 'Khlaif Mohamed — Data Engineer & AI Cloud Engineer',
    description: 'Portfolio of Khlaif Mohamed, Data Engineer and AI Cloud Engineer.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Khlaif Mohamed - Data Engineer & AI Cloud Engineer',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khlaif Mohamed — Data Engineer & AI Cloud Engineer',
    description: 'Portfolio of Khlaif Mohamed, Data Engineer and AI Cloud Engineer.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification IDs when available
    // google: 'google-verification-code',
    // yandex: 'yandex-verification-code',
    // yahoo: 'yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#100C08',
    'color-scheme': 'dark',
  },
}

export default metadata
