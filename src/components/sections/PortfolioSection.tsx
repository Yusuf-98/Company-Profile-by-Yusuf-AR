import { portfolioData } from '../../data/portfolioData';
import PortfolioCard from '../ui/PortfolioCard';

function PortfolioSection() {
  return (
    <section
      id='portfolio'
      className='w-full flex flex-col items-center py-10 md:py-16 lg:py-20 px-4 md:px-10xl lg:px-11xl gap-6 md:gap-10 lg:gap-16'
    >
      {/* Header */}
      <div className='text-center flex flex-col items-center gap-2.75'>
        <h1 className='font-bold text-size-display-sm md:text-size-display-lg lg:text-size-display-xl dark:text-neutral-25'>
          {portfolioData.title}
        </h1>
        <p className='font-medium text-size-sm md:text-size-md lg:text-size-lg text-neutral-400'>
          {portfolioData.subtitle}
        </p>
      </div>
      {/* Body */}
      <div className='flex flex-col md:flex-row gap-5'>
        {portfolioData.portfolioList.map((portfolio) => (
          <PortfolioCard {...portfolio} />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
