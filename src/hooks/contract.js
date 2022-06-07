import { useState } from "react";
import Web3 from "web3";
import { CONTACT_ABI, CONTACT_ADDRESS } from "../assets/contracts/EnterprisesContract";


export const contract = async () => {
    const [account, setAccount] = useState();
    const [contactList, setContactList] = useState();
    const [contacts, setContacts] = useState([]);

    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const accounts = await web3.eth.tasks();
    setAccount(accounts[0]);
    const contactList2 = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
    setContactList(contactList);
    const counter = await contactList2.methods.count().call();
    for (var i = 1; i <= counter; i++) {
        const contact = await contactList2.methods.contacts(i).call();
        setContacts((contacts) => [...contacts, contact]);
    }

    // return { account, contactList, contacts };

}