{{--
    # yield list
    @yield('pageTitle')
    @yield('bodyClasses')
    @yield('pageContents')
--}}

<html lang="ja">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@yield('pageTitle')</title>
    <link rel="shortcut icon" href="{{ asset('/favicon.ico') }}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="@yield('bodyClasses')">
    <div id="app">
        @yield('pageContents')
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
