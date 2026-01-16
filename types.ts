export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
      success: boolean;
    }
  | undefined;

export type Grade = {
  id: string;
  name: string;
  order: number;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type Technology = {
  id: string;
  name: string;
  order: number;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type Question = {
  id: string;
  gradeId: string;
  typeId: string;
  text: string;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type Answer = {
  id: string;
  questionId: string;
  text: string;
  code: string | null;
  resourceLink: string;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type QuestionWithData = {
  question: Question;
  answer: Answer;
  grade: Grade;
  technology: Technology;
};
