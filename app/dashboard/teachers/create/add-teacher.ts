import { toast } from "sonner";

export async function addTeachers(values: any) {
  console.log("Submitting values:", values);
  const API_URL = "http://127.0.0.1:3000/api/v1/master-data/teachers";

  await toast.promise(
    fetch(API_URL, {
      method: "POST",
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
        console.log("Form submitted successfully:", data);
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

