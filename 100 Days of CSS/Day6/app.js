const prof = document.querySelector(".profile-img");
const inner = document.querySelector(".inner");
const outer = document.querySelector(".outer");

prof.addEventListener("mouseover", () => {
	inner.classList.remove("inactive");
	inner.classList.add("active");
	outer.classList.remove("inactive");
	outer.classList.add("active");
});
prof.addEventListener("mouseout", () => {
	inner.classList.remove("active");
	inner.classList.add("inactive");
	outer.classList.remove("active");
	outer.classList.add("inactive");
});
