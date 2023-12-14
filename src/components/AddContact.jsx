import React from 'react'

class AddContact extends React.Component {

    state = {
        name: '',
        email: '',
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === '') {
            alert("All the fields are Mandatory");
        }
        // console.log(this.state)
        this.props.addContactHandler(this.state)
        this.setState({name: '', email:''})
    }

    render() {
        return (
            <div>
                <div className="addContact">
                    <h2>Add Contact </h2>
                    <form action="" className="addForm" onSubmit={this.add}>

                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Name' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                        <br />
                        <br />
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                        <br />
                        <br />
                        <div className="btnCont">
                            <button className="submitBtn" type='submit'>Add </button></div>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddContact
