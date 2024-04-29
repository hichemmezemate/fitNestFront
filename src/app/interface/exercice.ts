export interface Exercice {
    id: number,
    nom_exercice: string,
    image: string
    description: string
    muscleGroupe?: {
        id: number,
        nom_muscle: string
    }[]
}
