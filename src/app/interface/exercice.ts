export interface Exercice {
    id: number,
    nom_exercice: string,
    image: string
    muscleGroupe: {
        id: number,
        nom_muscle: string
    }[]
}
