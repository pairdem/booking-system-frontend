import { useEffect } from "react";

const OauthSuccess = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get("token");
    console.log("Token from URL:", tokenFromUrl);

    if (!tokenFromUrl) {
      console.error("No token found in URL.");
      setTimeout(() => {
        window.location.href = "/book";
      }, 60000);
      return;
    }

    const fstate = localStorage.getItem("fstate");
    console.log("Local fstate:", fstate);

    fetch(
      "https://booking-system-backend-1.onrender.com/api/v1/oauth/google/exchange",
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_data_token: tokenFromUrl,
          fstate: fstate, // optional, but add it if your backend checks it
        }),
      },
    )
      .then(async (res) => {
        const data = await res.json();
        console.log("ThenExchange response:", data);

        if (data.success) {
          localStorage.setItem("access_token", data.details.token);
          localStorage.setItem(
            "user_data",
            JSON.stringify(data.details.user_data),
          );

          const redirectPath = localStorage.getItem("redirect_path") || "/";
          localStorage.removeItem("redirect_path");
          setTimeout(() => {
            window.location.href = redirectPath;
          }, 60000);
        } else {
          console.error("Else Exchange failed:", data);
          setTimeout(() => {
            window.location.href = "/book";
          }, 60000);
        }
      })
      .catch((err) => {
        console.error("Catch  Exchange error:", err);
        setTimeout(() => {
          window.location.href = "/book";
        }, 60000);
      });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <p className="text-gray-700 text-lg">Signing in with Google...</p>
    </div>
  );
};

export default OauthSuccess;
