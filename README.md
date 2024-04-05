# Decentralized Payment System

## Description

This project is a decentralized payment system designed to facilitate fast and efficient transactions of Ethereum between users. It leverages the power of blockchain technology to ensure security and transparency. Users can send Ethereum directly to other users or scan a QR code to pay.

The main features of the system include:

- Sending Ethereum to other users.
- Scanning a QR code to pay.
- Viewing transaction history.

## Screenshots
![image](https://github.com/Rahulbiya/Majorproject/assets/83511327/dd1d892f-92e4-4c72-914e-de0ad1365b24)
![WhatsApp Image 2024-04-05 at 15 46 40_b5472b91](https://github.com/Rahulbiya/Majorproject/assets/83511327/8e14a807-51ff-44a4-99c9-20be758c953f)
![WhatsApp Image 2024-04-05 at 15 47 00_dccf6740](https://github.com/Rahulbiya/Majorproject/assets/83511327/548d2024-1122-48d7-b769-f54e8b1cfd77)
![image](https://github.com/Rahulbiya/Majorproject/assets/83511327/44bd8cbc-167d-4fc3-a67f-8017f7a626a3)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/gaurav9117/techack-Athena.git`
2. Navigate into the project directory: `cd YOUR_REPOSITORY`
3. Install the dependencies: `npm install`
4. Install qr code scanner: `npm i react-qr-code`
5. Start the server: `npm run dev`
6. To add the override configuration to your package.json file in client, you can add the resolutions field. This is how you can do it:
   `
   "overrides": {
    "react-qr-reader": {
      "react": "$react",
      "react-dom": "$react-dom"
    }
  }
`


## Usage

Once the server is running, open your browser and navigate to `localhost:PORT`, replacing `PORT` with the port number your application is running on.

On the homepage, enter the recipient's Ethereum address and the amount of Ether to send. Click on "Send" to confirm the transaction.

To scan a QR code, click on "Start Scan". Point your camera at the QR code and wait for the system to automatically fill in the recipient's address and the amount to send.

## Contributing

Contributions are welcome. Please feel free to submit a pull request or open an issue to discuss improvements or bugs.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
