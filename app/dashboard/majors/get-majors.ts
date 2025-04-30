import axios from "axios";

export default async function getData(): Promise<[apiResponse]> {
  console.log("test");
  const res = await axios.get('http://127.0.0.1:3000/api/v1/master-data/majors');

  return res.data.data.schoolYear.map((subject: any) => ({
    id: subject.id,
    majors_id: subject.majors_id,
    majors_head_id: subject.majors_head_id,
    name: subject.name,
    isActive: subject.isActive,
    createdAt: subject.createdAt,
    updatedAt: subject.updatedAt,
  }));
}
