//import * as clientBusiness from "./js/client-business.js";
import * as clientListBusiness from "./js/client-list-business.js";
//import * as styleBusiness from "./js/style-business.js";
//import * as accountBusiness from "./js/account-business.js";

/*
clientBusiness.getClientElement();
clientBusiness.getClientNode();
clientBusiness.getFullName();

clientListBusiness.printClientsAccounts();

styleBusiness.getNodeStyle();

accountBusiness.getClientAccountsElement();
accountBusiness.getClientAccountsElement();
*/

window.onload = function() {
    clientListBusiness.printClientsAccounts();
}