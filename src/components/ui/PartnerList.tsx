import { partnerList } from '../../data/partnerList';

function PartnerList() {
  const repeatedPartners = Array(3).fill(partnerList.partners).flat();
  return (
    <div className='flex flex-col items-center justify-center overflow-hidden h-36 md:h-46 lg:h-59'>
      <h1 className='font-bold text-center text-size-md md:text-size-display-xs dark:text-neutral-25'>
        {partnerList.title}
      </h1>

      {/* Animasi Marquee wrapper */}
      <div className='w-full overflow-hidden h-32 md:h-41 lg:h-50 flex items-center mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <div className='flex gap-12 p-10 animate-marquee whitespace-nowrap'>
          {repeatedPartners.map((partner, index) => (
            <img
              key={`${partner.id}-${index}`}
              src={partner.logo}
              alt={partner.label}
              className='h-8.5 md:h-10 lg:h-12 w-auto object-contain shrink-0'
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnerList;
