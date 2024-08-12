import Layout from '../components/Layout';
import BioSection from '../components/BioSection';
import SkillsSection from '../components/SkillsSection';

export default function Home() {
  return (
    <Layout>
      <BioSection />
      <SkillsSection />
    </Layout>
  );
}
