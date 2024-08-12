import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

export default function Contact() {
  return (
    <Layout>
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center">Contact Me</h2>
        <ContactForm />
        <Map />
      </section>
    </Layout>
  );
}
