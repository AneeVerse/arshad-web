export default function Footer() {
    return (
        <footer className="surface-container-highest" style={{ padding: '5rem 1.5rem 3rem' }}>
            <div className="container px-6">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
                    gap: '4rem',
                    marginBottom: '5rem'
                }}>
                    <div>
                        <div style={{
                            fontSize: '1.25rem',
                            fontWeight: 900,
                            color: 'var(--primary)',
                            marginBottom: '1.5rem',
                            fontFamily: 'var(--font-public-sans)'
                        }}>
                            Arshad Communication
                        </div>
                        <p style={{ fontSize: 'var(--body-md)', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
                            Empowering the local community with streamlined digital solutions since 2018.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 'var(--label-md)', fontWeight: 900, color: 'var(--primary)', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>CONTACT US</h4>
                        <div style={{ fontSize: 'var(--body-md)', lineHeight: 2, color: 'var(--on-surface-variant)' }}>
                            <div>+91 9123224234</div>
                            <div>+91 9867312769</div>
                            <div style={{ marginTop: '1rem' }}>Karnameya ward no-08, Lalgarh, West Champaran, Bihar 845438</div>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 'var(--label-md)', fontWeight: 900, color: 'var(--primary)', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>QUICK LINKS</h4>
                        <div style={{ display: 'grid', gap: '0.75rem', fontSize: 'var(--body-md)' }}>
                            <a href="#home" style={{ color: 'var(--on-surface-variant)' }}>Home</a>
                            <a href="#services" style={{ color: 'var(--on-surface-variant)' }}>Services</a>
                            <a href="#contact" style={{ color: 'var(--on-surface-variant)' }}>Contact</a>
                            <a href="https://maps.app.goo.gl/YRyPvyuJbZhtdaM37" style={{ color: 'var(--on-surface-variant)' }}>Location</a>
                        </div>
                    </div>
                </div>

                <div style={{
                    paddingTop: '3rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 'var(--label-md)',
                    fontWeight: 700,
                    color: 'var(--on-surface-variant)',
                    opacity: 0.5,
                    letterSpacing: '0.1em'
                }}>
                    <div>© 2024 ARSHAD COMMUNICATION</div>
                    <div>ALL RIGHTS RESERVED</div>
                </div>
            </div>
        </footer>
    );
}
