var WRAP_TYPES = [{
  num: '01',
  name: 'Chrome Delete & Blackout',
  desc: 'Window trim, grilles, roof rails, badges — wrapped out for a cleaner, blacked-out look that reads intentional from every angle.'
}, {
  num: '02',
  name: 'Custom Livery & Graphics',
  desc: 'Stripes, number plates, sponsor decals, windshield banners. Full custom design with print-and-cut execution — your concept, precisely installed.'
}, {
  num: '03',
  name: 'Reversible Color Change',
  desc: 'Full vehicle or partial accents in gloss, satin, matte, or metallic finishes. Factory paint stays protected underneath — change it whenever you want.'
}];
var PROCESS_STEPS = [{
  step: '01',
  name: 'Get in Touch',
  desc: "Share your design ideas, the vehicle, and what you're going for. We'll talk through options and give you our honest take on what works."
}, {
  step: '02',
  name: 'Schedule Your Appointment',
  desc: "We finalize the design, confirm materials, and book your install slot. You'll know exactly what to expect before the car comes in."
}, {
  step: '03',
  name: 'Transform Your Vehicle',
  desc: "Precise installation with tight seams and smart panel placement. You drive away with exactly what we talked about — no surprises."
}];
function CustomWraps() {
  window.useFadeIn();
  return React.createElement(React.Fragment, null, React.createElement(window.Nav, null),
  // HERO
  React.createElement('section', {
    className: 'service-hero'
  }, React.createElement('div', {
    className: 'service-hero-glow'
  }), React.createElement('div', {
    className: 'service-hero-content'
  }, React.createElement('span', {
    className: 'section-label'
  }, 'Custom Wraps · Phoenix, AZ'), React.createElement('h1', null, 'Custom Wraps,', React.createElement('br', null), React.createElement('span', {
    className: 'accent'
  }, 'Exactly'), ' Your Vision.'), React.createElement('p', {
    className: 'hero-sub'
  }, 'From full color changes to chrome deletes, custom liveries, and graphic installs — clean execution, tight seams, paint-safe and reversible.'))),
  // OVERVIEW
  React.createElement('section', {
    className: 'service-overview'
  }, React.createElement('div', {
    className: 'container'
  }, React.createElement('div', {
    className: 'service-overview-inner'
  }, React.createElement('div', {
    className: 'fade-in'
  }, React.createElement('span', {
    className: 'section-label'
  }, 'Overview'), React.createElement('p', {
    style: {
      fontSize: '1.0625rem',
      marginBottom: '20px'
    }
  }, 'TrackStyle custom wraps refresh your vehicle\'s look with a reversible application that\'s clean, uniform, and completely paint-safe. Whether you want a full color change or targeted accents, every install starts with the right prep and ends with a finish that looks factory.'), React.createElement('p', null, 'We work with you from concept to completion — sourcing the right vinyl, confirming the design, and executing with tight seams and smart panel placement. No guessing, no surprises. You know what you\'re getting before the car comes in.'), React.createElement('p', null, 'Custom wraps give you full creative freedom without the permanence of paint. Change the look again later, peel it clean before you sell, or stack it with PPF underneath for maximum protection.')), React.createElement('div', {
    className: 'benefits-box fade-in'
  }, React.createElement('h3', null, 'What You Get'), React.createElement('ul', {
    className: 'benefit-list'
  }, ['Full creative freedom — your design, your finish', 'Paint-safe and fully reversible', 'Tight seams and precise panel placement', 'Gloss, satin, matte, metallic, and specialty films', 'Custom design and print-and-cut graphics', 'Chrome delete, blackout, and accent wraps', 'Easy to maintain, easy to change later'].map(function (b, i) {
    return React.createElement('li', {
      key: i
    }, b);
  })))))),
  // WRAP TYPES
  React.createElement('section', {
    className: 'service-options'
  }, React.createElement('div', {
    className: 'container'
  }, React.createElement('span', {
    className: 'section-label'
  }, 'What We Offer'), React.createElement('h2', null, 'Types of Custom Wraps'), React.createElement('div', {
    className: 'options-grid',
    style: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  }, WRAP_TYPES.map(function (w) {
    return React.createElement('div', {
      key: w.num,
      className: 'option-card'
    }, React.createElement('span', {
      style: {
        display: 'block',
        fontSize: '0.7rem',
        fontWeight: '600',
        letterSpacing: '0.2em',
        color: 'var(--yellow)',
        marginBottom: '16px',
        fontFamily: 'var(--font-body)'
      }
    }, w.num), React.createElement('h4', null, w.name), React.createElement('p', null, w.desc));
  })))),
  // PROCESS
  React.createElement('section', {
    style: {
      background: 'var(--black)',
      padding: '100px 0'
    }
  }, React.createElement('div', {
    className: 'container'
  }, React.createElement('span', {
    className: 'section-label'
  }, 'How It Works'), React.createElement('h2', {
    style: {
      marginBottom: '52px'
    }
  }, 'The Process'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1px',
      background: 'var(--border)',
      border: '1px solid var(--border)'
    }
  }, PROCESS_STEPS.map(function (s) {
    return React.createElement('div', {
      key: s.step,
      className: 'fade-in',
      style: {
        background: 'var(--card)',
        padding: '48px 40px'
      }
    }, React.createElement('span', {
      style: {
        display: 'block',
        fontSize: '0.7rem',
        fontWeight: '600',
        letterSpacing: '0.22em',
        color: 'var(--yellow)',
        marginBottom: '20px',
        fontFamily: 'var(--font-body)'
      }
    }, s.step), React.createElement('h3', {
      style: {
        fontSize: '1.375rem',
        marginBottom: '16px'
      }
    }, s.name), React.createElement('p', {
      style: {
        fontSize: '0.875rem',
        color: 'var(--gray)',
        lineHeight: '1.65',
        margin: '0'
      }
    }, s.desc));
  })))),
  // CTA
  React.createElement('section', {
    className: 'cta-banner'
  }, React.createElement('div', {
    className: 'container'
  }, React.createElement('div', {
    className: 'cta-banner-inner'
  }, React.createElement('h2', null, 'Ready to Build Something Custom?'), React.createElement('a', {
    href: 'contact.html',
    className: 'btn btn-dark'
  }, 'Get in Touch')))), React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(CustomWraps, null));