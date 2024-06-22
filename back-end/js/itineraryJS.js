
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
        if (!validateForm('editForm')) {
            e.preventDefault();
            alert("Please fill in all the fields.");
        }
    });

    const createSaveBtn = document.getElementById("createSaveBtn");
    createSaveBtn.addEventListener("click", (e) => {
        if (!validateForm('createForm')) {
            e.preventDefault();
            alert("Please fill in all the fields.");
        }
    });

    // Function to validate form
    function validateForm(formId) {
        let isValid = true;
        const form = document.getElementById(formId);
        const inputs = form.querySelectorAll("input[required],select[required]");
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add("input-error"); // Optionally add a class to highlight the error
            } else {
                input.classList.remove("input-error");
            }
        });

        // Validate rental options
        const rentalYes = form.querySelector('input[name="Rental"][value="Yes"]');
        const rentalNo = form.querySelector('input[name="Rental"][value="No"]');
        if (!rentalYes.checked && !rentalNo.checked) {
            isValid = false;
            rentalYes.parentElement.classList.add("input-error");
            rentalNo.parentElement.classList.add("input-error");
        } else {
            rentalYes.parentElement.classList.remove("input-error");
            rentalNo.parentElement.classList.remove("input-error");

            // If rental is "No", populate RentalType and RentalCost with "NA"
            if (rentalNo.checked) {
                document.getElementById("RentalType").value = "NA";
                document.getElementById("RentalCost").value = "NA";
            }
        }

        return isValid;
    }
});
