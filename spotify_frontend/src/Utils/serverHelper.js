export const makeUnauthenticatedPOSTRequest = async (route, body) => {
  console.log("Sending request to:", backendURL + route);
  const response = await fetch(backendURL + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    const formattedResponse = await response.json();
    console.log("Response received:", formattedResponse);
    return formattedResponse;
  } else {
    const errorResponse = await response.text();
    alert("Invaid Credentials", errorResponse);
    throw new Error(`Request failed with status ${response.status}: ${errorResponse}`);
  }
};


export const makeAuthenticatedPOSTRequest = async (route, body) => {

  const token=getToken();
  
  console.log("Sending request to:", backendURL + route);
  const response = await fetch(backendURL + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":`Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
    const formattedResponse = await response.json();
    console.log("Response received:", formattedResponse);
    return formattedResponse;
  } else {
    const errorResponse = await response.text();
    console.error("Request failed:", errorResponse);
    throw new Error(`Request failed with status ${response.status}: ${errorResponse}`);
  }
};



  export const getToken = () => {
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return accessToken;
};





export const makeAuthenticatedGETRequest = async (route) => {

  const token=getToken();
  
  console.log("Sending request to:", backendURL + route);
  const response = await fetch(backendURL + route, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization":`Bearer ${token}`,
    },
  
  });


    const formattedResponse = await response.json();

    return formattedResponse;
 
};


