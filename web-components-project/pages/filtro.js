document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.filter-title').forEach(title => {
        title.addEventListener('click', () => {
            if (!title.classList.contains('sub-filter')) {
                const options = title.nextElementSibling;
                if (options) {
                    options.classList.toggle('expanded');
                    title.classList.toggle('active');
                }
            }
        });
    });

    document.querySelectorAll('.filter-options .sub-filter').forEach(subTitle => {
        subTitle.addEventListener('click', () => {
            const nestedOptions = subTitle.nextElementSibling;
            if (nestedOptions && nestedOptions.classList.contains('nested')) {
                nestedOptions.classList.toggle('expanded');
                subTitle.classList.toggle('active');
            }
        });
    });

    const tipoFilter = document.querySelector('.filter-group .filter-title');
    if (tipoFilter && !tipoFilter.classList.contains('active')) {
        tipoFilter.click();
    }

    const notebookSubFilter = document.querySelector('.filter-options .sub-filter');
    if (notebookSubFilter && !notebookSubFilter.classList.contains('active')) {
        notebookSubFilter.click();
    }

    document.querySelectorAll('.filter-group').forEach(group => {
        const title = group.querySelector('.filter-title');
        const options = group.querySelector('.filter-options');
        if (title && options && !options.classList.contains('expanded') && !title.classList.contains('sub-filter')) {
            title.click();
        }
    });
});