export const contractAddress = '0x250dee4b60780759624788Cfe5C7fEA4c441A4E5'

export const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "firstName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "lastName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "phone",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "userAddress",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "experience",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "grades",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "skills",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "languages",
                "type": "string"
            }
        ],
        "name": "WorkerCreated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "workerCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "workers",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "firstName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "lastName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "phone",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "userAddress",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "experience",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "grades",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "skills",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "languages",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_firstName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_lastName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_phone",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_userAddress",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_experience",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_grades",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_skills",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_languages",
                "type": "string"
            }
        ],
        "name": "createWorker",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]