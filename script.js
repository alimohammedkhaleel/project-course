 // ألوان الدوائر الضبابية
 const colors = ["#910A67", "#59089b", "#5c00b1", "#7a5af8"];

 // إنشاء الدوائر الضبابية
 const circle1 = document.getElementById("circle1");
 const circle2 = document.getElementById("circle2");
 const circle3 = document.getElementById("circle3");
 const circle4 = document.getElementById("circle4");

 // تعيين خصائص الدوائر
 circle1.style.backgroundColor = colors[0];
 circle2.style.backgroundColor = colors[1];
 circle3.style.backgroundColor = colors[2];
 circle4.style.backgroundColor = colors[3];

 circle1.style.width = "200px";
 circle1.style.height = "200px";
 circle2.style.width = "200px";
 circle2.style.height = "200px";
 circle3.style.width = "200px";
 circle3.style.height = "200px";
 circle4.style.width = "200px";
 circle4.style.height = "200px";

 // تحديد مواقع بداية الدوائر
 circle1.style.top = "2%";
 circle1.style.left = "0";
 circle2.style.top = "2%";
 circle2.style.right = "0";
 circle3.style.bottom = "2%";
 circle3.style.left = "0";
 circle4.style.bottom = "2%";
 circle4.style.right = "0";

 // تحريك الدوائر باستخدام GSAP
 gsap.to(circle1, {
     x: window.innerWidth - 200,
     duration: 10,
     repeat: -1,
     yoyo: true,
     ease: "power1.inOut"
 });

 gsap.to(circle2, {
     x: -window.innerWidth + 200,
     duration: 10,
     repeat: -1,
     yoyo: true,
     ease: "power1.inOut"
 });

 gsap.to(circle3, {
     x: window.innerWidth - 200,
     duration: 10,
     repeat: -1,
     yoyo: true,
     ease: "power1.inOut"
 });

 gsap.to(circle4, {
     x: -window.innerWidth + 200,
     duration: 10,
     repeat: -1,
     yoyo: true,
     ease: "power1.inOut"
 });

 // Collapse Navbar in Small Screens
 const menuButton = document.getElementById("menu-button");
 const navbarLinks = document.getElementById("navbar-links");

 menuButton.addEventListener("click", () => {
     navbarLinks.classList.toggle("open");
 });

 // إغلاق القائمة عند النقر خارجها
 document.addEventListener("click", (event) => {
     if (!navbarLinks.contains(event.target) && !menuButton.contains(event.target)) {
         navbarLinks.classList.remove("open");
     }
 });

 // GSAP Animation for Navbar
 gsap.from(".navbar", {
     y: -100,
     duration: 1,
     ease: "power2.out",
     delay: 0.5,
 });
 gsap.from(".description", {
     opacity: 0,
     x: -400,
     duration: 1.3,
     ease: "power2.out",
     delay: 0.5
 });
 gsap.from(".button", {
     opacity: 0,
     y: 100,
     duration: 1,
     ease: "power2.out",
     stagger: 0.8,
     delay: 0.8
 });

 // GSAP ScrollTrigger للبطاقات
 gsap.from(".card", {
     scrollTrigger: {
         trigger: ".cards-section",
         start: "top 60%", // يبدأ التأثير عندما يصل التمرير إلى 60% من القسم
         end: "bottom 20%", // ينتهي التأثير عند 20% من القسم
         toggleActions: "play play none none", // تشغيل التأثير مرة واحدة

     },
     opacity: 0,
     y: 200,
     duration: 1,
     stagger: 0.6,
     delay: 0.3,
     ease: "power2.out"
 });
 gsap.from(".header-6",{
     scrollTrigger:{
         trigger:".team",
         start:"top 60%",
         end:"bottom 20%",
         toggleAction:"play none none none"
     },
     opacity:0,
     x:-200,
     duration:1.3,
     delay:0.2,
     ease:"power2.out"
 });

 gsap.from(".HC", {
     scrollTrigger: {
         trigger: ".cards-section",
         start: "top 60%",
         end: "bottom 20%",
         toggleActions: "play play none none",
     },
     opacity: 0,
     x: -200,
     duration: 1,
     delay: 0.15,
     ease: "power2.out"


 });
 gsap.registerPlugin(ScrollTrigger);
 
 // تهيئة البطاقات
 gsap.set(".card-5", { y: 50 });
 
 // تحريك جميع البطاقات
 document.querySelectorAll(".card-5").forEach((card, i) => {
     // تحريك البطاقة الرئيسية
     gsap.to(card, {
         opacity: 1,
         y: 0,
         duration: 0.8,
         ease: "power2.out",
         scrollTrigger: {
             trigger: card,
             start: "top 80%",
             toggleActions: "play none none none"
         }
     });
     
     // تحريك دائرة السعر
     gsap.fromTo(card.querySelector(".price-circle"), 
         { 
             scale: 0.5,
             rotation: -30 
         },
         { 
             scale: 1,
             rotation: 0,
             duration: 0.8,
             ease: "elastic.out(1, 0.5)",
             scrollTrigger: {
                 trigger: card,
                 start: "top 80%",
                 toggleActions: "play none none none"
             }
         }
     );
     
     // تحريك الزر
// تحريك الأزرار الإضافية باستخدام class
gsap.fromTo(card.querySelector(".button-5"), 
         { 
             y: 30,
             opacity: 0 
         },
         { 
             y: 0,
             opacity: 1,
             duration: 0.9,
             delay: 0.3,
             ease: "back.out",
             scrollTrigger: {
                 trigger: card,
                 start: "top 80%",
                 toggleActions: "play none none none"
             }
         }
     );// تأثير hover على البطاقة
     card.addEventListener("mouseenter", () => {
         gsap.to(card, {
             y: -10,
             duration: 0.3,
             ease: "power1.out"
         });
     });
     
     card.addEventListener("mouseleave", () => {
         gsap.to(card, {
             y: 0,
             duration: 0.3,
             ease: "power1.out"
         });
     });
 });
 gsap.set(".employee-header", { x: -50, opacity: 0 });
 gsap.set(".employee-image", { scale: 0.8, opacity: 0 });
 gsap.set(".employee-description", { y: 20, opacity: 0 });
 
 // Animation timeline for the title
 gsap.to(".team-title", {
     opacity: 1,
     y: 0,
     duration: 1,
     ease: "power2.out",
     scrollTrigger: {
         trigger: ".team-card",
         start: "top 80%",
         toggleActions: "play none none none"
     }
 });
 
 // Animation for employees
 document.querySelectorAll(".employee").forEach((emp, index) => {
     // Header animation
     gsap.to(emp.querySelector(".employee-header"), {
         x: 0,
         opacity: 1,
         duration: 0.8,
         delay: index * 0.2,
         ease: "back.out",
         scrollTrigger: {
             trigger: emp,
             start: "top 80%",
             toggleActions: "play none none none"
         }
     });
     
     // Image animation
     gsap.to(emp.querySelector(".employee-image"), {
         scale: 1,
         opacity: 1,
         duration: 0.8,
         delay: index * 0.2 + 0.1,
         ease: "elastic.out(1, 0.5)",
         scrollTrigger: {
             trigger: emp,
             start: "top 80%",
             toggleActions: "play none none none"
         }
     });
     
     // Description animation
     gsap.to(emp.querySelector(".employee-description"), {
         y: 0,
         opacity: 1,
         duration: 0.6,
         delay: index * 0.2 + 0.3,
         ease: "power2.out",
         scrollTrigger: {
             trigger: emp,
             start: "top 80%",
             toggleActions: "play none none none"
         }
     });
     
     // Whole employee card
     gsap.to(emp, {
         opacity: 1,
         duration: 0.5,
         scrollTrigger: {
             trigger: emp,
             start: "top 85%",
             toggleActions: "play none none none"
         }
     });
 });
 
 // Responsive adjustments
 function handleResize() {
     if (window.innerWidth <= 768) {
         gsap.set(".employee-header", { x: 0, y: 30 });
     } else {
         gsap.set(".employee-header", { x: -50, y: 0 });
     }
 }
 
 window.addEventListener('resize', handleResize);
 handleResize();
 document.addEventListener('DOMContentLoaded', () => {
     // Animate cards on scroll with larger motion
     gsap.utils.toArray('.card-10').forEach((card, i) => {
         gsap.to(card, {
             y: 0,
             opacity: 1,
             duration: 1, // زيادة مدة الحركة
             delay: i * 0.15, // زيادة التأخير بين البطاقات
             ease: "power3.out",
             scrollTrigger: {
                 trigger: card,
                 start: "top 85%", // تعديل نقطة بدء الحركة
                 toggleActions: "play none none none"
             }
         });
     });
     
     // Add hover effects with GSAP for smoother transitions
     const cards = document.querySelectorAll('.card-10');
     
     cards.forEach(card => {
         card.addEventListener('mouseenter', () => {
             gsap.to(card.querySelector('.img-10 img'), {
                 filter: 'brightness(0.9) contrast(1.1)',
                 duration: 0.3
             });
             
             gsap.to(card.querySelector('.icon-10'), {
                 right: 0,
                 opacity: 1,
                 duration: 0.3
             });
         });
         
         card.addEventListener('mouseleave', () => {
             gsap.to(card.querySelector('.img-10 img'), {
                 filter: 'brightness(1) contrast(1)',
                 duration: 0.3
             });
             
             gsap.to(card.querySelector('.icon-10'), {
                 right: '-100%',
                 opacity: 0,
                 duration: 0.3
             });
         });
     });
 });
 document.addEventListener('DOMContentLoaded', () => {
     // Initialize GSAP ScrollTrigger
    
     
     // Animate cards on scroll with larger motion
     gsap.utils.toArray('.card-12').forEach((card, i) => {
         gsap.to(card, {
             y: 0,
             opacity: 1,
             duration: 1,
             delay: i * 0.15,
             ease: "power3.out",
             scrollTrigger: {
                 trigger: card,
                 start: "top 85%",
                 toggleActions: "play none none none"
             }
         });
     });
 });
 document.addEventListener('DOMContentLoaded', () => {
     // تهيئة ScrollTrigger
     
     
     // تأثيرات للبطاقات (تبقى كما هي)
     gsap.utils.toArray('.card-10').forEach((card, i) => {
         gsap.to(card, {
             y: 0,
             opacity: 1,
             duration: 1,
             delay: i * 0.15,
             ease: "power3.out",
             scrollTrigger: {
                 trigger: card,
                 start: "top 85%",
                 toggleActions: "play none none none"
             }
         });
     });
     
     // تأثيرات الفوتر المتقدمة
     gsap.to("footer", {
         y: 0,
         opacity: 1,
         duration: 1,
         ease: "power3.out",
         scrollTrigger: {
             trigger: "footer",
             start: "top 90%",
             toggleActions: "play none none none",
             onEnter: () => document.querySelector("footer").classList.add("active")
         }
     });
     
     // تأثيرات الأقسام الداخلية
     gsap.utils.toArray(".footer-section").forEach((section, i) => {
         gsap.to(section, {
             y: 0,
             opacity: 1,
             duration: 0.8,
             delay: 0.3 + i * 0.15,
             ease: "back.out(1.2)",
             scrollTrigger: {
                 trigger: "footer",
                 start: "top 90%",
                 toggleActions: "play none none none"
             }
         });
     });
     
     // تأثيرات الروابط السريعة
     gsap.utils.toArray(".quick-links li").forEach((item, i) => {
         gsap.to(item, {
             x: 0,
             opacity: 1,
             duration: 0.6,
             delay: 0.6 + i * 0.1,
             ease: "elastic.out(1, 0.5)",
             scrollTrigger: {
                 trigger: "footer",
                 start: "top 90%",
                 toggleActions: "play none none none"
             }
         });
     });
     
     // تأثير حقوق النشر
     gsap.to(".footer-bottom", {
         y: 0,
         opacity: 1,
         duration: 1,
         delay: 1,
         ease: "power2.out",
         scrollTrigger: {
             trigger: "footer",
             start: "top 90%",
             toggleActions: "play none none none"
         }
     });
     
     // تأثيرات إضافية للروابط الاجتماعية
     gsap.utils.toArray(".social-links a").forEach((link, i) => {
         gsap.from(link, {
             y: 30,
             rotation: -15,
             opacity: 0,
             duration: 0.8,
             delay: 0.8 + i * 0.1,
             ease: "back.out(2)",
             scrollTrigger: {
                 trigger: "footer",
                 start: "top 90%",
                 toggleActions: "play none none none"
             }
         });
     });
     
     // تأثير الخلفية المتحركة
     gsap.to(".footer-bg-element:nth-child(1)", {
         rotation: 360,
         duration: 60,
         repeat: -1,
         ease: "none"
     });
     
     gsap.to(".footer-bg-element:nth-child(2)", {
         rotation: -360,
         duration: 80,
         repeat: -1,
         ease: "none"
     });
 });
/*image card*/
gsap.from(".header",{
    scrollTrigger:{
        trigger:".img-section",
        start:"top 60%",
        end:"bottom 20%",
        toggleAction:"play none none none"
    },
    opacity:0,
    x:-100,
    duration:1.2,
    delay: 0.16,
    ease:"power2.out"
});
document.addEventListener('DOMContentLoaded', () => {

     // تحريك البطاقات من اليمين إلى اليسار
    const cards = gsap.utils.toArray('.card2');
    
    cards.forEach((card, index) => {
        // ظهور البطاقة
        gsap.fromTo(card, 
            { 
                x: 50, 
                opacity: 0,
                filter: 'blur(5px)'
            },
            {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                x: 0,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.8,
                delay: index * 0.15,
                ease: 'back.out(1.5)',
                onComplete: setupCardHover // إعداد تأثير hover بعد الظهور
            }
        );
        
        // إعداد تأثير hover باستخدام GSAP
        function setupCardHover() {
            const content = card.querySelector('.card2-content');
            
            // تأثير hover على البطاقة
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
                
                gsap.to(content, {
                    opacity: 1,
                    duration: 0.3
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
                
                gsap.to(content, {
                    opacity: 0,
                    duration: 0.3
                });
            });
        }
    });
    
    // تأثير موجة عند ظهور جميع البطاقات
    ScrollTrigger.create({
        trigger: '.grid-container',
        start: 'top 60%',
        onEnter: () => {
            gsap.to('.card2', {
                y: -10,
                duration: 0.3,
                yoyo: true,
                repeat: 1,
                ease: 'power1.inOut',
                stagger: 0.1
            });
        }
    });
});
/* offer section animation*/
gsap.from(".header-2",{
    scrollTrigger:{
        trigger:".offer-section",
        start:"top 60%",
        end:"bottom 20%",
        toggleAction:"play none none none"
    },
    opacity:0,
    x:-100,
    duration:1.2,
    delay: 0.16,
    ease:"power2.out"
});
document.addEventListener('DOMContentLoaded', () => {

    // تحريك البطاقات من اليمين إلى اليسار
   const cards = gsap.utils.toArray('.card3');
   
   cards.forEach((card, index) => {
       // ظهور البطاقة
       gsap.fromTo(card, 
           { 
               x: 50, 
               opacity: 0,
               filter: 'blur(5px)'
           },
           {
               scrollTrigger: {
                   trigger: card,
                   start: 'top 80%',
                   toggleActions: 'play none none none'
               },
               x: 0,
               opacity: 1,
               filter: 'blur(0px)',
               duration: 0.8,
               delay: index * 0.15,
               ease: 'back.out(1.5)',
               onComplete: setupCardHover // إعداد تأثير hover بعد الظهور
           }
       );
       
       // إعداد تأثير hover باستخدام GSAP
       function setupCardHover() {
          
           
           // تأثير hover على البطاقة
           card.addEventListener('mouseenter', () => {
               gsap.to(card, {
                   y: -10,
                   boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
                   duration: 0.3,
                   ease: 'power2.out'
               });
               
               
           });
           
           card.addEventListener('mouseleave', () => {
               gsap.to(card, {
                   y: 0,
                   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                   duration: 0.3,
                   ease: 'power2.out'
               });
               
            
           });
       }
   });
   
   // تأثير موجة عند ظهور جميع البطاقات
   ScrollTrigger.create({
       trigger: '.grid-container',
       start: 'top 60%',
       onEnter: () => {
           gsap.to('.card3', {
               y: -10,
               duration: 0.3,
               yoyo: true,
               repeat: 1,
               ease: 'power1.inOut',
               stagger: 0.1
           });
       }
   });
});
/*why*/
document.addEventListener('DOMContentLoaded', () => {
    // تسجيل Plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // تهيئة العناصر المتحركة
    gsap.set([".header-3", ".description-2", ".feature-item", ".image-container", ".radio-container", ".cta-button"], {
        opacity: 0
    });
    
    // إنشاء تأثيرات ScrollTrigger
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".why",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });
    
    // تسلسل الحركات
    tl.fromTo(".header-3",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".description-2",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.3"
    )
    .fromTo(".image-container",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.2"
    )
    .fromTo(".feature-item",
        { x: (i) => i % 2 === 0 ? -30 : 30, opacity: 0 },
        { 
            x: 0, 
            opacity: 1, 
            duration: 0.6, 
            stagger: 0.15,
            ease: "back.out(1.5)" 
        },
        "-=0.4"
    )
    .fromTo(".radio-container",
        { y: 20, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.5, 
            stagger: 0.1,
            ease: "power2.out" 
        },
        "-=0.3"
    )
    .fromTo(".cta-button",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.2"
    );
    
    // الحفاظ على تأثيرات hover الأصلية
    document.querySelectorAll('.feature-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -5,
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                duration: 0.3
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                background: 'rgba(255, 255, 255, 0.05)',
                duration: 0.3
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // تسجيل Plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // إعداد العناصر المتحركة باستخدام GSAP بدون تعديل الـ classes
    gsap.from(".stats-card", {
        scrollTrigger: {
            trigger: ".dashboardd",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 200,
        duration: 0.8,
        ease: "power3.out"
    });
    
    gsap.from(".stats-header", {
        scrollTrigger: {
            trigger: ".stats-card",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.3
    });
    
    gsap.from(".stat-item", {
        scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.5)",
        delay: 0.5
    });
    
    // الحفاظ على تأثيرات hover الأصلية
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -10,
                duration: 0.3
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                duration: 0.3
            });
        });
    });
});
