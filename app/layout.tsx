import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Nate Marcellus Contracting LLC | Tech Solutions for Construction & Industry",
  description:
    "Expert in application development, QA, and software solutions for construction, contracting, and industrial technology needs. Hire me for custom tech services.",
  openGraph: {
    title: "Nate Marcellus Contracting LLC | Tech Solutions for Construction & Industry",
    description:
      "Expert in application development, QA, and software solutions for construction, contracting, and industrial technology needs. Hire me for custom tech services.",
    url: "https://www.nateMarcellus.com",
    siteName: "Nate Marcellus Contracting LLC",
    images: [
      {
        url: "https://www.nateMarcellus.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nate Marcellus Tech Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nate Marcellus Contracting LLC | Tech Solutions for Construction & Industry",
    description:
      "Expert in application development, QA, and software solutions for construction, contracting, and industrial technology needs. Hire me for custom tech services.",
    images: ["https://www.nateMarcellus.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.nateMarcellus.com",
  },
  keywords: [
    "construction tech",
    "software development",
    "QA services",
    "industrial software",
    "custom tech solutions",
    "contracting software",
  ],
  authors: [
    {
      name: "Nate Marcellus",
      url: "https://www.nateMarcellus.com",
    },
  ],
  category: "technology",
  publisher: "Nate Marcellus Contracting LLC",
  applicationName: "Nate Marcellus Support",
  themeColor: "#1a1a1a",
  colorScheme: "dark",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        {/* Header */}
        <header className="bg-black text-white shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-500 animate-pulse">NM</span>
              <span className="text-xl font-semibold">Nate Marcellus Contracting LLC</span>
            </div>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        {/* Footer */}
        <footer className="bg-black text-white py-12 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Company Info */}
              <div>
                <h3 className="text-2xl font-bold text-blue-500 mb-4">Nate Marcellus</h3>
                <p className="text-gray-400 mb-6">
                  Bridging construction and technology with custom software solutions, QA services,
                  and application development for industrial and contracting needs.
                </p>
                <div className="flex space-x-4 animate-fade-in">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-125"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-125"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-125"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-125"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
              {/* Navigation */}
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Navigation</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-105"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-105"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-105"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-105"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-105"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Contact Us</h4>
                <p className="text-gray-400 mb-4">Email: support@nateMarcellus.com</p>
                <p className="text-gray-400 mb-4">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-400">Address: 123 Tech Street, Innovation City</p>
              </div>
              {/* Legal */}
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-105"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-105"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-105"
                    >
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} Nate Marcellus Contracting LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}