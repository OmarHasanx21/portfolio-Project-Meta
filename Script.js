window.addEventListener("load", () => {
  document.querySelector(".MainDiv").addEventListener("click", (e) => {
    const targetDiv = e.target.closest(".MainDiv > div");
    if (!targetDiv) return;

    const activeDiv = document.querySelector(".OnClickClass");
    if (activeDiv && activeDiv !== targetDiv) {
      activeDiv.classList.remove("OnClickClass");
    }
    targetDiv.classList.toggle("OnClickClass");
  });
});
