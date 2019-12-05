import React, { createRef } from 'react';
import axiosInstance from "../AxiosInstance";

class FileInput extends React.Component {
    constructor (props) {
        super(props)
        // this.input =React.createRef();
        this.state= {
            title:"",
            description:""
        }
    }
    handleChange = event =>{ const {name, value}=event.target;
        this.setState({[name]:value});}

onSubmitChange =(event,props)=>{event.preventDefault();
this.props.onInput(this.state.title,this.state.description);
console.log(this.state.title,this.state.description);
this.setState({ title:"",
description:""});}
    

render () {
    return (
    <div>
        <div className="form_wrapper">
                        <form id="add_form" method="post" onSubmit={this.onSubmitChange}>
                            <div className="textAdd">
                                <input type="text" name="title" value={this.state.title}  onChange={this.handleChange}/>
                                <textarea type="text" cols="50" rows="10"  name="description" placeholder="Write something about your fav anime" value={this.state.description} onChange={this.handleChange}>
                                </textarea>
                                
                            </div>
                            <div id="add_submit">
                                <input type="submit" value="submit me"/>
                            </div>
                        </form>
         </div>               
        <label>Upload a picture:
        <input type="file"/>
        </label>
        
    </div>
    )
}

}


export default FileInput;


// ref={this.input}