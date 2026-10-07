/* =========================================
   RAJATHUB — RESOURCE DATABASE
   ========================================= */

let rajatHubResources = [];

/* Load resources */
async function loadResources() {
    try {
        const response = await fetch("data/resources.json");

        if (!response.ok) {
            throw new Error("Could not load resources");
        }

        rajatHubResources = await response.json();

        console.log(
            `RajatHub: ${rajatHubResources.length} resources loaded`
        );

    } catch (error) {
        console.error(
            "RajatHub resource loading error:",
            error
        );
    }
}

/* Start */
loadResources();
