const ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    
    render: function() {
        return (
        <form className={'contactForm'}>
             <label htmlFor={'name'}>
                <input 
                    name={'name'}
                    type={'text'}
                    placeholder={'Name'}
                    value={this.props.contact.firstName}
                />
             </label>
             <label htmlFor={'surname'}>
                <input 
                    name={'surname'}
                    type={'text'}
                    placeholder={'Surname'}
                    value={this.props.contact.lastName}
                />
             </label>
             <label htmlFor={'email'}>
                <input 
                    name={'email'}
                    type={'email'}
                    placeholder={'Email'}
                    value={this.props.contact.email}
                />
            </label>
            <button type={'submit'}> 
                Add to contact
            </button>
        </form>
    )},
})