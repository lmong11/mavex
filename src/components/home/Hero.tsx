import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[720px] h-[100svh] overflow-hidden bg-slate-dark" aria-labelledby="hero-title">
      <img
        src="/images/mavex-storefront.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-dark via-slate-dark/85 to-slate-dark/25" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_55%,rgba(184,115,51,0.22)_55%,transparent_56%)]" aria-hidden="true" />

      <div className="relative flex h-full items-center pt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="max-w-3xl text-white lg:col-span-8">
              <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-copper-light">
                <span className="h-px w-10 bg-copper" aria-hidden="true" />
                Singapore · Laos · Global Trade
              </p>
              <h1 id="hero-title" className="mb-6 text-5xl font-bold leading-[0.96] sm:text-6xl lg:text-7xl">
                MAVEX INVESTMENTS
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                Turning complex metal resources into durable value through responsible processing, international trading, and long-term investment.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#company-profile" className="btn-primary rounded-none">
                  Explore our capabilities
                  <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                <Link to="/gallery" className="btn border border-white/35 text-white rounded-none hover:border-white hover:bg-white/10 focus:ring-white">
                  View company gallery
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <dl className="grid grid-cols-2 border-y border-white/20 text-white lg:col-span-4 lg:grid-cols-1 lg:border-y-0 lg:border-l">
              <div className="border-r border-white/20 px-5 py-5 lg:border-b lg:border-r-0 lg:py-6">
                <dt className="text-xs uppercase tracking-[0.2em] text-white/55">Annual processing</dt>
                <dd className="mt-2 font-montserrat text-3xl font-bold">20,000 <span className="text-base text-copper-light">tons</span></dd>
              </div>
              <div className="px-5 py-5 lg:py-6">
                <dt className="text-xs uppercase tracking-[0.2em] text-white/55">Operating footprint</dt>
                <dd className="mt-2 font-montserrat text-3xl font-bold">2 <span className="text-base text-copper-light">markets</span></dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
