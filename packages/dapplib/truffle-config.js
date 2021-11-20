require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot ecology riot situate universe gentle light army genre'; 
let testAccounts = [
"0x3b7c449bfa7ba597b92c066428c6f4544e88baf484d9d46f2f15b8b0c52d6036",
"0xa5253abac3dab5d30b28cf8a9cd5a35de28258ed9c3adb9ef7984a39b4a5c357",
"0xc02767cc742a3dce359e0700a2ea65ac7976592ada87c7a1fa35260a2d16fd22",
"0xe2161ae295b3a4921bb2bb07c3143011e16e20c0f71dbea8f5b1deb86257f2b2",
"0xf1807f9fdade522851f31a5e6258f30e46041e01799c64fcf159fe20ac12b592",
"0x79a0030be7ed00abdbb34a5995f9ee62184610ab773407ceab7d5be2614510ae",
"0x89e7d37b46b7b134f761dc65b338a2c49f2a4d5821eb0a4fecc100aa70dc7094",
"0xe8543129a030e31b73b58cbaed65ac3cea3318f00d43d361ebe3f621de89b8b9",
"0x3ccb0c5e77e936ca70c3b1637b562e5708629bb32bb9942e9f3dbaf9b1b7e7ba",
"0xb7588bf2ab8fa8957f679be51219b98819a28c44fbe358055cb8e1e2dbd72996"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


