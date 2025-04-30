import { toast } from "sonner";

export async function editTeachers(values: any, id: string) {
  console.log("Submitting values:", values);
  const API_URL = `http://127.0.0.1:3000/api/v1/master-data/teachers/${id}`;
  console.log(API_URL);

  await toast.promise(
    fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error: ${response.status} - ${errorText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Major updated successfully:", data);
      })
      .catch((error) => {
        console.error("Submission error:", error);
        throw error;
      }),
    {
      loading: "Submitting form...",
      success: "Form submitted successfully!",
      error: "Failed to submit the form. Please try again.",
    }
  );
}
