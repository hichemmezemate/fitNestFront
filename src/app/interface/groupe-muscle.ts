export interface GroupeMuscle {
    id: number,
    nom_muscle: string,
    image: string
    exercices: {
        id: number,
        nom_exercice: string,
        image: string
    }[]
}