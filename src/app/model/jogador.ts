import { Stefamon } from "./stefamon";

export interface Jogador {
    id: number,
    nickname: string,
    password: string,
    saldo?: number,
    stefamons: Stefamon[]
}