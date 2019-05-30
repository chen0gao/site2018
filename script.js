var loadbtn = document.querySelectorAll(".loadbtn");
for(i = 0; i<loadbtn.length;i++) {
  (function(i) {
    loadbtn[i].onclick = function(){
      var target = "#"+ loadbtn[i].id + "Target";
      console.log(target);
      if (loadbtn[i].classList.contains("more")) {
        document.querySelector(target).classList.add("contentUnhide");
        loadbtn[i].innerHTML = "< Read Less >";
        loadbtn[i].classList.remove("more");
        loadbtn[i].classList.add("less");
      } else {

        document.querySelector(target).classList.remove("contentUnhide");
        loadbtn[i].innerHTML = "< Read More >";
        loadbtn[i].classList.remove("less");
        loadbtn[i].classList.add("more");
      }
    }
  }(i))
}

var projectText = document.querySelectorAll("#projectFilterTab li"),
showCase = document.querySelector(".projectShowCase"),
scr = [
  'https://drive.google.com/file/d/1bExdB4qXYihPsP_klZNLGx3o-yyyCrDF/preview', //Eyeglass Model
  'https://drive.google.com/file/d/17dRRcX7wnf1ZYL54FZ1GfGntg6rvuMTy/preview', //Exo-glove
  'https://drive.google.com/file/d/1rmTY3tOSeW2kul9PsWVIXmswe4vBWJF9/preview', // claw
  'https://drive.google.com/file/d/1eZHkefw2B_7JGFD7Y3B0cVVJpXkpmV_m/preview', // iPhone 4s
  'https://drive.google.com/file/d/1Pi419pQLbRTdXjmnRGexdI4eyIvEYDCd/preview', //Project
  'https://drive.google.com/file/d/1bpp0YBhxEnAYm5U7V841qbeC2Z_4Uq_j/preview', //Engineering

  'https://drive.google.com/file/d/1QEFSNWpDiUTn4F6mb-qNgdEKbDrxnxHe/preview', //Streamline
  'https://drive.google.com/file/d/1XwCcGgR-LVrnB1cCPlax5Xb6Wn0qUYv1/preview', //MatlabDrawing

  'https://ccnydss.github.io/bioanimation/', //Bioanimation
  'https://chen0gao.github.io/Special-Project/', //shear moment diagram
  "http://ccnydigitalscholarship.org/kofiannan/",
  "http://ccnydigitalscholarship.org/dsi-blacks-in-america/",
  "http://digitalscholarship.ccny.cuny.edu/architecture/",
  "https://oswald.commons.gc.cuny.edu/",
  "https://jablonskymusic101.commons.gc.cuny.edu/",

  "https://drive.google.com/file/d/1HIKBrnh_hYsRbJ_s8O1V__S4nRL3JhOb/preview", //Senior Design
  "https://drive.google.com/file/d/1hSwZpre7hq2xmhrgw1FFvas4LDKRcji2/preview", //Airfoil

  "http://campusmodel.tk/#timetag", //Campus Model

  'https://drive.google.com/file/d/1RQZg927AYi3HJ4gx4j0g6J1wHafL97kL/preview' //Default

],
desc = [
  'A SolidWorks model created by myself. The report including measurement and modeling details.',
  'Our topic is to design and construct an exoskeleton glove to assist hand Impairment Patients. The requirement of the glove is able to assist patients to perform daily tasks such as grasp food and holding tools. Our group followed a complete process, including research, design, solid model, manufacture, programming, result analysis, and 2min demonstration video. ',
  'A Claw Gripper designed and manufactured with my team. We created the mechanical structure of the claw using SolidWorks. Then estimate the material costs within the given budget. Lastly, we manufactured the physical model using a CNC machine and 3D printer.',
  'iPhone 4s modeling using SolidWorks',
  'A Finite Element Analysis project completed with my team. We first create the model duplication of our Wall Shelf. Then analyze several different force distribution on the interested areas.',
  'A Collection of Engineering Drawing throughout my College courses.',

  'A Matlab Program would be able to calculate and draw the streamline pattern around a rotating cylinder in the presence of free stream velocity, based on user input.',
  'A Collection of Matlab Programs throughout my College courses.',
  //

  'The biology simulations that my team created for a biology course. This simulation had completed UI for allowing students to interactive animation. The questions were also included for students to answer.',
  'A sample and user friendly shear moment diagrams simulator for beam analysis created by using Html CSS JavaScript.',
  'The academic exhibits that my team created for different departments in the City College of New York (CCNY). Which had different features and displaying layout for serving different purposes.',
  'The academic exhibits that my team created for different departments in the City College of New York (CCNY). Which had different features and displaying layout for serving different purposes.',
  'The academic exhibits that my team created for different departments in the City College of New York (CCNY). Which had different features and displaying layout for serving different purposes.',
  'The academic websites that my team created for the City College of New York (CCNY) Open Educational Resources (OER) courses. Those websites included syllabus, textbook and all other essential contents that students needed.',
  'The academic websites that my team created for the City College of New York (CCNY) Open Educational Resources (OER) courses. Those websites included syllabus, textbook and all other essential contents that students needed.',
  //
  'My senior design project topic is developing a new microscale device (Droplets-Based Microfluidics Device) to generate microdroplet for cosmetics and medical usage. Our device aims for better convenience and efficiency than the traditional device. My role in the team is using software to simulate and predict the experimental result, which can be used to assist the development and manufacture of the device.',
  'The ANSYS Fluent analysis reports created for my aerodynamics course. Including basic usage of Fluent plotting for the airfoil, which simulation force and pressure flow near the airfoil.',

  'A Unity3D plugin that I created for an architecture academic project. This plugin allows the user to travel through different time, and see the buildings that exist during those time.',//
  //            'The C++ Assignment that I coded for my course. Including basic function of ...'
]

for(i = 0; i<projectText.length;i++) {
  (function(i) {
    projectText[i].onclick = function(){
      if(!showCase.classList.contains("showCaseOpen") );
      showCase.classList.add("showCaseOpen");

      if(projectText[i].classList.contains("website")) {
        showCase.innerHTML = "<div class='showCaseTitle'>"+projectText[i].textContent+
        "</div><div>Link: <a target='_blank' href="+scr[i]+">"+scr[i]+"</a>"+
        "</div><div class='showCaseDesc'>"
        +desc[i]
        +"</div><a target='_blank' href="+scr[i]+"><img src='img/"+projectText[i].textContent.replace(new RegExp(' ', 'g'),"_")+".PNG'></a>"
      } else {
        showCase.innerHTML = "<div class='showCaseTitle'>"+projectText[i].textContent+
        "</div><div id='showCaseLink'>Link (if failed to load embed PDF): <a target='_blank' href="+scr[i]+">"+scr[i]+"</a>"+
        "</div><div class='showCaseDesc'>"+desc[i]+"</div><iframe src='"+scr[i]+"'></iframe>"
      }

      for(let k = 0; k<projectFilterTab.length;k++) {
        projectFilterTab[k].classList.remove("FilterContainerActive");
        var listBox = document.querySelector("#show"+alt[k].alt);
        listBox.classList.add("hide");
      }
    }
  }(i))
}

var projectFilterTab = document.querySelectorAll(".FilterContainer div"),
alt = document.querySelectorAll(".FilterContainer div img");
for(i = 0; i<projectFilterTab.length;i++) {
  (function(i) {
    projectFilterTab[i].onmouseover = function(){
      if(!projectFilterTab[i].classList.contains("FilterContainerActive") );
      projectFilterTab[i].classList.add("FilterContainerActive");
      var listBox = document.querySelector("#show"+alt[i].alt);
      listBox.classList.remove("hide");

      for(j = 0; j<projectFilterTab.length;j++) {
        if(j!=i & projectFilterTab[j].classList.contains("FilterContainerActive")) {
          projectFilterTab[j].classList.remove("FilterContainerActive");
          var listBox = document.querySelector("#show"+alt[j].alt);
          listBox.classList.add("hide");
        }
      }
    }

    var container = document.querySelector("#projectFilterTab");
    container.onmouseleave = function(){
      for(let k = 0; k<projectFilterTab.length;k++) {
        projectFilterTab[k].classList.remove("FilterContainerActive");
        var listBox = document.querySelector("#show"+alt[k].alt);
        listBox.classList.add("hide");
      }
    }

  }(i))
}


document.querySelector("body").onscroll = function(){

  var documentScrollTop = document.documentElement.scrollTop;

  //https://stackoverflow.com/questions/526347/how-do-you-get-the-rendered-height-of-an-element
  //clientHeight includes the height and vertical padding.
  //offsetHeight includes the height, vertical padding, and vertical borders.
  //scrollHeight includes the height of the contained document (would be greater than just height in case of scrolling), vertical padding, and vertical borders.

  if (documentScrollTop > document.querySelector("#about").offsetHeight) {
    document.querySelector(".tab").classList.add('fixed');
  } else if (document.querySelector(".tab").classList.contains('fixed')) {
    document.querySelector(".tab").classList.remove('fixed');
  }

  //https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
  var bodyTop = document.body.getBoundingClientRect().top,
  xpTop = document.querySelector("#experience").getBoundingClientRect().top - bodyTop,
  skillTop = document.querySelector("#skill").getBoundingClientRect().top - bodyTop,
  projectTop = document.querySelector("#project").getBoundingClientRect().top - bodyTop,
  tabHeight = document.querySelector("#tabWrapper").scrollHeight - 10; //Minus the padding from list

  var tablist = document.querySelectorAll(".tab a");
  if (documentScrollTop > xpTop - tabHeight) {
    //        console.log("experience");

    if(!tablist[3].classList.contains("tabExperience"))
    tablist[3].classList.add("tabExperience");

    if(tablist[0].classList.contains("tabAbout"))
    tablist[0].classList.remove("tabAbout");
    if(tablist[1].classList.contains("tabSkill"))
    tablist[1].classList.remove("tabSkill");
    if(tablist[2].classList.contains("tabProject"))
    tablist[2].classList.remove("tabProject");

    if(document.querySelector(".tab").style.borderTopColor!= "rgba(52, 152, 219, 1)")
    document.querySelector(".tab").style.borderTopColor= "rgba(52, 152, 219, 1)";

  }  else if (documentScrollTop > skillTop - tabHeight) {
    //        console.log("skill");
    if(!tablist[2].classList.contains("tabProject"))
    tablist[2].classList.add("tabProject");

    if(tablist[0].classList.contains("tabAbout"))
    tablist[0].classList.remove("tabAbout");
    if(tablist[1].classList.contains("tabSkill"))
    tablist[1].classList.remove("tabSkill");
    if(tablist[3].classList.contains("tabExperience"))
    tablist[3].classList.remove("tabExperience");

    if(document.querySelector(".tab").style.borderTopColor!= "rgba(46, 204, 113, 1)")
    document.querySelector(".tab").style.borderTopColor= "rgba(46, 204, 113, 1)";

  }  else if (documentScrollTop > projectTop - tabHeight) {
    //        console.log("project");
    if(!tablist[1].classList.contains("tabSkill"))
    tablist[1].classList.add("tabSkill");

    if(tablist[0].classList.contains("tabAbout"))
    tablist[0].classList.remove("tabAbout");
    if(tablist[2].classList.contains("tabProject"))
    tablist[2].classList.remove("tabProject");
    if(tablist[3].classList.contains("tabExperience"))
    tablist[3].classList.remove("tabExperience");

    if(document.querySelector(".tab").style.borderTopColor!= "rgba(243, 193, 58, 1)")
    document.querySelector(".tab").style.borderTopColor= "rgba(243, 193, 58, 1)";

  }  else {
    if(!tablist[0].classList.contains("tabAbout"))
    tablist[0].classList.add("tabAbout");

    if(tablist[1].classList.contains("tabSkill"))
    tablist[1].classList.remove("tabSkill");
    if(tablist[2].classList.contains("tabProject"))
    tablist[2].classList.remove("tabProject");
    if(tablist[3].classList.contains("tabExperience"))
    tablist[3].classList.remove("tabExperience");

    if(document.querySelector(".tab").style.borderTopColor!= "#636e72")
    document.querySelector(".tab").style.borderTopColor= "#636e72";
  }
};
