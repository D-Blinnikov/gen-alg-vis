import { randomInt } from './service'

export function mutatePopulation(population, params, i){
    const arrOfIndex = []
    for (let j = 0; j < params.mutationRate; j++) {
     
      let index
      while(true){
        index = randomInt(0, population.length - 1)
        if(!arrOfIndex.includes(index)){
          arrOfIndex.push(index)
          break
        }
      }

      let variable = randomInt(0, 2)
      let randomAdd
        // if(i > 20){
        //   randomAdd = randomInt(1, params.mutationScopeMinor)
        //   population[index][variable] = 
        //   population[index][variable] + Math.pow(1, i)*randomAdd
        // }
        // else{
        //   randomAdd = randomInt(5, params.mutationScopeMajor)
        //   population[index][variable] = 
        //   population[index][variable] +  Math.pow(1, i)*randomAdd
        // }

        if(i > 3){
          randomAdd = randomInt(-params.mutationScopeMinor, params.mutationScopeMinor)
          population[index][variable] = 
          population[index][variable] + randomAdd
        }
        else{
          randomAdd = randomInt(-params.mutationScopeMajor, params.mutationScopeMajor)
          population[index][variable] = 
          population[index][variable] + randomAdd
        }
      }
    }