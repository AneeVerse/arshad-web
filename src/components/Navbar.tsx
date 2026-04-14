"use client";

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 100,
            padding: '1.25rem 0',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 1.5rem'
            }}>
                <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: 'var(--primary)',
                    letterSpacing: '-0.04em',
                    fontFamily: 'var(--font-public-sans)'
                }}>
                    Arshad Communication
                </div>

                <div style={{
                    display: 'flex',
                    gap: '2.5rem',
                    alignItems: 'center'
                }}>
                    <Link href="#home" className="btn-tertiary" style={{ fontSize: '1rem', fontWeight: 600 }}>Home</Link>
                    <Link href="#services" className="btn-tertiary" style={{ fontSize: '1rem', fontWeight: 600 }}>Services</Link>
                    <Link href="#about" className="btn-tertiary" style={{ fontSize: '1rem', fontWeight: 600 }}>About</Link>
                    <Link href="#contact" className="btn-tertiary" style={{ fontSize: '1rem', fontWeight: 600 }}>Contact</Link>

                    <Link href="tel:+919123224234" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                        Call Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}
