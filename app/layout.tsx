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
  title: "Nate Marcellus Contracting LLC | Engineering Contracting, Software Engineering & QA Services",
  description:
    "Specializing in engineering contracting, software engineering, and QA services. Delivering custom software solutions and rigorous testing for industries requiring precision and reliability.",
  openGraph: {
    title: "Nate Marcellus Contracting LLC | Engineering Contracting, Software Engineering & QA Services",
    description:
      "Specializing in engineering contracting, software engineering, and QA services. Delivering custom software solutions and rigorous testing for industries requiring precision and reliability.",
    url: "https://www.nateMarcellus.com",
    siteName: "Nate Marcellus Contracting LLC",
    images: [
      {
        url: "https://www.nateMarcellus.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nate Marcellus Engineering & QA Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nate Marcellus Contracting LLC | Engineering Contracting, Software Engineering & QA Services",
    description:
      "Specializing in engineering contracting, software engineering, and QA services. Delivering custom software solutions and rigorous testing for industries requiring precision and reliability.",
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
    "engineering contracting",
    "software engineering",
    "QA services",
    "custom software solutions",
    "software testing",
    "industrial engineering",
    "contracting services",
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
                  Delivering engineering contracting, software engineering, and QA services for
                  industries requiring precision, reliability, and custom software solutions.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      Software Engineering
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      QA & Testing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      Engineering Contracting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      Custom Software Solutions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
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