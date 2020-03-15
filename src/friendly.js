import React from 'react';
import { IconContext } from 'react-icons';
import { FaCartPlus } from 'react-icons/fa';



function Avatar(props) {
  var avatarStyle = {
    marginLeft: 17,
    marginTop: 20,
    width: 170,
    height: 170,
    borderRadius: "50%"
  }
  return (
    <div>
      <img
        src={props.img}
        alt="profile pic"
        style={avatarStyle}
      />
    </div>
  );
}

function UserName(props) {
  var nameStyle = {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Arial, Helvetica, sans-serif",
    margin: 20
  }
  return (
    <div>
      <h1 style={nameStyle}>{props.name}</h1>
    </div>
  );
}

var iconStyle = {
  marginLeft: 90,
  cursor: "pointer",
}

function GetConnected() {
  return (
    <IconContext.Provider value={{ color: 'green', size: '2rem' }}>
      <div>
        <FaCartPlus style={iconStyle} />
      </div>
    </IconContext.Provider>
  );
}



const Friendly = (props) => {
  var dinnerItem = props.animalsFood.filter(function (animalsFood) {
    return animalsFood.alive === false;
  }).map(function (animalsFood) {
    var animalStyle = {
      display: 'inline-block',
      margin: 20,
      height: 300,
      width: 200,
      padding: 0,
      backgroundColor: "#FFF",
      border: 'solid',
      borderColor: 'pink',
      // WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 3px #555)"
    }
    return (
      <div key={animalsFood.id} style={animalStyle}>
        <Avatar img={animalsFood.img} />
        <UserName name={animalsFood.name} />
        <GetConnected />
      </div>
    );
  })

  var animalsItem = props.animalsFood.filter(function (animalsFood) {
    return animalsFood.alive === true;
  }).map(function (animalsFood) {
    var animalStyle = {
      display: 'inline-block',
      margin: 20,
      height: 300,
      width: 200,
      padding: 0,
      backgroundColor: "#FFF",
      border: 'solid',
      borderColor: 'blue',
      // WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 3px #555)"
    }
    return (
      <div key={animalsFood.id} style={animalStyle}>
        <Avatar img={animalsFood.img} />
        <UserName name={animalsFood.name} />
        <GetConnected />
      </div>
    );
  })

  return (
    <div className="section-container">
      <div className="section-title">
        <h1>Dream Store</h1>
        <div className="section-memo">
          <p>a store like no other</p>
        </div>
      </div>

      <div className="section-animals">  
        <h2>Animals</h2>
        <div>{animalsItem}</div>
      </div>

      <div className="section-dinner">
        <hr />
        <h2>Dinner</h2>
        <div>{dinnerItem}</div>
      </div>
    </div>
  )
}

export default Friendly;