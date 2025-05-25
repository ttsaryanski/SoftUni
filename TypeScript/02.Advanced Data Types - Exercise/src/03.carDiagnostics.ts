type CarBody = { material: string; state: string };
type Tyres = { airPressure: number; condition: string };
type Engine = { horsepower: number; oilDensity: number };

type Diagnostics = { partName: string; runDiagnostics: () => string };

function car(
    carBody: CarBody & Diagnostics,
    tyres: Tyres & Diagnostics,
    engine: Engine & Diagnostics
) {
    console.log("work");
}

car(
    {
        material: "aluminum",
        state: "scratched",
        partName: "Car Body",
        runDiagnostics() {
            return this.partName;
        },
    },
    {
        airPressure: 30,
        condition: "needs change",
        partName: "Tires",
        runDiagnostics() {
            return this.partName;
        },
    },
    {
        horsepower: 300,
        oilDensity: 780,
        partName: "Engine",
        runDiagnostics() {
            return this.partName;
        },
    }
);
