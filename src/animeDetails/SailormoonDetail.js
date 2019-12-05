import React from "react";

function Sailormoon (props) {

    return (
      <div>
        <h3>Sailor Moon anime</h3>
        <div className="animeContentItem" id ="sailorMoon">
          <p>Pie lemon drops brownie liquorice soufflé chocolate powder. 
            Cookie fruitcake chocolate cake marshmallow candy candy chocolate bar dragée.
            Croissant danish marshmallow biscuit. Chocolate cake sesame snaps topping sugar plum powder jujubes oat cake sweet cookie. Gummi bears dessert jelly.
             Chocolate brownie sweet roll cotton candy biscuit. Liquorice bear claw sweet lemon drops lollipop wafer gummies gummi bears cupcake. Jelly beans chocolate bar toffee powder jujubes biscuit sweet roll sesame snaps.
              Powder gummies gummi bears lollipop cake jelly beans tart gingerbread. Danish tiramisu lemon drops caramels croissant. Tiramisu caramels topping sweet roll marshmallow marzipan lemon drops tart macaroon. 
              Brownie donut cupcake pastry jelly lollipop topping.
              </p>
            
              <img className="imgs_2" src={props.detailImg} alt="sailormoon"/>
               </div>
      </div>
    );
  }


export default Sailormoon;
