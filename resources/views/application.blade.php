<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="api-base-url" content="{{ url('/') }}"/>
    <title>The boilerplate website</title>
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
</head>
<body class="tw-text-gray-700 tw-overflow-x-hidden tw-min-h-screen tw-flex tw-flex-col md:tw-overflow-y-hidden">
<noscript>
    <strong>We're sorry but this template doesn't work properly without JavaScript
        enabled.
        Please enable it to continue.</strong>
</noscript>
<div id="app">
</div>
<script src="{{ asset(mix('js/main.js')) }}"></script>

</body>
</html>
