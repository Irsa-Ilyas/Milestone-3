function generateCV(event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var addressInput = document.getElementById('address');
    var experienceInput = document.getElementById('experience');
    var profilePictureInput = document.getElementById('profile-picture');
    var dynamicName = document.getElementById('dynamic-name-span');
    var dynamicEmail = document.getElementById('dynamic-email-span');
    var dynamicPhone = document.getElementById('dynamic-phone-span');
    var dynamicAddress = document.getElementById('dynamic-address-span');
    var dynamicExperience = document.getElementById('dynamic-experience-span');
    var dynamicDegree = document.getElementById('dynamic-digree-span');
    var dynamicYear = document.getElementById('dynamic-year-span');
    var dynamicInstitute = document.getElementById('dynamic-institute-span');
    var profilePicturePreview = document.getElementById('profile-picture-preview');
    if (dynamicName)
        dynamicName.textContent = nameInput.value;
    if (dynamicEmail)
        dynamicEmail.textContent = emailInput.value;
    if (dynamicPhone)
        dynamicPhone.textContent = phoneInput.value;
    if (dynamicAddress)
        dynamicAddress.textContent = addressInput.value;
    if (dynamicExperience)
        dynamicExperience.textContent = experienceInput.value;
    if (profilePictureInput.files && profilePictureInput.files.length > 0) {
        var file = profilePictureInput.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if (((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) && profilePicturePreview) {
                profilePicturePreview.style.backgroundImage = "url(".concat(e.target.result, ")");
                profilePicturePreview.style.backgroundSize = 'cover';
                profilePicturePreview.style.backgroundPosition = 'center';
            }
        };
        reader.readAsDataURL(file);
    }
    var degreeInput = document.querySelector('.education input[placeholder="Degree"]');
    var yearInput = document.querySelector('.education input[placeholder="Year"]');
    var institutionInput = document.querySelector('.education input[placeholder="Institution"]');
    if (degreeInput && yearInput && institutionInput) {
        var degree = degreeInput.value;
        var year = yearInput.value;
        var institution = institutionInput.value;
        if (dynamicDegree)
            dynamicDegree.textContent = degree;
        if (dynamicYear)
            dynamicYear.textContent = year;
        if (dynamicInstitute)
            dynamicInstitute.textContent = institution;
    }
}
var form = document.getElementById('cv-form');
if (form) {
    form.addEventListener('submit', generateCV);
}
var addEducationButton = document.getElementById('add-education');
if (addEducationButton) {
    addEducationButton.addEventListener('click', function () {
        var educationContainer = document.querySelector('.education');
        if (educationContainer) {
            educationContainer.innerHTML += "\n        <input type=\"text\" placeholder=\"Degree\" />\n        <input type=\"text\" placeholder=\"Institution\" />\n        <input type=\"text\" placeholder=\"Year\" />\n      ";
        }
    });
}
