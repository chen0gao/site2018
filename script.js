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
		   'https://drive.google.com/file/d/1Pi419pQLbRTdXjmnRGexdI4eyIvEYDCd/preview', //Project
           'https://drive.google.com/file/d/1bpp0YBhxEnAYm5U7V841qbeC2Z_4Uq_j/preview', //Engineering
           'https://drive.google.com/file/d/1XwCcGgR-LVrnB1cCPlax5Xb6Wn0qUYv1/preview', //MatlabDrawing
		   'https://drive.google.com/file/d/1QEFSNWpDiUTn4F6mb-qNgdEKbDrxnxHe/preview', //Streamline
           'https://drive.google.com/file/d/1RQZg927AYi3HJ4gx4j0g6J1wHafL97kL/preview' //Default
          
          ],
    desc = [
//			'A Collection of SolidWorks model throughout my College courses, which including basic usage of line drawing, 3D drawing, extrusion, split line...',
            'A Finite Element Analysis project completed with my team. We first create the model duplication of our Wall Shelf. Then analyze several different force distribution on the interested areas.',
            'A Collection of Engineering Drawing throughout my College courses.',
//            'A Claw Gripper designed and manufactured with my team. We created the mechancial structure of the claw using SolidWorks. Then estimated the material costs within the given budget. Lastly, we manufactured the physical model using CNC machine and 3D printer.',
            
            'A Collection of Matlab Programs throughout my College courses. Including',
            'A Matlab Program would be able to calculate and draw the streamline pattern around a rotating cylinder in the presence of free stream velocity, based on user input.',
//            
//            'The academic websites that my team created for CCNY OER courses. Those websites included syllabus, textbook and all other essential contents that students needed.',
//            'The biology simulations that my team created for a biology course. This simulation had completed UI for allowing student to interactive animation. The questions were also included for students to answer.',
//            'The academic exhibits that my team created for CCNY library. Which had different features and displaying layout for serving different purpose.',
//            
//            'The ANSYS Fluent anlysis reports created for my aerodynamics course. Including basic usage of Fluent plottig for air foil, which simulation force and pressure flow near the air foil.',
//            
//            'The C++ Assignment that I coded for my course. Including basic function of ...'
           ]

for(i = 0; i<projectText.length;i++) {
    (function(i) {
        projectText[i].onclick = function(){
            if(!showCase.classList.contains("showCaseOpen") );
            showCase.classList.add("showCaseOpen");
            showCase.innerHTML = "<div class='showCaseTitle'>"+projectText[i].textContent+"</div><div class='showCaseDesc'>"+desc[i]+"</div><iframe src='"+scr[i]+"'></iframe>"

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

    }  else if (documentScrollTop > projectTop - tabHeight) {
        //        console.log("project");
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

    }  else if (documentScrollTop > skillTop - tabHeight) {
        //        console.log("skill");
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

