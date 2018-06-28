const Contact = React.createClass({
    propTypes: {
        items: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <div className='contactItem'>
                <img className={'contactImage'} src={ 'https://use.fontawesome.com/releases/v5.0.13/svgs/regular/address-card.svg'
                }/>
                <p className={'contactLabel'}>
                    Name: {this.props.items.firstName}
                </p>
                <p className={'contactLabel'}>
                    Surname: {this.props.items.lastName}
                </p>
                <a href={'mailto: + this.props.item.email'}>
                    {this.props.items.email}
                </a>
            </div>
        );
    }
});