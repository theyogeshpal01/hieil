import React from 'react';
import { Truck, PiggyBank, BadgePercent, Headset } from 'lucide-react';

const features = [
  {
    id: 1,
    Icon: Truck,
    title: 'WORLDWIDE SHIPPING',
    desc: 'There are many variations of passages of lorem Ipsum availablthe majorityeven slightly believable.'
  },
  {
    id: 2,
    Icon: PiggyBank,
    title: 'MONEY BACK GUARANTEE',
    desc: 'There are many variations of passages of lorem Ipsum availablthe majorityeven slightly believable.'
  },
  {
    id: 3,
    Icon: BadgePercent,
    title: 'OFFERS AND DISCOUNTS',
    desc: 'There are many variations of passages of lorem Ipsum availablthe majorityeven slightly believable.'
  },
  {
    id: 4,
    Icon: Headset,
    title: '24/7 SUPPORT SERVICES',
    desc: 'There are many variations of passages of lorem Ipsum availablthe majorityeven slightly believable.'
  }
];

const FeaturesRow = () => {
  return (
    <section className="bg-[#15110F] py-20 px-8">
      <div className="max-w-[1400px] mx-auto flex justify-between gap-8 flex-wrap max-md:gap-12">
        {features.map((feature) => (
          <div key={feature.id} className="flex-1 min-w-[220px] flex flex-col items-center text-center max-md:flex-[1_1_40%] max-sm:flex-[1_1_100%] group">
            <div className="h-[36px] overflow-hidden mb-5 flex justify-center">
              <div className="flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-[36px]">
                <feature.Icon size={36} strokeWidth={1.2} className="text-white h-[36px] shrink-0" />
                <feature.Icon size={36} strokeWidth={1.2} className="text-[#cb6b51] h-[36px] shrink-0" />
              </div>
            </div>
            <h3 className="font-serif text-[3.5rem] font-normal text-[#cb6b51] mb-3 tracking-[1.5px] uppercase">{feature.title}</h3>
            <p className="font-serif text-[0.95rem] text-[#b5aaa0] leading-[1.6] m-0 max-w-[250px]">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesRow;
