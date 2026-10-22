// Header Effect
        const header = document.getElementById("main-header");
        const nav = document.getElementById("header-nav")

        window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            header.classList.add(
            "bg-[#F5F7FA]/70",
            "backdrop-blur-md",
            "shadow-md"
            );
            nav.classList.add("py-[15px]");

            header.classList.remove("bg-[#F5F7FA]");
            nav.classList.remove("py-[30px]");
        } else {
            header.classList.remove(
            "bg-[#F5F7FA]/70",
            "backdrop-blur-md",
            "shadow-md"
            );
            nav.classList.remove("py-[15px]");

            header.classList.add("bg-[#F5F7FA]");
            nav.classList.add("py-[30px]");
        }
        });
        
        // Toggle button function
        const sidebarShowBtn = document.querySelector("#sidebarShowBtn");
        const sidebarRemoveBtn = document.querySelector("#sidebarRemoveBtn");
        const sidebar = document.querySelector("#sibebar");

        sidebarShowBtn.addEventListener("click", () => {
            sidebar.classList.remove("translate-x-full");
            sidebarShowBtn.classList.add("opacity-0");
        });

        sidebarRemoveBtn.addEventListener("click", () => {
            sidebar.classList.add("translate-x-full");
            sidebarShowBtn.classList.remove("opacity-0");
        });


        // Light and Dark theme effect
        
        const rootElement = document.documentElement;
        const light_dark_lg = document.querySelector("#light-dark-lg");
        const light_dark_sm = document.querySelector("#light-dark-sm");
        const mainLogo = document.querySelector("#main-logo a img");

        //   onclick="document.documentElement.classList.toggle('dark')"

        const logoChange = () =>{
            if(rootElement.classList.contains("dark")){
                mainLogo.src = "assets/Logo-white.png"
            }else(
                mainLogo.src = "assets/mian-logo.png"
            );
        };
        
        // for medium and learge device
        light_dark_lg.addEventListener("click",()=>{
            rootElement.classList.toggle('dark');
            logoChange();
        });
        // for small device
        light_dark_sm.addEventListener("click",()=>{
            rootElement.classList.toggle('dark');
            logoChange();
        });

        document.addEventListener("DOMContentLoaded",() => {
            const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
            rootElement.classList.toggle("dark",themeQuery.matches);
            logoChange();
        });