(() => {
  try {
    var videosInfo = eval(
      Object.keys(window).filter((item) => item.indexOf("flashvars_") == 0)[0]
    ).mediaDefinitions;

    var mp4Url = videosInfo.filter((item) => item.format == "mp4")[0].videoUrl;

    fetch(mp4Url)
      .then((data) => data.json())
      .then((data) => {
        console.table(
          data.map((item) => ({ 质量: item.quality, 地址: item.videoUrl }))
        );
        drawInfoInPage(data, "___lp_ph_info_dom", true);
      })
      .catch((error) => {
        alert("视频详情获取失败");
        console.error(error);
      });
  } catch (error) {
    alert("未发现视频信息");
    console.error(error);
  }

  function drawInfoInPage(infos, id, copyName) {
    var dom = document.getElementById(id);

    if (!dom) {
      dom = document.createElement("div");
      dom.id = id;
      dom.style.cssText = `
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              z-index: 99999;
              background: rgba(255, 255, 255, 0.5);
              color: #000;
              font-size: 1.5em;
              padding: 10px;
              text-align: center;
          `;
      dom.onclick = (e) => {
        copyName
          ? navigator.clipboard
              .writeText(
                document.title.substring(0, document.title.lastIndexOf(" -"))
              )
              .then(() => {
                window.open(e.target.href);
              })
          : window.open(e.target.href);
      };
      document.body.appendChild(dom);
    }

    dom.innerHTML = `
          <table border="1" style="display: inline-block; background: #fff">
              <tr>
                  <th>质量</th>
                  <th>下载地址</th>
              </tr>
              ${infos
                .map(
                  (item) => `
                  <tr>
                      <td>${item.quality}</td>
                      <td><a href="${item.videoUrl}" target="_blank" style="color: blue;text-decoration: underline;" onclick="javascript:return false">下载</a></td>
                  </tr>
              `
                )
                .join("")}
          </table>
        `;
  }
})();
