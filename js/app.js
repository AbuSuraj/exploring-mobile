const loadPhone = async (searchText, dataLimit) => {
  const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data, dataLimit);
};
const displayPhone = (phones, dataLimit) => {
  console.log(phones);
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.innerHTML = "";

  const showall = document.getElementById("show-all");
  if (dataLimit && phones.length > 10) {
    console.log(phones.length);
    phones = phones.slice(0, 10);
    showall.classList.remove("d-none");
  } else {
    console.log(phones.length);
    showall.classList.add("d-none");
  }

  const noPhoneMessage = document.getElementById("no-phone-found");
  if (phones.length === 0) {
    noPhoneMessage.classList.remove("d-none");
    toggler(false);
  } else {
    noPhoneMessage.classList.add("d-none");
  }

  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
    <div class="card p-4">
              <img src="${phone.image}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
    `;
    phonesContainer.appendChild(phoneDiv);
  });
  toggler(false);
};
const searchProcess = (dataLimit) => {
  toggler(true);
  const inputField = document.getElementById("input-field");
  const item = inputField.value;
  inputField.value = "";
  console.log("kita or");
  loadPhone(item, dataLimit);
};
const searchPhone = () => {
  searchProcess(10);
};

const toggler = (isLoading) => {
  const togglerStatus = document.getElementById("toggler-status");
  if (isLoading) {
    togglerStatus.classList.remove("d-none");
  } else {
    togglerStatus.classList.add("d-none");
  }
};
document.getElementById("btn-showAll").addEventListener("click", function () {
  //   console.log("ki problem");
  searchProcess();
});
