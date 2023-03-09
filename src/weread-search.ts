import $ from "jquery";

interface ButtonConfig {
  name: string;
  color: string;
  searchUrl: string;
}

// 一键搜📗豆瓣阅读或📙得到阅读
// 监听页面是否是搜索页面
const handleListenChange = (mutationsList: MutationRecord[]) => {
  const className = (mutationsList[0].target as HTMLElement)?.className ?? '';
  if (/search_show/.test(className)) {
    // 开始添加按钮
    const searchBox = getSearchBox();
    if (!searchBox) return;

    const lastChild = searchBox.parentElement?.lastChild;
    if (!(lastChild instanceof Element) || lastChild.tagName === "BUTTON") return;

    // 添加按钮们
    const buttonConfigs: ButtonConfig[] = [
      { name: "豆瓣读书", color: "#027711", searchUrl: "https://search.douban.com/book/subject_search?search_text=" },
      { name: "豆瓣阅读", color: "#389eac", searchUrl: "https://read.douban.com/search?q=" },
      { name: "得到阅读", color: "#b5703e", searchUrl: "https://www.dedao.cn/search/result?q=" },
      { name: "孔夫子", color: "#701b22", searchUrl: "https://search.kongfz.com/product_result/?key=" },
      { name: "多抓鱼", color: "#497849", searchUrl: "https://www.duozhuayu.com/search/book/" },
    ];
    buttonConfigs.forEach(({ name, color, searchUrl }) =>
      $(searchBox).parent().append(
        $('<button>').text(`搜 ${name}`)
          .css({ backgroundColor: color, color: "#fff", borderRadius: "1em", margin: ".5em", padding: ".5em", cursor: "pointer", })
          .click(() => {
            window.open(searchUrl + $(searchBox).val(), "_blank");
          })
      )
    );

    // 建议元素下移，避免遮挡按钮
    $(".search_suggest_keyword_container").css("margin-top", "2.3em");
  }
};

const mutationObserver = new MutationObserver(handleListenChange);
mutationObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });

const getSearchBox = (): HTMLInputElement | undefined => {
  const searchBox = $(".search_input_text")[0];
  return searchBox instanceof HTMLInputElement ? searchBox : undefined;
};
