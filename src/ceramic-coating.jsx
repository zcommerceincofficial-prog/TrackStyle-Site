ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(window.ServicePageLayout, {
    eyebrow: 'Ceramic Coating · Phoenix, AZ',
    title: React.createElement(React.Fragment, null,
      'Protection That Lasts', React.createElement('br', null),
      React.createElement('span', { className: 'accent' }, 'for Years.')
    ),
    subtitle: 'Hydrophobic. Glossy. Self-cleaning. Set it and forget it.',
    description: [
      'Ceramic coating bonds to your paint at a molecular level — adding a semi-permanent layer of protection that repels water, dirt, and contaminants. Water beads off and takes grime with it. Washing is faster. Paint stays cleaner longer.',
      'Properly applied ceramic also deepens gloss, enhances color depth, and protects against UV fade and light chemical exposure. Your paint looks better on day 1,000 than it did at the dealership.',
      'At TrackStyle, we prep the paint right before every application — full decontamination, clay bar, polish where needed. Coating over contaminated paint locks in the problems instead of fixing them. We don\'t take shortcuts on prep.'
    ],
    benefits: [
      'Hydrophobic surface — water beads and rolls off',
      'Enhanced gloss and paint depth',
      'UV protection — slows color fading significantly',
      'Resistance to light chemical contamination',
      'Easier maintenance washes — dirt releases faster',
      'Multi-year protection depending on tier',
      'Full paint decon and prep before every application',
    ],
    optionsTitle: 'Protection Tiers',
    options: [
      { name: 'Entry-Level', desc: '1-2 year protection. Single-layer application with full decon prep. Excellent for daily drivers who want hydrophobic protection without the premium investment.' },
      { name: 'Professional Grade', desc: '3-5 year protection. Multi-step prep including polish, followed by a professional-grade coating formula. Deeper gloss enhancement and longer-lasting protection.' },
      { name: 'Premium Multi-Layer', desc: '5+ year protection. Multiple coating layers applied with cure time between each. Maximum gloss depth, hardness, and longevity — for builds that warrant it.' },
    ]
  })
);
