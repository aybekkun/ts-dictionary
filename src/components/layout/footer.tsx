import { Link } from '@tanstack/react-router'
import { Facebook, Instagram, Send, Youtube } from 'lucide-react'
import { LogoFooter } from './logo'

export const Footer = () => {
  return (
    <footer className="bg-blue-900 py-8 text-white">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <LogoFooter />
            </div>
            <p className="text-blue-200 mb-6 max-w-md">
              Your comprehensive resource for word definitions, pronunciations,
              and language learning. Discover the beauty and complexity of
              language with our modern dictionary platform.
            </p>
            <div className="flex gap-4">
              <Link
                to="/"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                to="/"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Send className="h-6 w-6" />
              </Link>
              <Link
                to="/"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                to="/"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Browse Words
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Word of the Day
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4 pt-4 border-t border-t-blue-800">
          <p>
            © {new Date().getFullYear()} Dictionary. All rights reserved. Built
            with passion for language learning.
          </p>
        </div>
      </div>
    </footer>
  )
}
