import React from 'react';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[760px] h-[100svh] overflow-hidden bg-graphite" aria-labelledby="hero-title">
      <img
        src="/images/factory/factory-overview.jpg"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,17,24,0.97)_0%,rgba(11,17,24,0.88)_43%,rgba(11,17,24,0.28)_78%,rgba(11,17,24,0.12)_100%)]" aria-hidden="true" />
      <div className="industrial-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="absolute inset-y-0 left-[58%] hidden w-px bg-white/20 lg:block" aria-hidden="true" />

      <div className="relative flex h-full items-center pt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="max-w-4xl text-white lg:col-span-7">
              <p className="section-label text-copper-light">
                Strategic metals · Circular value chains
              </p>
              <h1 id="hero-title" className="mt-6 max-w-3xl text-[3.7rem] font-semibold uppercase leading-[0.86] tracking-[-0.025em] sm:text-7xl lg:text-[6.5rem]">
                From complex materials to strategic value.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/[0.74] md:text-xl">
                Singapore-based commercial expertise and a growing industrial platform in Laos for strategic-metal processing, recovery, and international trade.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#capabilities" className="btn-primary">
                  Explore capabilities
                  <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                <Link to="/gallery" className="btn border border-white/[0.35] text-white hover:border-white hover:bg-white/10 focus:ring-white">
                  View the factory
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="border border-white/[0.18] bg-graphite/[0.72] p-6 text-white backdrop-blur-md md:p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-copper-light">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Laos production base
                </div>
                <dl className="mt-8 grid grid-cols-2 gap-px bg-white/15">
                  <div className="bg-graphite/90 p-5">
                    <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-white/[0.48]">Nameplate processing</dt>
                    <dd className="mt-3 font-display text-4xl font-semibold">20,000</dd>
                    <span className="text-xs text-copper-light">tonnes / year</span>
                  </div>
                  <div className="bg-graphite/90 p-5">
                    <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-white/[0.48]">Operating footprint</dt>
                    <dd className="mt-3 font-display text-4xl font-semibold">SG · LA</dd>
                    <span className="text-xs text-copper-light">commercial + industrial</span>
                  </div>
                </dl>
                <p className="mt-5 text-xs leading-relaxed text-white/[0.45]">
                  Facility imagery shown on this website is from the company&apos;s Laos operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-copper via-jade to-transparent" aria-hidden="true" />
    </section>
  );
};

export default Hero;
