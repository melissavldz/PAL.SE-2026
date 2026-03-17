document.addEventListener("DOMContentLoaded", function () {
  const NS = "http://www.w3.org/2000/svg";

  const iconMap = {
    "container-3.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<rect x='3' y='3' width='8' height='8' rx='1.5'></rect><rect x='13' y='3' width='8' height='5' rx='1.5'></rect><rect x='13' y='10' width='8' height='11' rx='1.5'></rect><rect x='3' y='13' width='8' height='8' rx='1.5'></rect>"
    },
    "container-2.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<circle cx='9' cy='8' r='3'></circle><circle cx='16.5' cy='9.5' r='2.5'></circle><path d='M3.5 18.5c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5'></path><path d='M14 18.5c.2-1.9 1.8-3.4 3.8-3.4 1.2 0 2.3.5 3 1.3'></path>"
    },
    "container.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<path d='M6 3.5h9l4 4V20a.5.5 0 0 1-.5.5h-12A.5.5 0 0 1 6 20z'></path><path d='M15 3.5V8h4'></path><path d='M8.5 12h7M8.5 15h7'></path>"
    },
    "vector.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<path d='M9 6 3 12l6 6'></path><path d='M3 12h10'></path><path d='M14 5h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4'></path>"
    },
    "vector-2.svg": {
      viewBox: "0 0 24 24",
      markup: "<path d='m9 6 6 6-6 6'></path>"
    },
    "check.png": {
      viewBox: "0 0 24 24",
      markup: "<path d='m6 12 4 4 8-8'></path>"
    },
    "image.png": {
      viewBox: "0 0 24 24",
      markup: "<path d='m6 12 4 4 8-8'></path>"
    },
    "check.svg": {
      viewBox: "0 0 24 24",
      markup: "<path d='m6 12 4 4 8-8'></path>"
    },
    "iconify-icon.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<rect x='4' y='3' width='16' height='18' rx='2'></rect><path d='M8 7h8M8 11h2M14 11h2M8 15h2M14 15h2'></path>"
    },
    "vector-3.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<circle cx='12' cy='12' r='9'></circle><path d='M12 10v6M12 7.5h.01'></path>"
    },
    "image.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<rect x='6' y='4' width='12' height='16' rx='2'></rect><path d='M9 9h6M9 13h6M9 17h4'></path>"
    },
    "vector-4.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<circle cx='12' cy='12' r='9'></circle><path d='m8 12 2.5 2.5 5.5-5.5'></path>"
    },
    "margin.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<circle cx='12' cy='12' r='9'></circle><path d='m8 12 2.5 2.5 5.5-5.5'></path>"
    },
    "margin-2.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<circle cx='12' cy='12' r='9'></circle><path d='M12 7v5l3 2'></path>"
    },
    "vector-5.svg": {
      viewBox: "0 0 24 24",
      markup: "<path d='M4 6h16'></path><path d='M7 11h10'></path><path d='M10 16h4'></path>"
    },
    "container-4.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<circle cx='12' cy='12' r='9'></circle><path d='m8.5 12 2.5 2.5 4.5-4.5'></path>"
    },
    "container-5.svg": {
      viewBox: "0 0 24 24",
      markup: "<circle cx='12' cy='12' r='9'></circle><path d='M12 7v6M12 16.5h.01'></path>"
    },
    "container-6.svg": {
      viewBox: "0 0 24 24",
      markup: "<circle cx='12' cy='12' r='9'></circle><path d='M8 12h8'></path>"
    },
    "container-7.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<circle cx='12' cy='12' r='9'></circle><path d='m8.5 12 2.5 2.5 4.5-4.5'></path>"
    },
    "data.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<circle cx='7' cy='12' r='1.5'></circle><circle cx='12' cy='12' r='1.5'></circle><circle cx='17' cy='12' r='1.5'></circle>"
    },
    "data-2.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<circle cx='7' cy='12' r='1.5'></circle><circle cx='12' cy='12' r='1.5'></circle><circle cx='17' cy='12' r='1.5'></circle>"
    },
    "data-3.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<circle cx='7' cy='12' r='1.5'></circle><circle cx='12' cy='12' r='1.5'></circle><circle cx='17' cy='12' r='1.5'></circle>"
    },
    "data-4.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<circle cx='7' cy='12' r='1.5'></circle><circle cx='12' cy='12' r='1.5'></circle><circle cx='17' cy='12' r='1.5'></circle>"
    },
    "data-5.svg": {
      viewBox: "0 0 24 24",
      markup:
        "<circle cx='7' cy='12' r='1.5'></circle><circle cx='12' cy='12' r='1.5'></circle><circle cx='17' cy='12' r='1.5'></circle>"
    }
  };

  function toSvg(className, iconDef) {
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", iconDef.viewBox || "0 0 24 24");
    svg.setAttribute("class", className + " icon-svg");
    svg.setAttribute("aria-hidden", "true");
    svg.innerHTML = iconDef.markup;
    return svg;
  }

  document.querySelectorAll("img[src^='img/']").forEach(function (img) {
    const src = img.getAttribute("src") || "";
    const fileName = src.split("/").pop();
    const iconDef = iconMap[fileName];
    if (!iconDef) return;
    const svg = toSvg(img.className, iconDef);
    img.replaceWith(svg);
  });

  const navItems = Array.from(document.querySelectorAll(".nav .link, .nav .div"));
  const navRoutes = {
    dashboard: "dashboard.html",
    patients: "patients.html",
    reports: "reports.html"
  };
  const currentPage = (window.location.pathname.split("/").pop() || "").toLowerCase();

  navItems.forEach(function (item) {
    item.classList.add("sidebar-link");
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");

    const navText = item.textContent.trim().toLowerCase();
    const route = navRoutes[navText];
    if (route && route.toLowerCase() === currentPage) {
      item.classList.add("is-active");
    }

    const activate = function () {
      const selectedRoute = navRoutes[navText];
      if (selectedRoute) {
        if (selectedRoute.toLowerCase() === currentPage) {
          navItems.forEach(function (el) {
            el.classList.remove("is-active");
          });
          item.classList.add("is-active");
          return;
        }

        window.location.href = selectedRoute;
        return;
      }

      navItems.forEach(function (el) {
        el.classList.remove("is-active");
      });
      item.classList.add("is-active");
    };

    item.addEventListener("click", activate);
    item.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });

  function injectControl(selector, config) {
    const container = document.querySelector(selector);
    if (!container) return;
    container.innerHTML = "";

    if (config.type === "select") {
      const select = document.createElement("select");
      select.className = "control-input";

      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.disabled = true;
      placeholder.selected = true;
      placeholder.textContent = config.placeholder;
      select.appendChild(placeholder);

      config.options.forEach(function (optionLabel) {
        const option = document.createElement("option");
        option.value = optionLabel.toLowerCase().replace(/\s+/g, "-");
        option.textContent = optionLabel;
        select.appendChild(option);
      });

      container.appendChild(select);
      return;
    }

    const input = document.createElement("input");
    input.className = "control-input";
    input.type = config.type || "text";
    input.placeholder = config.placeholder || "";
    container.appendChild(input);
  }

  const fields = [
    {
      selector: ".section .container-11 .container-12:nth-child(1) .input",
      type: "select",
      placeholder: "Select Sex",
      options: ["Male", "Female"]
    },
    {
      selector: ".section .container-11 .container-12:nth-child(2) .input",
      type: "number",
      placeholder: "e.g. 38"
    },
    {
      selector: ".section .container-11 .container-12:nth-child(3) .input",
      type: "number",
      placeholder: "e.g. 3200"
    },
    {
      selector: ".section .container-14 .container-12 .input",
      type: "select",
      placeholder: "Delivery Mode",
      options: ["Vaginal", "Cesarean"]
    },
    {
      selector: ".section-2 .container-15 .container-16:nth-child(1) .input-2",
      type: "number",
      placeholder: "e.g. 29"
    },
    {
      selector: ".section-2 .container-15 .container-16:nth-child(2) .input-3",
      type: "select",
      placeholder: "ANC Visits",
      options: ["Yes", "No"]
    },
    {
      selector: ".section-3 .container-15 .container-19:nth-child(1) .input-2",
      type: "number",
      placeholder: "Age (h)"
    },
    {
      selector: ".section-3 .container-15 .container-19:nth-child(2) .input-2",
      type: "number",
      placeholder: "APGAR score"
    },
    {
      selector: ".sections-side-by .section-4:nth-child(1) .container-22 .container-23:nth-child(1) .input-5",
      type: "number",
      placeholder: "CRP (mg/L)"
    },
    {
      selector: ".sections-side-by .section-4:nth-child(1) .container-22 .container-23:nth-child(2) .input-5",
      type: "number",
      placeholder: "WBC Count"
    },
    {
      selector: ".sections-side-by .section-4:nth-child(1) .container-25 .input-5",
      type: "number",
      placeholder: "Platelet Count"
    },
    {
      selector: ".sections-side-by .section-4:nth-child(2) .container-22 .container-23:nth-child(1) .input-5",
      type: "number",
      placeholder: "HR (bpm)"
    },
    {
      selector: ".sections-side-by .section-4:nth-child(2) .container-22 .container-23:nth-child(2) .input-5",
      type: "number",
      placeholder: "Temp (C)"
    },
    {
      selector: ".sections-side-by .section-4:nth-child(2) .container-28 .container-23:nth-child(1) .input-5",
      type: "text",
      placeholder: "SBP / DBP"
    },
    {
      selector: ".sections-side-by .section-4:nth-child(2) .container-28 .container-23:nth-child(2) .input-5",
      type: "number",
      placeholder: "O2 Sat (%)"
    },
    {
      selector: ".sections-side-by .section-4:nth-child(2) .container-25 .input-5",
      type: "number",
      placeholder: "Resp Rate (/min)"
    },
    {
      selector: ".section-5 .container-15 .container-30 .input-6",
      type: "text",
      placeholder: "e.g. Ampicillin + Gentamicin"
    },
    {
      selector: ".section-5 .container-15 .container-23 .input-2",
      type: "number",
      placeholder: "Duration (days)"
    }
  ];

  fields.forEach(function (field) {
    injectControl(field.selector, field);
  });

  function injectOptionControl(selector, placeholder, options) {
    const container = document.querySelector(selector);
    if (!container) return;
    container.innerHTML = "";

    const select = document.createElement("select");
    select.className = "control-input option-control";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = placeholder;
    select.appendChild(defaultOption);

    options.forEach(function (optionLabel) {
      const option = document.createElement("option");
      option.value = optionLabel.toLowerCase();
      option.textContent = optionLabel;
      select.appendChild(option);
    });

    container.appendChild(select);
  }

  injectOptionControl(
    ".section-2 .container-15 .container-16:nth-child(3) .background-3",
    "Select",
    ["YES", "NO"]
  );
  injectOptionControl(
    ".section-2 .container-15 .container-16:nth-child(4) .background-3",
    "Select",
    ["YES", "NO"]
  );
  injectOptionControl(
    ".sections-side-by .section-4:nth-child(1) .container-26 .background-5",
    "Select",
    ["POS", "NEG"]
  );

  const toggleConfigs = [
    {
      selector: ".label-2",
      name: "lbw-vlbw",
      checked: false,
      textClass: "text-wrapper-12",
      text: "LBW / VLBW"
    },
    {
      selector: ".label-3",
      name: "multiple-birth",
      checked: false,
      textClass: "text-8",
      text: "Multiple Birth"
    }
  ];

  toggleConfigs.forEach(function (config) {
    const row = document.querySelector(config.selector);
    if (!row) return;
    row.classList.add("check-label");
    row.innerHTML = "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "switch-input checkbox-control";
    checkbox.name = config.name;
    checkbox.checked = config.checked;

    const text = document.createElement("span");
    text.className = config.textClass;
    text.textContent = config.text;

    row.appendChild(checkbox);
    row.appendChild(text);
  });

  document.querySelectorAll(".input-4").forEach(function (box) {
    if (box.tagName.toLowerCase() === "input") return;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "input-4 checkbox-control";
    box.replaceWith(checkbox);
  });

  document.querySelectorAll(".input-7").forEach(function (box) {
    if (box.tagName.toLowerCase() === "input") return;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "input-7 checkbox-control";
    box.replaceWith(checkbox);
  });

  document.querySelectorAll(".check-2").forEach(function (icon) {
    icon.remove();
  });

  document.querySelectorAll(".label-13").forEach(function (label) {
    label.classList.add("check-row");
  });

  function updateRiskDonutFromText() {
    const donut = document.querySelector(".container-33");
    const probability = document.querySelector(".text-wrapper-45");
    if (!donut || !probability) return;

    const match = probability.textContent.match(/\d+(?:\.\d+)?/);
    if (!match) return;

    const percent = Math.max(0, Math.min(100, parseFloat(match[0])));
    donut.style.setProperty("--risk-percent", String(percent));
  }

  updateRiskDonutFromText();

  const calculateButton = document.getElementById("calculate-risk");
  if (calculateButton) {
    calculateButton.addEventListener("click", function () {
      const riskLabel = document.querySelector(".text-wrapper-44");
      const probability = document.querySelector(".text-wrapper-45");
      const hint = document.querySelector(".based-on-clinical");

      if (riskLabel) riskLabel.textContent = "HIGH RISK";
      if (probability) probability.textContent = "78%";
      if (hint) hint.textContent = "Calculated from entered clinical values";

      updateRiskDonutFromText();
    });
  }
});
