(function () {
  const storageKey = "palProfileSettings";

  const fullNameInput = document.getElementById("profile-full-name");
  const emailInput = document.getElementById("profile-email");
  const departmentInput = document.getElementById("profile-department");
  const roleInput = document.getElementById("profile-role");
  const phoneInput = document.getElementById("profile-phone");
  const licenseInput = document.getElementById("profile-license");
  const saveBtn = document.getElementById("save-profile-btn");

  if (!fullNameInput || !saveBtn) {
    return;
  }

  const headerName = document.querySelector(".settings-profile .text-wrapper-3");
  const headerRole = document.querySelector(".settings-profile .text-wrapper-4");
  const cardName = document.querySelector(".settings-profile .text-wrapper-10");
  const cardRole = document.querySelector(".settings-profile .container-12 .text-3");
  const headerInitials = document.querySelector(".settings-profile .container-wrapper .text-wrapper-5");
  const cardInitials = document.querySelector(".settings-profile .container-11 .text-2");

  function getInitials(name) {
    const parts = String(name || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    const titles = new Set(["dr", "doctor", "mr", "mrs", "ms", "miss", "prof", "professor"]);
    const meaningfulParts = parts.filter(function (part) {
      return !titles.has(part.toLowerCase().replace(/\./g, ""));
    });

    if (!meaningfulParts.length && !parts.length) {
      return "NA";
    }

    const source = meaningfulParts.length ? meaningfulParts : parts;
    const first = source[0][0] || "";
    const second = source.length > 1 ? source[source.length - 1][0] : "";
    return (first + second).toUpperCase();
  }

  function applyProfile(data) {
    if (headerName) {
      headerName.textContent = data.fullName;
    }
    if (cardName) {
      cardName.textContent = data.fullName;
    }
    if (headerRole) {
      headerRole.textContent = data.role;
    }
    if (cardRole) {
      cardRole.textContent = data.role;
    }

    const initials = getInitials(data.fullName);
    if (headerInitials) {
      headerInitials.textContent = initials;
    }
    if (cardInitials) {
      cardInitials.textContent = initials;
    }
  }

  function readFormData() {
    return {
      fullName: fullNameInput.value.trim() || "Dr. Sarah Jenkins",
      email: (emailInput && emailInput.value.trim()) || "s.jenkins@hospital.org",
      department: (departmentInput && departmentInput.value.trim()) || "Neonatal ICU",
      role: (roleInput && roleInput.value.trim()) || "Pediatrician",
      phone: (phoneInput && phoneInput.value.trim()) || "+63 963 985 3000",
      license: (licenseInput && licenseInput.value.trim()) || "MD-2024-1847"
    };
  }

  function writeFormData(data) {
    fullNameInput.value = data.fullName;
    if (emailInput) {
      emailInput.value = data.email;
    }
    if (departmentInput) {
      departmentInput.value = data.department;
    }
    if (roleInput) {
      roleInput.value = data.role;
    }
    if (phoneInput) {
      phoneInput.value = data.phone;
    }
    if (licenseInput) {
      licenseInput.value = data.license;
    }
  }

  function loadProfile() {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) {
        return readFormData();
      }

      const parsed = JSON.parse(saved);
      return {
        fullName: parsed.fullName || "Dr. Sarah Jenkins",
        email: parsed.email || "s.jenkins@hospital.org",
        department: parsed.department || "Neonatal ICU",
        role: parsed.role || "Pediatrician",
        phone: parsed.phone || "+63 963 985 3000",
        license: parsed.license || "MD-2024-1847"
      };
    } catch (error) {
      return readFormData();
    }
  }

  const initialData = loadProfile();
  writeFormData(initialData);
  applyProfile(initialData);

  saveBtn.addEventListener("click", function () {
    const data = readFormData();
    localStorage.setItem(storageKey, JSON.stringify(data));
    applyProfile(data);
  });
})();
