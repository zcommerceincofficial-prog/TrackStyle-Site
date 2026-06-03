var PILLARS = [
  {
    num: '01',
    name: 'Passion-Driven',
    desc: "We're enthusiasts, not just installers. We show up to meets, run track days, and build our own cars. This isn't a job — it's the lifestyle."
  },
  {
    num: '02',
    name: 'Precision-First',
    desc: 'Every edge, every panel, every seam. We take the time to get it right because half-measures show up six months later and last impressions matter.'
  },
  {
    num: '03',
    name: 'Community-Rooted',
    desc: "We're part of the Phoenix car scene. You'll find us at local meets and track days — because we're in this community, not just servicing it."
  },
];

function About() {
  window.useFadeIn();

  return React.createElement(React.Fragment, null,
    React.createElement(window.Nav, null),

    // HERO
    React.createElement('section', { className: 'about-hero' },
      React.createElement('div', { className: 'about-hero-glow' }),
      React.createElement('div', { className: 'about-hero-content' },
        React.createElement('span', { className: 'section-label' }, 'TrackStyle · Phoenix, AZ'),
        React.createElement('h1', null, "We're Car ", React.createElement('span', { className: 'accent' }, 'People.'))
      )
    ),

    // STORY
    React.createElement('section', { className: 'about-story' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'about-story-inner' },
          React.createElement('div', { className: 'fade-in' },
            React.createElement('span', { className: 'section-label' }, 'The Story'),
            React.createElement('div', { className: 'about-lead' },
              'This Is ', React.createElement('span', null, 'What'), React.createElement('br', null), 'We Do.'
            ),
            React.createElement('p', null,
              'TrackStyle wasn\'t started in a boardroom — it started at the track. Aron built TrackStyle from a passion that runs deep. Building his own cars, showing up to local meets, and chasing the adrenaline of track days — it\'s a lifestyle, not a hobby.'
            ),
            React.createElement('p', null,
              'That same energy drives everything we do at the shop. We specialize in premium automotive styling and protection for the Phoenix area. No shortcuts. No compromises. Just clean installs and cars that turn heads for the right reasons.'
            )
          ),
          React.createElement('div', { className: 'fade-in' },
            React.createElement('div', { className: 'story-quote', style: { marginBottom: '32px' } },
              React.createElement('p', null,
                '"Just as much as we care for quality, we care about you. We make sure you drive away with nothing less than exactly what you envisioned."'
              )
            ),
            React.createElement('p', null,
              'When you bring your build to us, we treat it like our own. We walk through the project with you, answer every question, and make sure you drive away knowing the work was done right.'
            ),
            React.createElement('p', null,
              'TrackStyle was built from a deep passion. Building our own, showing up to meets, and chasing the adrenaline of Track Days. That same passion fuels our commitment to delivering premium styling and protection for those who live behind the wheel every day.'
            ),
            React.createElement('a', { href: 'contact.html', className: 'btn btn-primary', style: { marginTop: '40px' } }, 'Get in Touch')
          )
        )
      )
    ),

    // PILLARS
    React.createElement('section', { className: 'pillars-section' },
      React.createElement('div', { className: 'container' },
        React.createElement('span', { className: 'section-label' }, 'What Drives Us'),
        React.createElement('h2', null, 'Our ', React.createElement('span', { className: 'accent' }, 'Values')),
        React.createElement('div', { className: 'pillars-grid' },
          PILLARS.map(function(p) {
            return React.createElement('div', { key: p.num, className: 'pillar-card' },
              React.createElement('span', { className: 'pillar-number' }, p.num),
              React.createElement('h3', null, p.name),
              React.createElement('p', null, p.desc)
            );
          })
        )
      )
    ),

    // CTA
    React.createElement('section', { className: 'cta-banner' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'cta-banner-inner' },
          React.createElement('h2', null, "Ready to Start Your Build?"),
          React.createElement('a', { href: 'contact.html', className: 'btn btn-dark' }, 'Get in Touch')
        )
      )
    ),

    React.createElement(window.Footer, null)
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(About, null));
