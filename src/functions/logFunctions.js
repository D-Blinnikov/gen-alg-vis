export function logPopulation(params, population){
    if(params.logPopulation === true){
        console.log('Текущая популяция:')
        population.map((item, index)=>{console.log(index,item)})
        console.log('--------------------------------------------------')
      }
}

export function logSelectedPoulation(params, selectedPopulation){
    if (params.logSelected === true){
        const sortedselectedPopulation = [...selectedPopulation]
        sortedselectedPopulation.sort(( a, b ) =>  (a[0] - b[0]))
        console.log('Отобранные:')
        sortedselectedPopulation.map((item, index)=>{console.log(index,item)})
        console.log('--------------------------------------------------')
      }
}

export function logMutatedPopulation(params, population){
    if (params.logMutated === true){
        console.log('C мутацией:')
        population.map((item, index)=>{console.log(index,item)})
        console.log('--------------------------------------------------')
      }
}

export function logEvaluations(params, evaluations){
    if(params.logEvaluations)
    evaluations.forEach((element => console.log(element)))
}

export function logTriplets(params, triplets){
    if (params.logTriplets === true){
      console.log('Тройки:')
      triplets.map((item)=>{console.log(item)})
      console.log('--------------------------------------------------')
    }
  }