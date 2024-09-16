function generateCV(event: SubmitEvent): void {
  event.preventDefault();

  const nameInput = document.getElementById('name') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const phoneInput = document.getElementById('phone') as HTMLInputElement;
  const addressInput = document.getElementById('address') as HTMLTextAreaElement;
  const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
  const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
  const dynamicName = document.getElementById('dynamic-name-span') as HTMLSpanElement;
  const dynamicEmail = document.getElementById('dynamic-email-span') as HTMLSpanElement;
  const dynamicPhone = document.getElementById('dynamic-phone-span') as HTMLSpanElement;
  const dynamicAddress = document.getElementById('dynamic-address-span') as HTMLSpanElement;
  const dynamicExperience = document.getElementById('dynamic-experience-span') as HTMLSpanElement;
  const dynamicDegree = document.getElementById('dynamic-digree-span') as HTMLSpanElement;
  const dynamicYear = document.getElementById('dynamic-year-span') as HTMLSpanElement;
  const dynamicInstitute = document.getElementById('dynamic-institute-span') as HTMLSpanElement;
  const profilePicturePreview = document.getElementById('profile-picture-preview') as HTMLDivElement;

  if (dynamicName) dynamicName.textContent = nameInput.value;
  if (dynamicEmail) dynamicEmail.textContent = emailInput.value;
  if (dynamicPhone) dynamicPhone.textContent = phoneInput.value;
  if (dynamicAddress) dynamicAddress.textContent = addressInput.value;
  if (dynamicExperience) dynamicExperience.textContent = experienceInput.value;

  if (profilePictureInput.files && profilePictureInput.files.length > 0) {
    const file = profilePictureInput.files[0];
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target?.result && profilePicturePreview) {
        profilePicturePreview.style.backgroundImage = `url(${e.target.result})`;
        profilePicturePreview.style.backgroundSize = 'cover';
        profilePicturePreview.style.backgroundPosition = 'center';
      }
    };
    reader.readAsDataURL(file);
  }

  const degreeInput = document.querySelector('.education input[placeholder="Degree"]') as HTMLInputElement;
  const yearInput = document.querySelector('.education input[placeholder="Year"]') as HTMLInputElement;
  const institutionInput = document.querySelector('.education input[placeholder="Institution"]') as HTMLInputElement;

  if (degreeInput && yearInput && institutionInput) {
    const degree = degreeInput.value;
    const year = yearInput.value;
    const institution = institutionInput.value;
    if (dynamicDegree) dynamicDegree.textContent = degree;
    if (dynamicYear) dynamicYear.textContent = year;
    if (dynamicInstitute) dynamicInstitute.textContent = institution;
  }
}

const form = document.getElementById('cv-form') as HTMLFormElement;
if (form) {
  form.addEventListener('submit', generateCV);
}

const addEducationButton = document.getElementById('add-education') as HTMLButtonElement;
if (addEducationButton) {
  addEducationButton.addEventListener('click', () => {
    const educationContainer = document.querySelector('.education') as HTMLDivElement;
    if (educationContainer) {
      educationContainer.innerHTML += `
        <input type="text" placeholder="Degree" />
        <input type="text" placeholder="Institution" />
        <input type="text" placeholder="Year" />
      `;
    }
  });
}
