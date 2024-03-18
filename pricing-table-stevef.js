<script>
    document.addEventListener('DOMContentLoaded', function() {
            const planOptionsSteveF = document.querySelectorAll('.plan-option[data-plan]');
            const planContentsSteveF = document.querySelectorAll('.plan-content[data-plan]');

            function setActivePlanSteveF(plan) {
                planOptionsSteveF.forEach(option => {
                    option.classList.toggle('selected', option.getAttribute('data-plan') === plan);
                });
                planContentsSteveF.forEach(content => {
                    content.classList.toggle('active', content.getAttribute('data-plan') === plan);
                });
            }

            planOptionsSteveF.forEach(option => {
                option.addEventListener('click', () => {
                    const selectedPlanSteveF = option.getAttribute('data-plan');
                    setActivePlanSteveF(selectedPlanSteveF);
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const expandableSectionSteveF = document.querySelector('.expandable-section');
            const expandableContentSteveF = document.querySelector('.expandable-content');

            expandableSectionSteveF.addEventListener('click', function() {
                expandableContentSteveF.classList.toggle('active');
            });
        });

        // JavaScript for opening schedule embed and hiding package details
        document.addEventListener('DOMContentLoaded', function() {
            const founder15BookNowBtnSteveF = document.getElementById('founder15-book-now');
            const founder15ScheduleEmbedSteveF = document.getElementById('founder15-schedule-embed');
            const founder15PackageDetailsSteveF = document.getElementById('founder15-package-details');
            const founder15BackToFeaturesSteveF = document.getElementById('founder15-back-to-features');

            founder15BookNowBtnSteveF.addEventListener('click', function(event) {
                event.preventDefault();
                founder15ScheduleEmbedSteveF.style.display = 'block';
                founder15PackageDetailsSteveF.style.display = 'none';
                founder15BackToFeaturesSteveF.style.display = 'block';
            });

            founder15BackToFeaturesSteveF.addEventListener('click', function() {
                founder15ScheduleEmbedSteveF.style.display = 'none';
                founder15PackageDetailsSteveF.style.display = 'block';
                founder15BackToFeaturesSteveF.style.display = 'none';
            });

            const growthBookNowBtnSteveF = document.getElementById('growth-book-now');
            const growthScheduleEmbedSteveF = document.getElementById('growth-schedule-embed');
            const growthPackageDetailsSteveF = document.getElementById('growth-package-details');
            const growthBackToFeaturesSteveF = document.getElementById('growth-back-to-features');

            growthBookNowBtnSteveF.addEventListener('click', function(event) {
                event.preventDefault();
                growthScheduleEmbedSteveF.style.display = 'block';
                growthPackageDetailsSteveF.style.display = 'none';
                growthBackToFeaturesSteveF.style.display = 'block';
            });

            growthBackToFeaturesSteveF.addEventListener('click', function() {
                growthScheduleEmbedSteveF.style.display = 'none';
                growthPackageDetailsSteveF.style.display = 'block';
                growthBackToFeaturesSteveF.style.display = 'none';
            });

            const accelerateBookNowBtnSteveF = document.getElementById('accelerate-book-now');
            const accelerateScheduleEmbedSteveF = document.getElementById('accelerate-schedule-embed');
            const acceleratePackageDetailsSteveF = document.getElementById('accelerate-package-details');
            const accelerateBackToFeaturesSteveF = document.getElementById('accelerate-back-to-features');

            accelerateBookNowBtnSteveF.addEventListener('click', function(event) {
                event.preventDefault();
                accelerateScheduleEmbedSteveF.style.display = 'block';
                acceleratePackageDetailsSteveF.style.display = 'none';
                accelerateBackToFeaturesSteveF.style.display = 'block';
            });

            accelerateBackToFeaturesSteveF.addEventListener('click', function() {
                accelerateScheduleEmbedSteveF.style.display = 'none';
                acceleratePackageDetailsSteveF.style.display = 'block';
                accelerateBackToFeaturesSteveF.style.display = 'none';
            });
        });
</script>
