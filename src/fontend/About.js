import React from 'react';
import './css/About.css';

export default function About() {
    return (
        <section className="about-container">
            <div className="hero-section">
                <h1>CryptoForge</h1>
                <p className="tagline">A functional cryptography learning tool</p>
            </div>

            <div className="intro-section">
                <p className="intro-text">
                    CryptoForge is a <span className="highlight">functional React project</span> designed to teach core cryptography concepts through practical implementation.
                    It demonstrates real encryption/decryption workflows while maintaining clean, educational code.
                </p>
            </div>

            <div className="features-grid">
                <div className="feature-card encrypt-card">
                    <div className="card-icon">🔒</div>
                    <h2>Practical Encryption</h2>
                    <p>Functional implementation of a custom cipher algorithm using React hooks and pure functions.</p>
                    <div className="card-highlight"></div>
                </div>

                <div className="feature-card decrypt-card">
                    <div className="card-icon">🔓</div>
                    <h2>Interactive Decryption</h2>
                    <p>Experience the complete cryptographic cycle with our functional decryption component.</p>
                    <div className="card-highlight"></div>
                </div>

                <div className="feature-card code-card">
                    <div className="card-icon">💻</div>
                    <h2>Clean Code</h2>
                    <p>Purpose-built as an educational reference with well-commented functional components.</p>
                    <div className="card-highlight"></div>
                </div>
            </div>

            <div className="mission-section">
                <h3>Project Goals</h3>
                <p>
                    This <span className="highlight">functional demonstration</span> was created to:
                </p>
                <ul className="goals-list">
                    <li>Teach cryptographic concepts through implementation</li>
                    <li>Showcase React functional components in practice</li>
                    <li>Provide a clean codebase for learning purposes</li>
                    <li>Demonstrate secure coding patterns</li>
                </ul>
            </div>
            <div className="author-section">
                <div className="author-card">
                    <div className="author-icon">👨‍💻</div>
                    <div className="author-info">
                        <h4>Project Developer</h4>
                        <p className="author-name">Punit Kashyap</p>
                        <p className="author-affiliation">Engineering Physics Student at ( IIT )</p>
                    </div>
                </div>
            </div>
        </section>
    );
}