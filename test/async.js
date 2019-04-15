function doubleAfter2seconds (num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2*num)
    })
  })
}

async function testResult() {
  let result = await doubleAfter2seconds(30)
  console.log(result)
  console.log('我在之后执行啊');
  
}
testResult();

async function getResult() {
  try {

  }
  catch {

  }
}