import React, { Component } from 'react';
import Navigation from './navbar';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { recipes } from './recipes-seed';

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: '',
      img: '',
      ingredients: [],
      directions: [],
      benefits: '',
    }
    this.handleClose = this.handleClose.bind(this);
    this.renderIngredientsList = this.renderIngredientsList.bind(this);
    this.renderDirectionsList = this.renderDirectionsList.bind(this);
  };

  handleOpen(tile) {
    let { img, title, directions, ingredients, benefits } = tile
    this.setState({
      open: true,
      title,
      img,
      ingredients,
      directions,
      benefits,
    });
  }

  handleClose() {
    this.setState({ open: false });
  }

  renderIngredientsList() {
    return (
      <div className="recipe-list">
        {this.state.ingredients.map((ingredient) => <li className="recipe-step">{ingredient}</li>)}
      </div>
    )
  }

  renderDirectionsList() {
    return (
      <div className="recipe-list">
        {this.state.directions.map((direction) => <li className="recipe-step">{direction}</li>)}
      </div>
    )
  }

  render() {
    const styles = {
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
    };
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    const customContentStyle = {
      width: '90%',
      maxWidth: 'none',
    };
    const customHeaderStyle = {
      fontSize: '35px',
      padding: '2%',
      textAlign: 'center',
      letterSpacing: '1.5px',
      fontWeight: '800',
      color: 'black',
    }
    return (
      <div>
        <Navigation />
        <div style={styles.root}>
          <GridList
            cellHeight={300}
            style={styles.gridList}
            cols={4}
            padding={20}
          >
            <Subheader
              style={customHeaderStyle}
            >
              || A Healthy Outside Starts From the Inside ||
            </Subheader>
            {recipes.map((tile) => (
              <GridTile
                className="recipe-picture"
                key={tile.img}
                title={tile.restrictions}
                subtitle={<span><b>{tile.title}</b></span>}
                onClick={this.handleOpen.bind(this, tile)}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
            <Dialog
              title={this.state.title}
              titleClassName="recipe-title"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
              contentStyle={customContentStyle}
            >
              <br />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <p className="recipe-ingredients">Ingredients: </p>
                        { this.renderIngredientsList() }
                    </ul>
                  </div>
                  <div className="col-md-5 offset-md-1">
                    <img
                      src={this.state.img}
                      width="100%"
                    />
                  </div>
                </div>
                <div className="row recipe-benefits">
                  <p className="recipe-header">Benefits: </p>
                  <p className="recipe-step">{this.state.benefits}</p>
                </div>
                <div className="row">
                  <ol>
                    <p className="recipe-header">Directions: </p>
                      { this.renderDirectionsList() }
                  </ol>
                </div>
              </div>
             </Dialog>
          </GridList>
        </div>
        <br />
      </div>
    )
  }
}

