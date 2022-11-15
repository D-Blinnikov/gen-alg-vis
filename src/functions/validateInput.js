import {gcdMultipleNumbers} from './euclideanAlgorithm';
import { create as createMathJs, all } from 'mathjs';

const config = { }
const mathjs = createMathJs(all, config)

export function validateInput(lSide, rSide) {

    try {
        const node = mathjs.parse(lSide)
        
        const constants = node.filter((node) => {return node.isConstantNode})
        const variables = node.filter((node) => {return node.isSymbolNode})
        
        if( variables.length != 3){
            console.log('Проблема 1')
            return false
        }
        
        const x = constants[0].value
        const y = constants[1].value
        const z = constants[2].value

        const gcd = gcdMultipleNumbers(x,y,z)
        
        if(mathjs.evaluate(rSide) % gcd === 0){
            console.log('Проблема 2')
            return true
        }
        return false
    } 
    catch (error) {
        console.log('Проблема 3')
        return false
    }
    
}