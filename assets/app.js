import './bootstrap.js';
import './styles/app.css';

function setCookie(name, value, days)
{
    let expires = "";
    if (days)
    {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

function getCookie(name)
{
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++)
    {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0)
        {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function toggleNightMode()
{
    const sections = document.querySelectorAll('input, label, .container, .sidebar, .calendar-header, .calendar-container, form');
    const body = document.body;

    sections.forEach(section =>
    {
        section.classList.toggle('dark');
    });
    body.classList.toggle('dark');

    const isDarkMode = body.classList.contains('dark');
    setCookie('nightMode', isDarkMode ? 'true' : 'false', 7);
}

document.addEventListener('DOMContentLoaded', () =>
{
    const nightModeCookie = getCookie('nightMode');
    let queryTabs = [];
    const maxTabs = 3;

    if (nightModeCookie === 'true')
    {
        const sections = document.querySelectorAll('input, label, .container, .sidebar, .calendar-header, .calendar-container, form');
        const body = document.body;

        sections.forEach(section =>
        {
            section.classList.add('dark');
        });
        body.classList.add('dark');
    }

    const toggleOptionsMenu = function()
    {
        document.getElementById("options-menu").classList.toggle("hidden");
    };

    const showOption = function(option)
    {
        const subMenu = document.getElementById("sub-options-menu");
        const subTitle = document.getElementById("sub-options-title");
        const subContent = document.getElementById("sub-options-content");

        subMenu.classList.remove("hidden");
        document.getElementById("options-menu").classList.add("hidden");

        if (option === "display-info")
        {
            subTitle.textContent = "Wybierz informacje o zajęciach";
            subContent.innerHTML = `
            <label><input type="checkbox" /> Nazwa przedmiotu</label><br>
            <label><input type="checkbox" /> Sala</label><br>
            <label><input type="checkbox" /> Prowadzący</label><br>
            <label><input type="checkbox" /> Grupa</label><br>
            <label><input type="checkbox" /> Typ zajęć</label><br>
            <label><input type="checkbox" /> Godzina rozpoczęcia</label><br>
            <label><input type="checkbox" /> Czas trwania</label><br>
        `;
        }
        else if (option === "edit-colors")
        {
            subTitle.textContent = "Edytuj kolory kafelków";
            subContent.innerHTML = `
            <label>Kolor zajęć: <input type="color" /></label><br>
        `;
        }
        else if (option === "display-modes")
        {
            subTitle.textContent = "Tryby wyświetlania";
            subContent.innerHTML = `<p>ddd</p>`;
        }
    };

    const goBackToOptions = function()
    {
        document.getElementById("options-menu").classList.remove("hidden");
        document.getElementById("sub-options-menu").classList.add("hidden");
    };

    const addQueryTab = function()
    {
        if (queryTabs.length < maxTabs)
        {
            const tabId = `query-tab-${queryTabs.length + 1}`;
            queryTabs.push(tabId);

            const tab = document.createElement("div");
            tab.id = tabId;
            tab.className = "query-tab";
            tab.innerHTML = `
            Zapytanie ${queryTabs.length}  
        `;

            document.getElementById("query-tabs").appendChild(tab);
        }
        else
        {
            alert("Możesz dodać maksymalnie 3 zapytania.");
        }
    };

    const removeQueryTab = function(tabId)
    {
        const tabIndex = queryTabs.indexOf(tabId);
        if (tabIndex > -1)
        {
            queryTabs.splice(tabIndex, 1);
            document.getElementById(tabId).remove();
        }
    };

    const clearFormOrTabs = function()
    {
        if (queryTabs.length === 0)
        {
            document.getElementById("query-form").reset();
        }
        else
        {
            queryTabs.forEach(tabId => document.getElementById(tabId).remove());
            queryTabs = [];
        }
    };

    document.querySelector(".search").addEventListener("click", () =>
    {
        alert("Search clicked!");
    });

    document.querySelector(".options").addEventListener("click", toggleOptionsMenu);
    document.querySelector(".clear").addEventListener("click", clearFormOrTabs);

    document.querySelectorAll(".remove-tab-btn").forEach(btn =>
    {
        btn.addEventListener("click", (e) =>
        {
            removeQueryTab(e.target.dataset.tabId);
        });
    });

    document.querySelector(".add-query").addEventListener("click", addQueryTab);
    document.querySelector(".back").addEventListener("click", goBackToOptions);
    document.getElementById('night-mode-icon').addEventListener('click', toggleNightMode);

    document.querySelectorAll(".option-btn").forEach(button =>
    {
        button.addEventListener("click", (event) =>
        {
            const option = event.target.getAttribute("data-option");
            showOption(option);
        });
    });

    function toggleSidebar()
    {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('show-sidebar');
    }

    function closeSidebarIfClickedOutside(event)
    {
        const sidebar = document.querySelector('.sidebar');
        if (!sidebar.contains(event.target) && !event.target.matches('.show-mobile'))
        {
            sidebar.classList.remove('show-sidebar');
        }
    }

    if (window.innerWidth <= 1000)
    {
        const showMobileBtn = document.querySelector('.show-mobile');
        showMobileBtn.style.display = 'block';
        showMobileBtn.addEventListener('click', toggleSidebar);
    }
    else
    {
        const showMobileBtn = document.querySelector('.show-mobile');
        showMobileBtn.style.display = 'none';
    }

    window.addEventListener('resize', () =>
    {
        const showMobileBtn = document.querySelector('.show-mobile');

        if (window.innerWidth <= 1000)
        {
            showMobileBtn.style.display = 'block';
            document.addEventListener('click', closeSidebarIfClickedOutside);
        }
        else
        {
            showMobileBtn.style.display = 'none';
            document.removeEventListener('click', closeSidebarIfClickedOutside);
        }
    });

    document.addEventListener('click', closeSidebarIfClickedOutside);

});


