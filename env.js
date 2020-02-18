// module.exports = {
//     env: {
//         apiKey: "AIzaSyDiC_8EUUMy5UlH7s6NpdesoI5ZhKr74Q0",
//         authDomain: "dfs-analyzer-a6cf9.firebaseapp.com",
//         databaseURL: "https://dfs-analyzer-a6cf9.firebaseio.com",
//         projectId: "dfs-analyzer-a6cf9",
//         storageBucket: "dfs-analyzer-a6cf9.appspot.com",
//         messagingSenderId: "329791984458",
//         appId: "1:329791984458:web:1b393fe1a77cc4462f67b3",
//         measurementId: "G-5W3HD3T46F"
//       },
//   }


// Responsible for setting environment variables.
// Note: this isn't strictly required for this example – you can
// inline your Firebase config or set environment variables howevever
// else you wish – but it's a convenient way to make sure the private
// key doesn't end up in source control.

const fs = require('fs')

const { NODE_ENV } = process.env
if (!NODE_ENV) {
  throw new Error(
    'The NODE_ENV environment variable is required but was not specified.'
  )
}

// Set env vars from appropiate `.env` files. We're following the
// file structure used in create-react-app and documented in the
// Ruby dotenv. See:
// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotEnvPath = './.env'
const dotEnvFiles = [
  `${dotEnvPath}.${NODE_ENV}.local`,
  `${dotEnvPath}.${NODE_ENV}`,
  // Don't include `.env.local` for the test environment.
  NODE_ENV !== 'test' && `${dotEnvPath}.local`,
  dotEnvPath,
].filter(Boolean)

dotEnvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    // eslint-disable-next-line global-require
    require('dotenv').config({
      path: dotenvFile,
    })
  }
})