// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

/// <reference path="<%= relativeRootPath %>/typings/index.d.ts" />
<% if(!isMobile) { %>
declare var System: any;
<% if(!isMobile) { %>declare var module: { id: string };<% } %>
declare var require: any;
<% } %>

