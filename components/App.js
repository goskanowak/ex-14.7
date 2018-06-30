const contacts = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com',
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziol',
        email: 'zbigniew.koziol@example.com',
    },
    {
        id: 4,
        firstName: 'Zuzanna',
        lastName: 'Malinowska',
        email: 'z.malinowska@example.com',
    },
    {
        id: 5,
        firstName: 'Andrzej',
        lastName: 'Dudek',
        email: 'andrzej.dudek@example.com',
    },
];

let contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

const App = React.createClass ({
    render: function () {
        return (
            <div className={'app'}>
                <ContactForm contact={contactForm} />
                <Contacts items={contacts} />
            </div>
        );
    }
});