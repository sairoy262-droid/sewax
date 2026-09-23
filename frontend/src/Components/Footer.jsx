import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#070709] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5C542]">
                <span className="text-xl font-black text-[#0B0B0F]">S</span>
              </div>

              <span className="text-2xl font-black">
                SEWA<span className="text-[#F5C542]">X</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">
              Connecting customers with trusted service professionals through
              one simple platform.
            </p>

            {/* Social buttons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sm font-bold text-slate-400 transition hover:border-[#F5C542] hover:text-[#F5C542]"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sm font-bold text-slate-400 transition hover:border-[#F5C542] hover:text-[#F5C542]"
              >
                IG
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sm font-bold text-slate-400 transition hover:border-[#F5C542] hover:text-[#F5C542]"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sm font-bold text-slate-400 transition hover:border-[#F5C542] hover:text-[#F5C542]"
              >
                in
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold">Services</h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500">
              <Link
                className="block transition hover:text-[#F5C542]"
                to="/services"
              >
                Cleaning
              </Link>

              <Link
                className="block transition hover:text-[#F5C542]"
                to="/services"
              >
                Plumbing
              </Link>

              <Link
                className="block transition hover:text-[#F5C542]"
                to="/services"
              >
                Electrical
              </Link>

              <Link
                className="block transition hover:text-[#F5C542]"
                to="/services"
              >
                Repair
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold">Company</h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500">
              <Link
                className="block transition hover:text-[#F5C542]"
                to="/about"
              >
                About SewaX
              </Link>

              <Link
                className="block transition hover:text-[#F5C542]"
                to="/vendors"
              >
                Our Vendors
              </Link>

              <Link
                className="block transition hover:text-[#F5C542]"
                to="/contact"
              >
                Contact
              </Link>

              <Link
                className="block transition hover:text-[#F5C542]"
                to="/careers"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold">Support</h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500">
              <Link
                className="block transition hover:text-[#F5C542]"
                to="/help"
              >
                Help Center
              </Link>

              <Link className="block transition hover:text-[#F5C542]" to="/faq">
                FAQ
              </Link>

              <Link
                className="block transition hover:text-[#F5C542]"
                to="/privacy"
              >
                Privacy Policy
              </Link>

              <Link
                className="block transition hover:text-[#F5C542]"
                to="/terms"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-sm text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} SewaX. All rights reserved.</p>

          <p>Built for better local services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
