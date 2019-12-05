import React from 'react';
import {Bootstrap, FormControl, Form, Button} from 'react-bootstrap';

class Searchbar extends React.Component {


    render () {
        return (
            <div className="nav_form">
                <Form inline >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.props.search} onChange={this.props.onSearch}  />
                    <Button className="btn-outline-light" variant="outline-primary">Search</Button>
              </Form>
            </div>
         
        )
    }
}

export default Searchbar;