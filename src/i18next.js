(function(root) {

    //= i18next.shim.js

    var $ = root.jQuery || root.Zepto
      , i18n = {}
      , resStore = {}
      , currentLng
      , replacementCounter = 0
      , languages = []
      , initialized = false
      , sync = {}
      , conflictReference = null;



    //= i18next.exports.js
    //= i18next.sync.js
    //= i18next.defaults.js
    //= i18next.helpers.js
    //= i18next.init.js
    //= i18next.functions.js
    //= i18next.jquery.js
    //= i18next.translate.js
    //= i18next.detectLanguage.js
    //= i18next.plurals.js
    //= i18next.postProcessor.js
    //= i18next.postProcessor.sprintf.js
    //= i18next.api.js

})(typeof exports === 'undefined' ? window : exports);