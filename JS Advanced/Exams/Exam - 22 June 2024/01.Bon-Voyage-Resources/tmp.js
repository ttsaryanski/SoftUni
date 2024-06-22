function solve() {
    const form = document.querySelector("form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const fromDateInput = document.getElementById("from-date");
    const toDateInput = document.getElementById("to-date");
    const nextButton = document.getElementById("next-btn");
    const infoList = document.querySelector(".info-list");
    const confirmList = document.querySelector(".confirm-list");
    const statusElement = document.getElementById("status");
 
    let editMode = false;
 
    nextButton.addEventListener("click", function (event) {
      event.preventDefault();
 
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const fromDate = new Date(fromDateInput.value);
      const toDate = new Date(toDateInput.value);
      
      if (!isValidVacation(firstName, lastName, fromDate, toDate)) {
        return;
      }
 
      const vacationInfo = `
        <li>
          <span>Name: ${firstName} ${lastName}</span>
          <span>From: ${formatDate(fromDate)}</span>
          <span>To: ${formatDate(toDate)}</span>
        </li>
      `;
 
      if (!editMode) {
        infoList.innerHTML += vacationInfo;
        clearForm();
        disableNextButton();
        enableEditAndContinueButtons();
      } else {
        updateVacationInfo(vacationInfo);
        editMode = false;
        disableEditAndContinueButtons();
        enableNextButton();
      }
    });
 
    function isValidVacation(firstName, lastName, fromDate, toDate) {
      if (!firstName || !lastName || !fromDate || !toDate) {
        return false;
      }
      return fromDate < toDate;
    }
 
    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `<span class="math-inline">\{year\}\-</span>{month}-${day}`;
    }
 
    function clearForm() {
      firstNameInput.value = "";
      lastNameInput.value = "";
      fromDateInput.value = "";
      toDateInput.value = "";
    }
 
    function disableNextButton() {
      nextButton.disabled = true;
    }
 
    function enableNextButton() {
      nextButton.disabled = false;
    }
 
    function enableEditAndContinueButtons() {
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", function () {
        editMode = true;
        nextButton.click();
      });
 
      const continueButton = document.createElement("button");
      continueButton.textContent = "Continue";
      continueButton.addEventListener("click", function () {
        confirmList.innerHTML = infoList.innerHTML;
        confirmList.innerHTML += `
          <li>
            <button id="confirm-btn">Confirm</button>
            <button id="cancel-btn">Cancel</button>
          </li>
        `;
        infoList.innerHTML = "";
 
        const confirmButton = document.getElementById("confirm-btn");
        confirmButton.addEventListener("click", function () {
          removeFromConfirmList(this.parentElement);
          statusElement.textContent = "Vacation Requested";
          statusElement.classList.add("vacation-confirmed");
        });
 
        const cancelButton = document.getElementById("cancel-btn");
        cancelButton.addEventListener("click", function () {
          removeFromConfirmList(this.parentElement);
          statusElement.textContent = "Cancelled Vacation";
          statusElement.classList.add("vacation-cancelled");
        });
 
        disableEditAndContinueButtons();
      });
 
      form.append(editButton, continueButton);
    }
 
    function disableEditAndContinueButtons() {
      const existingButtons = form.querySelectorAll("button:not([type='submit'])");
      existingButtons.forEach((button) => button.remove());
    }
 
    function updateVacationInfo(vacationInfo) {
      infoList.innerHTML = vacationInfo;
    }
 
    function removeFromConfirmList(listItem) {
      confirmList.removeChild(listItem);
      enableNextButton();
    }
 
    statusElement.addEventListener
}  