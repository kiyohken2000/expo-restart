import * as Updates from 'expo-updates'

module.exports.Restart = ()=>{
  Updates.reloadAsync()
}