import React from 'react';
import Sailormoon from '../animeDetails/SailormoonDetail';

// import AnimeView from "../animeDetails/AnimeView";
import DeathNote from '../animeDetails/DeathNoteDetail';
class AnimeInfo extends React.Component {
    state={
        animeImages:
        [ "https://images-na.ssl-images-amazon.com/images/I/616XLXPuwiL._SY741_.jpg",
        "https://www.rightstufanime.com/images/productImages/782009244134gwp_anime-sailor-moon-super-s-le-primary.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR110,0,630,1200_AL_.jpg"
            
        ],
        hrefs:["#deathNote","#sailorMoon","#princessMononoke"],
        detailImgs:[
        "https://cdn.vox-cdn.com/thumbor/raOfCX0I-_pfaEe-iDw8Ne97kg8=/0x0:1119x616/1200x800/filters:focal(491x62:669x240)/cdn.vox-cdn.com/uploads/chorus_image/image/64002735/smas.0.jpg",
        "https://www.movies4kids.co.uk/wp-content/uploads/2011/02/mononoke-main.jpg"],



        // DeathNoteImgs: [
        //     "https://fsmedia.imgix.net/88/b5/a6/01/774b/4a5f/a717/81321915d34f/now-thats-a-handy-dandy-notebook.jpeg?rect=0%2C0%2C1200%2C600&auto=format%2Ccompress&dpr=2&w=650",
        //     "https://imgix.ranker.com/user_node_img/4261/85211644/original/sidoh-photo-u2?w=650&q=50&fm=pjpg&fit=crop&crop=faces",
        //     "https://vignette.wikia.nocookie.net/deathnote/images/8/8a/ImagesCASWBZQN.jpg/revision/latest/scale-to-width-down/310?cb=20170321051910"
        //   ],
        //   index:0,
    }





    // componentDidMount() {
    //     this.carousel = setInterval(() => this.indexIncrement(), 5000);
    //   }
    
    //   componentWillUnmount () {
    //     clearInterval(this.carousel)
    //   }
    
    //   indexDecrement() {
    //     this.setState({ index: this.state.index - 1 < 0 ? 0 : this.state.index -1 });
    //   }
    
    //   indexIncrement() {
    //     this.setState({
    //       index:
    //         this.state.index + 1 > this.state.DeathNoteImgs.length - 1
    //           ? 0
    //           : this.state.index + 1
    //     });
    //   }


    render () {
        let {hrefs,animeImages} = this.state;
        return (
            <div className="container background container_1">
            <div className="container_2 ">
            <h2>Welcome in the overview</h2>
            <h4>Choose from bellow displayed anime you are interested in </h4>
            <div className="img_container flexbox">
            {hrefs.map((hitem,index)=><a href={hitem}><img className="imgs_1"src={animeImages[index]}alt="animePictures"/></a>)}
            </div>
            </div>
            <div className="contentWrapper container_2">
            <div className="animeContentItem" id="deathNote"> <DeathNote/></div>
            <div className="animeContentItem" id="sailorMoon"> <Sailormoon detailImg={this.state.detailImgs[0]}/></div>
           
            {/* <AnimeView index={this.state.index} DeathNoteImgs={this.state.DeathNoteImgs}/> */}

            

            <div className="animeContentItem" id="princessMononoke">
                <h3>Princess Mononoke </h3>
                    <p>Pie lemon drops brownie liquorice soufflé chocolate powder. 
            Cookie fruitcake chocolate cake marshmallow candy candy chocolate bar dragée.
            Croissant danish marshmallow biscuit. Chocolate cake sesame snaps topping sugar plum powder jujubes oat cake sweet cookie. Gummi bears dessert jelly.
             Chocolate brownie sweet roll cotton candy biscuit. Liquorice bear claw sweet lemon drops lollipop wafer gummies gummi bears cupcake. Jelly beans chocolate bar toffee powder jujubes biscuit sweet roll sesame snaps.
              Powder gummies gummi bears lollipop cake jelly beans tart gingerbread. Danish tiramisu lemon drops caramels croissant. Tiramisu caramels topping sweet roll marshmallow marzipan lemon drops tart macaroon. 
              Brownie donut cupcake pastry jelly lollipop topping. </p>
              <img className="imgs_2" src={this.state.detailImgs[1]} alt="princessmononoke"/></div>
            </div>
            </div>
        )
    }

}

export default AnimeInfo;