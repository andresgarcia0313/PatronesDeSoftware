/*
Composite
Este patrón compone objetos en estructuras de árbol para representar jerarquías parte-todo.

*/

class Component {
    constructor(name) {
        this.name = name;
    }

    display() {
        throw new Error("Método display() debe ser implementado");
    }
}

class Leaf extends Component {
    display() {
        console.log(this.name);
    }
}

class Composite extends Component {
    constructor(name) {
        super(name);
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    display() {
        console.log(this.name);
        this.children.forEach(child => child.display());
    }
}

const root = new Composite('Root');
const branch1 = new Composite('Branch 1');
const leaf1 = new Leaf('Leaf 1');
const leaf2 = new Leaf('Leaf 2');

root.add(branch1);
branch1.add(leaf1);
branch1.add(leaf2);

root.display();
// Root
// Branch 1
// Leaf 1
// Leaf 2
