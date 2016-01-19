import Adapter from 'ember-data/adapter';
import Ember from "ember";
import config from '../config/environment';

export default Adapter.extend({
	host: config.SOLR_HOST,
	namespace: config.SOLR_CORE
});
