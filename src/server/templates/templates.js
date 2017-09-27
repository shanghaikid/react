// default page tempalate
const page = (ctx) => `<!doctype html>
<html lang="en">
    ${header_tpl(ctx)}
    ${body_tpl(ctx)}
    ${footer_tpl(ctx)}
    <script src="/public/index.js"></script>
</html>`;

export default page;

// body template
export const body_tpl = ({body=`<div id="root"></div>`}={}) => {
    return `<body>${body}</body>`;
}

// header template
export const header_tpl = ({title="serverTemplate", charset="UTF-8", cssHref="public/css/style.css"}={}) => `<head>
    <meta charset="${charset}"/>
    <title>${title}</title>
    <script src="/public/js/react.production.min.js"></script>
    <script src="/public/js/react-dom.production.min.js"></script>

    <link rel="stylesheet" type="text/css" href="${cssHref}" />
</head>`;

// footer template
export const footer_tpl = ({startTime}) => {
    if (typeof startTime === 'undefined') {
        return '';
    }
    const NS_PER_SEC = 1e9;
    const diff = process.hrtime(startTime);

    return `
            <footer>
                <small>Page generate time: ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds</small>
            </footer>`;
};
