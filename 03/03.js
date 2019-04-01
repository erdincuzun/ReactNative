setTimeout(function() {
    console.log('Promise: 1')
    setTimeout(function() {
      console.log('Promise: 2')
    }, 1000)
  }, 1000)

  //Promise nesnesi üzerinden çözüm
  const bekle = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
  
  bekle().then(() => {
    console.log('Promise 1')
    return bekle()
  })
  .then(() => console.log('Promise 2'))

 