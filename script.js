<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sumit Sarker | Oceanography & Environmental Research</title>
    <style>
        /* ===== Basic Reset ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            background-color: #f8f9fa;
            color: #333;
            scroll-behavior: smooth;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        header, section {
            padding: 80px 20px;
            max-width: 1000px;
            margin: 0 auto;
        }

        /* ===== Navbar ===== */
        nav {
            position: fixed;
            width: 100%;
            background: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            z-index: 1000;
        }

        nav .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }

        nav .nav-links {
            list-style: none;
            display: flex;
            gap: 20px;
        }

        nav .nav-links a {
            font-weight: bold;
        }

        /* ===== Sections ===== */
        section h2 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #222;
        }

        section p, section li {
            margin-bottom: 10px;
        }

        ul {
            list-style: disc;
            padding-left: 20px;
        }

        /* ===== Hero ===== */
        .hero {
            text-align: center;
            background: #e9f7ff;
            padding: 120px 20px 80px 20px;
        }

        .hero h1 {
            font-size: 2.2rem;
            margin-bottom: 15px;
        }

        /* ===== Reveal Animation ===== */
        .reveal {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.6s ease;
        }

        .reveal.show {
            opacity: 1;
            transform: translateY(0);
        }

        /* ===== Mobile menu placeholder ===== */
        @media (max-width: 768px) {
            nav .nav-links {
                flex-direction: column;
                display: none;
            }

            nav.active .nav-links {
                display: flex;
            }
        }

        /* ===== Contact Links ===== */
        .contact a {
            word-break: break-word;
        }
    </style>
</head>
<body>

    <!-- ===== Navbar ===== -->
    <nav>
        <div class="logo">Sumit Sarker</div>
        <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <!-- Optional: Mobile Menu Button -->
        <!-- <div class="menu-btn">☰</div> -->
    </nav>

    <!-- ===== Hero Section ===== -->
    <header class="hero reveal">
        <div class="logo">Sumit Sarker</div>
        <h1>Graduate in Oceanography | Marine & Climate Researcher</h1>
        <p>Passionate about coastal vulnerability, marine pollution, and environmental modeling.</p>
    </header>

    <!-- ===== About Me ===== -->
    <section id="about" class="about reveal">
        <h2>About Me</h2>
        <p>I am Sumit Sarker, a graduate from Noakhali Science and Technology University (NSTU) with a B.Sc. (Honors) in Oceanography (CGPA 3.81/4). My research interests include marine and climate science, coastal and environmental hazards, marine pollution, ecotoxicology, and ecosystem management.</p>
        <ul>
            <li>Marine Heatwaves & Coastal Vulnerability Analysis</li>
            <li>Hydrological & Environmental Modeling (HEC-RAS, HEC-GeoRAS)</li>
            <li>GIS & Remote Sensing (ArcGIS, QGIS)</li>
            <li>Statistical Analysis (SPSS, R) & Programming (Python, MATLAB)</li>
        </ul>
    </section>

    <!-- ===== Research & Projects ===== -->
    <section id="research" class="research reveal">
        <h2>Research & Projects</h2>
        <div class="project">
            <h3>Marine Heatwaves in the Bay of Bengal</h3>
            <p>Undergraduate thesis on marine heatwaves, their impact on fisheries and coastal ecosystems.</p>
        </div>
        <div class="project">
            <h3>Flood Risk Mapping</h3>
            <p>Analyzed flood risk for Feni, Comilla, and Chattogram using GIS and survey data.</p>
        </div>
        <div class="project">
            <h3>Microplastics & Environmental Pollution Studies</h3>
            <p>Field and lab analysis on microplastic distribution and heavy metals in coastal areas.</p>
        </div>
    </section>

    <!-- ===== Skills ===== -->
    <section id="skills" class="skills reveal">
        <h2>Skills</h2>
        <ul>
            <li>GIS & Remote Sensing: ArcGIS, QGIS</li>
            <li>Hydrological Modeling: HEC-RAS, HEC-GeoRAS</li>
            <li>Programming & Data Analysis: Python, MATLAB, R, SPSS</li>
            <li>Marine Science Techniques: Plankton & water quality analysis, microplastics, soil carbon</li>
        </ul>
    </section>

    <!-- ===== Achievements ===== -->
    <section id="achievements" class="achievements reveal">
        <h2>Achievements</h2>
        <ul>
            <li>Best Poster Presenter</li>
            <li>Top 10 in NOAMI Ocean Olympiad 2025</li>
            <li>Campus ambassador & leadership roles at NSTU Science Club and Research Society</li>
        </ul>
    </section>

    <!-- ===== Contact ===== -->
    <section id="contact" class="contact reveal">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:sumitsarkerrr@gmail.com">sumitsarkerrr@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/sumit-sarker" target="_blank">linkedin.com/in/sumit-sarker</a></p>
        <p>ResearchGate: <a href="https://www.researchgate.net/profile/Sumit-Sarker" target="_blank">researchgate.net/profile/Sumit-Sarker</a></p>
    </section>

    <!-- ===== JS ===== -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            console.log("Portfolio site loaded ✅");

            // ===== SCROLL REVEAL ANIMATIONS =====
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            });

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach((el) => observer.observe(el));

            // ===== SMOOTH SCROLLING =====
            const navLinks = document.querySelectorAll('.nav-links a');

            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);

                    if(targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // ===== MOBILE MENU TOGGLE (optional) =====
            const nav = document.querySelector('nav');
            // const menuBtn = document.querySelector('.menu-btn');
            // menuBtn.addEventListener('click', () => nav.classList.toggle('active'));
        });
    </script>

</body>
</html>

