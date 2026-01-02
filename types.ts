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
};

export type Phase = {
  id: string;
  name: string;
  order: number;
};

export type Section = {
  id: string;
  phaseId: string;
  name: string;
  orderInPhase: number;
};

export type Question = {
  id: string;
  sectionId: string;
  gradeId: string;
  text: string;
  orderInSection: number;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type Tag = {
  id: string;
  name: string;
  slug: string;
  color: string | null;
};

export type QuestionTag = {
  questionId: string;
  tagId: string;
};

export type Answer = {
  id: string;
  questionId: string;
  text: string;
  createdAt: Date | null;
  updatedAt: Date | null;
};
