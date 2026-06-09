function Contact() {
  var _useState = React.useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    message: ''
  });
  var form = _useState[0];
  var setForm = _useState[1];
  var _useState2 = React.useState(false);
  var submitted = _useState2[0];
  var setSubmitted = _useState2[1];
  function handleChange(e) {
    var field = e.target.name;
    var val = e.target.value;
    setForm(function (prev) {
      var next = Object.assign({}, prev);
      next[field] = val;
      return next;
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // Form submission — replace with your backend endpoint or Formspree
    setSubmitted(true);
  }
  return React.createElement(React.Fragment, null, React.createElement(window.Nav, null), React.createElement('div', {
    className: 'contact-page'
  }, React.createElement('div', {
    className: 'container'
  }, React.createElement('div', {
    className: 'contact-header'
  }, React.createElement('span', {
    className: 'section-label'
  }, 'TrackStyle · Phoenix, AZ'), React.createElement('h1', null, "Let's Talk About ", React.createElement('span', {
    className: 'accent'
  }, 'Your Build')), React.createElement('p', null, "Tell us what you're working on and we'll get back to you same day.")), React.createElement('div', {
    className: 'contact-body'
  },
  // INFO
  React.createElement('div', {
    className: 'contact-info-block'
  }, React.createElement('div', {
    className: 'contact-detail'
  }, React.createElement('div', {
    className: 'contact-detail-item'
  }, React.createElement('span', {
    className: 'contact-detail-label'
  }, 'Phone'), React.createElement('span', {
    className: 'contact-detail-value'
  }, React.createElement('a', {
    href: 'tel:+16024264506'
  }, '(602) 426-4506'))), React.createElement('div', {
    className: 'contact-detail-item'
  }, React.createElement('span', {
    className: 'contact-detail-label'
  }, 'Email'), React.createElement('span', {
    className: 'contact-detail-value'
  }, React.createElement('a', {
    href: 'mailto:sales@trackstyle.com'
  }, 'sales@trackstyle.com'))), React.createElement('div', {
    className: 'contact-detail-item'
  }, React.createElement('span', {
    className: 'contact-detail-label'
  }, 'Location'), React.createElement('span', {
    className: 'contact-detail-value'
  }, '10201 N 21st Ave Suite 9', React.createElement('br', null), 'Phoenix, Arizona')))),
  // FORM
  React.createElement('div', {
    className: 'contact-form'
  }, !submitted ? React.createElement('form', {
    onSubmit: handleSubmit
  }, React.createElement('div', {
    className: 'form-grid-2'
  }, React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', null, 'Your Name'), React.createElement('input', {
    type: 'text',
    name: 'name',
    value: form.name,
    onChange: handleChange,
    placeholder: 'First Last',
    required: true
  })), React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', null, 'Email'), React.createElement('input', {
    type: 'email',
    name: 'email',
    value: form.email,
    onChange: handleChange,
    placeholder: 'you@email.com',
    required: true
  }))), React.createElement('div', {
    className: 'form-grid-2'
  }, React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', null, 'Phone'), React.createElement('input', {
    type: 'tel',
    name: 'phone',
    value: form.phone,
    onChange: handleChange,
    placeholder: '(602) 000-0000'
  })), React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', null, 'Vehicle'), React.createElement('input', {
    type: 'text',
    name: 'vehicle',
    value: form.vehicle,
    onChange: handleChange,
    placeholder: '2023 Toyota GR86'
  }))), React.createElement('div', {
    className: 'form-group'
  }, React.createElement('label', null, 'Tell Us About Your Project'), React.createElement('textarea', {
    name: 'message',
    value: form.message,
    onChange: handleChange,
    placeholder: "What are you looking to do? Any details about your vehicle or timeline help us get back to you faster."
  })), React.createElement('button', {
    type: 'submit',
    className: 'btn btn-primary form-submit'
  }, 'Send Message')) : React.createElement('div', {
    className: 'form-success'
  }, React.createElement('p', null, "Message received. We'll be in touch same day.")))))), React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Contact, null));
