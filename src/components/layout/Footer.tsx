import React from 'react';
import { ArrowUpRight, Building2, Factory, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-graphite text-white">
      <div className="h-1 bg-gradient-to-r from-jade via-copper to-transparent" aria-hidden="true" />
      <div className="container-custom py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-4" aria-label="MAVEX Investments home">
              <img src="/images/mavex-logo.png" alt="" className="h-14 w-auto" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Investments</span>
            </Link>
            <p className="mt-7 max-w-sm text-white/[0.58]">
              Strategic-metal processing, industrial material recovery, international trading, and long-term investment across Singapore and Laos.
            </p>
            <a
              href="mailto:Business@mavexinvest.com"
              className="mt-8 inline-flex items-center gap-3 border-b border-copper/70 pb-2 font-semibold text-white hover:border-copper-light"
            >
              <Mail className="h-4 w-4 text-copper-light" aria-hidden="true" />
              business@mavexinvest.com
            </a>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-copper-light">Operating footprint</h2>
            <div className="mt-7 space-y-7">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em]">
                  <Building2 className="h-4 w-4 text-jade-light" aria-hidden="true" />
                  Singapore headquarters
                </div>
                <p className="mt-3 text-sm text-white/[0.55]">112 Robinson Road, #03-01<br />Singapore 068902</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em]">
                  <Factory className="h-4 w-4 text-jade-light" aria-hidden="true" />
                  Laos production operations
                </div>
                <p className="mt-3 text-sm text-white/[0.55]">Khammouane Province<br />Lao PDR</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-copper-light">Navigate</h2>
            <nav className="mt-6 grid gap-1" aria-label="Footer navigation">
              {[
                ['Company', '/#company-profile'],
                ['Capabilities', '/#capabilities'],
                ['Value chain', '/#value-chain'],
                ['Operations', '/#operations'],
                ['Factory gallery', '/gallery'],
              ].map(([label, href]) => (
                <Link key={href} to={href} className="group flex items-center justify-between border-b border-white/10 py-3 text-sm text-white/[0.65] hover:border-copper/70 hover:text-white">
                  {label}
                  <ArrowUpRight className="h-4 w-4 opacity-45 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 border-t border-white/[0.12] pt-7 text-xs text-white/40 md:grid-cols-3 md:items-center">
          <p>© {new Date().getFullYear()} MAVEX INVESTMENTS PTE. LTD.</p>
          <p className="flex items-center gap-2 md:justify-center"><MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Singapore · Laos · International markets</p>
          <p className="md:text-right">Singapore UEN 202508354H</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
