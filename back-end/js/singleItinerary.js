document.addEventListener('DOMContentLoaded', () => {
    const deleteBtn = document.getElementById("deleteBtn");
    const editBtn = document.getElementById("editBtn");
    const backBtn = document.getElementById("backBtn");

    deleteBtn.addEventListener("click", (e) => {
        const id = e.target.getAttribute('data-id');
        const backEndPoint = `/itinerary/${id}`;
        fetch(backEndPoint, { method: "DELETE" })
            .then((response) => response.json())
            .then((responseJson) => window.location.href = responseJson.redirect)
            .catch((error) => console.log(error));
    });

    editBtn.addEventListener("click", (e) => {
        document.getElementById('editItin').style.display = "block";
    });

    backBtn.addEventListener("click", (e) => {
        window.location.href = "/itinerary";
    });

    const saveBtn = document.getElementById("saveBtn");
    saveBtn.addEventListener("click", (e) => {
        document.getElementById('editItin').style.display = "none";
    });
});
