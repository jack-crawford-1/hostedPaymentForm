const TOKEN_URL = process.env.TOKEN_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const ENV_MESSAGE = process.env.ENV_MESSAGE;

console.log("(.ENV)", ENV_MESSAGE);

export async function getAccessToken() {
  try {
    const params = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      scope: "read write",
    });

    const response = await fetch(TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error_description || "Failed to get access token"
      );
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error.message);
    throw new Error("Failed to get access token");
  }
}
