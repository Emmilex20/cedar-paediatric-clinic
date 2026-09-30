'use client';

import { useState } from 'react';
import { Baby, Brain, CalendarDays, Clock3, HeartPulse, MapPin, Menu, Phone, ShieldCheck, Stethoscope, X, ArrowRight, Mail } from 'lucide-react';

const services = [
  { icon: Baby, title: 'General Paediatrics', text: 'Child-focused consultations, routine health reviews and ongoing care for infants, children and adolescents.' },
  { icon: Brain, title: 'Paediatric Neurology', text: 'Specialist-focused support for neurological and developmental concerns in children.' },
  { icon: HeartPulse, title: 'Child Health & Development', text: 'Support for healthy growth, development and age-appropriate wellbeing.' },
  { icon: Stethoscope, title: 'Specialist Consultation', text: 'Structured consultation requests that help families reach the appropriate clinical team.' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submitAppointment = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <div className="concept-bar">Website concept prepared for Cedar Paediatric Clinic</div>
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#home" className="brand" aria-label="Cedar Paediatric Clinic home">
            <span className="brand-mark"><Baby size={24} /></span>
            <span><strong>Cedar</strong><small>Paediatric Clinic</small></span>
          </a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#why" onClick={() => setMenuOpen(false)}>Why Cedar</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="nav-cta" href="#appointment" onClick={() => setMenuOpen(false)}>Request appointment</a>
          </div>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="pulse-dot" /> Child-focused specialist care in Kaduna</span>
            <h1>Specialist care for <em>every stage</em> of childhood.</h1>
            <p>Compassionate, professional paediatric care designed around children and the families who care for them.</p>
            <div className="hero-actions">
              <a href="#appointment" className="btn primary"><CalendarDays size={19}/> Request an appointment</a>
              <a href="#contact" className="btn secondary"><Phone size={19}/> Contact the clinic</a>
            </div>
            <div className="trust-row">
              <span><Clock3 size={18}/> 24-hour care</span>
              <span><ShieldCheck size={18}/> Child-focused</span>
              <span><MapPin size={18}/> Kaduna</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-card">
              <div className="illustration">
                <div className="sun"/><div className="cloud c1"/><div className="cloud c2"/>
                <div className="doctor"><div className="head"/><div className="body"/><div className="coat"/><div className="steth"/></div>
                <div className="child"><div className="head"/><div className="body"/></div>
              </div>
              <div className="floating-card"><span className="float-icon"><HeartPulse /></span><div><strong>Care that puts children first</strong><small>Warm. Professional. Family-centred.</small></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container split">
          <div><span className="section-label">About Cedar</span><h2>A welcoming place for children. <span>A trusted partner for parents.</span></h2></div>
          <div className="about-copy"><p>Cedar Paediatric Clinic is presented here as a specialist child-health clinic serving families in Kaduna. This concept demonstrates how a dedicated digital platform can make clinic information and appointment enquiries easier to access.</p><p className="demo-note">Clinic-specific wording, team profiles and service details will be confirmed with Cedar before any official launch.</p></div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading"><div><span className="section-label">Our services</span><h2>Care designed around <span>growing children.</span></h2></div><p>A simple, parent-friendly way to understand available care and reach the right team.</p></div>
          <div className="service-grid">{services.map(({icon: Icon,title,text}) => <article className="service-card" key={title}><span className="service-icon"><Icon /></span><h3>{title}</h3><p>{text}</p><a href="#appointment">Request consultation <ArrowRight size={16}/></a></article>)}</div>
        </div>
      </section>

      <section className="section why" id="why">
        <div className="container why-grid">
          <div className="why-panel"><span className="mini-badge">For parents & families</span><div className="big-heart"><HeartPulse /></div><div className="availability"><Clock3/><div><strong>Open 24 hours</strong><small>Public listing — confirm with clinic</small></div></div></div>
          <div className="why-copy"><span className="section-label">Why Cedar</span><h2>Making healthcare feel a little <span>easier for families.</span></h2><p>A modern clinic website can give parents a clear starting point before they arrive.</p>
            <div className="feature-list"><div><ShieldCheck/><span><strong>Child-focused approach</strong><small>Information organised around children and families.</small></span></div><div><CalendarDays/><span><strong>Structured appointment requests</strong><small>Choose a service, date and preferred time online.</small></span></div><div><MapPin/><span><strong>Easy to find</strong><small>Clear location and contact information for Kaduna families.</small></span></div></div>
          </div>
        </div>
      </section>

      <section className="section appointment" id="appointment">
        <div className="container appointment-grid">
          <div className="appointment-copy"><span className="section-label light">Appointment request</span><h2>Start your visit <span>before you arrive.</span></h2><p>Send a simple appointment request and the clinic team can contact you to confirm availability.</p><div className="privacy"><ShieldCheck/><span><strong>Privacy-conscious by design</strong><small>Please don't include detailed or sensitive medical records in this demo form.</small></span></div></div>
          <div className="form-card">
            {submitted ? <div className="success"><span><ShieldCheck size={38}/></span><h3>Request received</h3><p>This is a demonstration only. In the finished platform, Cedar's team would receive the request and contact the parent or guardian to confirm.</p><button onClick={()=>setSubmitted(false)} className="btn primary">Send another request</button></div> :
            <form onSubmit={submitAppointment}><div className="form-title"><h3>Request an appointment</h3><p>Fields marked * are required</p></div><div className="form-grid"><label>Parent / guardian name *<input required placeholder="Your full name"/></label><label>Phone number *<input required type="tel" placeholder="e.g. 0800 000 0000"/></label><label>Email address<input type="email" placeholder="you@example.com"/></label><label>Child's age<select defaultValue=""><option value="" disabled>Select age range</option><option>0–12 months</option><option>1–5 years</option><option>6–12 years</option><option>13–17 years</option></select></label><label>Service *<select required defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label>Preferred date *<input required type="date"/></label></div><label>Brief reason for consultation<textarea rows="3" placeholder="Keep this brief — no sensitive medical records, please."/></label><button className="btn primary form-submit" type="submit">Submit appointment request <ArrowRight size={18}/></button><small className="form-disclaimer">Concept form only — no information is transmitted or stored.</small></form>}
          </div>
        </div>
      </section>

      <section className="section contact" id="contact"><div className="container"><div className="section-heading"><div><span className="section-label">Contact</span><h2>We're here when <span>families need us.</span></h2></div></div><div className="contact-grid"><div className="contact-card"><MapPin/><div><small>Visit us</small><strong>Club Road area, Kaduna</strong><span>Exact official address to be confirmed</span></div></div><div className="contact-card"><Clock3/><div><small>Opening hours</small><strong>24-hour care</strong><span>Based on public listings — confirm with clinic</span></div></div><div className="contact-card"><Mail/><div><small>Email</small><strong>cedarpaediatricclinic@gmail.com</strong><span>Publicly listed contact</span></div></div></div></div></section>

      <footer><div className="container footer-grid"><div className="brand footer-brand"><span className="brand-mark"><Baby size={24}/></span><span><strong>Cedar</strong><small>Paediatric Clinic</small></span></div><p>This is an independent website concept prepared for Cedar Paediatric Clinic and is not yet the clinic's official website.</p><span>Concept © {new Date().getFullYear()}</span></div></footer>
    </main>
  );
}
