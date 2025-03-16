/*export type InterestType = {
    label: string;
    value: string;
};*/

/*export type SkillType = {
    label: string;
    value: string;
};*/
export type StudentDataType = {
    fullName: string;
    dateOfBirth: Date;
    gender: 'MALE' | 'FEMALE' | 'OTHER',
    city: string;
    class12Mark: string;
    medium: 'ENGLISH' | 'MALAYALAM' | 'OTHER',
    board: 'CBSE' | 'ICSE' | 'STATE' | 'OTHER',
    skills: string[];
    interests: string[];
    dream: string;
};