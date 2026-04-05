document.addEventListener("DOMContentLoaded", function () {
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-tag-filter]"));
  var postCards = Array.prototype.slice.call(document.querySelectorAll("[data-post-tags]"));
  var emptyState = document.querySelector(".tag-filter-empty");

  if (!filterButtons.length || !postCards.length) {
    return;
  }

  function setActiveButton(activeTag) {
    filterButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-tag-filter") === activeTag;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function filterPosts(tag) {
    var visibleCount = 0;

    postCards.forEach(function (card) {
      var tagList = (card.getAttribute("data-post-tags") || "").split("|").filter(Boolean);
      var isVisible = tag === "all" || tagList.indexOf(tag) !== -1;
      card.hidden = !isVisible;
      if (isVisible) {
        visibleCount += 1;
      }
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }

    setActiveButton(tag);

    if (window.location.hash !== "#" + tag) {
      history.replaceState(null, "", tag === "all" ? window.location.pathname : "#" + tag);
    }
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterPosts(button.getAttribute("data-tag-filter"));
    });
  });

  var initialTag = window.location.hash ? window.location.hash.slice(1) : "all";
  var validTag = filterButtons.some(function (button) {
    return button.getAttribute("data-tag-filter") === initialTag;
  }) ? initialTag : "all";

  filterPosts(validTag);
});
