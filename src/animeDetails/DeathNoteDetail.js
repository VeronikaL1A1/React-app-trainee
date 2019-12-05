import React from "react";


class DeathNote extends React.Component {

  state = {
    DeathNoteImgs: [
      "https://fsmedia.imgix.net/88/b5/a6/01/774b/4a5f/a717/81321915d34f/now-thats-a-handy-dandy-notebook.jpeg?rect=0%2C0%2C1200%2C600&auto=format%2Ccompress&dpr=2&w=650",
      "https://imgix.ranker.com/user_node_img/4261/85211644/original/sidoh-photo-u2?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
      "https://vignette.wikia.nocookie.net/deathnote/images/8/8a/ImagesCASWBZQN.jpg/revision/latest/scale-to-width-down/310?cb=20170321051910"
    ],
    name: ["boy","shinigami", "girl"],
    index: 0
  };
 
  componentDidMount() {
    this.carousel = setInterval(() => this.indexIncrement(), 5000);
  }

  componentWillUnmount () {
    clearInterval(this.carousel)
  }

  indexDecrement =() => this.setState({ index: this.state.index - 1 < 0 ? 0 : this.state.index-1 });
  

  indexIncrement=() =>
    this.setState({
      index:
        this.state.index + 1 > this.state.DeathNoteImgs.length - 1
          ? 0
          : this.state.index+1
    });
  

  render () {
      let {DeathNoteImgs,index,name} = this.state;
    return (
      <div>
        <h3>Death note anime</h3>
        <div className="animeContentItem" id="deathNote"><p>ie lemon drops brownie liquorice soufflé chocolate powder. 
            Cookie fruitcake chocolate cake marshmallow candy candy chocolate bar dragée.
            Croissant danish marshmallow biscuit. Chocolate cake sesame snaps topping sugar plum powder jujubes oat cake sweet cookie. Gummi bears dessert jelly.
             Chocolate brownie sweet roll cotton candy biscuit. Liquorice bear claw sweet lemon drops lollipop wafer gummies gummi bears cupcake. Jelly beans chocolate bar toffee powder jujubes biscuit sweet roll sesame snaps.
              Powder gummies gummi bears lollipop cake jelly beans tart gingerbread. Danish tiramisu lemon drops caramels croissant. Tiramisu caramels topping sweet roll marshmallow marzipan lemon drops tart macaroon. 
              Brownie donut cupcake pastry jelly lollipop topping. </p>
            <button onClick={this.indexDecrement}>{"<"}</button>
            <img className="imgs_2" src={DeathNoteImgs[index]} alt={name[index]}/>
            <button onClick={this.indexIncrement}>{">"}</button>
              </div>
      </div>
    );
  }
}


export default DeathNote;
