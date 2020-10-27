import * as dataBusiness from "./data-business.js";
import * as accountBusiness from "./account-business.js";


function getClientElement(client) {
  const allAccounts = dataBusiness.getAccounts();
  const clientAccounts = [];
  for (let account of allAccounts) {
    if (account.clientId === client.id) {
      clientAccounts.push(account);
    }
  }

  const node = getClientNode(client);
  const ul = accountBusiness.getClientAccountsElement(clientAccounts);

  node.appendChild(ul);

  return node;
}

function getClientNode(client) {
  const li = document.createElement("li");
  li.append(getFullName(client));

  return li;
}

function getFullName(client) {
  return client.first_name + " " + client.last_name;
}

export {
  getClientElement,
  getClientNode,
  getFullName
};