(function() {
    $(document).ready(function() {
        const $tabsContainer = $('.js-tabs');
        const $activeTab = $('#' + $tabsContainer.data('tabActive'));
        const $tabs = $tabsContainer.find('.js-tab-content');

        $tabs.addClass('tab-content-hidden');

        if ($activeTab.length) {
            const $activeButton = $tabsContainer.find('[data-tab-target-id=' + $activeTab.attr('id') + ']');

            $activeTab.removeClass('tab-content-hidden').addClass('tab-content-show');
            $activeButton.addClass('tab-button-active');
        }
    });

    $(document).on('click', '.js-tab-button', function(event) {
        const $button = $(this);
        const $targetElement = $('#' + $button.data('tabTargetId'));
        const $tabsContainer = $button.closest('.js-tabs');
        const $tabs = $tabsContainer.find('.js-tab-content');
        const $buttons = $tabsContainer.find('.js-tab-button');
        const $activeButton = $tabsContainer.find('[data-tab-target-id=' + $targetElement.attr('id') + ']');

        $tabs.removeClass('tab-content-show').addClass('tab-content-hidden');
        $targetElement.addClass('tab-content-show');
        $buttons.removeClass('tab-button-active');
        $activeButton.addClass('tab-button-active');
    });
})();