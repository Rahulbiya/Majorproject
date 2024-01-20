# Decentralized Payment System

## Description

This project is a decentralized payment system designed to facilitate fast and efficient transactions of Ethereum between users. It leverages the power of blockchain technology to ensure security and transparency. Users can send Ethereum directly to other users or scan a QR code to pay.

The main features of the system include:

- Sending Ethereum to other users.
- Scanning a QR code to pay.
- Viewing transaction history.

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
