function applyTheme(theme){
    document.body.classList.remove('theme-auto', 'theme-dark', 'theme-light')

    document.body.classList.add(`theme-${theme}`)
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".selectbox").addEventListener("change", function () {
        applyTheme(this.value);
    });
});