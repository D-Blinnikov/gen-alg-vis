import { logTriplets } from "./logFunctions"
import { randomInt } from './service'

export function recombinatePopulation(selectedPopulation, equation, params){
      
    const newGeneration = []
    //массив троек вида: индекс 1-го решения, индекс 2-го решения,
    //индекс переменной внутри решений
    const triplets = []
    
    for (let i = 0; i < params.size; i++) {

    //выбор случайной переменной внутри решения
    let varXYZ
    //выбор случайной пары решений
    let parent1Index
    let parent2Index

    const checkP1P2 = a => [parent1Index, parent2Index, varXYZ].every((v, i) => v === a[i])
    const checkP2P1 = a => [parent2Index, parent1Index, varXYZ].every((v, i) => v === a[i])
 
    while (true) {
      varXYZ = randomInt(0,2)
      parent1Index = randomInt(0, 4)
      parent2Index = randomInt(0, 4)
      if (parent2Index != parent1Index) {
        break
      }
      //условие на неповторяемость троек
      if (!triplets.some(checkP1P2)) {
        break
      }
      if (!triplets.some(checkP2P1)){
        break
      }
      triplets.push([parent1Index, parent2Index, varXYZ])
        break;      
    }
         
    //иначе изменения будут внесены в массив, из которого
    //решения забираются на скрещивание
    const parent1 = [...selectedPopulation[parent1Index]]
    const parent2 = [...selectedPopulation[parent2Index]]

    //решения меняются переменными
    const a = parent1[varXYZ]
    parent1[varXYZ] = parent2[varXYZ]
    parent2[varXYZ] = a
    
    equation.scope.x = parent1[0]
    equation.scope.y = parent1[1]
    equation.scope.z = parent1[2]
    const parent1Eval = 
    Math.abs(equation.parsedEquation.evaluate(equation.scope))
    
    equation.scope.x = parent2[0]
    equation.scope.y = parent2[1]
    equation.scope.z = parent2[2]
    const parent2Eval = 
    Math.abs(equation.parsedEquation.evaluate(equation.scope))

    //в новое поколение попадает лучшее решение
    if (parent1Eval < parent2Eval){
      newGeneration.push(parent1)
    }
    else{
      newGeneration.push(parent2)
    }  
    
    }
    
    triplets.sort(( a, b ) =>  (a[0] - b[0]))

    logTriplets(params, triplets)
 
    return newGeneration
  }
