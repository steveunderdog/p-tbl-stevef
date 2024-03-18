// JavaScript for tab switching
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
});

// JavaScript for expandable section
document.addEventListener('DOMContentLoaded', function() {
    const expandableSection = document.querySelector('.expandable-section');
    const expandableContent = document.querySelector('.expandable-content');

    expandableSection.addEventListener('click', function() {
        expandableContent.classList.toggle('active');
    });
});

// JavaScript for opening schedule embed and hiding package details
document.addEventListener('DOMContentLoaded', function() {
    const founder15BookNowBtnSteve = document.getElementById('founder15-book-now-steve');
    const founder15ScheduleEmbedSteve = document.getElementById('founder15-schedule-embed-steve');
    const founder15PackageDetailsSteve = document.getElementById('founder15-package-details-steve');
    const founder15BackToFeaturesSteve = document.getElementById('founder15-back-to-features-steve');

    founder15BookNowBtnSteve.addEventListener('click', function(event) {
        event.preventDefault();
        founder15ScheduleEmbedSteve.style.display = 'block';
        founder15PackageDetailsSteve.style.display = 'none';
        founder15BackToFeaturesSteve.style.display = 'block';
    });

    founder15BackToFeaturesSteve.addEventListener('click', function() {
        founder15ScheduleEmbedSteve.style.display = 'none';
        founder15PackageDetailsSteve.style.display = 'block';
        founder15BackToFeaturesSteve.style.display = 'none';
    });

    const growthBookNowBtnSteve = document.getElementById('growth-book-now-steve');
    const growthScheduleEmbedSteve = document.getElementById('growth-schedule-embed-steve');
    const growthPackageDetailsSteve = document.getElementById('growth-package-details-steve');
    const growthBackToFeaturesSteve = document.getElementById('growth-back-to-features-steve');

    growthBookNowBtnSteve.addEventListener('click', function(event) {
        event.preventDefault();
        growthScheduleEmbedSteve.style.display = 'block';
        growthPackageDetailsSteve.style.display = 'none';
        growthBackToFeaturesSteve.style.display = 'block';
    });

    growthBackToFeaturesSteve.addEventListener('click', function() {
        growthScheduleEmbedSteve.style.display = 'none';
        growthPackageDetailsSteve.style.display = 'block';
        growthBackToFeaturesSteve.style.display = 'none';
    });

    const accelerateBookNowBtnSteve = document.getElementById('accelerate-book-now-steve');
    const accelerateScheduleEmbedSteve = document.getElementById('accelerate-schedule-embed-steve');
    const acceleratePackageDetailsSteve = document.getElementById('accelerate-package-details-steve');
    const accelerateBackToFeaturesSteve = document.getElementById('accelerate-back-to-features-steve');

    accelerateBookNowBtnSteve.addEventListener('click', function(event) {
        event.preventDefault();
        accelerateScheduleEmbedSteve.style.display = 'block';
        acceleratePackageDetailsSteve.style.display = 'none';
        accelerateBackToFeaturesSteve.style.display = 'block';
    });

    accelerateBackToFeaturesSteve.addEventListener('click', function() {
        accelerateScheduleEmbedSteve.style.display = 'none';
        acceleratePackageDetailsSteve.style.display = 'block';
        accelerateBackToFeaturesSteve.style.display = 'none';
    });
});
