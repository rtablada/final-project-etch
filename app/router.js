import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('login');

  this.route('signup');
  this.route('profile');
  this.route('friends');
  this.route('memories');
  this.route('etch');
});

export default Router;
