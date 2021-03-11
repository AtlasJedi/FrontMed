export interface News {
    id: number,
    title: String,
    content: String[],
    summary: String,
    category: String,
    imgURL: any,
    readMoreURL: any,
    position: number,
    isActive: boolean,
    date: Date
}
