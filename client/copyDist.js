const { copy, remove } = require("fs-extra");

async function copyDist(){
    await remove('./android/app/src/main/assets/public/');
    await copy('./dist/','./android/app/src/main/assets/public/');
}

copyDist();
