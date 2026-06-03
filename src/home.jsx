var SERVICES_HOME = [
  { num: '01', name: 'Window Tint', desc: 'Reject heat, block UV, and dial in the look — from factory-subtle to fully blacked out.', href: 'window-tint.html' },
  { num: '02', name: 'Paint Protection Film', desc: 'Virtually invisible armor that shields your paint from rock chips, debris, and scratches.', href: 'ppf.html' },
  { num: '03', name: 'Powder Coating', desc: 'A harder, more durable finish than paint for wheels, calipers, and metal components.', href: 'powder-coating.html' },
  { num: '04', name: 'Color Change Wraps', desc: '200+ colors and finishes. Transform your look without committing to paint — fully reversible.', href: 'color-change-wraps.html' },
  { num: '05', name: 'Ceramic Coating', desc: 'Semi-permanent molecular bond that repels water, deepens gloss, and protects for years.', href: 'ceramic-coating.html' },
  { num: '06', name: 'Custom Wraps', desc: 'Chrome deletes, blackouts, custom liveries, and graphic installs — your vision executed precisely.', href: 'custom-wraps.html' },
];

var TRUST_ITEMS = ['Certified Installers', 'Premium Materials Only', 'Same-Day Response', 'Custom Solutions'];

function Home() {
  window.useFadeIn();

  return React.createElement(React.Fragment, null,
    React.createElement(window.Nav, null),

    // HERO
    React.createElement('section', { className: 'hero' },
      React.createElement('div', { className: 'hero-bg-grid' }),
      React.createElement('div', { className: 'hero-bg-glow' }),
      React.createElement('div', { className: 'hero-stripe' }),
      React.createElement('div', { className: 'hero-content' },
        React.createElement('p', { className: 'hero-eyebrow' }, 'Phoenix, AZ · Premium Automotive Styling'),
        React.createElement('h1', null,
          'Built for the ', React.createElement('span', { className: 'accent' }, 'Track.'),
          React.createElement('br', null),
          'Built for Your ', React.createElement('span', { className: 'accent' }, 'Build.')
        ),
        React.createElement('p', { className: 'hero-sub' },
          'Premium paint protection, color change wraps, ceramic coating, tint, and powder coating in Phoenix — done right by people who live the lifestyle.'
        ),
        React.createElement('div', { className: 'hero-actions' },
          React.createElement('a', { href: 'contact.html', className: 'btn btn-primary' }, 'Get in Touch'),
          React.createElement('a', { href: '#services', className: 'btn btn-outline' }, 'Our Services')
        )
      )
    ),

    // TRUST BAR
    React.createElement('div', { className: 'trust-bar' },
      React.createElement('div', { className: 'container' },
        TRUST_ITEMS.map(function(item, i) {
          return React.createElement('div', { key: i, className: 'trust-item' },
            React.createElement('div', { className: 'trust-item-title' }, item)
          );
        })
      )
    ),

    // SERVICES
    React.createElement('section', { id: 'services', className: 'services-section' },
      React.createElement('div', { className: 'container' },
        React.createElement('span', { className: 'section-label' }, 'What We Do'),
        React.createElement('h2', null, 'Our Services'),
        React.createElement('div', { className: 'services-grid' },
          SERVICES_HOME.map(function(s) {
            return React.createElement('a', { key: s.href, href: s.href, className: 'service-card' },
              React.createElement('span', { className: 'service-number' }, s.num),
              React.createElement('h3', null, s.name),
              React.createElement('p', null, s.desc),
              React.createElement('div', { className: 'service-card-arrow' }, 'Learn More →')
            );
          })
        )
      )
    ),

    // STORY
    React.createElement('section', { className: 'story-section' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'story-inner' },
          React.createElement('div', { className: 'story-left fade-in' },
            React.createElement('span', { className: 'section-label' }, 'The TrackStyle Story'),
            React.createElement('h2', null,
              'Passion ', React.createElement('span', { className: 'accent' }, 'Built'), ' This.'
            )
          ),
          React.createElement('div', { className: 'story-right fade-in' },
            React.createElement('p', null,
              'TrackStyle was built from a deep passion. Building our own, showing up to meets, and chasing the adrenaline of Track Days. That same passion fuels our commitment to delivering premium styling and protection for those who live behind the wheel every day.'
            ),
            React.createElement('div', { className: 'story-quote' },
              React.createElement('p', null,
                '“Just as much as we care for quality, we care about you. We make sure you drive away with nothing less than exactly what you envisioned.”'
              )
            ),
            React.createElement('a', { href: 'about.html', className: 'btn btn-outline', style: { marginTop: '40px' } }, 'Our Story')
          )
        )
      )
    ),

    // CTA BANNER
    React.createElement('section', { className: 'cta-banner' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'cta-banner-inner' },
          React.createElement('h2', null, 'Ready to Start Your Build?'),
          React.createElement('a', { href: 'contact.html', className: 'btn btn-dark' }, 'Get in Touch')
        )
      )
    ),

    React.createElement(window.Footer, null)
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Home, null));
