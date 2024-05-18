/*
Define una familia de algoritmos, encapsula cada uno, y los hace intercambiables.
*/

class Context {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(data) {
        return this.strategy.execute(data);
    }
}

class StrategyA {
    execute(data) {
        return `Estrategia A: ${data}`;
    }
}

class StrategyB {
    execute(data) {
        return `Estrategia B: ${data}`;
    }
}

const context = new Context();

context.setStrategy(new StrategyA());
console.log(context.executeStrategy("Datos")); // Estrategia A: Datos

context.setStrategy(new StrategyB());
console.log(context.executeStrategy("Datos")); // Estrategia B: Datos
