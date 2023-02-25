import { FormEvent } from "react";

export interface FuncaoProps {
    valorDigitado?: (event: FormEvent) => void
    nome?: string
}