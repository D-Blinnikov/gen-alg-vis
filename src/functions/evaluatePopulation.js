export function evaluatePopulation(population, equation){
    const evaluatedPopulation = []
    
    for (let i = 0; i < population.length; i++) {
      equation.scope.x = population[i][0];
      equation.scope.y = population[i][1];
      equation.scope.z = population[i][2];

      //для отбора решений все они должны быть положительными
      const evaluation = 
      Math.abs(equation.parsedEquation.evaluate(equation.scope))
      
      evaluatedPopulation.push([evaluation, population[i]])
    }
    
      evaluatedPopulation.sort((a, b) => a[0] - b[0])

      return evaluatedPopulation
  }