import { Faculty, Role, Term, WeekDay } from 'components/shared/constants/timetable.constants';

export interface ProfessorPreference {
  id: CourseID;
  preference: number;
}

export interface CourseID {
  subject: Faculty;
  code: string;
  term: Term;
}

export interface Professor {
  id: number;
  username: string;
  password: string;
  role: Role;
  preferences: ProfessorPreference;
  active: boolean;
}

export interface MeetingTime {
  Day: WeekDay;
  StartTime: string;
  EndTime: string;
}

export interface Course {
  CourseID: CourseID;
  hoursPerWeek: number;
  capacity: number;
  professors: Professor[];
  startDate: string;
  endDate: string;
  meetingTimes: MeetingTime[];
}

export interface CalendarItem {
  courseId: string;
  teacherId: number;
  text: string;
  startDate: Date;
  endDate: Date;
  teacherName: string;
  recurrenceRule: string;
}