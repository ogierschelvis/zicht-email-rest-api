'use strict';

module.exports = function(Contact) {
  Contact.disableRemoteMethodByName('prototype.__get__accessTokens');
  Contact.disableRemoteMethodByName('prototype.__create__accessTokens');
  Contact.disableRemoteMethodByName('prototype.__delete__accessTokens');
  Contact.disableRemoteMethodByName('prototype.__findById__accessTokens');
  Contact.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  Contact.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  Contact.disableRemoteMethodByName('prototype.__count__accessTokens');
};
