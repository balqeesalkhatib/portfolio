import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="py-8 bg-[var(--bg-primary)] border-t border-[var(--surface-border)]">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between text-sm text-[var(--text-muted)]">
        <p>&copy; {new Date().getFullYear()} Balqees Al-Khateeb. All rights reserved.</p>
        
        {/* Social & Contact Icons */}
        <div className="mt-6 md:mt-0 flex items-center space-x-6">
          <a 
            href="https://github.com/balqeesalkhatib" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[var(--brand)] transition-transform hover:scale-110 duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a 
            href="https://www.linkedin.com/in/balqeesalkhateeb/" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[var(--brand)] transition-transform hover:scale-110 duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a 
            href="https://www.instagram.com/balqeesalkhatib/?hl=en" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[var(--brand)] transition-transform hover:scale-110 duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>
          <a 
            href="tel:00962787023107" 
            className="hover:text-[var(--brand)] transition-transform hover:scale-110 duration-200"
            aria-label="Phone"
          >
            <FaPhoneAlt size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
