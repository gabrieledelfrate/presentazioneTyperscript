//TypeScript è un linguaggio di programmazione che estende JavaScript introducendo il concetto di tipi statici. Ciò significa che puoi specificare il tipo di dati di una variabile durante la dichiarazione, e il compilatore TypeScript controlla che vengano rispettate tali specifiche durante la compilazione.

//Ecco un esempio di base:

// Dichiarazione di una variabile di tipo stringa
let nome: string = "John";

// Dichiarazione di una variabile di tipo numero
let eta: number = 25;

// Funzione che accetta due numeri e restituisce la loro somma
function somma(a: number, b: number): number {
    return a + b;
}

// Utilizzo della funzione
let risultato: number = somma(5, 10);
console.log(risultato); // Output: 15

//In questo esempio, nome è dichiarato come una stringa e eta come un numero. La funzione somma accetta due parametri di tipo numero e restituisce la loro somma.

//Un vantaggio di TypeScript è che fornisce un'esperienza di sviluppo più sicura, aiutando a evitare errori comuni legati ai tipi di dati durante lo sviluppo. Il codice TypeScript viene poi compilato in JavaScript per l'esecuzione nel browser o in un ambiente Node.js.

//È anche possibile utilizzare tipi più complessi come array, oggetti e persino definire tipi personalizzati. Ad esempio:

// Dichiarazione di un array di numeri
let numeri: number[] = [1, 2, 3, 4];

// Dichiarazione di un oggetto con tipi specifici
let persona: { nome: string, eta: number } = { nome: "Alice", eta: 30 };

// Definizione di un tipo personalizzato
type Colore = "rosso" | "verde" | "blu";
let colorePreferito: Colore = "verde";

//Questi sono solo alcuni aspetti di TypeScript. Il suo sistema di tipi offre molte funzionalità avanzate, come le interfacce, le classi, i generics e molto altro, che possono essere utili in progetti più complessi.

//1. Type Inference:
//La Type Inference è la capacità di TypeScript di dedurre automaticamente i tipi delle variabili in base al contesto. Ad esempio:

let numero = 42; // TypeScript deduce automaticamente che 'numero' è di tipo 'number'

//In questo caso, non abbiamo specificato esplicitamente il tipo di numero, ma TypeScript lo inferisce come number in base al valore assegnato.

//2. Tipo 'any':
//Il tipo any è utilizzato per indicare che una variabile può assumere qualsiasi tipo di valore. È spesso utilizzato quando non si conosce o non si vuole specificare il tipo di una variabile. Tuttavia, l'uso eccessivo di any può compromettere la sicurezza del tipo di TypeScript.

let variabile: any = "Posso essere qualsiasi cosa!";

//3. Tipo Union:
//Il tipo Union permette a una variabile di assumere uno dei vari tipi specificati. Si utilizza il simbolo | per indicare un'unione di tipi.

let risultatoA: number | string;
risultatoA = 42;      // Valido
risultatoA = "Hello"; // Valido

//4. Tipo Tuple:
//Una Tuple è un tipo di dato che consente di rappresentare un array con un numero fisso di elementi, ciascuno con un tipo specifico. Ad esempio:

let coppia: [string, number];
coppia = ["Valore", 42];

//5. Interfacce:
//Le interfacce in TypeScript sono utilizzate per dichiarare contratti per gli oggetti. Definiscono la struttura dei dati, specificando i tipi di proprietà e metodi che un oggetto deve avere.

// Definizione di un'interfaccia per un oggetto "Persona"
interface Persona {
    nome: string;
    eta: number;
    saluta(): void;
}

// Implementazione dell'interfaccia
class PersonaImplementazione implements Persona {
    nome: string;
    eta: number;

    constructor(nome: string, eta: number) {
        this.nome = nome;
        this.eta = eta;
    }

    saluta(): void {
        console.log(`Ciao, sono ${this.nome}!`);
    }
}

// Creazione di un'istanza della classe PersonaImplementazione
let persona1: Persona = new PersonaImplementazione("Marco", 28);
persona1.saluta();

//Qui, l'interfaccia Persona dichiara che un oggetto di tipo Persona deve avere le proprietà nome e eta, entrambe di tipo specificato. Inoltre, deve avere un metodo saluta che non restituisce alcun valore. La classe PersonaImplementazione implementa questa interfaccia.

//6. Types vs Interfaces:
//Entrambi type e interface sono utilizzati per definire tipi personalizzati. La principale differenza è che interface è principalmente utilizzata per dichiarare contratti, mentre type può essere utilizzato per creare tipi più complessi, come unioni, intersezioni e tipi primitivi.

type TipoPrimitivo = number | string;
interface Punto { x: number; y: number; }

//7. Generics:
//I generics consentono di scrivere codice flessibile e riutilizzabile, consentendo a una funzione o a una classe di lavorare con vari tipi di dati senza specificarli in anticipo.

// Funzione generica per invertire un array
function invertiArray<T>(array: T[]): T[] {
    return array.reverse();
}

// Utilizzo della funzione generica
let arrayNumeri: number[] = [1, 2, 3, 4, 5];
let arrayInvertito: number[] = invertiArray(arrayNumeri);
console.log(arrayInvertito); // Output: [5, 4, 3, 2, 1]

//In questo esempio, la funzione invertiArray è generica (<T>) e può essere utilizzata con array di qualsiasi tipo. Nel caso specifico, viene utilizzata con un array di numeri.

//8. Classi:
//Le classi in TypeScript permettono di definire oggetti e le loro caratteristiche. Possono includere costruttori, metodi e proprietà.

// Definizione di una classe "Auto"
class Auto {
    marca: string;
    modello: string;

    constructor(marca: string, modello: string) {
        this.marca = marca;
        this.modello = modello;
    }

    mostraDettagli(): string {
        return `${this.marca} ${this.modello}`;
    }
}

// Creazione di un'istanza della classe Auto
let miaAuto: Auto = new Auto("Toyota", "Corolla");
console.log(miaAuto.mostraDettagli()); // Output: Toyota Corolla

//In questo esempio, la classe Auto ha due proprietà (marca e modello) e un metodo (mostraDettagli). L'istanza miaAuto viene creata utilizzando il costruttore della classe.