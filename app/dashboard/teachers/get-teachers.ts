import axios from "axios";

export default async function getData(): Promise<[apiResponse]> {
  console.log("test");
  const res = await axios.get('http://127.0.0.1:3000/api/v1/master-data/teachers');

  return res.data.data.teachers.map((subject: any) => ({
    id: subject.id.toString(),
    name: subject.name,
    email: subject.email,
    gender: subject.gender,
    teacher_id: subject.teacher_id,
    user_id: subject.user_id,
    DoB: subject.DoB,
    PoB: subject.PoB,
    isActive: subject.isActive,
    createdAt: subject.createdAt,
    updatedAt: subject.updatedAt,
  }));
}
