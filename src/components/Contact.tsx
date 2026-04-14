export default function Contact() {
    return (
        <section id="contact" className="surface-low">
            <div className="container px-6">
                <div className="asymmetric-grid">
                    <div>
                        <h2 style={{
                            fontSize: 'var(--display-sm)',
                            fontWeight: 900,
                            color: 'var(--primary)',
                            marginBottom: '1.5rem'
                        }}>
                            Let's Connect
                        </h2>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--on-surface-variant)',
                            marginBottom: '4rem',
                            maxWidth: '30rem'
                        }}>
                            Visit our center for immediate assistance with any digital or government service.
                            We prioritize authority through precision and whitespace.
                        </p>

                        <div style={{ display: 'grid', gap: '3rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{
                                    width: '3.5rem',
                                    height: '3.5rem',
                                    backgroundColor: 'var(--surface-container-high)',
                                    borderRadius: 'var(--radius-md)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)',
                                    fontSize: '1.5rem'
                                }}>
                                    📍
                                </div>
                                <div>
                                    <div style={{ fontSize: 'var(--label-md)', fontWeight: 700, opacity: 0.6, marginBottom: '0.25rem' }}>LOCATION</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Lalgadh Karnamiya, Bettiah, Bihar</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{
                                    width: '3.5rem',
                                    height: '3.5rem',
                                    backgroundColor: 'var(--surface-container-high)',
                                    borderRadius: 'var(--radius-md)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)',
                                    fontSize: '1.5rem'
                                }}>
                                    🕒
                                </div>
                                <div>
                                    <div style={{ fontSize: 'var(--label-md)', fontWeight: 700, opacity: 0.6, marginBottom: '0.25rem' }}>WORKING HOURS</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Mon - Sat: 9:00 AM - 8:00 PM</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem' }}>
                            <a href="tel:+919123224234" className="btn btn-primary">Call Now</a>
                            <a href="https://wa.me/919123224234" className="btn btn-secondary" style={{ backgroundColor: '#25D366', color: 'white' }}>WhatsApp</a>
                        </div>
                    </div>

                    <div style={{
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        height: '100%',
                        minHeight: '400px',
                        backgroundColor: 'var(--surface-container)'
                    }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d772.4009691654962!2d84.55908374518415!3d26.829898158821774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993690d36e3f44b%3A0xd0d540f42313f91e!2sLalgarh%20-%20Sagauli%20Rd%2C%20Bihar!5e0!3m2!1sen!2sin!4v1775989162152!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
