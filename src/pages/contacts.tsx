import Layout from '@theme/Layout';
import MarqueeStrip from '@site/src/components/MarqueeStrip';
import ContactHeroSection from '@site/src/components/ContactHeroSection';

export default function ContactsPage() {
  return (
    <Layout title="Contacts">
      <div style={{ paddingTop: '6.25rem' }}>
        <MarqueeStrip />
      </div>
      <ContactHeroSection />
    </Layout>
  );
}
