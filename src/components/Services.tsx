const services = [
    {
        title: "Aadhar Card Correction",
        description: "Update name, address, DOB, or biometrics efficiently.",
        image: "https://media.assettype.com/outlookmoney/2025-11-10/5u7792e3/Aadhaar-Card-Update-Made-Easy?w=640&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0"
    },
    {
        title: "Aadhar Card Download",
        description: "Fast download and high-quality e-Aadhar printing.",
        image: "https://www.digitalindiagov.in/wp-content/uploads/2020/07/Aadhar-Card-Download.jpg"
    },
    {
        title: "PAN Card Apply",
        description: "New applications and corrections for individual/business.",
        image: "https://www.digitalindiagov.in/wp-content/uploads/2022/06/CVYXbZCUkAEzfBS_1638602123341_1638754373318.webp"
    },
    {
        title: "Voter ID (Correction + New)",
        description: "Fresh enrollment and detailed record corrections.",
        image: "https://wpblogassets.paytm.com/paytmblog/uploads/2022/08/Blog-Voter-ID-Documents_Cover-banner_Final.png"
    },
    {
        title: "Voter ID Download + Print",
        description: "E-Voter card download and PVC card printing.",
        image: "https://voterlist.co.in/wp-content/uploads/2026/01/pvc-voter-id-card-download.png"
    },
    {
        title: "Passport Apply",
        description: "Complete guidance for fresh and renewal applications.",
        image: "https://wpblogassets.paytm.com/paytmblog/uploads/2024/07/Blog_Generic_How-to-Apply-for-Reissue-of-Passport-in-India_.jpg"
    },
    {
        title: "Passport Size Photo",
        description: "Instant professional photography for official use.",
        image: "https://i.ytimg.com/vi/ToB-wyCZV9s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAIc-k9N8iHTALYwB5xe34oqt3nYw"
    },
    {
        title: "Photo Copy & Lamination",
        description: "Clear photocopies and document protection services.",
        image: "https://behuraprint.com/wp-content/uploads/2023/03/xerox-lamination.jpg"
    },
    {
        title: "Govt. Job Form Fill-ups",
        description: "Online application for all competitive exams.",
        image: "https://i.ytimg.com/vi/8z_39HDMVnw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCG-WIrcbZIAX53ZV7anJQQKoS3eg"
    },
    {
        title: "Flight Booking",
        description: "Domestic and international air ticket reservations.",
        image: "https://www.kktaxiservices.com/img/air.jpg"
    },
    {
        title: "Train Ticket Booking",
        description: "Confirm bookings for all routes and categories.",
        image: "https://i.ytimg.com/vi/Q1Wnn2hzPdU/maxresdefault.jpg"
    },
    {
        title: "Sim Recharge",
        description: "Prepaid/Postpaid recharges for all major networks.",
        image: "https://www.gadgets360.com/static/v1/images/og_mobile_recharge_plans.png"
    },
    {
        title: "Mobile Accessories",
        description: "Chargers, cables, earphones, and protectors.",
        image: "https://greatchoice.co.in/wp-content/uploads/2025/01/Untitled-design-2.png"
    },
    {
        title: "Smart Card Printing",
        description: "PVC Smart card printing for Aadhar, PAN & IDs.",
        image: "https://i.ytimg.com/vi/7kKsTRxuYbI/maxresdefault.jpg"
    },
];

export default function Services() {
    return (
        <section id="services" className="surface-container">
            <div className="container px-6">
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'var(--display-sm)',
                        fontWeight: 900,
                        color: 'var(--primary)',
                        marginBottom: '1rem'
                    }}>
                        Our Expertise
                    </h2>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--on-surface-variant)',
                        maxWidth: '30rem'
                    }}>
                        Comprehensive digital and administrative solutions designed for the modern citizen.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <div key={index} className="service-tile" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <div style={{
                                width: '100%',
                                aspectRatio: '16/9',
                                overflow: 'hidden',
                                backgroundColor: 'var(--surface-container-highest)'
                            }}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    marginBottom: '0.75rem'
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{
                                    fontSize: 'var(--body-md)',
                                    lineHeight: 1.5,
                                    opacity: 0.8
                                }}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Custom "Need Help" Tile */}
                    <div className="service-tile" style={{
                        backgroundColor: 'var(--primary)',
                        color: 'var(--on-primary)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '2.5rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h3 style={{ fontSize: 'var(--headline-sm)', fontWeight: 700, marginBottom: '1rem' }}>Need Help?</h3>
                            <p style={{ fontSize: 'var(--body-md)', marginBottom: '2.5rem', opacity: 0.9, lineHeight: 1.6 }}>
                                Contact us for any other digital or administrative inquiry. We are here to assist you.
                            </p>
                            <a href="tel:+919123224234" style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                color: 'var(--on-primary)',
                                fontWeight: 800,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem 1.5rem',
                                borderRadius: '0.5rem',
                                textDecoration: 'none',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s ease'
                            }}>
                                Call Our Expert →
                            </a>
                        </div>
                        {/* Subtle background decoration */}
                        <div style={{
                            position: 'absolute',
                            top: '-2rem',
                            right: '-2rem',
                            width: '8rem',
                            height: '8rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '50%'
                        }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
