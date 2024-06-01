document.addEventListener('DOMContentLoaded', () => {
    const deleteBtns = document.querySelectorAll("#deleteBtn");
    const editBtns = document.querySelectorAll("#editBtn");

    deleteBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute('data-id');
            const backEndPoint = `/itinerary/${id}`;
            fetch(backEndPoint, { method: "DELETE" })
                .then((response) => response.json())
                .then((responseJson) => window.location.href = responseJson.redirect)
                .catch((error) => console.log(error));
        });
    });

    editBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute('data-id');
            document.getElementById('showItin').style.display = "none";
            document.getElementById('editItin').style.display = "block";
            document.getElementById('editForm').action = `/itinerary/${id}?_method=PUT`;
        });
    });

    const saveBtnElement = document.getElementById("saveBtn");
    saveBtnElement.addEventListener("click", (e) => {
        document.getElementById('showItin').style.display = "block";
        document.getElementById('editItin').style.display = "none";
    });
});
