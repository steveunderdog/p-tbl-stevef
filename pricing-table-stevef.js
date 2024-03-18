document.addEventListener('DOMContentLoaded', function() {
  const planOptions = document.querySelectorAll('.plan-option');
  const planContents = document.querySelectorAll('.plan-content');

  planOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      const selectedPlan = this.getAttribute('data-plan');

      // Update 'selected' class for options
      planOptions.forEach(function(option) {
        option.classList.remove('selected');
      });
      this.classList.add('selected');

      // Toggle 'active' class for contents
      planContents.forEach(function(content) {
        if (content.getAttribute('data-plan') === selectedPlan) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });

  const expandableSection = document.querySelector('.expandable-section');
  const expandableContent = document.querySelector('.expandable-content');

  expandableSection.addEventListener('click', function() {
    expandableContent.classList.toggle('active');
  });

  // JavaScript for opening schedule embed and hiding package details
  const founder15BookNowBtn = document.getElementById('founder15-book-now-steve');
  const founder15ScheduleEmbed = document.getElementById('founder15-schedule-embed-steve');
  const founder15PackageDetails = document.getElementById('founder15-package-details-steve');
  const founder15BackToFeatures = document.getElementById('founder15-back-to-features-steve');

  founder15BookNowBtn.addEventListener('click', function(event) {
    event.preventDefault();
    founder15ScheduleEmbed.style.display = 'block';
    founder15PackageDetails.style.display = 'none';
    founder15BackToFeatures.style.display = 'block';
  });

  founder15BackToFeatures.addEventListener('click', function() {
    founder15ScheduleEmbed.style.display = 'none';
    founder15PackageDetails.style.display = 'block';
    founder15BackToFeatures.style.display = 'none';
  });

  const growthBookNowBtn = document.getElementById('growth-book-now-steve');
  const growthScheduleEmbed = document.getElementById('growth-schedule-embed-steve');
  const growthPackageDetails = document.getElementById('growth-package-details-steve');
  const growthBackToFeatures = document.getElementById('growth-back-to-features-steve');

  growthBookNowBtn.addEventListener('click', function(event) {
    event.preventDefault();
    growthScheduleEmbed.style.display = 'block';
    growthPackageDetails.style.display = 'none';
    growthBackToFeatures.style.display = 'block';
  });

  growthBackToFeatures.addEventListener('click', function() {
    growthScheduleEmbed.style.display = 'none';
    growthPackageDetails.style.display = 'block';
    growthBackToFeatures.style.display = 'none';
  });

  const accelerateBookNowBtn = document.getElementById('accelerate-book-now-steve');
  const accelerateScheduleEmbed = document.getElementById('accelerate-schedule-embed-steve');
  const acceleratePackageDetails = document.getElementById('accelerate-package-details-steve');
  const accelerateBackToFeatures = document.getElementById('accelerate-back-to-features-steve');

  accelerateBookNowBtn.addEventListener('click', function(event) {
    event.preventDefault();
    accelerateScheduleEmbed.style.display = 'block';
    acceleratePackageDetails.style.display = 'none';
    accelerateBackToFeatures.style.display = 'block';
  });

  accelerateBackToFeatures.addEventListener('click', function() {
    accelerateScheduleEmbed.style.display = 'none';
    acceleratePackageDetails.style.display = 'block';
    accelerateBackToFeatures.style.display = 'none';
  });
});
