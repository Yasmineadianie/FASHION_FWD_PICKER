import { Pagination } from '@/components/CustumPages/Pagination';
import './Home.css';
import BrandGrid from '../BrandGrid/BrandGrid';
import { Banner } from '@/components/Banner/Banner';
import type { Contact } from '@/interfaces/contact.interface';
import { useState } from 'react';

const initialValue: Contact = {
 
  email: '',
   name: '',
  message: ''
};

const HomePage = () => {
  const [contactForm, setContactForm] = useState<Contact>(initialValue );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  return (
    <div className="homepage">
      <section className="section-1">
        <div>
          <h1 className="title">
            Wear the
            <br />
            <em>future</em> <br />
            forward
          </h1>
          <p className="text">
            Discover curated fashion by brand and category and find exactly what
            you’re looking for in seconds with Fashion FWD Picker.
          </p>
        </div>
        <div className="hero-images">
          <img
            className="img1"
            src="https://plus.unsplash.com/premium_photo-1713586580802-854a58542159?w=400&h=500&fit=crop"
            alt="fashion"
          />
          <img
            className="img2"
            src="https://images.unsplash.com/photo-1608748010899-18f300247112?w=400&h=500&fit=crop"
            alt="fashion"
          />
          <div className="fwd">Fashion FwD</div>
        </div>
        <hr />
      </section>
      <section>
        <div>
          <BrandGrid />
          <Pagination pagesNumber={4} />
        </div>
      </section>
      <hr />

      <section>
        <Banner />
      </section>
      <hr />
      <section className="contact-section">
        <div className="contact-inner">
          <div className="contact-left">
            <p className="section-eyebrow">Get in touch</p>
            <h2 className="section-title">
              Let's <em>talk</em>
              <br />
              fashion.
            </h2>
            <p className="contact-subtitle">
              Have a question about a brand, a product, or a collaboration? We'd
              love to hear from you.
            </p>
            <div className="contact-detail">
              <div>hello@fashionfwd.com</div>
              <div>+34 68 055 00 00</div>
              <div>Málaga, Spain</div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-row">
              <input
                className="contact-input"
                name='name'
                placeholder="Name"
                value={contactForm.name}
                onChange={handleChange}
              />
              <input
                className="contact-input"
                name='email'
                placeholder="Email"
                value={contactForm.email}
                onChange={handleChange}
                
              />
            </div>
            <textarea
              className="contact-textarea"
              placeholder="Your message…"
              name='message'
              value={contactForm.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
             setContactForm({ ...contactForm, message: e.target.value })}
            />
            <div>
              <button className="btn-primary" type="submit">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
