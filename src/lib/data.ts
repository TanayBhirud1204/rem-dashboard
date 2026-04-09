export interface Assignment {
  id: string;
  title: string;
  filename: string;
  path: string;
  filetype: "pdf" | "docx";
  score: number;
  complexity: number; // for mock metrics
  date: string;
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
        id: "a1-1v2",
        title: "Assignment 1 (Alternate)",
        filename: "assignment 1 REM 22108A0042 (1).pdf",
        path: "/assignments-tanay_bhirud/assignment 1 REM 22108A0042 (1).pdf",
        filetype: "pdf",
        score: 95,
        complexity: 80,
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
        id: "a2-2",
        title: "Assignment 2 (Alternate)",
        filename: "Assignment 2 Tanaybhirud 22108A0042 (2).docx",
        path: "/assignments-tanay_bhirud/Assignment 2 Tanaybhirud 22108A0042 (2).docx",
        filetype: "docx",
        score: 98,
        complexity: 85,
        date: "2023-10-06"
      }
    ]
  }
};
