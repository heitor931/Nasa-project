const URL_API = "http://localhost:5000/v1";

async function httpGetPlanets() {
  // TODO: Once API is ready.
  const response = await fetch(`${URL_API}/planets`);
  return await response.json();
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response = await fetch(`${URL_API}/launches`);
  const fetchedLaunches = await response.json()
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  })
}

async function httpSubmitLaunch(launch) {

  try {
    return await fetch(`${URL_API}/launches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    })
    
  } catch (error) {
    return {
      ok: false,
    }
  }
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  try {
    return await fetch(`${URL_API}/launches/${id}`, {
      method: 'delete',
    })
    
  } catch (error) {
    console.log(error);
    return {
      ok: false
    }
  }
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
