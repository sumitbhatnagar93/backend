/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

/**
 * Datatable
 */
import DataTable from 'laravel-vue-datatable';
Vue.use(DataTable);

/**
 * Preloader
 */

import Vue from 'vue';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// Init plugin
Vue.use(Loading);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('home-component', require('./components/homeComponent.vue').default);
Vue.component('home-banner',require('./components/global/home-banner.vue').default);
Vue.component('footer-component',require('./components/global/footerComponent.vue').default);
Vue.component('search-component',require('./components/global/searchComponent.vue').default);
/**
 * Vendor related templates
 */
Vue.component('add-product', require('./components/vendor/AddProductComponent.vue').default);
Vue.component('add-subscription-product', require('./components/vendor/TiffinComponent.vue').default);
Vue.component('add-service', require('./components/vendor/AddFoodService.vue').default);
Vue.component('cookrey-vendors', require('./components/vendor/AllVendors.vue').default);
Vue.component('cookrey-vendors-web', require('./components/vendorComponent.vue').default);
Vue.component('single-vendor-web', require('./components/singleVendorComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
