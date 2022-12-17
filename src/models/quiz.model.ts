export interface Quiz {
    id: string,
    title: string,
    // questions?: Question[],
    description: string,
    createdAt: string,
    createdBy: string,
    published: boolean,
    poster?: JSX.Element
}

export interface Question {
    id: string,
    title: string,
    answers: Answer[],
    createdAt: string,
    createdBy: string
}

export interface Answer {
    id: string,
    content: string,
    createdAt: string,
    createdBy: string
}