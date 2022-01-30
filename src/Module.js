console.log('module');

async function start() {
   return  await Promise.resolve('ass work')
}
start().then(console.log)