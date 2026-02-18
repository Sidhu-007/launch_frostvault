import React from 'react';
import Button from '../components/Button';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [showVideo, setShowVideo] = React.useState(false);

    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <h1 className="hero-headline">
                    ENGINEERED FOR <span className="text-highlight">–50°C</span>.
                    <br />
                    BUILT FOR <span className="text-gradient">SURVIVAL</span>.
                </h1>

                <p className="hero-subheadline">
                    Antarctica-grade refrigeration for mission-critical operations.
                    <br />
                    Protecting research, vaccines, and food supply where failure is not an option.
                </p>

                <div className="hero-actions">
                    <Button
                        variant="primary"
                        icon={ArrowRight}
                        onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Technology
                    </Button>
                    <Button
                        variant="outline-white"
                        icon={Play}
                        onClick={() => setShowVideo(true)}
                    >
                        Watch Trailer
                    </Button>
                </div>
            </div>

            <div className="hero-stats">
                <div className="stat-item">
                    <span className="stat-value">-50°C</span>
                    <span className="stat-label">Operational Limit</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <span className="stat-value">24/7</span>
                    <span className="stat-label">Thermal Monitoring</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <span className="stat-value">100%</span>
                    <span className="stat-label">Reliability Record</span>
                </div>
            </div>

            {showVideo && (
                <div className="video-modal-overlay" onClick={() => setShowVideo(false)}>
                    <div className="video-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="video-close-btn" onClick={() => setShowVideo(false)}>×</button>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
