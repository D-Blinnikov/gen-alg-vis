import { randomInt } from './service'

export function createInitialPopulation(params)
    {
        const population = []
        for (let i = 0; i < params.size; i++) {
        population[i] = [randomInt(-params.xyzMax, params.xyzMax),
                         randomInt(-params.xyzMax, params.xyzMax),
                         randomInt(-params.xyzMax, params.xyzMax)]
      }
      return population
    }