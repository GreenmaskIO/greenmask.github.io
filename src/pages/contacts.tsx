import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import MarqueeStrip from '@site/src/components/MarqueeStrip';
import ContactHeroSection from '@site/src/components/ContactHeroSection';

export default function ContactsPage() {
  return (
    <Layout
      title="Contacts — Greenmask"
      description="Get in touch with the Greenmask team — reach us via GitHub, Discord, or email for questions about data anonymization and Test Data Management."
    >
      <Head>
        <meta name="keywords" content="greenmask contact, Enterprise support, Open-Source, consulting, training, PostgreSQL anonymization, test data management, compliance, security" />
      </Head>
      <div style={{ paddingTop: '6.25rem' }}>
        <MarqueeStrip />
      </div>
      <ContactHeroSection />
    </Layout>
  );
}
