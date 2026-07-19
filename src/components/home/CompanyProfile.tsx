import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Award, Building2, Factory, Globe, Mail, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyProfile: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const keyHighlights = [
    {
      icon: Factory,
      title: 'Annual Processing',
      value: '20,000 tons',
      subtitle: 'Tungsten, molybdenum, vanadium waste catalysts',
      color: 'text-copper'
    },
    {
      icon: Recycle,
      title: 'APT Production',
      value: '2,000 tons',
      subtitle: 'Ammonium paratungstate annually',
      color: 'text-forest'
    },
    {
      icon: Globe,
      title: 'Alloy Production',
      value: '1,000 tons',
      subtitle: 'Ferromolybdenum and ferrovanadium annually',
      color: 'text-copper'
    },
    {
      icon: Award,
      title: 'OECD Compliant',
      value: 'Certified',
      subtitle: 'Conflict Minerals Initiative compliant',
      color: 'text-forest'
    },
  ];

  const locations = [
    {
      icon: Building2,
      title: 'Singapore Headquarters',
      company: 'MAVEX INVESTMENTS PTE. LTD.',
      address: '112 Robinson Road, #03-01 Singapore'
    },
    {
      icon: Factory,
      title: 'Laos Production Base',
      company: 'Zhongyu International Metal Materials Industrial Co., Ltd.',
      address: 'Yapotash International Industrial Park, Thakhek County, Khammouane Province, Laos'
    }
  ];

  return (
    <section id="company-profile" className="section bg-ivory scroll-mt-20">
      <div className="container-custom">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-16 grid grid-cols-1 gap-8 border-b border-slate-dark/15 pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="eyebrow">Company profile</p>
              <h2 className="mt-4 text-4xl leading-tight text-slate-dark md:text-5xl">Material expertise.<br />Regional reach.</h2>
            </div>
            <p className="max-w-2xl text-lg text-steel-gray lg:col-span-6 lg:col-start-7">
              MAVEX combines Singapore-based commercial operations with an industrial footprint in Laos, focusing on the responsible recovery and utilization of tungsten, molybdenum, cobalt, nickel, and vanadium resources.
            </p>
          </div>

          <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <article className="border-l-4 border-copper bg-white p-8 md:p-10 lg:col-span-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-copper-dark">01 — Company overview</p>
              <h3 className="mb-6 text-3xl text-slate-dark">A cross-border platform for strategic metals</h3>
              <div className="space-y-5 text-steel-gray">
                <p>
                  Mavex Investments Pte. Ltd. is a company specializing in the processing, trading, and investment of rare and precious metals. Its wholly-owned subsidiary, Zhongyu International Metal Materials Industrial Co., Ltd., is located in the Yapotash International Industrial Park, Thakhek County, Khammouane Province, Laos.
                </p>
                <p>
                  The company focuses on the comprehensive utilization of rare and precious metal resources such as tungsten, molybdenum, cobalt, nickel, and vanadium.
                </p>
              </div>
            </article>

            <div className="space-y-10 lg:col-span-5 lg:pl-6">
              <article className="border-t border-slate-dark/20 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-copper-dark">02 — Production</p>
                <h3 className="mb-4 text-2xl text-slate-dark">Production capabilities</h3>
                <p>
                  It has established a production line with an annual capacity of processing 20,000 tons of tungsten, molybdenum, and vanadium waste catalysts, producing tungsten and molybdenum products. The line is capable of producing 2,000 tons of ammonium paratungstate (APT) and 1,000 tons of ferromolybdenum and ferrovanadium annually.
                </p>
              </article>

              <article className="border-t border-slate-dark/20 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-copper-dark">03 — Products</p>
                <h3 className="mb-4 text-2xl text-slate-dark">Main products</h3>
                <p>
                  Its main products include ammonium paratungstate (APT), ferromolybdenum, and ferrovanadium. Raw materials cover tungsten-molybdenum-cobalt waste alloys, as well as waste catalysts containing tungsten, molybdenum, and vanadium from the petrochemical industry.
                </p>
              </article>

              <article className="border-t border-slate-dark/20 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-copper-dark">04 — Responsibility</p>
                <h3 className="mb-4 text-2xl text-slate-dark">Environmental commitment</h3>
                <p>
                  The company adopts advanced production processes, advocates green environmental protection, and follows the development concepts promoted by the OECD Conflict Minerals Initiative. It is positioned as a global leader in the recycling and utilization of tungsten, molybdenum, and vanadium.
                </p>
              </article>
            </div>
          </div>

          <div className="mb-20 overflow-hidden bg-slate-dark text-white">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {keyHighlights.map((highlight) => (
                <div key={highlight.title} className="border-b border-r border-white/10 p-6 last:border-r-0 md:p-8 lg:border-b-0">
                  <highlight.icon className={`mb-8 h-6 w-6 ${highlight.color}`} aria-hidden="true" />
                  <div className="font-montserrat text-3xl font-bold md:text-4xl">{highlight.value}</div>
                  <div className="mt-2 text-sm font-semibold text-white/85">{highlight.title}</div>
                  <div className="mt-2 text-xs leading-relaxed text-white/50">{highlight.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Operating footprint</p>
              <h3 className="mt-4 text-3xl text-slate-dark">Connected across Southeast Asia</h3>
            </div>
            <div className="grid grid-cols-1 gap-px bg-slate-dark/15 md:grid-cols-2 lg:col-span-8">
              {locations.map((location) => (
                <article key={location.title} className="bg-white p-8">
                  <location.icon className="mb-10 h-8 w-8 text-copper" aria-hidden="true" />
                  <h4 className="text-xl text-slate-dark">{location.title}</h4>
                  <p className="mt-3 font-semibold text-steel-gray">{location.company}</p>
                  <p className="mt-2 text-sm text-steel-gray">{location.address}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 bg-copper text-white lg:grid-cols-12">
            <div className="p-8 md:p-10 lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Work with MAVEX</p>
              <h3 className="mt-4 max-w-2xl text-3xl leading-tight md:text-4xl">Discuss metal processing, supply, or investment opportunities with our team.</h3>
            </div>
            <div className="flex flex-col justify-center gap-3 border-t border-white/20 p-8 lg:col-span-4 lg:border-l lg:border-t-0">
              <a href="mailto:Business@mavexinvest.com" className="inline-flex items-center justify-between border-b border-white/35 py-3 font-semibold hover:border-white">
                Contact our team
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
              <Link to="/gallery" className="inline-flex items-center justify-between border-b border-white/35 py-3 font-semibold hover:border-white">
                View company gallery
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
