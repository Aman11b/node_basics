// web scrapping

const API_URL = "https://jsonplaceholder.typicode.com/users/1";

type PlaceHolderUser = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};

type PublicUser = {
  id: number;
  name: string;
  email: string;
  company: string;
};

function tranformUser(rawDate: PlaceHolderUser): PublicUser {
  return {
    id: rawDate.id,
    name: rawDate.name,
    email: rawDate.email,
    company: rawDate.company.name,
  };
}

async function fetchExternalUser(): Promise<void> {
  // help canelling fetch request which is in progress
  //   pass signal to fetch to cancel it
  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort();
  }, 5000);

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      signal: controller.signal,
    });

    if (!response.ok) {
      console.log(`Upstream api failed with http ${response.status}`);
      return;
    }

    const rawUser = (await response.json()) as PlaceHolderUser;

    const user = tranformUser(rawUser);

    console.log(user);
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("request api taking a long time");
      return;
    }

    const message = error instanceof Error ? error.message : "unknown error";
    console.error("External API failed", message);
  } finally {
    clearTimeout(timer);
  }
}

fetchExternalUser();
