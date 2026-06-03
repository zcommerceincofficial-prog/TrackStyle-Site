const { useState, useEffect, useRef } = React;

const SERVICES_NAV = [
  { name: 'Window Tint', href: 'window-tint.html' },
  { name: 'Paint Protection Film', href: 'ppf.html' },
  { name: 'Powder Coating', href: 'powder-coating.html' },
  { name: 'Color Change Wraps', href: 'color-change-wraps.html' },
  { name: 'Ceramic Coating', href: 'ceramic-coating.html' },
  { name: 'Custom Wraps', href: 'custom-wraps.html' },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return React.createElement(React.Fragment, null,
    React.createElement('nav', { className: 'nav' + (scrolled ? ' scrolled' : '') },
      React.createElement('div', { className: 'nav-inner' },
        React.createElement('a', { href: 'index.html', className: 'nav-logo', 'aria-label': 'TrackStyle' },
          React.createElement('img', { src: 'assets/logo-transparent.png', alt: '', className: 'brand-logo-img' }),
          React.createElement('span', { className: 'sr-only' }, 'TrackStyle')
        ),
        React.createElement('ul', { className: 'nav-links' },
          React.createElement('li', { className: 'nav-dropdown' },
            React.createElement('a', { href: '#' }, 'Services'),
            React.createElement('div', { className: 'nav-dropdown-menu' },
              SERVICES_NAV.map(function(s) {
                return React.createElement('a', { key: s.href, href: s.href }, s.name);
              })
            )
          ),
          React.createElement('li', null, React.createElement('a', { href: 'about.html' }, 'About')),
          React.createElement('li', null,
            React.createElement('a', { href: 'contact.html', className: 'nav-cta' }, 'Get in Touch')
          )
        ),
        React.createElement('button', {
          className: 'nav-hamburger',
          onClick: function() { setMenuOpen(function(o) { return !o; }); },
          'aria-label': 'Toggle navigation'
        },
          React.createElement('span', null),
          React.createElement('span', null),
          React.createElement('span', null)
        )
      )
    ),
    React.createElement('div', { className: 'nav-mobile' + (menuOpen ? ' open' : '') },
      React.createElement('a', { href: 'index.html', onClick: function() { setMenuOpen(false); } }, 'Home'),
      SERVICES_NAV.map(function(s) {
        return React.createElement('a', { key: s.href, href: s.href, onClick: function() { setMenuOpen(false); } }, s.name);
      }),
      React.createElement('a', { href: 'about.html', onClick: function() { setMenuOpen(false); } }, 'About'),
      React.createElement('a', { href: 'contact.html', className: 'nav-mobile-cta', onClick: function() { setMenuOpen(false); } }, 'Get in Touch')
    )
  );
}

function Footer() {
  var year = new Date().getFullYear();
  return React.createElement('footer', { className: 'footer' },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'footer-grid' },
        // Brand col
        React.createElement('div', null,
          React.createElement('span', { className: 'footer-logo' },
            React.createElement('img', { src: 'assets/logo-transparent.png', alt: '', className: 'brand-logo-img footer-logo-img' }),
            React.createElement('span', { className: 'sr-only' }, 'TrackStyle')
          ),
          React.createElement('p', { className: 'footer-tagline' },
            'Premium automotive styling and protection in Phoenix, AZ. Built by enthusiasts, for enthusiasts.'
          )
        ),
        // Services col
        React.createElement('div', null,
          React.createElement('span', { className: 'footer-col-title' }, 'Services'),
          React.createElement('ul', { className: 'footer-links' },
            SERVICES_NAV.map(function(s) {
              return React.createElement('li', { key: s.href },
                React.createElement('a', { href: s.href }, s.name)
              );
            })
          )
        ),
        // Company col
        React.createElement('div', null,
          React.createElement('span', { className: 'footer-col-title' }, 'Company'),
          React.createElement('ul', { className: 'footer-links' },
            React.createElement('li', null, React.createElement('a', { href: 'index.html' }, 'Home')),
            React.createElement('li', null, React.createElement('a', { href: 'about.html' }, 'About')),
            React.createElement('li', null, React.createElement('a', { href: 'contact.html' }, 'Contact'))
          )
        ),
        // Contact col
        React.createElement('div', null,
          React.createElement('span', { className: 'footer-col-title' }, 'Contact'),
          React.createElement('div', { className: 'footer-contact-item' },
            React.createElement('span', { className: 'footer-contact-label' }, 'Phone'),
            React.createElement('span', { className: 'footer-contact-val' },
              React.createElement('a', { href: 'tel:+16024264506' }, '(602) 426-4506')
            )
          ),
          React.createElement('div', { className: 'footer-contact-item' },
            React.createElement('span', { className: 'footer-contact-label' }, 'Email'),
            React.createElement('span', { className: 'footer-contact-val' },
              React.createElement('a', { href: 'mailto:sales@trackstyle.com' }, 'sales@trackstyle.com')
            )
          ),
          React.createElement('div', { className: 'footer-contact-item' },
            React.createElement('span', { className: 'footer-contact-label' }, 'Location'),
            React.createElement('span', { className: 'footer-contact-val' },
              '10201 N 21st Ave Suite 9', React.createElement('br', null), 'Phoenix, Arizona'
            )
          )
        )
      ),
      React.createElement('div', { className: 'footer-bottom' },
        React.createElement('span', { className: 'footer-copy' }, '© ' + year + ' TrackStyle. All rights reserved.'),
        React.createElement('div', { className: 'footer-social' },
          React.createElement('a', { href: 'https://instagram.com/trackstyles', target: '_blank', rel: 'noopener noreferrer' }, 'Instagram'),
          React.createElement('a', { href: 'https://facebook.com', target: '_blank', rel: 'noopener noreferrer' }, 'Facebook')
        )
      )
    )
  );
}

function useFadeIn() {
  useEffect(function() {
    var els = document.querySelectorAll('.fade-in');
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function(el) { observer.observe(el); });
    return function() { observer.disconnect(); };
  }, []);
}

function ServicePageLayout(props) {
  useFadeIn();
  var title = props.title;
  var eyebrow = props.eyebrow;
  var subtitle = props.subtitle;
  var description = props.description;
  var benefits = props.benefits;
  var optionsTitle = props.optionsTitle;
  var options = props.options;
  var image = props.image;

  return React.createElement(React.Fragment, null,
    React.createElement(Nav, null),

    React.createElement('section', { className: 'service-hero' },
      React.createElement('div', { className: 'service-hero-glow' }),
      React.createElement('div', { className: 'service-hero-content' },
        React.createElement('span', { className: 'section-label' }, eyebrow || 'TrackStyle · Phoenix, AZ'),
        React.createElement('h1', null, title),
        React.createElement('p', { className: 'hero-sub' }, subtitle)
      )
    ),

    image && React.createElement('section', { className: 'service-feature' },
      React.createElement('div', { className: 'container' },
        React.createElement('img', { src: image, alt: '', className: 'service-feature-img' })
      )
    ),

    React.createElement('section', { className: 'service-overview' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'service-overview-inner' },
          React.createElement('div', { className: 'fade-in' },
            React.createElement('span', { className: 'section-label' }, 'Overview'),
            description.map(function(para, i) {
              return React.createElement('p', { key: i, style: i === 0 ? { fontSize: '1.0625rem', marginBottom: '20px' } : {} }, para);
            })
          ),
          React.createElement('div', { className: 'benefits-box fade-in' },
            React.createElement('h3', null, 'What You Get'),
            React.createElement('ul', { className: 'benefit-list' },
              benefits.map(function(b, i) {
                return React.createElement('li', { key: i }, b);
              })
            )
          )
        )
      )
    ),

    options && React.createElement('section', { className: 'service-options' },
      React.createElement('div', { className: 'container' },
        React.createElement('span', { className: 'section-label' }, optionsTitle || 'Options'),
        React.createElement('h2', null, 'What We Offer'),
        React.createElement('div', { className: 'options-grid' },
          options.map(function(opt, i) {
            return React.createElement('div', { key: i, className: 'option-card' },
              React.createElement('h4', null, opt.name),
              React.createElement('p', null, opt.desc)
            );
          })
        )
      )
    ),

    React.createElement('section', { className: 'cta-banner' },
      React.createElement('div', { className: 'container' },
        React.createElement('div', { className: 'cta-banner-inner' },
          React.createElement('h2', null, 'Ready to Get Started?'),
          React.createElement('a', { href: 'contact.html', className: 'btn btn-dark' }, 'Get in Touch')
        )
      )
    ),

    React.createElement(Footer, null)
  );
}

window.Nav = Nav;
window.Footer = Footer;
window.useFadeIn = useFadeIn;
window.ServicePageLayout = ServicePageLayout;
window.SERVICES_NAV = SERVICES_NAV;
