ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(window.ServicePageLayout, {
    eyebrow: 'Color Change Wraps · Phoenix, AZ',
    title: React.createElement(React.Fragment, null,
      'Make It Yours.', React.createElement('br', null),
      React.createElement('span', { className: 'accent' }, 'Without'), ' Making It Permanent.'
    ),
    subtitle: '200+ colors and finishes. Removable. Resale-safe. Exactly what you\'re after.',
    description: [
      'A color change wrap transforms your car\'s entire look — without committing to paint. Factory paint stays protected underneath, the wrap keeps your car looking custom, and when you\'re ready to change it up or sell, it peels clean.',
      'We work with premium vinyl in matte, gloss, satin, chrome, brushed metal, color shift, and more. 200+ options means we can match a vision or help you build one from scratch.',
      'Every wrap starts with proper paint prep and ends with a precision tuck — no lifting edges, no exposed seams, no bubbles. The finish looks factory because we take the time to do it right.'
    ],
    benefits: [
      'Fully reversible — preserves factory paint underneath',
      'Protects original paint from chips and UV',
      'More cost-effective than a full respray',
      'No permanent commitment — change it when you\'re ready',
      'Factory resale value stays intact',
      '200+ colors and finishes available',
      'Precision tucked edges — no lifting or peeling',
    ],
    optionsTitle: 'Available Finishes',
    options: [
      { name: 'Matte', desc: 'Clean, flat finish that turns heads for the right reasons. Hides surface imperfections and stands out in any color.' },
      { name: 'Gloss', desc: 'Deep, wet-look finish that pops in sunlight. Available in standard and metallic variants.' },
      { name: 'Satin', desc: 'The middle ground — a soft sheen that reads premium without going full matte or gloss.' },
      { name: 'Color Shift / Chrome', desc: 'Chameleon films that shift color with viewing angle, plus full chrome and brushed metal finishes for builds that demand attention.' },
    ]
  })
);
