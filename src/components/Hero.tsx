import Image from 'next/image';

export default function Hero() {
    return (
        <header id="home" className="surface-lowest" style={{ paddingTop: '10rem', paddingBottom: '7rem', overflow: 'hidden' }}>
            <div className="container px-6">
                <div className="asymmetric-grid">
                    <div style={{ zIndex: 2 }}>
                        <div className="chip" style={{
                            marginBottom: '2rem',
                            backgroundColor: 'rgba(0, 85, 150, 0.08)',
                            color: 'var(--primary)',
                            padding: '0.5rem 1.25rem'
                        }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            BETTIAH, BIHAR
                        </div>

                        <h1 style={{
                            fontSize: '4.5rem',
                            fontWeight: 900,
                            color: '#00264d',
                            lineHeight: 1.05,
                            marginBottom: '2.5rem',
                            letterSpacing: '-0.04em'
                        }}>
                            Your <span style={{ color: '#003e6f' }}>Trusted</span> <br />
                            <span style={{ color: '#005596' }}>Digital Service</span> <br />
                            Partner.
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--on-surface-variant)',
                            lineHeight: 1.6,
                            maxWidth: '38rem',
                            marginBottom: '3.5rem',
                            opacity: 0.9
                        }}>
                            Arshad Communication provides streamlined government, financial, and travel services with precision and professional care in Lalgadh Karnamiya.
                        </p>

                        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                            <button className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                                Get Started
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                            <button className="btn btn-secondary" style={{ padding: '1rem 2rem', background: '#f0f2f5' }}>
                                Visit Us
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                            borderRadius: '2.5rem',
                            overflow: 'hidden',
                            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.12)',
                            transition: 'all 0.5s ease',
                            width: '100%',
                            zIndex: 1
                        }}>
                            <img
                                src="https://ik.imagekit.io/aghmftdmm/store_frunt.jpg"
                                alt="Storefront"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>

                        {/* Floating Badge - Balanced position */}
                        <div style={{
                            position: 'absolute',
                            bottom: '10%',
                            left: '-5%',
                            backgroundColor: '#ffffff',
                            padding: '1.25rem 2rem 1.25rem 1.5rem',
                            borderRadius: '1.25rem',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.25rem',
                            zIndex: 10
                        }}>
                            <div style={{
                                width: '3.5rem',
                                height: '3.5rem',
                                backgroundColor: '#d3e4ff',
                                borderRadius: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#003e6f'
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <polyline points="9 12 11 14 15 10"></polyline>
                                </svg>
                            </div>
                            <div>
                                <div style={{
                                    fontSize: '0.7rem',
                                    fontWeight: 800,
                                    color: '#6c757d',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    marginBottom: '0.25rem'
                                }}>
                                    Verified Provider
                                </div>
                                <div style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 900,
                                    color: '#003e6f',
                                    fontFamily: 'var(--font-public-sans)'
                                }}>
                                    Official Partner
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
