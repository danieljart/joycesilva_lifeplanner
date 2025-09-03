export interface Lead {
  nome: string;
  email: string;
  telefone: string;
  interesse: "seguro_vida" | "previdencia" | "investimentos" | "college" | "geral";
}
