@extends('layouts.default')
@section('pageTitle', 'top | admin-panel')
@section('bodyClasses', 'page-top')
@section('pageContents')
    <header-example></header-example>
    <example-component class='text-red-500'></example-component>
    <welcome></welcome>
    <counter></counter>
@endsection
