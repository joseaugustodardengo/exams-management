export interface IOption {
  id: string;
  key: "a" | "b" | "c" | "d";
  value: string;
  correct: boolean;
}

export interface IQuestion {
  id: string;
  statement: string;
  options: IOption[];
}

export type ExamType = "ONLINE" | "OFFLINE";

export interface IExam {
  name: string;
  description: string;
  type: ExamType;
  questions?: IQuestion[];
}
