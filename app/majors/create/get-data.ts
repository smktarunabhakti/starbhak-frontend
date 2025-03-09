const fetchData = async function () {
  try {
    const response = await fetch(
      "http://127.0.0.1:3000/api/v1/master-data/majors"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch majors");
    }
    const result = await response.json();

    // ngambil data dalam array schoolYear dalam respons JSON
    console.log(result.data.schoolYear);
    return result.data.schoolYear;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export default fetchData;
