import React from 'react'
import {
  Instagram,
  Youtube,
  Facebook,
  X as Twitter,
  MessageCircleMore,
} from 'lucide-react'

export const FooterLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
      <div>
        <h4 className="text-lg font-semibold mb-4">Company</h4>
        <ul className="space-y-2">
          <li>About Us</li>
          <li>Our Mission</li>
          <li>Instructors</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Services</h4>
        <ul className="space-y-2">
          <li>Yoga Classes</li>
          <li>Nutrition Plans</li>
          <li>Mental Wellness</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact</h4>
        <ul className="space-y-2">
          <li>Email: info@pritamyoga.com</li>
          <li>Phone: +91 98765 43210</li>
          <li>Location: Bangalore, India</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Social</h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 hover:text-primary cursor-pointer">
            <Instagram size={18} /> Instagram
          </li>
          <li className="flex items-center gap-2 hover:text-primary cursor-pointer">
            <Youtube size={18} /> YouTube
          </li>
          <li className="flex items-center gap-2 hover:text-primary cursor-pointer">
            <Facebook size={18} /> Facebook
          </li>
          <li className="flex items-center gap-2 hover:text-primary cursor-pointer">
            <MessageCircleMore size={18} /> WhatsApp
          </li>
          <li className="flex items-center gap-2 hover:text-primary cursor-pointer">
            <Twitter size={18} /> X (Twitter)
          </li>
        </ul>
      </div>
    </div>
  )
}
