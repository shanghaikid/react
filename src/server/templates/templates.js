// default page tempalate
const page = (ctx) => `<!doctype html>
<html lang="en">
    ${header_tpl(ctx)}
    ${body_tpl(ctx)}

    <script>
        App.render(
            document.getElementById('root'),
            '<h1>hello2</h1>'
                    );
    </script>

    ${footer_tpl(ctx)}
</html>`;

export default page;

// body template
export const body_tpl = ({body=`<div class="loading"></div><div id="root"></div>`}={}) => {
    return `<body>${body}</body>`;
}

// header template
export const header_tpl = ({title="serverTemplate", charset="UTF-8", cssHref="public/css/style.css", scriptSrc="public/index.js"}={}) => `<head>
    <meta charset="${charset}"/>
    <title>${title}</title>
    <link rel="stylesheet" type="text/css" href="${cssHref}" />
    <script src="${scriptSrc}"></script>
</head>`;

// footer template
export const footer_tpl = ({startTime}) => {
    if (typeof startTime === 'undefined') {
        return '';
    }
    const NS_PER_SEC = 1e9;
    const diff = process.hrtime(startTime);

    return `<footer>
            <small>Page generate time: ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds</small>
            </footer>`
};
