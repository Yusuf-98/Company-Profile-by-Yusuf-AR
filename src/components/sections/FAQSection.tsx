import { useState } from 'react';
import { FAQHeaderData } from '../../data/faqHeader';
import { faqItems } from '../../data/faqItems';
import FAQRow from '../ui/FAQRow';
import ConsultationCard from '../ui/ConsultationCard';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id='faq'
      className='dar:bg-base-black min-h-screen px-4 py-20 md:px-10xl lg:px-11xl'
    >
      <div className='flex flex-col md:flex-row items-start md:justify-between mb-12'>
        <h2 className='w-full lg:w-82.75 dark:text-neutral-25 font-bold text-size-display-sm md:text-size-display-lg lg:text-size-display-xl text-left'>
          {FAQHeaderData.title}
        </h2>
        <p className='w-full lg:w-60.25 text-neutral-400 text-sm md:text-size-md lg:text-size-lg text-start md:text-right mt-auto'>
          {FAQHeaderData.subtitle}
        </p>
      </div>

      {/* Divider */}
      <div className='border border-neutral-800 mb-12' />

      {/* FAQ list + Consultation card */}
      <div className='w-full flex flex-col md:flex-row gap-15 items-center md:items-start justify-center md:justify-between'>
        {/* FAQ accordion */}
        <div className='flex-1 min-w-0 divide-y divide-neutral-800'>
          {faqItems.map((item) => (
            <div key={item.id} className='mb-7'>
              <FAQRow
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            </div>
          ))}
        </div>

        <div className='md:ml-auto'>
          <ConsultationCard />
        </div>
      </div>
    </section>
  );
}
