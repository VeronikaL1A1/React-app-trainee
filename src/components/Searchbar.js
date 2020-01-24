import React from 'react';
import { FormControl, Form, Button} from 'react-bootstrap';

class Searchbar extends React.Component {


    render () {
        return (
            <div className="nav_form" id="searchbar" >
                <Form inline >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.props.search}  onChange={this.props.onSearch} />
                    <Button className="btn-outline-light searchBtn" variant="outline-primary" onClick={this.props.handleClick} >Search</Button>
                    <Button className="btn-outline-light searchBtn" variant="outline-primary" onClick={this.props.onClear}>Clear searched</Button>
              </Form>
            </div>
         
        )
    }
}

export default Searchbar;


// onChange={this.props.onSearch}