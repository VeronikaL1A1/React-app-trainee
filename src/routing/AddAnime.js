import React from 'react';
import axiosInstance from "../AxiosInstance";


import FileInput from "../components/FileInput"
import FileOutput from "../components/FileOutput"

import axios from 'axios';
import Searchbar from '../components/Searchbar';

class AddAnime extends React.Component {
    constructor (props){
        super(props);

        this.state= {
            inputs:[],
            search:""
           
        }
    }
  
         
           async componentDidMount () { 
                const result= await axiosInstance.get('https://anime-page-6d6f8.firebaseio.com/newAnime.json')
            //    console.log(result);
               const resultArray = Object.values(result.data);
               this.setState({inputs:resultArray});
            //    console.log(this.state.inputs.description)
            }

         onInput = async (title,description) => {
        //    console.log(title,description);
                const newInput ={
                    title: title,
                    description: description,

                }
                
                await axios.post('https://anime-page-6d6f8.firebaseio.com/newAnime.json',newInput)

                this.setState(prevState=>{return {inputs:prevState.inputs.concat(newInput)}});
            }

            onSearch = (event) =>
                this.setState({search:event.target.value})
            
            //     handleClick =()=> {
            //         let {inputs, search} = this.state;
            //         if (search) {
            //         inputs= inputs.filter((input)=>input.description.toLowerCase().includes(search.toLowerCase()) || input.title.toLowerCase().includes(search.toLowerCase()))}
            //    console.log(inputs)
            //  }
         

    render () {
        let {inputs, search} = this.state;
    //    const filteredInputs= inputs.filter((input)=>input.description.toLowerCase() || input.title.toLowerCase().includes(search.toLowerCase()))
        if (search) {
            inputs= inputs.filter((input)=>input.description.toLowerCase().includes(search.toLowerCase()) || input.title.toLowerCase().includes(search.toLowerCase()))
        }


             return (
                 <div className="container background container_1">
                     <div className="addAnime_wrapper container_2">
                         <h1>Add your favorite anime</h1>
                         <FileInput onInput={this.onInput} />
                         {inputs.map((item) => <FileOutput text={item} />)}
                     </div>
                     <div>
                         <Searchbar search={this.state.search} onSearch={this.onSearch} />
                     </div>
                 </div>
                
        )
    }
}


export default AddAnime;