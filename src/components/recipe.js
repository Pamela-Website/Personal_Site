import React, { Component } from 'react';
import Navigation from './navbar';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        },
        gridList: {
          width: '100%',
          height: '100%',
          margin: '0 5%'
        },
      },
      tilesData: [
        {
          img: 'https://static.pexels.com/photos/296878/pexels-photo-296878.jpeg',
          title: 'Breakfast',
          author: 'jill111',
        },
        {
          img: 'https://static.pexels.com/photos/262325/pexels-photo-262325.jpeg',
          title: 'Tasty burger',
          author: 'pashminu',
        },
        {
          img: 'https://static.pexels.com/photos/414578/pexels-photo-414578.jpeg',
          title: 'Camera',
          author: 'Danson67',
        },
        {
          img: 'https://static.pexels.com/photos/66627/pexels-photo-66627.jpeg',
          title: 'Morning',
          author: 'fancycrave1',
        },
        {
          img: 'https://static.pexels.com/photos/139446/pexels-photo-139446.jpeg',
          title: 'Hats',
          author: 'Hans',
        },
        {
          img: 'https://static.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg',
          title: 'Honey',
          author: 'fancycravel',
        },
        {
          img: 'https://static.pexels.com/photos/20974/pexels-photo.jpg',
          title: 'Vegetables',
          author: 'jill111',
        },
        {
          img: 'https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg',
          title: 'Water plant',
          author: 'BkrmadtyaKarki',
        },
      ],
    }
  };

  render() {
    return (
      <div>
        <Navigation />
        <div style={this.state.styles.root}>
          <GridList
            cellHeight={300}
            style={this.state.styles.gridList}
            cols={4}
            padding={20}
          >
            <Subheader>
              A Healthy Outside Starts From the Inside
            </Subheader>
            {this.state.tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={<span>by <b>{tile.author}</b></span>}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
        <br />
      </div>
    )
  }
}

