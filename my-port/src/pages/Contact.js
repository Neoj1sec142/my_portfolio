//a lot of imports to follow for this page
import {useState, useEffect} from 'react'
//import {Link} from 'react-router-dom'

const Contact = (props) => {
    const [contact, setContact] = useState({
        name: '',
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        window.top.location.reload(true)
        setContact('')
    }

    const handleChange = async (e) => {
       e.preventDefault()
       setContact({...contact, [e.target.name]: e.target.value })
    }

    return(
        <div className="contact-pg">
            <div>
                <textarea
                    onChange={handleChange}
                    name={'name'}
                    value={contact.name}
                    placeholder="Name here..."
                />
                <textarea
                    onChange={handleChange}
                    name={'email'}
                    value={contact.email}
                    placeholder="Email here..."
                />
                <button onClick={(e) => handleSubmit(e)}>Send</button>
            </div>

        </div>
    )

}
export default Contact