const resolve = require('ezito-utils/server/fs/resolve');
const localConfig = resolve('eac.config.json',{},false);
const objectMerge = require('ezito-utils/public/object/merge');
if(localConfig instanceof Error ){
    module.exports = require('./config.json');
}
else {
    module.exports = objectMerge(require('./config.json') , require(localConfig))
}