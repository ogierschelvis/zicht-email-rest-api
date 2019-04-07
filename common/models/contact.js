'use strict';

module.exports = function(Contact) {
  Contact.disableRemoteMethodByName('prototype.__get__accessTokens');
  Contact.disableRemoteMethodByName('prototype.__create__accessTokens');
  Contact.disableRemoteMethodByName('prototype.__delete__accessTokens');
  Contact.disableRemoteMethodByName('prototype.__findById__accessTokens');
  Contact.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  Contact.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  Contact.disableRemoteMethodByName('prototype.__count__accessTokens');
  Contact.disableRemoteMethodByName('prototype.verify');
  Contact.disableRemoteMethodByName('changePassword');
  Contact.disableRemoteMethodByName('setPassword');
  Contact.disableRemoteMethodByName('resetPassword');
  Contact.disableRemoteMethodByName('upsertWithWhere');
  Contact.disableRemoteMethodByName('updateAll');
  Contact.disableRemoteMethodByName('login');
  Contact.disableRemoteMethodByName('logout');
  Contact.disableRemoteMethodByName('replaceOrCreate');
  Contact.disableRemoteMethodByName('findOne');
  Contact.disableRemoteMethodByName('count');
  Contact.disableRemoteMethodByName('confirm');
  Contact.disableRemoteMethodByName('replace');
  Contact.disableRemoteMethodByName('replaceById');
  Contact.disableRemoteMethodByName('createChangeStream');
  Contact.disableRemoteMethodByName('exists');
};
