import { create as createMathJs, all } from 'mathjs';
import { createInitialPopulation } from './createInitialPopulation';
import { evaluatePopulation} from './evaluatePopulation'
import { recombinatePopulation } from './recombinatePopulation'
import { mutatePopulation } from './mutatePopulation'
import { logPopulation,
        logSelectedPoulation,
        logMutatedPopulation,
        logEvaluations} from './logFunctions'

export function geneticAlgorythm(string, params){

    //console.clear()

    const config = { }
    const mathjs = createMathJs(all, config)
    //массив с оценками одного лучшего решения в каждом поколении
    const evaluations = []
    //массив в n лучшими решениями в каждом поколении
    const topSolutions = []

    const node = mathjs.parse(string)
    //массив с переменными
    const variables = node.filter((node) => {return node.isSymbolNode})
    
    const [x, y, z] = variables

    //возвращает parsed string из поля ввода
    const parsedEquation = mathjs.compile(string)
    
    //Уравнение из поля ввода + набор его переменных
    const equation = {
      parsedEquation : parsedEquation,
      scope : {
        [x] : 0,
        [y] : 0,
        [z] : 0
      }
    }

    //возвращает массив из 500 случайных решений [x,y,z]
    let population = createInitialPopulation(params)
    
    //начало основного цикла алгоритма
    for (let i = 0; i < params.iterations; i++) {
      
      console.log('ПОКОЛЕНИЕ',i + 1)
      //I
      //принимает на вход массив решений и уравнение;
      //оценивает каждое решение и возвращает массив
      //упорядоченных пар вида (оценка решения, решение)
      const evaluatedPopulation = evaluatePopulation(population, equation)
      
      //фиксирует лучший результат в пределах поколения
      evaluations.push(evaluatedPopulation[0][0])

      //II
      //массив из n лучших решений
      const selectedPopulation = evaluatedPopulation.filter((_, index)=>
      {return index < params.top}).map(item =>{return item[1]})
      
      //фиксирует n лучших решений в каждом поколении
      topSolutions.push(selectedPopulation)

      console.log('Лушчее решение предыдущего поколения:', evaluatedPopulation[0][0])
      if (evaluatedPopulation[0][0] <= params.error) {
        console.clear()
        console.log('Ответ:',evaluatedPopulation[0][1], 'итераций: ', i + 1)
        
        //возвращает массив n лучших решений в каждом поколении
        return {
          topSolutions : topSolutions,
          iterations : i + 1,
          solution : evaluatedPopulation[0][1]
        }
      }

    logPopulation(params, population)

    logSelectedPoulation(params, selectedPopulation)
    
    //III
    //новое поколение решений, полученное из n лучших в прошлом поколении
    population = recombinatePopulation(selectedPopulation, equation, params)

    //IV
    //мутирует решения в новом поколении
    mutatePopulation(population, params, i)

    logMutatedPopulation(params, population)

    console.log('==================================================')
    }
    return undefined
   //geneticAlgorythm(string, params)
    //logEvaluations(params, evaluations) 
  }