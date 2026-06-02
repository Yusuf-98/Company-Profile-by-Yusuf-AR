import statList from '../../data/statList';
import StatCard from './StatCard';

function StatsList() {
  return (
    <div className='flex flex-col py-20 px-4 gap-6 md:px-10xl lg:px-11xl md:gap-12 lg:gap-16'>
      {/* Header */}
      <div className='flex flex-col gap-3.5'>
        <h1 className='font-bold text-size-display-sm md:text-size-display-md lg:text-size-display-xl text-center dark:text-neutral-25'>
          {statList.title}
        </h1>
        <p className='font-medium text-size-sm lg:text-size-lg text-center text-neutral-400'>
          {statList.description}
        </p>
      </div>
      {/* Body */}
      <div className='flex flex-wrap gap-4 md:gap-5 justify-center'>
        {statList.list.map((stat) => (
          <div>
            <StatCard {...stat} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsList;
