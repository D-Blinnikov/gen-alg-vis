class AlgParams {
    constructor(top, size) {
        
        this.size = size;
        //считает минимально возможное число решений в популяции в зависимости от количества
        //выбираемых для скрещивания
        // this.minSize = function () {
        //     return 3 * math.factorial((top)) / (2 * math.factorial((top - 2)));
        // };
        //к-во лучших решений, выбираемых на каждой итерации для скрещивания
        this.top = top; 
        //макс к-во итераций (поколений) алгоритма
        this.iterations = 50 * top; 
        //в диапазоне [0, xyzMax] генерируются скаляры для решений
        this.xyzMax = 10 * top; 
        //в диапазоне [0, crsorIndex] выбираются индексы решений для скрещивания
        this.crsorIndex = top - 1;
        //к-во мутировавших решений  
        this.mutationRate = Math.round(size / 1); 
        this.mutationScopeMajor = 100; //было 50
        this.mutationScopeMinor = 5; //было 15
        this.error = 0;
        this.logPopulation = false;
        this.logSelected = false; //default - true
        this.logTriplets = false; //default - true
        this.logDubli = false; //default - true
        this.logMutated = false; //default - true
        this.logEvaluations = false; //default - true
    }
}

export const algParams = new AlgParams(5, 10)