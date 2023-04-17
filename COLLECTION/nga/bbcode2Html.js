const nodes = [
    {
        tag: "url",
        html_open: attr => `<a href="${attr || "#"}">`,
        html_close: "</a>"
    },
    {
        tag: "b",
        html_open: "<strong>",
        html_close: "</strong>"
    },
    {
        tag: "i",
        html_open: "<i>",
        html_close: "</i>"
    },
    {
        tag: "u",
        html_open: "<u>",
        html_close: "</u>"
    },
    {
        tag: "h1",
        html_open: "<h1>",
        html_close: "</h1>"
    },
    {
        tag: "h2",
        html_open: "<h2>",
        html_close: "</h2>"
    },
    {
        tag: "h3",
        html_open: "<h3>",
        html_close: "</h3>"
    },
    {
        tag: "h4",
        html_open: "<h4>",
        html_close: "</h4>"
    },
    {
        tag: "h5",
        html_open: "<h5>",
        html_close: "</h5>"
    },
    {
        tag: "h6",
        html_open: "<h6>",
        html_close: "</h6>"
    },
    {
        tag: "color",
        html_open: attr => `<span style="color:${attr || "black"};">`,
        html_close: "</span>"
    },
    {
        tag: "center",
        html_open: `<span style="text-align: center">`,
        html_close: "</span>"
    },
    {
        tag: "list",
        html_open: "<ul>",
        html_close: "</ul>"
    },
    {
        tag: "olist",
        html_open: "<ol>",
        html_close: "</ol>"
    },
    {
        tag: "*",
        html_open: "<li>",
        html_close: ""
    },
    {
        tag: "img",
        html_open: attr => `<img src="${attr || "#"}" alt="${attr || "#"}" />`,
        html_close: ""
    }
];

function get(tag) {
   return nodes.find(node => node.tag === tag);
}

function parser(str) {
    if (!str) {
        throw "Parse string is empty";
    }

    let html = str.slice(0);

    const tags = str.match(/(\[[^\]^\s]{1,}\])/g);

    if (!tags || tags.length < 1)
        return html;

    let args;
    let closing;
    let name;
    let node;
    let attr;
    let open;
    tags.forEach(tag => {
        args = tag.slice(1, -1).split("=");
        closing = args[0].startsWith("/");
        name = closing ? args[0].slice(1) : args[0];
        attr = args[1];

        node = get(name);

        if (node) {
            open = typeof(node.html_open) === "function" ? node.html_open(attr) : node.html_open;
            html = html.replace(tag, closing ? node.html_close : open);
        }
    });

    return html.replace(/(?:\r\n|\r|\n)/g, "</br>");
}

$.exports = {
    parser: parser,
}