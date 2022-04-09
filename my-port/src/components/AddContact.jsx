
const AddContact = ({ setContact, contact, handleSubmit }) => {

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                onChange={(e) => setContact(e.target.value)} 
                value={contact}
                placeholder="Add your thoughts..."                
            />
            <button onClick={handleSubmit}>Add</button>
        </form> 
    )
}
export default AddContact