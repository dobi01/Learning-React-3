var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
    src: 'https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png'
  },
  {
    id: 2,
    firstName: 'Ida',
    lastName: 'Kowalska',
    email: 'ida.kowalska@example.com',
    src: 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png'
  },
  {
    id: 3,
    firstName: 'Anna',
    lastName: 'Zalewska',
    email: 'anna.zalewska@example.com',
    src: 'https://www.shareicon.net/data/128x128/2016/09/01/822727_user_512x512.png'
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: '',
  src: ''
};

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
      )
    );
  }
});
