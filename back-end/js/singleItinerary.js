document.addEventListener('DOMContentLoaded', () => {
    const deleteBtn = document.querySelectorAll("deleteBtn");
    const editBtn = document.querySelectorAll("editBtn");
    const backBtn = document.getElementById("backBtn");
    

    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute('data-id');
            const backEndPoint = `/itinerary/${id}`;
            fetch(backEndPoint, { method: "DELETE" })
                .then((response) => response.json())
                .then((responseJson) => window.location.href = responseJson.redirect)
                .catch((error) => console.log(error));
        });
    });

    editBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            //console.log("Edit button clicked");
            const id = e.target.getAttribute("data-id");
            document.getElementById('singleIntinerary').hidden = true;
            document.getElementById('editItin').hidden = false;
            document.getElementById("editForm").action = `/itinerary/${id}?_method=PUT`;
        });

    backBtn.addEventListener("click", (e) => {
            window.location.href = "/itinerary";
        });

    const saveBtn = document.getElementById("saveBtn");
    saveBtn.addEventListener("click", (e) => {
        console.log("Save button clicked");
        document.getElementById('editItin').hidden = true;
        document.getElementById('singleIntinerary').hidden = false;
    });


    })
});
