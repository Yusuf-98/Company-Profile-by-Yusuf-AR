import { useTheme } from '../../context/useTheme';
import Hero from '../ui/HeroTitle';
import { hero } from '../../data/hero';
import HeroImageDark from '../../assets/images/hero-image-dark.png';
import HeroImageLight from '../../assets/images/hero-image-light.png';

function HeroSection() {
  const { theme } = useTheme();
  const heroImage = theme === 'dark' ? HeroImageDark : HeroImageLight;
  return (
    <section
      id='hero'
      className='w-full mt-21 px-4 md:px-10xl lg:px-11xl relative overflow-hidden'
    >
      <div className='absolute inset-0 z-0 pointer-events-none'></div>
      <div className=' grid items-center md:grid-cols-[1.1fr_0.9fr] gap-10.75 '>
        <div className='w-full h-full relative pt-12.5 md:pt-hero-md lg:pt-hero-lg z-10 '>
          <Hero
            title={hero.title}
            titleSpan={hero.titleSpan}
            description={hero.description}
          />
        </div>
        {/* Setting Hero Image yang membagongkan  */}
        <div className='flex justify-center h-[clamp(388px,calc(24.53vw+291.60px),480px)] md:h-[clamp(388px,calc(53.33vw-21.58px),524px)] lg:h-[clamp(530px,calc(31.97vw+202.63px),663px)] mb-11 md:mb-0'>
          <img
            src={heroImage}
            alt='3D smartphone with floating glassmorphism UI layers.'
            className='w-130 md:w-[clamp(440px,calc(62.5vw-40px),600px)] lg:w-[clamp(600px,calc(35.34vw+238.12px),747px)] object-cover md:absolute top-[clamp(262px,calc(405.37px-18.67vw),332px)] md:-top-[clamp(52px,calc(7.81vw-8px),72px)] lg:-top-[clamp(72px,calc(2.88vw+42.48px),84px)] md:right-0'
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
