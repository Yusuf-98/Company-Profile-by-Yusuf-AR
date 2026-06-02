import PartnerList from '../ui/PartnerList';
import StatsList from '../ui/StatList';
import ProcessTimeline from '../ui/ProcessTimeline';

function About() {
  return (
    <section id='about'>
      <PartnerList />
      <StatsList />
      <ProcessTimeline />
    </section>
  );
}

export default About;
