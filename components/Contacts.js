const Contacts = React.createClass ({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },
    render: function() {
        const contacts = this.props.items.map(function(contact){
            return <Contact items={contact} key={contact.id} ></Contact>
        });
        return (
            <ul className={'contactList'}>{contacts}</ul>
        );
    }
})