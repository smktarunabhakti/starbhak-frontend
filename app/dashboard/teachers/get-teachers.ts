import axios from "axios";

export default async function getData(): Promise<[apiResponse]> {
  console.log("test");
  const res = await axios.get('http://127.0.0.1:3000/api/v1/master-data/teachers');

  return res.data.data.teachers.map((subject: any) => ({
    id: subject.id.toString(),
    name: subject.name,
    email: subject.email,
    gender: subject.gender,
    teachers_id: subject.teachers_id.toString(),
    DoB: subject.DoB,
    PoB: subject.PoB,
    isActive: subject.isActive.toString(),
    createdAt: subject.createdAt,
    updatedAt: subject.updatedAt,
  }));
}
