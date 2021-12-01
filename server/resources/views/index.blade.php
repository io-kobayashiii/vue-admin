<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport">
    <title>Guest</title>
    <link rel="shortcut icon" href="{{ asset('/favicon.ico') }}">
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
</head>

<body>
    <div>
        <div id="app">
            <h1>Hello World</h1>
            <example-component></example-component>
            <header-example></header-example>
            <welcome></welcome>
        </div>
    </div>
</body>
<script src="{{ mix('js/app.js') }}"></script>

</html>