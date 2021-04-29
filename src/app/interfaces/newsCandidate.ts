export interface NewsCandidate {
    title: String,
    content: String[],
    summary: String,
    category?: String,
    imgURL?: any,
    readMoreURL?: any,
    position?: number,
    isActive?: boolean,
    date?: Date
}