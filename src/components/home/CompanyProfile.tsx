import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Factory, Globe, Recycle, Award, Building2 } from 'lucide-react';

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
      color: 'text-blue-600'
    },
    {
      icon: Recycle,
      title: 'APT Production',
      value: '2,000 tons',
      subtitle: 'Ammonium paratungstate annually',
      color: 'text-green-600'
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
      color: 'text-purple-600'
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
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">Company Profile</h2>
            <p className="text-xl text-steel-gray mt-4">Specializing in rare and precious metals processing, trading, and investment</p>
          </div>

          {/* Company Overview Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Company Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-dark mb-6">Company Overview</h3>
              <div className="space-y-4 text-steel-gray">
                <p>
                  Mavex Investments Pte. Ltd. is a company specializing in the processing, trading, and investment of rare and precious metals. Its wholly-owned subsidiary, Zhongyu International Metal Materials Industrial Co., Ltd., is located in the Yapotash International Industrial Park, Thakhek County, Khammouane Province, Laos.
                </p>
                <p>
                  The company focuses on the comprehensive utilization of rare and precious metal resources such as tungsten, molybdenum, cobalt, nickel, and vanadium.
                </p>
              </div>
            </div>

            {/* Production Capabilities */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-dark mb-6">Production Capabilities</h3>
              <div className="space-y-4 text-steel-gray">
                <p>
                  It has established a production line with an annual capacity of processing 20,000 tons of tungsten, molybdenum, and vanadium waste catalysts, producing tungsten and molybdenum products. The line is capable of producing 2,000 tons of ammonium paratungstate (APT) and 1,000 tons of ferromolybdenum and ferrovanadium annually.
                </p>
              </div>
            </div>

            {/* Products & Materials */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-dark mb-6">Main Products</h3>
              <div className="space-y-4 text-steel-gray">
                <p>
                  Its main products include ammonium paratungstate (APT), ferromolybdenum, and ferrovanadium. Raw materials cover tungsten-molybdenum-cobalt waste alloys, as well as waste catalysts containing tungsten, molybdenum, and vanadium from the petrochemical industry.
                </p>
              </div>
            </div>

            {/* Environmental Commitment */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-dark mb-6">Environmental Commitment</h3>
              <div className="space-y-4 text-steel-gray">
                <p>
                  The company adopts advanced production processes, advocates green environmental protection, and follows the development concepts promoted by the OECD Conflict Minerals Initiative. It is positioned as a global leader in the recycling and utilization of tungsten, molybdenum, and vanadium.
                </p>
              </div>
            </div>
          </div>

          {/* Global Locations */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-dark text-center mb-8">Global Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-copper bg-opacity-10 mb-4">
                    <location.icon className="h-8 w-8 text-copper" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-dark mb-2">{location.title}</h4>
                  <p className="font-semibold text-steel-gray mb-2">{location.company}</p>
                  <p className="text-steel-gray text-sm">{location.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyHighlights.map((highlight, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 card-hover">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${highlight.color}`}>
                    <highlight.icon className="h-8 w-8" />
                  </div>
                  <div className="text-lg font-semibold text-slate-dark mb-1">{highlight.title}</div>
                  <div className="text-2xl font-bold text-copper mb-2">{highlight.value}</div>
                  <div className="text-steel-gray text-sm">{highlight.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
