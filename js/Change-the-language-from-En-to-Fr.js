

let arabic = document.getElementById("français");
let english = document.getElementById("english");
//zone
let text1 = document.getElementById("tex1");
let text2 = document.getElementById("tex2");
let text3 = document.getElementById("tex100");

//about tr
let abouttext1 = document.getElementById("tex3");
let abouttext2 = document.getElementById("tex4");
let abouttext3 = document.getElementById("tex5");
let abouttext4 = document.getElementById("tex6");
let abouttext5 = document.getElementById("tex7");
//education
let educationtext1 = document.getElementById("tex8");
let educationtext2 = document.getElementById("tex9");
let educationtext3 = document.getElementById("tex10");
let educationtext4 = document.getElementById("tex11");
let educationtext5 = document.getElementById("tex12");
let educationtext6 = document.getElementById("tex13");
let educationtext7 = document.getElementById("tex14");
let educationtext8 = document.getElementById("tex15");

//formation
let formationtext1 = document.getElementById("tex16");
let formationtext2 = document.getElementById("tex17");
let formationtext3 = document.getElementById("tex18");
let formationtext4 = document.getElementById("tex19");
let formationtext5 = document.getElementById("tex20");
let formationtext6 = document.getElementById("tex21");
let formationtext7 = document.getElementById("tex22");
let formationtext8 = document.getElementById("tex80");
let formationtext9 = document.getElementById("tex81");
let formationtext10 = document.getElementById("tex82");



//Skills
let Skillstext1 = document.getElementById("tex23");
let Skillstext2 = document.getElementById("tex24");
let Skillstext3 = document.getElementById("tex25");
let Skillstext4 = document.getElementById("tex26");

//progress
let progresstext1 = document.getElementById("tex27");
let progresstext2 = document.getElementById("tex28");
let progresstext3 = document.getElementById("tex29");
let progresstext4 = document.getElementById("tex30");
let progresstext5 = document.getElementById("tex31");

//projects
let projectstext1 = document.getElementById("tex32");
let projectstext2 = document.getElementById("tex33");
let projectstext3 = document.getElementById("tex65");



//slide-1
let slide1text1 = document.getElementById("tex34");
let slide1text2 = document.getElementById("tex35");
let slide1text3 = document.getElementById("tex36");

//slide-2
let slide2text1 = document.getElementById("tex37");
let slide2text2 = document.getElementById("tex38");
let slide2text3 = document.getElementById("tex39");

//slide-3
let slide3text1 = document.getElementById("tex40");
let slide3text2 = document.getElementById("tex41");
let slide3text3 = document.getElementById("tex42");

//slide-4
let slide4text1 = document.getElementById("tex46");
let slide4text2 = document.getElementById("tex47");
let slide4text3 = document.getElementById("tex48");

//slide-5
let slide5text1 = document.getElementById("tex72");
let slide5text2 = document.getElementById("tex66");
let slide5text3 = document.getElementById("tex67");

//slide-6
let slide6text1 = document.getElementById("tex43");
let slide6text2 = document.getElementById("tex44");
let slide6text3 = document.getElementById("tex45");

//slide-7
let slide7text1 = document.getElementById("tex75");
let slide7text2 = document.getElementById("tex76");
let slide7text3 = document.getElementById("tex77");

//btn
let btntext1 = document.getElementById("tex50");
let btntext2 = document.getElementById("tex51");
let btntext3 = document.getElementById("tex52");
let btntext4 = document.getElementById("tex53");
let btntext5 = document.getElementById("tex70");
let btntext6 = document.getElementById("tex71");
let btntext7 = document.getElementById("tex78");



//footer
let footertext1 = document.getElementById("tex54");
let footertext2 = document.getElementById("tex55");

//nav
let navtext1 = document.getElementById("tex60");
let navtext2 = document.getElementById("tex61");
let navtext3 = document.getElementById("tex62");
let navtext4 = document.getElementById("tex63");
let navtext5 = document.getElementById("tex64");


















arabic.onclick = ()=>{
    setLanugage("français");
};

english.onclick = ()=>{
    setLanugage("english");
};


function setLanugage(getLanuage){
if(getLanuage === "français"){
    
    text1.innerHTML = "Bonjour,";
    text2.innerHTML = "Je Suis";
    text3.innerHTML = "Je Suis";

//about tr
    abouttext1.innerHTML = "À Propos De Moi";
    abouttext2.innerHTML = "Designer et concepteur de Sites Web et La Gestion du Réseau";
    abouttext3.innerHTML = "Bonjour, je m'appelle Bilal, développeur, designer et gestionnaire de réseau. Ma passion était de concevoir des logos et de modifier des images et des vidéos, et c'est ce qui m'a fait me tourner vers le développement de pages Web et y trouver mon confort. J'ai également des connaissances en gestion et protection de réseaux sous Windows Server et Linux et en maintenance d'ordinateurs.";
    abouttext4.innerHTML = "Et j'apprends encore plus à me développer.";
    abouttext5.innerHTML = "Télécharger le CV";
//education
    educationtext1.innerHTML = "ÉDUCATION";
    educationtext2.innerHTML = "MIAGE, École Privée de Formation Professionnelle – Salé";
    educationtext3.innerHTML = "2020 - Présente :";
    educationtext4.innerHTML = "2ème année Technicien Spécialisé en Développement Informatique.";
    educationtext5.innerHTML = "2018 - 2020";
    educationtext6.innerHTML = "Diplôme de Technicien du Support Technique et Maintenance Informatique et Réseau.";
    educationtext7.innerHTML = "2017 - 2018 :";
    educationtext8.innerHTML = "Niveau Baccalauréat Sciences de la Vie et de la Terre.";

    
//formation
    formationtext1.innerHTML = "CERTIFICATS EN LIGNE";
    formationtext2.innerHTML = "Plateforme Linkedin";
    formationtext3.innerHTML = "2020 - 2021 :";
    formationtext4.innerHTML = "Certificat de Développement web front-end en HTML5, CSS, Sass, Bootstrap 4 & 5, LESS, JavaScript, jQuery, React.js, UX UI, Responsive Web Design .";
    formationtext5.innerHTML = "Plateforme Edraak";
    formationtext6.innerHTML = "2020 - 2021 :";
    formationtext7.innerHTML = "Certificat d'achèvement du cours d'introduction au monde des réseaux<br>et de la programmation avec Python.";
    formationtext8.innerHTML = "Plateforme SoloLearn";
    formationtext9.innerHTML = "2020 - 2021 :";
    formationtext10.innerHTML = "Certificats en HTML5, CSS, JavaScript, jQuery, Responsive Web Design.";



//Skills
    Skillstext1.innerHTML = "Compétences";
    Skillstext2.innerHTML = "Concepteur de sites Web";
    Skillstext3.innerHTML = "Designer Graphique";
    Skillstext4.innerHTML = "La Gestion du Réseau";

//progress
    progresstext1.innerHTML = "Les technologies";
    progresstext2.innerHTML = "Base de données";
    progresstext3.innerHTML = "désign";
    progresstext4.innerHTML = "Réseau";
    progresstext5.innerHTML = "Plus d'outils";

//projects
    projectstext1.innerHTML = "Projets";
    projectstext2.innerHTML = "Pendant mes études, j'ai développé des applications en langage vb.net, conçu de nombreux logos d'entreprise et édité de nombreuses vidéos. Maintenant, grâce à mon didacticiel de programmation de pages Web, j'ai pu développer cette page que vous voyez devant vous tout en en apprenant plus et en créant plus de pages.";
    projectstext3.innerHTML = "Et à travers ce que vous verrez ci-dessous, cliquez sur une image pour voir le résumé de chaque projet avec une simple vidéo à l'intérieur de la page";

//slide-1
    slide1text1.innerHTML = "Gestion De La Bibliothèque";
    slide1text2.innerHTML = "Ce projet a été créé à la fin de la première année académique, et il était nécessaire de créer un programme de gestion de bibliothèque. Et il y a le programme, la gestion des fonctionnaires qui seront responsables du programme. Ils peuvent saisir des clients, des livres et des auteurs, et ils peuvent extraire la facture de loyer d'un livre. Nous avons également fait de la place pour les bibliothèques qui ont de petits cafés. Ils ont la gestion des boissons ainsi que la facturation des boissons.";
    slide1text3.innerHTML = "TECHNOLOGIES UTILISÉES :";

//slide-2
    slide2text1.innerHTML = "Gestion De la Salle de Sport";
    slide2text2.innerHTML = "Application de gestion de gym en collaboration avec mes amis. Ce que nous devions faire, c'était faire entrer les nouveaux athlètes dans le gymnase et voir qui payait à ce moment-là. Il y a une liste noire qui ne paie pas à ce moment-là et l'utilisateur de l'application reçoit toujours une notification des personnes qui ne paient pas.";
    slide2text3.innerHTML = "TECHNOLOGIES UTILISÉES :";

//slide-3
    slide3text1.innerHTML = "La Gestion Du Réseau";
    slide3text2.innerHTML = "J'ai également de l'expérience dans le domaine de la gestion de réseau, et dans ce projet, j'ai dû établir des connexions sur le réseau VIOP à l'aide d'un serveur astérisque pour parler au téléphone uniquement en utilisant un serveur local et protégé, et ce fut une expérience unique de travail.";
    slide3text3.innerHTML = "TECHNOLOGIES UTILISÉES :";

//slide-4
    slide4text1.innerHTML = "Conception et Édition";
    slide4text2.innerHTML = "Comme je l'ai écrit plus tôt j'ai commencé ce travail En raison de la conception du logo Et cette vidéo est un résumé de ce que je fais.";
    slide4text3.innerHTML = "TECHNOLOGIES UTILISÉES :";

//slide-5
    slide5text1.innerHTML = "Location de Voiture";
    slide5text2.innerHTML = "Dans ce projet, nous vous présentons l'interface utilisateur d'un magasin de location de voitures sur lequel j'ai commencé à travailler afin de pratiquer HTML et CSS.";
    slide5text3.innerHTML = "TECHNOLOGIES UTILISÉES :";

//slide-6
    slide6text1.innerHTML = "Portefeuille";
    slide6text2.innerHTML = "Cette page que vous voyez maintenant est le résultat de ce que j'ai appris jusqu'à présent au cours de mes études dans le domaine du développement de pages Web, ce qui m'a beaucoup aidé à développer mes capacités pour pouvoir créer une exposition de mon travail et me présenter.";
    slide6text3.innerHTML = "TECHNOLOGIES UTILISÉES :";

//slide-7
    slide7text1.innerHTML = "Page d'accueil Restaurant";
    slide7text2.innerHTML = "Il s'agit de mon deuxième projet à travers la formation et le développement de mes compétences en développement du front end de pages web pour pratiquer le HTML et le CSS.";
    slide7text3.innerHTML = "TECHNOLOGIES USED :";
    



//btn
    btntext1.innerHTML = "REGARDEZ-LE DANS GITHUB";
    btntext2.innerHTML = "REGARDEZ-LE DANS GITHUB";
    btntext3.innerHTML = "REGARDEZ-LE DANS GITHUB";
    btntext4.innerHTML = "REGARDEZ-LE DANS DRIBBBLE";
    btntext5.innerHTML = "REGARDEZ-LE DANS GITHUB";
    btntext6.innerHTML = "OUVREZ-LE EN PDF";
    btntext7.innerHTML = "REGARDEZ-LE DANS GITHUB";



//footer
    footertext1.innerHTML = "Le travail acharné est ce que font les gens qui réussissent !";
    footertext2.innerHTML = "Des médias sociaux";

//nav
    navtext1.innerHTML ="Accueil";
    navtext2.innerHTML ="Biographie";
    navtext3.innerHTML ="Éducation";
    navtext4.innerHTML ="Compétences";
    navtext5.innerHTML ="Projets";


   



}else if(getLanuage ==="english"){

    text1.innerHTML = "Hello,";
    text2.innerHTML = "I’M";
    text3.innerHTML = "I’M";

//about tr
    abouttext1.innerHTML = "About Me";
    abouttext2.innerHTML = "Designer & Web Designer & Network Manager";
    abouttext3.innerHTML = "Hello, my name is Bilal, a developer, designer and network manager. My passion was designing logos and modifying images and videos, and this is what made me turn to developing web pages and found my comfort in them. I also have knowledge of network management and protection in Windows Server and Linux and maintenance of computers.";
    abouttext4.innerHTML = "And I am still learning more to develop myself.";
    abouttext5.innerHTML = "Download CV";
//education
    educationtext1.innerHTML = "EDUCATION";
    educationtext2.innerHTML = "MIAGE, Private Vocational Training School - Salé";
    educationtext3.innerHTML = "2020 - Present :";
    educationtext4.innerHTML = "2nd year Specialized Technician in IT Development.";
    educationtext5.innerHTML = "2018 - 2020";
    educationtext6.innerHTML = "Diploma in technical support and maintenance of computers and networks.";
    educationtext7.innerHTML = "2017 - 2018 :";
    educationtext8.innerHTML = "Baccalaureate level Life and Earth Sciences.";
//formation
    formationtext1.innerHTML = "ONLINE CERTIFICATES";
    formationtext2.innerHTML = "Platform Linkedin";
    formationtext3.innerHTML = "2020 - 2021 :";
    formationtext4.innerHTML = "Front End Web Development Certificate in HTML5, CSS, Sass, Bootstrap 4 & 5, LESS, JavaScript, jQuery, React.js, UX UI, Responsive Web Design.";
    formationtext5.innerHTML = "Platform Edraak";
    formationtext6.innerHTML = "2020 - 2021 :";
    formationtext7.innerHTML = "Certificate Of Completion Of Course In Introduction To The World Of Networking <br> and Programming With Python.";
    formationtext8.innerHTML = "Platform SoloLearn";
    formationtext9.innerHTML = "2020 - 2021 :";
    formationtext10.innerHTML = "Certificates in HTML5, CSS, JavaScript, jQuery, Responsive Web Design.";



//Skills
    Skillstext1.innerHTML = "Skills";
    Skillstext2.innerHTML = "Web Designer";
    Skillstext3.innerHTML = "Graphic Designer";
    Skillstext4.innerHTML = "Network Management";

//progress
    progresstext1.innerHTML = "Technologies";
    progresstext2.innerHTML = "Database";
    progresstext3.innerHTML = "Design";
    progresstext4.innerHTML = "Network";
    progresstext5.innerHTML = "More tools";


//projects
    projectstext1.innerHTML = "Projects";
    projectstext2.innerHTML = "During my studies, I was developing some applications in vb.net language, designed many corporate logos, and edited many videos as well. Now through my webpage programming tutorial, I was able to develop this page you see in front of you and still learn more and make more pages.";
    projectstext3.innerHTML = "And through what you will see below, click on a picture to see the summary of each project with a simple video inside the page";
    
//slide-1
    slide1text1.innerHTML = "Library Management";
    slide1text2.innerHTML = "This project was created at the end of the first academic year, and it was required to create a library management program. And there is the program, the management of officials who will be responsible for the program. They can enter customers, books and authors, and they can extract a book's rent invoice. We have also made space for libraries that have small cafes. They have beverage management as well as beverage billing.";
    slide1text3.innerHTML = "TECHNOLOGIES USED :";

 //slide-2
    slide2text1.innerHTML = "Gym Management";
    slide2text2.innerHTML = "Gym management application in collaboration with my friends. What we were required to do was get the new athletes into the gym and see who was paying at the time. There is a blacklist who is not paying at that time and the app user always comes a notification of people who don't pay.";
    slide2text3.innerHTML = "TECHNOLOGIES USED :";

//slide-3
    slide3text1.innerHTML = "Network Management";
    slide3text2.innerHTML = "I also have experience in the field of network management, and in this project, I was required to establish connections over the VIOP network using an asterisk server to talk over phones only using a local, protected server, and it was a unique experience working.";
    slide3text3.innerHTML = "TECHNOLOGIES USED :";

//slide-4
    slide4text1.innerHTML = "Design and Editing";
    slide4text2.innerHTML = "As I wrote earlier, I started this business because of creating logos and creating videos and this is a summary of what I do.";
    slide4text3.innerHTML = "TECHNOLOGIES USED :";


//slide-5
    slide5text1.innerHTML = "Car Rental";
    slide5text2.innerHTML = "In this project, we introduce you to the user interface of a car rental store that I started working on in order to practice HTML and CSS.";
    slide5text3.innerHTML = "TECHNOLOGIES USED :";


//slide-6
    slide6text1.innerHTML = "PortFolio";
    slide6text2.innerHTML = "This page that you see now is the result of what I have learned so far through my studies in the field of web page development, which helped me a lot in developing my abilities to be able to create an exhibition of my work and introduce me.";
    slide6text3.innerHTML = "TECHNOLOGIES USED :";

//slide-7
    slide7text1.innerHTML = "Home Page Restaurant";
    slide7text2.innerHTML = "This is my second project through training and developing my skills in developing the front end of web pages to practice HTML and CSS.";
    slide7text3.innerHTML = "TECHNOLOGIES USED :";

//btn
    btntext1.innerHTML = " WATCH IT IN GITHUB";
    btntext2.innerHTML = " WATCH IT IN GITHUB";
    btntext3.innerHTML = " WATCH IT IN GITHUB";
    btntext4.innerHTML = " WATCH IT IN DRIBBBLE";
    btntext5.innerHTML = " WATCH IT IN GITHUB";
    btntext6.innerHTML = " OPEN IT IN PDF";
    btntext7.innerHTML = " WATCH IT IN GITHUB";



//footer
    footertext1.innerHTML = "Hard work is what successful people do !";
    footertext2.innerHTML = "Social Media";

//nav
    navtext1.innerHTML ="Home";
    navtext2.innerHTML ="About Me";
    navtext3.innerHTML ="Education";
    navtext4.innerHTML ="Skills";
    navtext5.innerHTML ="Projects";



}


}




 
