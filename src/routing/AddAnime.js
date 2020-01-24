import React from 'react';
import ReactDOM from 'react-dom';
import axiosInstance from "../AxiosInstance";
import {BrowserRouter,Switch,Route,Link,Redirect} from 'react-router-dom';
import FileInput from "../components/FileInput"
import FileOutput from "../components/FileOutput"

import axios from 'axios';
import Searchbar from '../components/Searchbar';


class AddAnime extends React.Component {
    constructor (props){
        super(props);

        this.state= {
            inputs:[],
            files:[],
            search:"",
            searchedInputs:[]
        }
    }
  
         
           async componentDidMount () { 
                const result= await axiosInstance.get('https://anime-page-6d6f8.firebaseio.com/newAnime.json')
            //    console.log(result);
               const resultArray = Object.values(result.data);
               this.setState({inputs:resultArray});
            //    console.log(this.state.inputs.description)
            }

         onInput = async (title,description,url) => {
        //    console.log(title,description);
        console.log(url)
                const newInput ={
                    title: title,
                    description: description,
                    downloadURL:url
                }
                
                await axios.post('https://anime-page-6d6f8.firebaseio.com/newAnime.json',newInput)

                this.setState(prevState=>{return {inputs:prevState.inputs.concat(newInput)}});
            }

            // onImageInput =  (url)=> {
            //     this.setState(prevState=>{return {files:this.state.files.concat(url)}});
            //     console.log(this.state.files)

            // }

            onClear =()=>{
                let {inputs} = this.state;
                this.setState({searchedInputs:inputs})
            }
            onSearch = (event) =>
                this.setState({search:event.target.value})
            
                handleClick =()=> {
                    let {inputs, search} = this.state;
                  
                    if ( search) {this.setState({searchedInputs:inputs.filter((input)=>input.description.toLowerCase().includes(search.toLowerCase()) || input.title.toLowerCase().includes(search.toLowerCase()))}) }
                    
                }
    

    render () {
        let {inputs,searchedInputs} = this.state;
    //    const filteredInputs= inputs.filter((input)=>input.description.toLowerCase() || input.title.toLowerCase().includes(search.toLowerCase()))
        // if (search) {
        //     inputs= inputs.filter((input)=>input.description.toLowerCase().includes(search.toLowerCase()) || input.title.toLowerCase().includes(search.toLowerCase()))
        // }


             return (<div>
             
                 <div className="container background container_1">
                    
                     <div className="addAnime_wrapper container_2">
                         <h1>Add your favorite anime</h1>
                         <FileInput onInput={this.onInput} onImageInput={this.onImageInput} />
                         <Searchbar  onSearch={this.onSearch}  search={this.state.search} handleClick={this.handleClick} onClear={this.onClear} />
                         {searchedInputs.length > 0 ? searchedInputs.map((item) => <FileOutput text={item}  />):inputs.map((item) => <FileOutput text={item}  />)}
                         {/* {inputs.map((item) => <FileOutput text={item}  />) } */}
                         
                     </div>
                     
                 </div>
                </div>
        )
    }
}


export default AddAnime;