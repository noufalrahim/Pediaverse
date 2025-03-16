/*export type InterestType = {
    label: string;
    value: string;
};*/

/*export type SkillType = {
    label: string;
    value: string;
};*/
/*export type StudentDataType = {
    fullName: string;
    dateOfBirth: Date;
    gender: 'MALE' | 'FEMALE' | 'OTHER',
    city: string;
    email: string;
    rollno: string;
    instituteName: string;
    course: string;
    educations: {
        instituteName: string;
        rollNo: string;
        course: string;
        startDate: null;
        endDate: null;
        currentlyStudying: boolean;
        cgpa: string;
    }
    //medium: 'ENGLISH' | 'MALAYALAM' | 'OTHER',
    //board: 'CBSE' | 'ICSE' | 'STATE' | 'OTHER',
    startDate: Date;
    endDate: Date;
    cgpa: number;
    skills: string[];
    interests: string[];
    dream: string;
};
*/
export type StudentDataType = {
    fullName: string;
    dateOfBirth: Date;
    gender: 'MALE' | 'FEMALE' | 'OTHER';
    city: string;
    email: string;
    rollno: string;
    instituteName: string;
    course: string;
    educations: {
        instituteName: string;
        rollNo: string;
        course: string;
        startDate: Date | null;
        endDate: Date | null;
        currentlyStudying: boolean;
        cgpa: number | string;
    }[];
    cgpa: number;
    skills: string[];
    interests: string[];
    dream: string;
};


export type StudentType = {
    id?: string;
    name: string;
    rollNo: string;
    course: string;
    age: number;
    mail: string;
    phoneNumber: string;
    courseYear?: number;
    location: string;
}