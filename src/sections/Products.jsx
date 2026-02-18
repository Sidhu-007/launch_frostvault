import React from 'react';
import Button from '../components/Button';
import { Check, Info } from 'lucide-react';
import './Products.css';

const models = [
    {
        name: 'FrostVault Lite',
        price: '$2,499',
        type: 'Entry-Level',
        features: [
            'Temp Range: -20°C to 10°C',
            'Dual-Layer Insulation',
            '12h Power Backup',
            'Standard Steel Body',
            'Analog Temp Gauge'
        ],
        highlight: false
    },
    {
        name: 'FrostVault Pro',
        price: '$3,499',
        type: 'Standard Mission',
        features: [
            'Temp Range: -40°C to 10°C',
            'Triple-Layer Insulation',
            '36h Power Backup',
            'Reinforced Polymer Body',
            'Digital Monitoring + IoT',
            'Solar Input Ready'
        ],
        highlight: true
    },
    {
        name: 'FrostVault Max',
        price: '$4,999',
        type: 'Extreme Survival',
        features: [
            'Temp Range: -50°C to 10°C',
            'Quad-Layer Aerogel',
            '72h Power Backup',
            'Titanium-Alloy Frame',
            'Satellite Data Uplink',
            'Military Grade Cert.'
        ],
        highlight: false
    }
];

const Products = () => {
    return (
        <section id="products" className="products-section">
            <div className="container">
                <div className="products-header">
                    <h2 className="section-title">DEPLOYMENT <span className="text-primary">OPTIONS</span></h2>
                    <p className="section-subtitle">Select the protection level required for your mission.</p>
                </div>

                <div className="products-grid">
                    {models.map((model, index) => (
                        <div key={index} className={`product-card ${model.highlight ? 'highlighted' : ''}`}>
                            {model.highlight && <div className="best-value-badge">Best Value</div>}
                            <h3 className="product-name">{model.name}</h3>
                            <span className="product-type">{model.type}</span>
                            <div className="product-price">{model.price}</div>

                            <ul className="product-features">
                                {model.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <Check size={16} className="feature-icon" /> {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={model.highlight ? 'primary' : 'outline-white'}
                                className="product-cta"
                            >
                                Request Specs
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
