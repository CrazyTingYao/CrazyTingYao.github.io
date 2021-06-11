$("#map").on("load", () => {
    $("#dots").css({width: `${$("#map").width()}px`, height: `${$("#map").height()}px`})
})

const linkou = [27, 81.5, 25.077197, 121.376869], tainan = [73, 55, 22.984581, 120.202617]

eel.get_airquality_data()(data => {
    for (let site of data.records){
        let dot = $(`<div class="dot" title="${site.County} ${site.SiteName}&#13;PM2.5值：${site["PM2.5"]}&#13;PM10值：${site["PM10"]}&#13;更新時間：${site.PublishTime}"></div>`)
        lay =  (linkou[0] - tainan[0]) / (linkou[2] - tainan[2]) * (parseFloat(site.Latitude) - linkou[2]) + linkou[0]
        loy =  (linkou[1] - tainan[1]) / (linkou[3] - tainan[3]) * (parseFloat(site.Longitude) - linkou[3]) + linkou[1]
        dot.css({top: `${lay}%`, left: `${loy}%`, "background-color": `var(--${site.Status != "" ? site.Status : "空"})`})
        $("#dots").append(dot)
    }
})
