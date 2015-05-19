define(["app"],function(e){var r={};return r.splitCamelcase=function(e,r){return r="string"==typeof r?r:" ",e.replace(/([a-z](?=[A-Z]))/g,"$1"+r).toLowerCase()},r.capitalize=function(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})},r.arrayToCSV=function(e){return e instanceof Array&&0!==e.length?e.reduce(function(e,r,t,n){return e+", "+r}):""},r.correctUrls=function(e){var r=/(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,t=new RegExp(r),n=e.replace(t,function(e,r){return r?e:"http://"+e});return n},r.makeUrlsClickable=function(e){var t=r.correctUrls(e),n=/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+\s.~#?&//=]*))/g,a=new RegExp(n);return t.replace(a,"<a href='$1' target='_blank'>$1</a>")},r.capitaliseFirstLetter=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},r.toTitleCase=function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})},r.toCamelCase=function(e){return e.toLowerCase().replace(/[\s-](.)/g,function(e,r){return r.toUpperCase()})},r});