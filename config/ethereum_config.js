module.exports = {

    'host_ip': 'https://kovan.infura.io/v3/15c293ed8a454faea527b1f9553bbf5e',
    'wallet_address': '0xA8112AC2f02FA71f737929D18671B72E8609B78d',
    'wallet_address_private_key': 'F393AE6672532CA2D0521563E5409AA4D59D42912BEBCC680CA95E743DF481F8',

    'contract_address': '0xbe4b14c01a1c6d72a5e43a125ca919971815b76b',

    'contract_abi':[
    {
        "constant": false,
        "inputs": [
            {
                "name": "doctor_id",
                "type": "address"
            }
        ],
        "name": "grantAccessToDoctor",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_email",
                "type": "string"
            },
            {
                "name": "_contact",
                "type": "string"
            },
            {
                "name": "_clenicAddress",
                "type": "string"
            }
        ],
        "name": "setDoctor",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_email",
                "type": "string"
            },
            {
                "name": "_contact",
                "type": "string"
            },
            {
                "name": "_patientAddress",
                "type": "string"
            },
            {
                "name": "_report",
                "type": "string"
            }
        ],
        "name": "setPatient",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getDoctor",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getPatient",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "pat",
                "type": "address"
            }
        ],
        "name": "getPatientInfoForDoctor",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
],

};