import { useState } from "react";
import { validateInput } from "../functions/validateInput"
import { useInputStore } from "../store/useInputStore"
import { useSpaceStore } from "../store/useSpaceStore";
import { algParams} from "../functions/AlgParams";
import { geneticAlgorythm } from "../functions/geneticAlgorithm";
import { randomInt, randomEqus } from "../functions/service";

const  InputForm = () => {

    const [lSide, setLSide] = useState('1x + 1y + 1z')
    const [rSide, setRSide] = useState('100')
    const [warning, setWarning] = useState('')
    
    const setIsClicked = useInputStore(state => state.setIsClicked)
    const setShowCoord = useSpaceStore(state => state.setShowCoord)
    const setInputRawString = useInputStore(state => state.setInputRawString)
    const setSolution = useInputStore(state => state.setSolution)
    const solStore = useInputStore(state => state.solution)

    function generateHandler() {
        const index = randomInt(0,9)
        setLSide(randomEqus[index].lSide)
        setRSide(randomEqus[index].rSide)
    }

    let solution 
        function clickHandeler(lSide, rSide) {

        if(validateInput(lSide, rSide)) {

            setInputRawString(lSide + ' = ' + rSide)

            setWarning('')

            for (let n = 0; n < 10; n++) {
                    console.clear()

                    solution = geneticAlgorythm(lSide + ' - ' + rSide, algParams)

                    if(solution != undefined) break
                }
                if(solution===undefined) {
                    setWarning('Что-то пошло не так')

                    return
                }
                setSolution(solution)

                setIsClicked()
        }
        else {
            setWarning('Уравнение задано некорректно или не имеет решения')
        }
    }

    return ( 
        <>
        <div className="px-8">
        <div className="flex mb-8 space-x-4 justify-start items-center text-lg font-bold">          
            <input  
            //    className="block p-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               className="flex w-1/2 p-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               onChange={(e) => setLSide(e.target.value)}
               defaultValue = '1x + 1y + 1z'
               value = {lSide} 
               />
            <h1>=</h1>
            <input 
                // className="w-20 block p-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                className="w-1/4 p-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setRSide(e.target.value)}
                defaultValue = '100'
                value = {rSide}
                />   
        </div>

            <div className="mb-16 text-lg flex justify-start space-x-5">
                <button className="btn text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-lg text-sm font-bold px-5 py-2.5 text-center mr-2"
                        onClick={() => clickHandeler(lSide, rSide)}>Считать</button>
                <button 
                    // className="btn text-sm font-bold btn-outline bg-white border-2 border-blue-500 rounded-lg px-5 py-2.5 text-center mr-2"
                    className="btn text-sm font-bold btn-outline bg-white border-2 border-blue-500 rounded-lg px-5 py-2.5 text-center"
                    onClick={generateHandler}>Случайное</button>
            </div>

            <div className="flex items-center mb-8">
                <input onChange={setShowCoord} id="default-checkbox" type="checkbox" value="123" className="w-5 h-5 checked:bg-blue-500"></input>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-blue-500">Показывать координаты</label>
            </div>

            <h1 className="bg-red-200">{warning}</h1>

            <div className="text-lg text-gray-900 font-bold mb-8">
                <div className="text-lg text-gray-900 font-bold mb-3 flex justify-start space-x-2">
                <label>Решение: </label> 
                {(solStore.solution === undefined)? <></> : <h1> {`(${solStore.solution[0]}, ${solStore.solution[1]}, ${solStore.solution[2]})`}</h1>}
                </div>
                <div className="flex justify-start space-x-2">
                <label>Итерации: </label> 
                {(solStore.iterations === undefined)? <></> : <h1> {`${solStore.iterations}`}</h1>}
                </div>
            </div>

        </div>
        </>
     );
}
 
export default InputForm;