import axios from "axios";

export default async function getData(): Promise<[apiResponse]> {
  console.log("test");
  const res = await axios.get('http://127.0.0.1:3000/api/v1/master-data/users');

  return res.data.data.schoolYear.map((subject: any) => ({
    id: subject.id.toString(),
    name: subject.name,
    email: subject.email,
    password: subject.password,
    roleId: subject.roleId,
    isActive: subject.isActive,
    createdAt: subject.createdAt,
    updatedAt: subject.updatedAt,
  }));
}
