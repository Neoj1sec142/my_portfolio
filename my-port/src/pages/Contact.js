//a lot of imports to follow for this page

const mapStateToProps = ({ contatctState }) => {
    return { contatctState }
}

const mapDispatchToProps = (dispatch) => {
    return{
        uploadContact: (id, newContact) => dispatch(UploadContact(id, newContact)),
        updateConact: (contact) => dispatch(UpdateContact(contact)),
        toggleMoreContact: (value) => dispatch(ToggleMoreContact(value))
    }
}

const Contact = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        props.uploadContact(id, props.contactState.newContact)
        props.toggleMoreComment(!props.contactState.moreContact)
    }

    const handleChange = async (e) => {
        await props.updateComment(e.target.value)
    }

    return(
        <div className="contact-pg">

            {props.contactState.moreContact && (
            <div>
                <ReactStars
                    onChange={''}
                    size={24}
                    color2={'#ffd700'}
                    className={'stars'}
                />
                <textarea
                    onChange={handleChange}
                    value={props.contactState.newContact}
                    placeholder="Email here..."
                />
            </div>
            )}

            <button onClick={handleSubmit}>
            {props.contactState.moreConatct ? `Send` : `Add your email`}
            </button>

        </div>
    )

}
export default connect(mapStateToProps, mapDispatchToProps)(Contact)