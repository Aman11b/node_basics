// url module -> work with url safely

// https://api.example.com/users?page=2&limit=10

function runUrlDemo(): void {
  // how to create url object from string
  const apiUrl = new URL(
    "https://api.example.com/users?page=2&limit=10&sort=latest",
  );
  console.log(
    "URL->",
    apiUrl.href,
    "\nprotocol-> ",
    apiUrl.protocol,
    "\nhostname-> ",
    apiUrl.hostname,
    "\npathname-> ",
    apiUrl.pathname,
    "\nsearch query",
    apiUrl.search,
  );

  //   query
  const page = apiUrl.searchParams.get("page");
  const limit = apiUrl.searchParams.get("limit");
  const sort = apiUrl.searchParams.get("sort");

  console.log("Search query->", page, limit, sort);

  //   update params

  apiUrl.searchParams.set("page", "4");
  apiUrl.searchParams.set("limit", "30");
  apiUrl.searchParams.set("sort", "ascending");

  console.log(
    "Updated Search query->",
    apiUrl.searchParams.get("page"),
    apiUrl.searchParams.get("limit"),
    apiUrl.searchParams.get("sort"),
  );
  console.log("updated url->", apiUrl.href);

  //   query params
  const queryString = new URLSearchParams({
    search: "node js",
    page: "1",
    limit: "5",
  });

  console.log("query string -> ", queryString.toString());
}

runUrlDemo();
