import React, { Component } from 'react';
import Navigation from './navbar';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { recipes } from './recipes-seed';
import oauth from '../../public/oauth';

var CLIENT_ID = oauth.client_id;
var API_KEY = oauth.drive_api;

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    // authorizeButton.onclick = handleAuthClick();
    // signoutButton.onclick = handleSignoutClick();
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  console.log('here is the signin: ', isSignedIn);
  if (isSignedIn) {
    console.log('listing the files here')
    listFiles();
  } else {
    console.log('this didnt work');
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print files.
 */
function listFiles() {
  console.log('listfiles is being called inside: ', gapi);
  gapi.client.drive.files.list({
    'pageSize': 10,
    'fields': "nextPageToken, files(id, name)"
  }).then(function(response) {
    console.log('here is the response: ', response);
    appendPre('Files:');
    var files = response.result.files;
    if (files && files.length > 0) {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        appendPre(file.name + ' (' + file.id + ')');
      }
    } else {
      appendPre('No files found.');
    }
  });
}

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

  componentWillMount() {
    handleClientLoad();
  }

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
        <button id="authorize-button" onClick={handleAuthClick}>Authorize</button>
        <button id="signout-button" onClick={handleSignoutClick}>Sign Out</button>
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

