import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  ArrowUpRight,
  Building2,
  Factory,
  FlaskConical,
  Globe2,
  Leaf,
  Mail,
  PackageCheck,
  Recycle,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const capacityMetrics = [
  {
    value: '20,000',
    unit: 'tonnes / year',
    label: 'Metal-bearing material processing',
  },
  {
    value: '2,000',
    unit: 'tonnes / year',
    label: 'Ammonium paratungstate capacity',
  },
  {
    value: '1,000',
    unit: 'tonnes / year',
    label: 'Combined ferroalloy capacity',
  },
  {
    value: '2025',
    unit: 'regional platform',
    label: 'Singapore and Laos entities established',
  },
];

const materials = [
  { symbol: 'W', name: 'Tungsten', detail: 'APT and tungsten-bearing material recovery' },
  { symbol: 'Mo', name: 'Molybdenum', detail: 'Molybdenum products and ferromolybdenum' },
  { symbol: 'V', name: 'Vanadium', detail: 'Vanadium-bearing catalysts and ferrovanadium' },
  { symbol: 'Co', name: 'Cobalt', detail: 'Cobalt-bearing secondary material streams' },
  { symbol: 'Ni', name: 'Nickel', detail: 'Nickel-bearing industrial materials' },
];

const valueChain = [
  {
    number: '01',
    icon: ShieldCheck,
    title: 'Feedstock review',
    text: 'Evaluate material composition, documentation, and commercial suitability before processing.',
  },
  {
    number: '02',
    icon: Recycle,
    title: 'Separation & recovery',
    text: 'Apply controlled process routes to separate and recover strategic-metal values from complex materials.',
  },
  {
    number: '03',
    icon: FlaskConical,
    title: 'Product conversion',
    text: 'Convert recovered material into products such as APT, ferromolybdenum, and ferrovanadium.',
  },
  {
    number: '04',
    icon: PackageCheck,
    title: 'Commercial delivery',
    text: 'Coordinate quality, documentation, and international delivery through the Singapore commercial platform.',
  },
];

const CompanyProfile: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  return (
    <div ref={ref} className={inView ? 'opacity-100' : 'opacity-0'}>
      <section id="company-profile" className="section scroll-mt-20 bg-warm-stone">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="section-label text-copper-dark">Company platform</p>
              <h2 className="mt-5 max-w-xl text-5xl font-semibold uppercase leading-[0.92] text-graphite md:text-6xl">
                Commercial reach. Industrial depth.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-xl leading-relaxed text-steel-gray">
                MAVEX INVESTMENTS PTE. LTD. is a Singapore-incorporated company active in industrial chemical wholesaling and strategic investment. Its regional operating footprint connects international trade with metal-material processing in Laos.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-0 lg:grid-cols-12">
            <figure className="image-frame relative min-h-[420px] overflow-hidden lg:col-span-7">
              <img
                src="/images/factory/factory-main-gate.jpg"
                alt="Main entrance to the Zhongyu production base in Laos"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 bg-graphite px-5 py-3 text-xs uppercase tracking-[0.16em] text-white/70">
                Zhongyu production base · Laos
              </figcaption>
            </figure>
            <div className="bg-white p-8 md:p-12 lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-dark">Registered commercial hub</p>
              <h3 className="mt-4 text-3xl font-semibold uppercase text-graphite">MAVEX Investments</h3>
              <p className="mt-5 text-steel-gray">
                Incorporated in Singapore on 26 February 2025 as a private company limited by shares, with wholesale of basic industrial chemicals as its primary registered activity.
              </p>
              <dl className="mt-8 border-t border-graphite/[0.15]">
                <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-graphite/[0.15] py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-steel-gray">UEN</dt>
                  <dd className="font-medium text-graphite">202508354H</dd>
                </div>
                <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-graphite/[0.15] py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-steel-gray">Status</dt>
                  <dd className="font-medium text-graphite">Live company</dd>
                </div>
                <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-steel-gray">Office</dt>
                  <dd className="font-medium text-graphite">112 Robinson Road, #03-01, Singapore 068902</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px bg-graphite/[0.15] lg:grid-cols-4">
            {capacityMetrics.map((metric) => (
              <div key={metric.label} className="bg-warm-stone p-6 md:p-8">
                <div className="font-display text-5xl font-semibold text-graphite md:text-6xl">{metric.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-copper-dark">{metric.unit}</div>
                <p className="mt-5 text-sm text-steel-gray">{metric.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-steel-gray/70">Capacity figures reflect the company&apos;s current corporate profile and stated production design.</p>
        </div>
      </section>

      <section id="capabilities" className="section scroll-mt-20 overflow-hidden bg-graphite text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="section-label text-copper-light">Materials & products</p>
              <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.92] md:text-6xl">Focused on strategic-metal value.</h2>
              <p className="mt-7 max-w-xl text-lg text-white/[0.65]">
                The business is structured around the recovery, processing, and commercialization of tungsten, molybdenum, vanadium, cobalt, and nickel-bearing materials.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-px bg-white/[0.12] sm:grid-cols-2">
                {materials.map((material, index) => (
                  <article key={material.symbol} className={`bg-graphite p-5 ${index === materials.length - 1 ? 'sm:col-span-2' : ''}`}>
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-jade/[0.45] font-display text-2xl font-semibold text-jade-light">
                        {material.symbol}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold uppercase">{material.name}</h3>
                        <p className="mt-1 text-sm text-white/[0.48]">{material.detail}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <figure className="lg:col-span-7 lg:pl-8">
              <div className="relative overflow-hidden border border-white/[0.12]">
                <img
                  src="/images/concepts/strategic-metals.jpg"
                  alt="Conceptual arrangement of strategic metal materials"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite via-graphite/75 to-transparent px-6 pb-5 pt-16">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/60">Conceptual material visualization</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-px bg-white/[0.12] sm:grid-cols-3">
                <div className="bg-steel px-5 py-6">
                  <span className="text-xs uppercase tracking-[0.16em] text-copper-light">Primary product</span>
                  <p className="mt-2 font-semibold">Ammonium paratungstate</p>
                </div>
                <div className="bg-steel px-5 py-6">
                  <span className="text-xs uppercase tracking-[0.16em] text-copper-light">Ferroalloy</span>
                  <p className="mt-2 font-semibold">Ferromolybdenum</p>
                </div>
                <div className="bg-steel px-5 py-6">
                  <span className="text-xs uppercase tracking-[0.16em] text-copper-light">Ferroalloy</span>
                  <p className="mt-2 font-semibold">Ferrovanadium</p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section id="value-chain" className="section scroll-mt-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="section-label text-copper-dark">Value chain</p>
              <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.92] text-graphite md:text-6xl">Recover. Convert. Deliver.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-steel-gray">
                A connected workflow links commercial qualification, controlled processing, product conversion, and international delivery.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-0 lg:grid-cols-12">
            <figure className="relative overflow-hidden bg-graphite lg:col-span-6">
              <img
                src="/images/concepts/circular-material-flow.jpg"
                alt="Conceptual progression from industrial metal-bearing material to refined products"
                loading="lazy"
                decoding="async"
                className="h-full min-h-[440px] w-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 bg-graphite px-5 py-3 text-xs uppercase tracking-[0.16em] text-white/60">
                Conceptual circular-material flow
              </figcaption>
            </figure>
            <div className="grid grid-cols-1 gap-px bg-graphite/[0.15] sm:grid-cols-2 lg:col-span-6">
              {valueChain.map((step) => (
                <article key={step.number} className="bg-warm-stone p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-semibold text-copper">{step.number}</span>
                    <step.icon className="h-6 w-6 text-jade-dark" aria-hidden="true" />
                  </div>
                  <h3 className="mt-12 text-2xl font-semibold uppercase text-graphite">{step.title}</h3>
                  <p className="mt-4 text-sm text-steel-gray">{step.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-graphite/[0.15] md:grid-cols-3">
            <article className="bg-white p-7">
              <Leaf className="h-7 w-7 text-jade-dark" aria-hidden="true" />
              <h3 className="mt-7 text-2xl font-semibold uppercase text-graphite">Resource efficiency</h3>
              <p className="mt-3 text-steel-gray">Recover value from complex secondary materials and support more circular material use.</p>
            </article>
            <article className="bg-white p-7">
              <ShieldCheck className="h-7 w-7 text-jade-dark" aria-hidden="true" />
              <h3 className="mt-7 text-2xl font-semibold uppercase text-graphite">Responsible sourcing</h3>
              <p className="mt-3 text-steel-gray">Build processes around documentation, traceability, and recognized responsible-sourcing principles.</p>
            </article>
            <article className="bg-white p-7">
              <Globe2 className="h-7 w-7 text-jade-dark" aria-hidden="true" />
              <h3 className="mt-7 text-2xl font-semibold uppercase text-graphite">Cross-border coordination</h3>
              <p className="mt-3 text-steel-gray">Connect regional operations with customers and partners across international markets.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="operations" className="section scroll-mt-20 bg-warm-stone">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="section-label text-copper-dark">Real operations</p>
              <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.92] text-graphite md:text-6xl">Built for industrial execution.</h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-lg text-steel-gray">
                The Laos production base brings together processing halls, reaction systems, separation equipment, supporting utilities, and campus infrastructure.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-12">
            <figure className="group relative min-h-[480px] overflow-hidden md:col-span-8 md:row-span-2">
              <img
                src="/images/factory/production-line-wide.jpg"
                alt="Wide view of the production line inside the Laos factory"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <figcaption className="absolute bottom-0 left-0 bg-graphite px-5 py-3 text-xs uppercase tracking-[0.16em] text-white/70">Integrated processing line</figcaption>
            </figure>
            <figure className="group relative min-h-[232px] overflow-hidden md:col-span-4">
              <img
                src="/images/factory/factory-reception.jpg"
                alt="MAVEX reception at the Laos production base"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-0 left-0 bg-graphite px-4 py-2 text-xs uppercase tracking-[0.14em] text-white/70">Factory reception</figcaption>
            </figure>
            <figure className="group relative min-h-[232px] overflow-hidden md:col-span-4">
              <img
                src="/images/factory/water-treatment.jpg"
                alt="Water treatment infrastructure at the production facility"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-0 left-0 bg-graphite px-4 py-2 text-xs uppercase tracking-[0.14em] text-white/70">Supporting infrastructure</figcaption>
            </figure>
          </div>

          <div className="mt-10 grid grid-cols-1 bg-copper text-white lg:grid-cols-12">
            <div className="p-8 md:p-10 lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Explore the facility</p>
              <h3 className="mt-4 max-w-2xl text-4xl font-semibold uppercase leading-[0.95] md:text-5xl">See the production campus, equipment, and supporting infrastructure.</h3>
            </div>
            <div className="flex flex-col justify-center gap-3 border-t border-white/20 p-8 lg:col-span-4 lg:border-l lg:border-t-0">
              <Link to="/gallery" className="inline-flex items-center justify-between border-b border-white/40 py-3 font-semibold hover:border-white">
                Open factory gallery
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href="mailto:Business@mavexinvest.com" className="inline-flex items-center justify-between border-b border-white/40 py-3 font-semibold hover:border-white">
                Discuss an opportunity
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-graphite/15 md:grid-cols-2">
            <article className="bg-white p-8">
              <Building2 className="h-7 w-7 text-copper" aria-hidden="true" />
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-copper-dark">Singapore</p>
              <h3 className="mt-2 text-2xl font-semibold uppercase text-graphite">Commercial headquarters</h3>
              <p className="mt-4 text-steel-gray">MAVEX INVESTMENTS PTE. LTD.<br />112 Robinson Road, #03-01, Singapore 068902</p>
            </article>
            <article className="bg-white p-8">
              <Factory className="h-7 w-7 text-jade-dark" aria-hidden="true" />
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-jade-dark">Laos</p>
              <h3 className="mt-2 text-2xl font-semibold uppercase text-graphite">Production operations</h3>
              <p className="mt-4 text-steel-gray">Zhongyu International Metal Materials Industry Co., Ltd.<br />Khammouane Province, Laos</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfile;
