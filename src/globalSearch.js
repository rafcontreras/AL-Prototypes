var searchScope=1;$(document).ready(function(){function inputSearch(){var link="";$('#search-submit').click(function(event){event.preventDefault();var queryString=$('#search-input').val();if(!queryString){return}
$('#search-input').attr("value",'');var catalogueSelect=$('#search-libraries-catalogue').is(':checked');var websiteSelect=$('#search-libraries-website').is(':checked');if(websiteSelect)
{link="/pages/search-results.aspx?u=#k="+encodeURIComponent(queryString);window.location.href=link}
else{link="https://discover.elgar.govt.nz/iii/encore/search/C__S"+encodeURIComponent(queryString)+"__Orightresult__U?lang=eng&suite=def";window.location.href=link}
return})}
inputSearch();if(!$('#search-libraries-website').is(':checked'))
{$('input:radio[id=search-libraries-catalogue]').prop('checked',!0)}});function setRadioDefaultStyle(){var defaultRadio=document.getElementById("defaultradio");if(defaultRadio){defaultRadio.setAttribute("class","check-radio-label radio-default")}}
function removeRadioDefaultStyle(){var defaultRadio=document.getElementById("defaultradio");if(defaultRadio){defaultRadio.setAttribute("class","check-radio-label")}}
function enterSearch(){$('#search-submit').click()}
function setSearchScope(searchType){searchScope=searchType}