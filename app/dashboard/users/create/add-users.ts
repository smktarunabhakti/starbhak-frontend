import { toast } from "sonner";

export async function addUsers(values: any) {
  const API_URL =
    "https://coral-suitable-physically.ngrok-free.app/api/v1/master-data/users/";

  await toast.promise(
    fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Form submitted successfully:", data);
      }),
    {
      loading: "Submitting form...",
      success: "Form submitted successfully!",
      error: "Failed to submit the form. Please try again.",
    }
  );
}
