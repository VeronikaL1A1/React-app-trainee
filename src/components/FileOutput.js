import React, { createRef } from 'react';

class FileOutput extends React.Component {

    textRender = () => {
        const item = this.props.text;
        if (!item) return null;
        if (typeof item.description && typeof item.title === "string") {
            return (
                <>
                    <h3><span dangerouslySetInnerHTML={{ __html: item.title }} /></h3>
                    <p>
                        <span dangerouslySetInnerHTML={{ __html: item.description }} />
                    </p>
                </>
            )

        }
    }

    render() {
        // let {search, item} = this.props;
        // //    const filteredInputs= inputs.filter((input)=>input.description.toLowerCase() || input.title.toLowerCase().includes(search.toLowerCase()))
        //     if (search && (item.description.toLowerCase().includes(search.toLowerCase()) || item.title.toLowerCase().includes(search.toLowerCase()))) {
        //        console.log(item);
        //         return item= item
        //     }
        return (
            <div className="align">
                <div className="uploadContainer">
                    <div className="uploadedText">
                        {this.textRender()}
                    </div>

                </div>
            </div>
        )
    }
}

export default FileOutput;