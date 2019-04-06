'use strict';

module.exports = function(Contact) {
  Contact.disableRemoteMethod("create", true);
};
