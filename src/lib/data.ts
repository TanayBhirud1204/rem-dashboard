export interface Assignment {
  id: string;
  title: string;
  filename: string;
  path: string;
  filetype: "pdf" | "docx" | "folder";
  score: number;
  complexity: number; // for mock metrics
  date: string;
  subfiles?: {
    id: string;
    filename: string;
    path: string;
    filetype: string;
  }[];
}

export interface Student {
  id: string;
  name: string;
  rollNo: string;
  avatarUrl?: string;
  completionRate: number;
  assignments: Assignment[];
}

export const studentsData: Record<string, Student> = {
  "om-badade": {
    id: "om-badade",
    name: "Om Badade",
    rollNo: "22108A0026",
    completionRate: 85,
    assignments: [
      {
        id: "a1-1",
        title: "Assignment 1.1",
        filename: "Assignment 1.1 - REM-1.pdf",
        path: "/assignments-om_badade/Assignment 1.1 - REM-1.pdf",
        filetype: "pdf",
        score: 92,
        complexity: 75,
        date: "2023-09-12"
      },
      {
        id: "a1-2",
        title: "Assignment 1.2",
        filename: "Assignment 1.2- REM-1.pdf",
        path: "/assignments-om_badade/Assignment 1.2- REM-1.pdf",
        filetype: "pdf",
        score: 88,
        complexity: 80,
        date: "2023-09-19"
      },
      {
        id: "a-9-om",
        title: "Assignment 9",
        filename: "Assignment 9",
        path: "#",
        filetype: "folder",
        score: 99,
        complexity: 92,
        date: "2023-12-05",
        subfiles: [
          {
            id: "a-9-1-om",
            filename: "Quiz_Assn 9 (1).docx",
            path: "/assignments-tanay_bhirud/ASSIGNMENT 9/Quiz_Assn 9 (1).docx",
            filetype: "docx"
          },
          {
            id: "a-9-2-om",
            filename: "Summary_Assn 9 (2).docx",
            path: "/assignments-tanay_bhirud/ASSIGNMENT 9/Summary_Assn 9 (2).docx",
            filetype: "docx"
          },
          {
            id: "a-9-3-om",
            filename: "WhatsApp Image 2026-03-31 at 23.28.30 (1).jpeg",
            path: "/assignments-tanay_bhirud/ASSIGNMENT 9/WhatsApp Image 2026-03-31 at 23.28.30 (1).jpeg",
            filetype: "jpeg"
          },
          {
            id: "a-9-4-om",
            filename: "flashcards (1).csv",
            path: "/assignments-tanay_bhirud/ASSIGNMENT 9/flashcards (1).csv",
            filetype: "csv"
          }
        ]
      }
    ]
  },
  "tanay-bhirud": {
    id: "tanay-bhirud",
    name: "Tanay Bhirud",
    rollNo: "22108A0042",
    completionRate: 100,
    assignments: [
      {
        id: "a1-1v",
        title: "Assignment 1",
        filename: "assignment 1 REM 22108A0042.pdf",
        path: "/assignments-tanay_bhirud/assignment 1 REM 22108A0042.pdf",
        filetype: "pdf",
        score: 95,
        complexity: 85,
        date: "2023-09-15"
      },
      {
        id: "a2-1",
        title: "Assignment 2",
        filename: "Assignment 2 Tanaybhirud 22108A0042 (1).docx",
        path: "/assignments-tanay_bhirud/Assignment 2 Tanaybhirud 22108A0042 (1).docx",
        filetype: "docx",
        score: 98,
        complexity: 90,
        date: "2023-10-05"
      },
      {
        id: "a1-b",
        title: "Assignment 1B",
        filename: "assignment REM 1b 22108A0042.pdf",
        path: "/assignments-tanay_bhirud/assignment REM 1b 22108A0042.pdf",
        filetype: "pdf",
        score: 94,
        complexity: 82,
        date: "2023-09-22"
      },
      {
        id: "a-4",
        title: "Assignment 4",
        filename: "rem assignment_4.pdf",
        path: "/assignments-tanay_bhirud/rem assignment_4.pdf",
        filetype: "pdf",
        score: 96,
        complexity: 88,
        date: "2023-11-10"
      },
      {
        id: "a-9",
        title: "Assignment 9",
        filename: "Assignment 9",
        path: "#",
        filetype: "folder",
        score: 99,
        complexity: 92,
        date: "2023-12-05",
        subfiles: [
          {
            id: "a-9-1",
            filename: "Quiz_Assn 9 (1).docx",
            path: "/assignments-tanay_bhirud/ASSIGNMENT 9/Quiz_Assn 9 (1).docx",
            filetype: "docx"
          },
          {
            id: "a-9-2",
            filename: "Summary_Assn 9 (2).docx",
            path: "/assignments-tanay_bhirud/ASSIGNMENT 9/Summary_Assn 9 (2).docx",
            filetype: "docx"
          },
          {
            id: "a-9-3",
            filename: "WhatsApp Image 2026-03-31 at 23.28.30 (1).jpeg",
            path: "/assignments-tanay_bhirud/ASSIGNMENT 9/WhatsApp Image 2026-03-31 at 23.28.30 (1).jpeg",
            filetype: "jpeg"
          },
          {
            id: "a-9-4",
            filename: "flashcards (1).csv",
            path: "/assignments-tanay_bhirud/ASSIGNMENT 9/flashcards (1).csv",
            filetype: "csv"
          }
        ]
      }
    ]
  }
};
