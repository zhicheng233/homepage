//Typed.js
var typed = new Typed('#hi', {
    strings: [
        "志成zhi_cheng.",
        "from Guangdong, China.",
        "a student.",
        "good at loaf on the job.",
        "a pvper.",
        "a YouTuber.",
        "Trans",
        "......?"
    ],
    typeSpeed: 100,
    loop: true,
});

//Nav links
function goHome() {
    $("#home").addClass("nav-active");
    $("#blog").removeClass("nav-active");
    $("#projects").removeClass("nav-active");
    $("#homeの").show();
    $("#blogの").hide();
    $("#projectsの").hide();
}

function goBlog() {
    $("#blog").addClass("nav-active");
    $("#home").removeClass("nav-active");
    $("#projects").removeClass("nav-active");
    $("#blogの").show();
    $("#homeの").hide();
    $("#projectsの").hide();

    $.get("https://blog.zhicheng233.top/rss2.xml", function (data) {
        $('#blogs').empty();
        $(data).find('item').each(function () {
            var $item = $(this);
            var title = $item.find('title').text();
            var link = $item.find('link').text();
            //var description = $item.find('description').text();
            //var pubDate = $item.find('pubDate').text();
            var html = "<div class=\"box-item\">";
            html += "<b>" + title + "</b>";
            //html += "<em>" + timeString(pubDate) + "</em>";
            //html += "<p>" + description + "</p>";
            html += "&nbsp;&nbsp;->&nbsp;&nbsp;<a href=\"" + link + "\" target=\"_blank\">Read More</a>";
            html += "</div>";
            
            $('#blogs').append(html);
        });
    });
}

function goProjects() {
    $("#projects").addClass("nav-active");
    $("#blog").removeClass("nav-active");
    $("#home").removeClass("nav-active");
    $("#projectsの").show();
    $("#blogの").hide();
    $("#homeの").hide();
}

// 自动计算当前年份与年龄（出生日期：2006-12-08）
function updateYearAndAge() {
    var now = new Date();
    var year = now.getFullYear();
    var birth = new Date(2006, 11, 8); // month is 0-based: 11 = December

    var age = year - birth.getFullYear();
    // 若今年还没过生日，则减一
    var hasHadBirthday = (now.getMonth() > birth.getMonth()) || (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());
    if (!hasHadBirthday) {
        age -= 1;
    }

    var yearEl = document.getElementById('year');
    var ageEl = document.getElementById('age');
    if (yearEl) yearEl.textContent = year;
    if (ageEl) ageEl.textContent = age;
}

// 在 DOM 就绪后更新
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateYearAndAge);
} else {
    updateYearAndAge();
}
