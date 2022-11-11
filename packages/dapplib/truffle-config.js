require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remind history give nasty forget slender'; 
let testAccounts = [
"0x17ed076e12728ef8519677e86fe163443cc6a82b0aaf88825dc1728a0ce11caa",
"0x03db969b93dd7a32dcc4e5ce44ca94328482854f181cb4b13e8975f5fcbf78f6",
"0x648af4ef5d10f409369992441c6798a2b1add91d229344865f08e0c7a272c601",
"0x41c6c77520c330e5318c9b37d92c1950421b02150cbbef638cc71b0eddf1ae9f",
"0x0b7d0ca399a69400b11800e675615ee265f741d1f57903e1ee4c603e7f5dcd21",
"0xa36f357be632cf9436a20387ea07a2a51d494e7e97dba4a441790781c2eddca8",
"0xac8a728203c92295ae07ece2b4d4abc0b37d59faf226b25ab88f6066c9413f1c",
"0x4861b33cb8a9141c209ff9b54ad431302bf9d4b2c55f089f648451c57c5a4d43",
"0x4ec7744dea6f410543997727f72bd7f70fe0b1e02aabdad5f8d22c237ede39a8",
"0x843d8e6f5ef1d582b100f3c6c31fedc985a57b57fdcc6f66bf9fc2c2f5b31ecd"
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


