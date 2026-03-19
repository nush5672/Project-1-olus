// Get AQI color class
function getClassByParam(param, value) {

    value = parseFloat(value);

    switch (param) {

        case "pm":       // PM2.5
            if (value <= 30) return "good";
            else if (value <= 60) return "moderate";
            else return "hazardous";

        case "pmten":    // PM10
            if (value <= 50) return "good";
            else if (value <= 100) return "moderate";
            else return "hazardous";

        case "so2":
            if (value <= 40) return "good";
            else if (value <= 80) return "moderate";
            else return "hazardous";

        case "no2":
            if (value <= 40) return "good";
            else if (value <= 80) return "moderate";
            else return "hazardous";

        case "co":
            if (value <= 1) return "good";
            else if (value <= 2) return "moderate";
            else return "hazardous";

        case "co2":
            if (value <= 600) return "good";
            else if (value <= 1000) return "moderate";
            else return "hazardous";

        case "noise":
            if (value <= 50) return "good";
            else if (value <= 70) return "moderate";
            else return "hazardous";

        case "aqi":
            if (value <= 50) return "good";
            else if (value <= 100) return "moderate";
            else return "hazardous";

        default:
            return "";
    }
}

// Update individual cell with color
function updateCell(id, value) {
    let cell = document.getElementById(id);
    if (!cell) return;

    cell.innerText = value;

    // Remove old classes
    cell.classList.remove("good", "moderate", "hazardous");

    // Add new class
    cell.classList.add(getClassByParam(id, value));
}

// MAIN DATA FUNCTION (ONLY ONE)
function updateData() {

    let pm = (Math.random() * 15).toFixed(1);
    let pmten = (Math.random() * 16).toFixed(1);
    let so2 = (Math.random() * 80).toFixed(1);
    let no2 = (Math.random() * 80).toFixed(1);
    let co = (Math.random() * 15).toFixed(2);
    let co2 = (Math.random() * 400).toFixed(2);
    let noise = (Math.random() * 55).toFixed(1);

    let aqi = Math.max(pm, so2, no2, co * 10, noise / 2).toFixed(0);
    // Apply with colors
    updateCell("aqi", aqi);
    updateCell("pm", pm);
    updateCell("pmten", pmten);
    updateCell("so2", so2);
    updateCell("no2", no2);
    updateCell("co", co);
    updateCell("co2", co2);
    updateCell("noise", noise);

    // Temp (no color)
    let tempVal = (20 + Math.random() * 15).toFixed(1);
    let humVal = (40 + Math.random() * 40).toFixed(0);

    document.getElementById("temp").innerText =
        tempVal  ;
    document.getElementById("humidity").innerText =
         humVal ;
}

// REAL TIME CLOCK
function updateDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString("en-IN", {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    const time = now.toLocaleTimeString("en-IN");

    document.getElementById("date").innerText = date;
    document.getElementById("time").innerText = time;
}

// RUN EVERYTHING
setInterval(updateData, 2000);
setInterval(updateDateTime, 1000);

// Initial run
updateData();
updateDateTime();
