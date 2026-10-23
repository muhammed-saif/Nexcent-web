
        
        const header = document.getElementById("main-header");
        const nav = document.getElementById("header-nav");
        const mainLogo = document.querySelector("#main-logo a img");
        const light_dark_lg = document.querySelector("#light-dark-lg");
        const light_dark_sm = document.querySelector("#light-dark-sm");
        const sidebar = document.querySelector("#sibebar");
        const sidebarShowBtn = document.querySelector("#sidebarShowBtn");
        const sidebarRemoveBtn = document.querySelector("#sidebarRemoveBtn");



        // sidebarShowBtn.addEventListener("click", () => {
        //     sidebar.classList.remove("invisible", "translate-x-full", "opacity-0");
        //     sidebar.classList.add("visible", "translate-x-0", "opacity-100");
        //     sidebarShowBtn.classList.add("opacity-0");
        //     light_dark_sm.classList.add("opacity-0");
        // });

        // sidebarRemoveBtn.addEventListener("click", () => {
        //     sidebar.classList.remove("visible", "translate-x-0", "opacity-100");
        //     sidebar.classList.add("translate-x-full", "opacity-0");
        //     sidebarShowBtn.classList.remove("opacity-0");
        //     light_dark_sm.classList.remove("opacity-0");

        //     // Transition শেষ হওয়ার পরে invisible হবে
        //     setTimeout(() => {
        //         if (sidebar.classList.contains("translate-x-full")) {
        //             sidebar.classList.add("invisible");
        //         }
        //     }, 300);
        // });



        sidebarShowBtn.addEventListener("click", () => {
            sidebar.classList.remove("invisible");
            // Browser-কে initial অবস্থাটি apply করার সুযোগ দাও
            requestAnimationFrame(() => {
                    sidebar.classList.remove("translate-x-full", "opacity-0");
                    sidebar.classList.add("translate-x-0", "opacity-100");
                });
        });

        sidebarRemoveBtn.addEventListener("click", () => {
            sidebar.classList.remove("translate-x-0", "opacity-100");
            sidebar.classList.add("translate-x-full", "opacity-0");

            setTimeout(() => {
                sidebar.classList.add("invisible");
            }, 300);
        });



        // Light and Dark theme effect
        
        //   onclick="document.documentElement.classList.toggle('dark')"
        const rootElement = document.documentElement;
        const currentTheme = rootElement.classList;
        const logoChange = () =>{
            const themeClass = currentTheme.contains("dark");
            // console.log(currentTheme);
            if(themeClass){
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


        // Header Effect
        const headerScrollEffect = () =>{
            console.log(currentTheme);
            
            window.addEventListener("scroll", () => {
                const Theme = currentTheme.contains("dark") ? "dark" : "light" ;
                console.log(Theme);
                if ((window.scrollY > 10) && (Theme === "light")){
                    header.classList.add(
                        "bg-[#F5F7FA]/50",
                        "backdrop-blur-md",
                        "shadow-md"
                    );
                    nav.classList.add("md:py-[15px]");
                    header.classList.remove("bg-[#F5F7FA]");
                    // nav.classList.remove("py-[30px]");
                }
                else if(Theme === "light"){
                    header.classList.remove(
                        "bg-[#F5F7FA]/70",
                        "backdrop-blur-md",
                        "shadow-md"
                    );
                    nav.classList.remove("md:py-[15px]");
                    header.classList.add("bg-[#F5F7FA]");
                    // nav.classList.add("py-[30px]");
                }
                else if((window.scrollY > 10) && (Theme === "dark")){
                    header.classList.add(
                        "dark:bg-[#161D21]/50",
                        "backdrop-blur-md",
                        "shadow-md"
                    );
                    nav.classList.add("md:py-[15px]");
                    header.classList.remove("dark:bg-[#161D21]");
                    // nav.classList.remove("py-[30px]");
                } 
                else{
                    header.classList.remove(
                        "dark:bg-[#161D21]/50",
                        "backdrop-blur-md",
                        "shadow-md"
                    );
                    nav.classList.remove("md:py-[15px]");
                    header.classList.add("dark:bg-[#161D21]");
                    // nav.classList.add("py-[30px]");
                }
                
                });
            };
            headerScrollEffect();