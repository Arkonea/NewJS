export default triangulo (

    constructor(Base, Altura) {
        this.Base = Base;
        this.Altura = Altura;
    }

    calcularareatriangulo() {
        
        return (this.Base * this.Altura) / 2;
    }
)