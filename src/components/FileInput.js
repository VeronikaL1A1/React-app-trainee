import React, { createRef } from 'react';
import axiosInstance from "../AxiosInstance";
import mystorage from "../firebase";
import firebase from "../firebase"

class FileInput extends React.Component {
    constructor (props) {
        super(props)
        // this.input =React.createRef();
        this.state= {
            title:"",
            description:"",
            image:null,
            progress:null,
            // downloadURLko:""
        }
    }
    handleChange = async event => 
    { 
        const {name, value, files,type}=event.target;

         await this.setState({[name]:value});
        //  console.log(this.state.title)

         
        if(type==="file") { await this.setState({image:files[0]});}
        //  console.log(this.state.image)
    }

    
//    getUrl= (url)=>{
//     let downloadURL;
//     downloadURL = url;
//     this.setState({downloadURL:downloadURL})
//    }
       
     
        

onSubmitChange =  (event,props)=>{
    event.preventDefault();
    
    // this.props.onInput(this.state.title,this.state.description);
    console.log(this.state.title,this.state.description,this.state.image);

    let {image}= this.state;
    let imgStorage= mystorage.ref().child(`images/${image.name}`).put(image);
   imgStorage.on('state_changed',
         (snapshot)=> {this.setState({progress:(snapshot.bytesTransferred / snapshot.totalBytes)*100})},
         (error) =>{},
         ()=> {
            imgStorage.snapshot.ref.getDownloadURL().then((downloadURL) => {
            // this.setState({downloadURLko:downloadURL})
                
                // console.log(this.state.downloadURL);
                this.props.getUrl(downloadURL)
                
            
                // this.setState({downloadURL:downloadURL})
            //    this.props.onImageInput(downloadURL)
          
            })
        }
        
        
    )
    this.props.onInput(this.state.title,this.state.description)
   


    this.setState({ title:"",
    description:""});
}
    

    render() {
        console.log(this.state.downloadURL)
        return (
            <div>
                <div className="form_wrapper">
                    <form id="add_form" method="post" onSubmit={this.onSubmitChange}>
                        <div className="textAdd">
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                            <textarea type="text" cols="50" rows="10" name="description" placeholder="Write something about your fav anime" value={this.state.description} onChange={this.handleChange}>
                            </textarea>

                        </div>
                        <div id="add_submit">
                            <input type="submit" value="submit me" />
                        </div>
                        <label>Upload a picture:
                    <input id="imgUp" type="file" onChange={this.handleChange }/>
                     <p>Your image upload status : {this.state.progress} %</p>
                </label>
                    </form>
                </div>
                

            </div>
        )
    }

}


export default FileInput;

